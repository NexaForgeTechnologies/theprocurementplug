import { db } from "@/lib/db";

export async function ExclusiveBusinessPartnersRepo() {
    try {
        const sql = `SELECT * FROM exclusive_business_partners`;
        const [rows] = await db.query(sql); // destructure the first element
        return { success: true, data: rows };
    } catch (error) {
        console.error("❌ Error in ExclusiveBusinessPartnersRepo:", error);
        return { success: false, error: error.message };
    }
}
