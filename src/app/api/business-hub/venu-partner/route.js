import { NextResponse } from "next/server";

// Repository
import { VenuPartnerRepo } from "@/repository/business-hub/VenueRepo";

// Emails
import { UserQuoteEmail, AdminQuoteEmail } from "@/lib/emails/VenuEmail";

export async function POST(request) {
    try {
        const body = await request.json();

        const saved = await VenuPartnerRepo.SaveRequestQuote(body);

        // Send email
        await UserQuoteEmail(body);
        await AdminQuoteEmail(body);

        return NextResponse.json({ success: true, data: saved });
    } catch (error) {
        console.error("Error in POST /become-a-plug-concierge-qa-partner:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
