import { db } from "@/lib/db";

export async function BecomeAPartnerRepo(data) {
    try {
        const {
            name,
            email,
            phone,
            company,
            description,
            partnerTypes,
        } = data;

        // Make sure all required fields are present, otherwise throw error
        if (!name || !email || !phone || !company || !description || !partnerTypes) {
            throw new Error("All fields are required");
        }

        // ✅ Convert partnerTypes array to comma-separated string
        const partnerTypesStr = Array.isArray(partnerTypes)
            ? partnerTypes.join(", ")
            : "";

        const sql = `
            INSERT INTO become_a_partner
            (name, email, phone, company, description, partnerTypes)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        const values = [
            name,
            email,
            phone,
            company,
            description,
            partnerTypesStr,
        ];

        await db.query(sql, values);

        console.log("Form submitted successfully");
        return { success: true };
    } catch (error) {
        console.error("Error inserting into 'Become a Partner Repo' : ", error);
        return { success: false, error: error.message };
    }
}
