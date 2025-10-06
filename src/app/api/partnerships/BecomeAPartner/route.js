import { AdminBecomePartnerEmail, UserBecomePartnerEmail } from "@/lib/emails/ConciergeEmail";
import { BecomeAPartnerRepo } from "@/repository/partnerships/BecomeAPartnerRepo";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        console.log("✅ Form successfully received by API server:", body);

        // Save to DB
        const dbResult = await BecomeAPartnerRepo(body);

        if (!dbResult.success) {
            console.error("❌ DB Insertion failed:", dbResult.error);
            return NextResponse.json({ success: false, message: "Database insertion failed." }, { status: 500 });
        }

        // Send Emails only after DB insertion
        await Promise.all([
            UserBecomePartnerEmail(body),
            AdminBecomePartnerEmail(body),
        ]);

        console.log("📨 Emails sent & data stored successfully");
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("❌ Error in Become a Partner API:", error);
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
