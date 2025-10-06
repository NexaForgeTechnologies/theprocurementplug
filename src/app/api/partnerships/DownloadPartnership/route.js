import { AdminDownloadPartnershipEmail, UserDownloadPartnershipEmail } from "@/lib/emails/ConciergeEmail";
import { DownloadPartnershipRepo } from "@/repository/partnerships/DownloadPartnershipRepo";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        console.log("✅ Form successfully received by API server:", body);

        // Save to DB
        const dbResult = await DownloadPartnershipRepo(body);

        if (!dbResult.success) {
            console.error("❌ DB Insertion failed:", dbResult.error);
            return NextResponse.json({ success: false, message: "Database insertion failed." }, { status: 500 });
        }

        // Send Emails only after DB insertion
        try {
            await Promise.all([
                UserDownloadPartnershipEmail(body),
                AdminDownloadPartnershipEmail(body),
            ]);
        } catch (emailError) {
            console.error("❌ Email sending failed:", emailError);

            return NextResponse.json(
                { success: false, message: "Email sending failed", error: emailError.message },
                { status: 500 }
            );
        }


        console.log("📨 Emails sent & data stored successfully");
        return NextResponse.json({ success: true });

    } catch (error) {
        console.log("Error recieving form in Download Partnership API server : ", error);
    }
}