import { db } from "@/lib/db";

export class EventRepo {
    static async getAllEvents() {
        try {
            const [rows] = await db.query(`
                SELECT * 
                FROM event
                WHERE deleted_at IS NULL
                ORDER BY id DESC;
            `);

            return rows.map((row) => ({
                ...row,
                collaboration: row.collaboration ? JSON.parse(row.collaboration) : null,
                workshops: row.workshops ? JSON.parse(row.workshops) : null,
                speakers: row.speakers ? JSON.parse(row.speakers) : null,
                event_highlight_img: row.event_highlight_img ? JSON.parse(row.event_highlight_img) : null,
            }));
        } catch (error) {
            console.error("Error fetching events:", error);
            throw new Error("Unable to fetch events from the database");
        }
    }

    static async getEventById(event_id) {
        try {
            const [rows] = await db.query(`
                SELECT * 
                FROM event
                WHERE deleted_at IS NULL AND id = ?
                LIMIT 1;
            `, [event_id]);

            if (rows.length === 0) return null;

            const row = rows[0];
            return {
                ...row,
                collaboration: row.collaboration ? JSON.parse(row.collaboration) : null,
                workshops: row.workshops ? JSON.parse(row.workshops) : null,
                speakers: row.speakers ? JSON.parse(row.speakers) : null,
                event_highlight_img: row.event_highlight_img ? JSON.parse(row.event_highlight_img) : null,
            };
        } catch (error) {
            console.error("Error fetching event by ID:", error);
            throw new Error("Unable to fetch event from the database");
        }
    }
}
