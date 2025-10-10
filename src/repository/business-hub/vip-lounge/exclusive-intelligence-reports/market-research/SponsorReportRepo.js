import { db } from "@/lib/db";

export async function SponsorReportRepo(data) {
    try {
        const {
            fullName,
            email,
            company,
            role,
            topic,
            objectives,
            desiredDeliveryDate,
            budgetRange,
            documents
        } = data;

        const sql = `
            INSERT INTO market_sponsor_report (
                full_name,
                email,
                company,
                role,
                topic,
                objectives,
                desired_delivery_date,
                budget_range,
                documents
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            fullName,
            email,
            company,
            role,
            topic,
            objectives,
            desiredDeliveryDate,
            budgetRange,
            documents
        ];

        await db.query(sql, values);
        console.log("✅ Sponsor Report form saved to DB");

    } catch (error) {
        console.error("❌ Error in SponsorReportRepo:", error);
        throw new Error("Failed to save report form data to the database.");
    }
}
