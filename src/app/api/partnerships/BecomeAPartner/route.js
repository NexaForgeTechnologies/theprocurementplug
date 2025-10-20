import { AdminBecomePartnerEmail, UserBecomePartnerEmail } from "@/lib/emails/PartnerEmail";
import { BecomeAPartnerRepo } from "@/repository/partnerships/BecomeAPartnerRepo";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        console.log("✅ Form successfully received by API server:", body);

        // Save to DB
        let dbResult;
        try {
            dbResult = await BecomeAPartnerRepo(body);

            if (!dbResult.success) {
                console.error("❌ DB Insertion failed:", dbResult.error);
                return NextResponse.json(
                    { success: false, message: "Database insertion failed." },
                    { status: 500 }
                );
            }

            console.log("✅ Data stored to DB successfully:", dbResult);
        } catch (error) {
            console.error("❌ Error storing data to DB:", error);
            return NextResponse.json(
                { success: false, message: "Database insertion error." },
                { status: 500 }
            );
        }

        // Send Emails only after DB insertion
        try {
            await Promise.all([
                UserBecomePartnerEmail(body),
                AdminBecomePartnerEmail(body),
            ]);
            console.log("📨 Emails sent successfully.");
        } catch (emailError) {
            console.error("⚠️ Email sending failed:", emailError);
        }

        return NextResponse.json({
            success: true,
            message: "Data stored and emails processed.",
            insertId: dbResult.insertId ?? null,
        });
    } catch (error) {
        console.error("❌ Fatal error in Become a Partner API:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error." },
            { status: 500 }
        );
    }
}
