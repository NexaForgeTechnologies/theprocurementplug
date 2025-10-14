import { db } from "@/lib/db";

export async function RequestCustomHiringRepo(data) {
    console.log("RequestACustomBriefRepo received data: ", data);
    const { fullName, email, company, role, topic, objectives, desiredDeliveryDate, budgetRange, documents } = data;
    try {
        const sql = `
            INSERT INTO request_custom_hiring (
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
            documents || null,

        ];

        await db.query(sql, values);
        console.log("✅ Request a Custom Brief form saved to DB");
        return { success: true };
    } catch (error) {
        console.log("❌ Error in Request a Custom Brief form Repo:", error);
        return { success: false, error };
    }
}
