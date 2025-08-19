import { db } from "@/lib/db";

export class ProcureTechRepo {
  static async getAllProcuretechSolutions() {
    try {
      const [rows] = await db.query(`
        SELECT 
            ps.id,
            ps.img,
            ps.name,
            ps.type_id,
            t.value AS type_name,
            ps.overview,
            ps.key_features,
            ps.develpment,
            ps.integration,
            ps.pricing,
            ps.recommended,
            ps.deployment_model_id,
            dm.value AS deployment_model_name,
            ps.pricing_model_id,
            pm.value AS pricing_model_name,
            ps.integration_model_id,
            im.value AS integration_model_name,
            ps.procuretech_type_id,
            pt.value AS procuretech_type_name,
            ps.created_at,
            ps.updated_at,
            ps.deleted_at
        FROM procuretech_solutions ps
        LEFT JOIN procuretech_solution_types t ON ps.type_id = t.id
        LEFT JOIN deployment_model dm ON ps.deployment_model_id = dm.id
        LEFT JOIN pricing_model pm ON ps.pricing_model_id = pm.id
        LEFT JOIN integration_model im ON ps.integration_model_id = im.id
        LEFT JOIN procuretech_solution_types pt ON ps.procuretech_type_id = pt.id
        WHERE ps.deleted_at IS NULL
        ORDER BY ps.id DESC;
      `);

      return rows.map(this.mapRowToProcuretech);
    } catch (error) {
      console.error("Error fetching procuretech solutions:", error);
      throw new Error("Unable to fetch procuretech solutions from the database");
    }
  }

  static async getProcuretechByTypeId(typeId) {
    try {
      const [rows] = await db.query(`
        SELECT 
            ps.id,
            ps.img,
            ps.name,
            ps.type_id,
            t.value AS type_name,
            ps.overview,
            ps.key_features,
            ps.develpment,
            ps.integration,
            ps.pricing,
            ps.recommended,
            ps.deployment_model_id,
            dm.value AS deployment_model_name,
            ps.pricing_model_id,
            pm.value AS pricing_model_name,
            ps.integration_model_id,
            im.value AS integration_model_name,
            ps.procuretech_type_id,
            pt.value AS procuretech_type_name,
            ps.created_at,
            ps.updated_at,
            ps.deleted_at
        FROM procuretech_solutions ps
        LEFT JOIN procuretech_solution_types t ON ps.type_id = t.id
        LEFT JOIN deployment_model dm ON ps.deployment_model_id = dm.id
        LEFT JOIN pricing_model pm ON ps.pricing_model_id = pm.id
        LEFT JOIN integration_model im ON ps.integration_model_id = im.id
        LEFT JOIN procuretech_solution_types pt ON ps.procuretech_type_id = pt.id
        WHERE ps.deleted_at IS NULL AND ps.type_id = ?
        ORDER BY ps.id DESC;
      `, [typeId]);

      return rows.map(this.mapRowToProcuretech);
    } catch (error) {
      console.error("Error fetching procuretech solutions by type:", error);
      throw new Error("Unable to fetch procuretech solutions by type_id");
    }
  }

  static mapRowToProcuretech(row) {
    return {
      id: row.id,
      img: row.img,
      name: row.name,
      type_id: row.type_id,
      type_name: row.type_name,
      overview: row.overview,
      key_features: row.key_features ? JSON.parse(row.key_features) : [],
      develpment: row.develpment || "",
      integration: row.integration || "",
      pricing: row.pricing || "",
      recommended: row.recommended || "",
      deployment_model_id: row.deployment_model_id,
      deployment_model_name: row.deployment_model_name,
      pricing_model_id: row.pricing_model_id,
      pricing_model_name: row.pricing_model_name,
      integration_model_id: row.integration_model_id,
      integration_model_name: row.integration_model_name,
      procuretech_type_id: row.procuretech_type_id,
      procuretech_type_name: row.procuretech_type_name,
      created_at: row.created_at,
      updated_at: row.updated_at,
      deleted_at: row.deleted_at,
    };
  }
}
