
import { db } from "@/lib/db";

export class ExclusiveIndustryReportRepo {
    static async getAllReports() {
        const [rows] = await db.execute(`SELECT * FROM exclusive_intelligence_reports ORDER BY id DESC`);
        return rows;
    }
}