import { db } from "@/lib/db";

export class PartnerRepo {
  static async findByEmail(email) {
    try {
      const [rows] = await db.query(
        `SELECT id, email, already_partner 
         FROM round_table 
         WHERE email = ? AND payment IS NOT NULL LIMIT 1`,
        [email]
      );

      return rows[0] || null;
    } catch (error) {
      console.error("Error fetching partner:", error);
      throw new Error("Database error");
    }
  }

  static async getAll() {
    try {
      const [rows] = await db.query(
        `SELECT * FROM round_table
       WHERE payment IS NOT NULL AND status = 'Approved' ORDER BY id DESC`
      );

      return rows; // return full array
    } catch (error) {
      console.error("Error fetching round tables:", error);
      throw new Error("Database error");
    }
  }

  // static async getAll() {
  //   try {
  //     const [rows] = await db.query(`
  //     SELECT 
  //       rt.*,
  //       (
  //         SELECT JSON_ARRAYAGG(
  //           JSON_OBJECT(
  //             'id', c.id,
  //             'parent_id', c.parent_id,
  //             'round_table_id', c.roundtable_id,
  //             'user_name', c.user_name,
  //             'comment', c.comment,
  //             'created_at', c.created_at
  //           )
  //         )
  //         FROM (
  //           SELECT *
  //           FROM round_table_comments
  //           WHERE roundtable_id = rt.id
  //           ORDER BY created_at ASC
  //         ) AS c
  //       ) AS comments
  //     FROM round_table rt
  //     WHERE rt.payment IS NOT NULL 
  //       AND rt.status = 'Approved'
  //     ORDER BY rt.id DESC
  //   `);

  //     return rows;
  //   } catch (error) {
  //     console.error("Error fetching round tables:", error);
  //     throw new Error("Database error");
  //   }
  // }
}
