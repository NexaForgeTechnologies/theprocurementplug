import { db } from "@/lib/db";

export async function RequestAnIntroRepo(data) {
    try {
        const {
            fullName,
            email,
            company,
            role,
            areaOfInterest,
            briefNote,
        } = data;

        const sql = `
            INSERT INTO request_an_intro
            (full_name, email, company, role, area_of_interest, brief_note)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        const values = [
            fullName,
            email,
            company,
            role,
            areaOfInterest,
            briefNote,
        ];

        await db.query(sql, values);

        console.log("✅ Request an Intro form saved to DB");
        return { success: true };
    } catch (error) {
        console.error("❌ Error in RequestAnIntroRepo:", error);
        return { success: false, error: error.message };
    }
}
