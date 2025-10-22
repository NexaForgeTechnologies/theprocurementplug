import { db } from "@/lib/db";

export async function DownloadSheetsRepo(data) {
    try {
        const { name, email, company, phone, description } = data;

        const [result] = await db.execute(
            `INSERT INTO procuretech_demo_requests (name, email, company, phone, description)
             VALUES (?, ?, ?, ?, ?)`,
            [name, email, company, phone, description]
        );

        return {
            success: true,
            message: "Form data inserted successfully.",
            insertId: result.insertId,
        };
    } catch (error) {
        console.error("Error inserting form data:", error);
        return {
            success: false,
            message: "Database insertion failed.",
            error: error.message,
        };
    }
}
