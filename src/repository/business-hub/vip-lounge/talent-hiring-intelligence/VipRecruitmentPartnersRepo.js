import { db } from "@/lib/db";

export default class VipRecruitmentPartnersRepo {
    static async getAllVipRecruitmentPartners() {
        const [rows] = await db.execute(
            `SELECT * FROM vip_recruitment_partners`
        );
        return rows;
    }
} 