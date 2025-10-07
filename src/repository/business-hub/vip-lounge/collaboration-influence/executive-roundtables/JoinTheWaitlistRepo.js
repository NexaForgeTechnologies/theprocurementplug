import { db } from "@/lib/db";
export async function JoinTheWaitlistRepo(data) {
    try {
        const {
            name,
            email,
            phone,
            company,
            role,
        } = data;

        const sql = `
          INSERT INTO join_the_waitlist
          (name, email, phone, company, role)
          VALUES (?, ?, ?, ?, ?)
        `;

        const values = [
            name,
            email,
            phone,
            company,
            role,
        ];

        await db.query(sql, values);

        console.log("✅ join the waitlist form saved to DB");
        return { success: true };
    } catch (error) {
        console.error("❌ Error in join the waitlist form Repo:", error);
        return { success: false, error: error.message };
    }
}
