import { db } from "@/lib/db";

export async function RequestIntroRepo(data) {
    console.log("RequestIntroRepo received data: ", data);
    const { fullName, email, company, role, topic, objectives} = data;
    try {
        const sql = `
            INSERT INTO request_intro (
                full_name,
                email,
                company,
                role,
                topic,
                objectives
            ) VALUES (?, ?, ?, ?, ?, ?)
        `;

        const values = [
            fullName,
            email,
            company,
            role,
            topic,
            objectives
        ];

        await db.query(sql, values);
        console.log("✅ Request Intro form saved to DB");
        return { success: true };
    } catch (error) {
        console.log("❌ Error in Request a Custom Brief form Repo:", error);
        return { success: false, error };
    }
}
