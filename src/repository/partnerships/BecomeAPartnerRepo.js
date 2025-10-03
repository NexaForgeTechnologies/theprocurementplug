import { db } from "@/lib/db";

export async function BecomeAPartnerRepo(data) {
    try {
        const { name, email, phone, industryInterests, description } = data;

        // Make sure all required fields are present, otherwise throw error
        if (!name || !email || !phone || !industryInterests || !description) {
            throw new Error("All fields are required");
        }

        const sql = `
            INSERT INTO become_a_partner
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
    } catch (error) {
        console.error("Error inserting into 'Become a Partner Repo' : ", error);
        return { success: false, error: error.message };
    }
}
