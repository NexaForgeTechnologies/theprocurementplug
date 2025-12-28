import { UserIndustryInsightDownloadEmail } from "@/lib/emails/IndustryInsightEmail";
import { DownloadReportsRepo } from "@/repository/business-hub/vip-lounge/exclusive-intelligence-reports/industry-insights/DownloadReportsRepo";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json();
        console.log("Data from Frontend:", data);
        const repo = new DownloadReportsRepo();
        await repo.saveFormSubmission(data);
        try {
            await UserIndustryInsightDownloadEmail(data);
            return NextResponse.json(
                { success: true, message: "✔ Eamil sent successfully" },
                { status: 200 }
            );
        } catch (error) {
            console.error("❌ Error sending email:", error);
        }
        return NextResponse.json(
            { success: true, message: "Form submitted successfully" },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error submitting form:", error);
        return NextResponse.json(
            { success: false, message: "Error submitting form" },
            { status: 500 }
        );
    }
}