import VipRecruitmentPartnersRepo from "@/repository/business-hub/vip-lounge/talent-hiring-intelligence/VipRecruitmentPartnersRepo";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const partners = await VipRecruitmentPartnersRepo.getAllVipRecruitmentPartners();
        console.log("Partners:", partners);
        if (!partners) return NextResponse.json({ success: false }, { status: 500 });
        return NextResponse.json(partners, { status: 200 });
    } catch (error) {
        console.error("API error processing GET request:", error);
    }
    return NextResponse.json({ success: true });
}