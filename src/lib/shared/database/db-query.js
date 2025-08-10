import { db } from './db'
export function buildWhere(filters = {}) {
  let whereSQL = "";
  let values = [];
  let parts = [];

  if (Object.keys(filters).length) {
    for (const [col, val] of Object.entries(filters)) {
      parts.push(`${col} = ?`);
      values.push(val);
    }
    whereSQL = "WHERE " + parts.join(" AND ");
  }
  return { whereSQL, values };
}
export async function insert(tableName, entries) {
  try {
    if (!tableName || typeof tableName !== "string") {
      throw new Error("Invalid table name");
    }
    if (!entries || typeof entries !== "object" || Array.isArray(entries)) {
      throw new Error("Entries must be an object with key-value pairs");
    }

    const columns = Object.keys(entries);
    const values = Object.values(entries);

    if (columns.length === 0) {
      throw new Error("No data provided for insert");
    }

    const placeholders = columns.map(() => "?").join(", ");

    const sql = `INSERT INTO \`${tableName}\` (${columns.join(", ")})
                 VALUES (${placeholders})`;

    const [result] = await db.execute(sql, values);

    return {
      success: true,
      insertId: result.insertId,
      affectedRows: result.affectedRows
    };

  } catch (e) {
    console.error("Database insert error:", e);
     const validationError = new Error("DataBase failed");
    validationError.name = "Data Base Insert error";

    validationError.errors =e.message;

    throw validationError;
  }
}
export async function get(table, filters = {}, options = {}) {
  let selectSQL = options.select || "*";
  let query = `SELECT ${selectSQL} FROM ${table}`;
  let values = [];
  let whereParts = [];

  // ✅ Add joins
  if (options.joins && Array.isArray(options.joins)) {
    for (const join of options.joins) {
      query += ` ${join.type || "INNER"} JOIN ${join.table} ON ${join.on}`;
    }
  }

  // ✅ EQ
  if (filters.eq) {
    for (const [col, val] of Object.entries(filters.eq)) {
      whereParts.push(`${col} = ?`);
      values.push(val);
    }
  }

  // ✅ LIKE
  if (filters.like) {
    for (const [col, val] of Object.entries(filters.like)) {
      whereParts.push(`${col} LIKE ?`);
      values.push(val);
    }
  }

  // ✅ BETWEEN
  if (filters.between) {
    for (const [col, range] of Object.entries(filters.between)) {
      whereParts.push(`${col} BETWEEN ? AND ?`);
      values.push(range[0], range[1]);
    }
  }

  // ✅ IN
  if (filters.in) {
    for (const [col, arr] of Object.entries(filters.in)) {
      const placeholders = arr.map(() => "?").join(", ");
      whereParts.push(`${col} IN (${placeholders})`);
      values.push(...arr);
    }
  }

  // ✅ OR
  if (filters.or && Array.isArray(filters.or) && filters.or.length) {
    let orParts = [];
    for (const cond of filters.or) {
      const [key, val] = Object.entries(cond).find(([k]) => k !== "type");
      if (cond.type === "like") {
        orParts.push(`${key} LIKE ?`);
        values.push(val);
      } else if (cond.type === "eq") {
        orParts.push(`${key} = ?`);
        values.push(val);
      }
    }
    whereParts.push(`(${orParts.join(" OR ")})`);
  }

  if (whereParts.length) {
    query += " WHERE " + whereParts.join(" AND ");
  }

  // ✅ Sorting
  if (options.sortBy) {
    query += ` ORDER BY ${options.sortBy} ${options.sortOrder || "ASC"}`;
  }

  // ✅ Pagination
  let limitSQL = "";
  if (options.page && options.limit) {
    const offset = (options.page - 1) * options.limit;
    limitSQL = ` LIMIT ${options.limit} OFFSET ${offset}`;
  }

  // ✅ Count query
  const countQuery = query.replace(/SELECT\s+.+?\s+FROM/i, "SELECT COUNT(*) as total FROM");
  const [countResult] = await db.execute(countQuery, values);
  const total = countResult[0]?.total || 0;

  // ✅ Data query
  const [rows] = await db.execute(query + limitSQL, values);

  return {
    data: rows,
    total,
    totalPages: options.limit ? Math.ceil(total / options.limit) : 1,
    page: options.page || 1
  };
}


export async function update(table, data, filters) {
  const setClauses = Object.keys(data).map(col => `${col} = ?`).join(", ");
  const setValues = Object.values(data);

  const { whereSQL, values: filterValues } = buildWhere(filters);

  const [result] = await db.execute(
    `UPDATE ${table} SET ${setClauses} ${whereSQL}`,
    [...setValues, ...filterValues]
  );
  return result.affectedRows;
}

// DELETE
export async function remove(table, filters) {
  const { whereSQL, values } = buildWhere(filters);
  const [result] = await db.execute(
    `DELETE FROM ${table} ${whereSQL}`,
    values
  );
  return result.affectedRows;
}