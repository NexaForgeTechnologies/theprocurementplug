import { UserDownloadSheetsEmail } from "@/lib/emails/PartnerEmail";
import { DownloadSheetsRepo } from "@/repository/business-hub/procuretech-solution/DownloadSheetsRepo";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("📥 Received form data:", body);

        // Save to database
        const dbRes = await DownloadSheetsRepo(body);
        console.log("✅ Data inserted into DB:", dbRes);

        // Send email to user
        try {
            await UserDownloadSheetsEmail(body);
            console.log("📧 Email sent successfully to user:", body.email);
        } catch (emailError) {
            console.log("❌ Email sending failed:", emailError.message);
        }

        return NextResponse.json(
            { success: true, message: "Form submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.log("❌ API Error:", error.message);
        return NextResponse.json(
            { success: false, message: "Form submission failed" },
            { status: 500 }
        );
    }
}
