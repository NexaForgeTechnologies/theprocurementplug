import { ExclusiveIndustryReportRepo } from "@/repository/business-hub/vip-lounge/exclusive-intelligence-reports/ExclusiveIndustryReportRepo";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        console.log("GET request received : ");
        const all = await ExclusiveIndustryReportRepo.getAllReports();
        console.log("In API Data fetched : ", all);
        return NextResponse.json({ "success": true, "data": all }, { status: 200 });
    } catch (error) {
        console.error("Error processing GET request:", error);
        return NextResponse.json({ error: "Failed to process GET request for exclusive industry reports" }, { status: 500 });
    }
}
