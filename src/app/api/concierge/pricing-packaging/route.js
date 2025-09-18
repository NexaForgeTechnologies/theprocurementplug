import { NextResponse } from "next/server";

// Repository
import { ConciergeRepo } from "@/repository/business-hub/concierge/ConciergeRepo";

// Emails
import { UserPricicngPackagingFormEmail, AdminPricicngPackagingFormEmail } from "@/lib/emails/ConciergeEmail";

export async function POST(request) {
    try {
        const formData = await request.formData();

        const data = {
            name: formData.get("name"),
            company: formData.get("company"),
            email: formData.get("email"),
            interest: formData.get("interest"),
        };

        const saved = await ConciergeRepo.savePricicngPackagingForm(data);

        // Send email
        await UserPricicngPackagingFormEmail(data);
        await AdminPricicngPackagingFormEmail(data);

        return NextResponse.json({ success: true, data: saved });
    } catch (error) {
        console.error("Error in POST /pricing-packaging:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
