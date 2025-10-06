import { db } from "@/lib/db";

export async function DownloadPartnershipRepo(data) {
    try {
        const { name, email, phone, industryInterests, description } = data;

        // Make sure all required fields are present, otherwise throw error
        if (!name || !email || !phone || !industryInterests || !description) {
            throw new Error("All fields are required");
        }

        const sql = `
            INSERT INTO download_partnership_pack
            (name, email, phone, industry_interests, description)
            VALUES (?, ?, ?, ?, ?)
        `;

        const values = [
            name,
            email,
            phone,
            industryInterests,
            description,
        ];

        await db.query(sql, values);

        console.log("Form submitted successfully");
        return { success: true };
    }
    catch (error) {
        console.error("Error INSERTING of 'Become a Partner Repo' to db : ", error);
        return { success: false, error: error.message };
    }
}
