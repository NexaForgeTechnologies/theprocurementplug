import { NextResponse } from "next/server";

// Repository
import { ConciergeRepo } from "@/repository/business-hub/concierge/ConciergeRepo";

// Emails
import { UserBecomeQaPartnerEmail, AdminBecomeQaPartnerEmail } from "@/lib/emails/ConciergeEmail";
import {UserBecomeExpertEmail as UserBecomeQaPartnerEmailCron} from "@/lib/emails/ConciergeCronEmails";

export async function POST(request) {
    try {
        const body = await request.json();
        const saved = await ConciergeRepo.saveBecomeQaPartnerForm(body);

        // Send email
        await UserBecomeQaPartnerEmail(body);
        await AdminBecomeQaPartnerEmail(body);
        await UserBecomeQaPartnerEmailCron(body);

        return NextResponse.json({ success: true, data: saved });
    } catch (error) {
        console.error("Error in POST /become-a-plug-concierge-qa-partner:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
