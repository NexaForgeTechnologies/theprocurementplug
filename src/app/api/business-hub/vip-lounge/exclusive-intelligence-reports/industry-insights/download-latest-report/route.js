import { AdminLatestReportEmail, UserLatestReportEmail } from "@/lib/emails/BusinessHubEmail";
import { DownloadLatestReportRepo } from "@/repository/business-hub/vip-lounge/exclusive-intelligence-reports/industry-insights/DownloadLatestReportRepo";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json();
        console.log("Request Data from Frontend:", data);
        await DownloadLatestReportRepo(data);
        // await UserLatestReportEmail(data);
        // await AdminLatestReportEmail(data);
        return NextResponse.json({ success: true, message: "Form submitted successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error submitting form:", error);
        return NextResponse.json({ success: false, message: "Error submitting form" }, { status: 500 });
    }
}
