// import { AdminSpeakerEmail, UserSpeakerEmail } from "@/lib/emails/ConciergeEmail";
import { AdminSpeakerEmail, UserSpeakerEmail } from "@/lib/emails/EventEmail";
import { BecomeASpeakerRepo } from "@/repository/business-hub/BecomeASpeakerRepo";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        console.log("📩 Become-a-Speaker form received:", body);

        // Save to DB
        const result = await BecomeASpeakerRepo(body);

        if (!result.success) {
            console.error("❌ DB Insertion failed:", result.error);
            return NextResponse.json({ success: false, message: "Database insertion failed." }, { status: 500 });
        }

        // Send Emails
        try {
            await Promise.all([
                UserSpeakerEmail(body),
                AdminSpeakerEmail(body),
            ]);
            console.log("✅ Emails sent successfully");
        }
        catch (err) {
            console.log("❌ Email sending failed:", err);
        }
        console.log("✅ Form successfully processed");
        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("❌ Error in Become-a-Speaker API route:", error);
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}
