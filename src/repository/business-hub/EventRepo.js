import { db } from "@/lib/db";

export class EventRepo {

    static async getAllEvents() {
        try {
            const [events] = await db.query(`
                SELECT * FROM event
                WHERE deleted_at IS NULL
                ORDER BY id DESC;
            `);

            for (const event of events) {
                try {
                    // Parse speakers JSON from event
                    const speakerArray = JSON.parse(event.speakers || "[]");

                    if (speakerArray.length > 0) {
                        const ids = speakerArray.map((s) => s.id);

                        // Fetch matching speakers from DB
                        const [speakerDetails] = await db.query(
                            `SELECT * FROM speakers WHERE id IN (?)`,
                            [ids]
                        );

                        // Merge: keep role/bg_color from event JSON, rest from DB
                        event.speakers = speakerArray.map((speaker) => {
                            const dbSpeaker = speakerDetails.find((d) => d.id === speaker.id);

                            if (!dbSpeaker) return speaker; // fallback if missing in DB

                            const { role, bg_color } = speaker; // only these two from event JSON

                            return {
                                ...dbSpeaker, // full details from speaker table
                                role,         // override/add event role
                                bg_color,     // override/add event color
                            };
                        });
                    } else {
                        event.speakers = [];
                    }
                } catch (err) {
                    console.error("Speaker parse error:", err);
                    event.speakers = [];
                }
            }

            return events;
        } catch (error) {
            console.error("Error fetching all events:", error);
            throw new Error("Unable to fetch events from the database");
        }
    }

}
