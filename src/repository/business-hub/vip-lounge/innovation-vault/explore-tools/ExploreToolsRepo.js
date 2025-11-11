import { db } from "@/lib/db";

export default class ExploreToolsRepo {
  // Fetch all tools
  async getAllTools() {
    try {
      const [rows] = await db.query(`
        SELECT 
          id,
          logo,
          title,
          category_id,
          description,
          key_features,
          related_tools,
          category_description,
          sponsored_by,
          created_at,
          updated_at,
          deleted_at
        FROM innovation_vault
        WHERE deleted_at IS NULL
        ORDER BY created_at DESC
      `);
      return rows; // ✅ MySQL returns [rows, fields]
    } catch (error) {
      console.error("Error fetching tools:", error);
      throw new Error("Failed to fetch tools");
    }
  }

  // Fetch single tool by ID
  async getToolById(id) {
    try {
      const [rows] = await db.query(
        `
        SELECT 
          id,
          logo,
          title,
          category_id,
          description,
          key_features,
          related_tools,
          category_description,
          sponsored_by,
          created_at,
          updated_at,
          deleted_at
        FROM innovation_vault
        WHERE id = ? AND deleted_at IS NULL
      `,
        [id] // ✅ prevents SQL injection
      );

      return rows[0] || null;
    } catch (error) {
      console.error("Error fetching tool by ID:", error);
      throw new Error("Failed to fetch tool by ID");
    }
  }
}
