import { db } from "@/lib/db";

export async function DownloadLatestReportRepo(data) {
    try {
        const {
            fullName,
            email,
            company,
            role,
            topic,
            objectives,
            desiredDeliveryDate
        } = data;

        const sql = `
            INSERT INTO vip_download_latest_report (
                full_name,
                email,
                company,
                role,
                topic,
                objectives,
                desired_delivery_date
            ) VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            fullName,
            email,
            company,
            role,
            topic,
            objectives,
            desiredDeliveryDate,
        ];

        await db.query(sql, values);
        console.log("✅ Download Latest Report form saved to DB");

    } catch (error) {
        console.error("❌ Error in Download Latest Report Repo:", error);
        throw new Error("Failed to save report form data to the database.");
    }
}
