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
}
