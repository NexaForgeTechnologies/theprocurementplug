import { db } from "@/lib/db";
export default class ProfessionalsRepo {

    static async getProfessionals() {
        try {
            const [rows] = await db.query(`
        SELECT 
          id,
          logo,
          name,
          occupation,
          address,
          description 
        FROM talent_hiring_intelligence
        WHERE deleted_at IS NULL
        ORDER BY created_at DESC
      `);
            return rows; // ✅ MySQL returns [rows, fields]
        } catch (error) {
            console.error("Error fetching tools:", error);
            throw new Error("Failed to fetch tools");
        }
    }
}