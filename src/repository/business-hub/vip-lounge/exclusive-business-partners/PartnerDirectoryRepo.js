import { db } from "@/lib/db";

export async function PartnerDirectoryRepo() {
    try {
        const sql = `SELECT * FROM exclusive_business_partners`;
        const [rows] = await db.query(sql); // destructure the first element
        return { success: true, data: rows };
    } catch (error) {
        console.error("❌ Error in PartnersDirectoryRepo:", error);
        return { success: false, error: error.message };
    }
}