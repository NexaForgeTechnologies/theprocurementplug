import { NextResponse } from "next/server";

// Repository
import { ConciergeRepo } from "@/repository/business-hub/concierge/ConciergeRepo";

// Emails
import { registerInterestEmail } from "@/lib/emails/ConciergeEmail";

export async function POST(request) {
    try {
        const body = await request.json();
        const saved = await ConciergeRepo.saveRegisterInterestForm(body);

        // Send email
        await registerInterestEmail(body);


        return NextResponse.json({ success: true, data: saved });
    } catch (error) {
        console.error("Error in POST /register interest:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
