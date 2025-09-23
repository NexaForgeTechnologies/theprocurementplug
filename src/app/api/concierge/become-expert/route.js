import { NextResponse } from "next/server";

// Repository
import { ConciergeRepo } from "@/repository/business-hub/concierge/ConciergeRepo";

// Emails
import { UserBecomeExpertEmail, AdminBecomeExpertEmail } from "@/lib/emails/ConciergeEmail";
import {UserBecomeExpertEmail as UserBecomeExpertEmailCron} from "@/lib/emails/ConciergeCronEmails";

export async function POST(request) {
    try {
        const body = await request.json();
        const saved = await ConciergeRepo.saveBecomeExpertForm(body);

        // Send email
        await UserBecomeExpertEmail(body);
        await AdminBecomeExpertEmail(body);
        await UserBecomeExpertEmailCron(body);

        return NextResponse.json({ success: true, data: saved });
    } catch (error) {
        console.error("Error in POST /become-a-plug-concierge-expert:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
