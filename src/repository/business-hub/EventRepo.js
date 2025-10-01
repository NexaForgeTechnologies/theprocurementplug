import { db } from "@/lib/db";

export class EventRepo {

    static async getAllEvents() {
        try {
            const [rows] = await db.query(`
            SELECT * FROM event
            WHERE deleted_at IS NULL
            ORDER BY id DESC;
        `);

            return rows;
        } catch (error) {
            console.error("Error fetching all event:", error);
            throw new Error("Unable to fetch event from the database");
        }
    }
}
