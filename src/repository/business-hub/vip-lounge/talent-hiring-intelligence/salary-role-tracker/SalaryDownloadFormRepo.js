import { db } from "@/lib/db";

export default async function SalaryDownloadFormRepo(body) {
    const { name, company, role, email, phone } = body;

    console.log("Repo received data successfully:", body);

    try {
        const sql = `
      INSERT INTO salary_download_form (name, company, role, email, phone)
      VALUES (?, ?, ?, ?, ?)
    `;
        const values = [
            name,
            company,
            role,
            email,
            phone
        ]
        await db.query(sql, values);
        console.log("Insert success:", body);

        return { success: true };
    } catch (error) {
        console.error("Database insert error:", error);
        return { success: false, error: error.message };
    }
}
