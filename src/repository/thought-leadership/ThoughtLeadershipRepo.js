import { db } from "@/lib/db";

export class ThoughtLeadershipRepo {
  static async findByEmail(email) {
    try {
      const [rows] = await db.query(
        `SELECT id, email, already_partner 
         FROM viplounge_insight_posts 
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
        `SELECT * FROM viplounge_insight_posts
       WHERE is_approved = 1 ORDER BY id DESC`
      );

      return rows; // return full array
    } catch (error) {
      console.error("Error fetching thought leadership records:", error);
      throw new Error("Database error");
    }
  }
}
