import { db } from "@/lib/db";

export class DownloadReportsRepo {

    // Save a new form submission
    async saveFormSubmission(data) {
        const { username, email, phone, interest, description } = data;

        const query = `
            INSERT INTO insights_download_reports
            (username, email, phone, interest, description)
            VALUES (?, ?, ?, ?, ?)
        `;

        const values = [
            username,
            email,
            phone || null,
            interest || null,
            description || null,
        ];

        const [result] = await db.execute(query, values);
        return result;
    }

    // Example: fetch all submissions
    async getAllSubmissions() {
        const [rows] = await db.execute(`SELECT * FROM insights_download_reports ORDER BY created_at DESC`);
        return rows;
    }
}
