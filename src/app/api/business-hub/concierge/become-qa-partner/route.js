import { NextResponse } from "next/server";
import { ConciergeRepo } from "@/repository/business-hub/concierge/ConciergeRepo";

export async function POST(request) {
    try {
        const body = await request.json();
        const saved = await ConciergeRepo.saveBecomeQaPartnerForm(body);

        return NextResponse.json({ success: true, data: saved });
    } catch (error) {
        console.error("Error in POST /become-a-plug-concierge-qa-partner:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
