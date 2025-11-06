import { PartnerDirectoryRepo } from "@/repository/business-hub/vip-lounge/exclusive-business-partners/PartnerDirectoryRepo";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await PartnerDirectoryRepo();

        if (!result.success) {
            return NextResponse.json({ success: false, message: result.error }, { status: 500 });
        }

        // Return data explicitly
        return NextResponse.json({
            success: true,
            data: result.data, // 👈 This is what the frontend expects
        });
    } catch (error) {
        console.error("❌ Error receiving data in API server:", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
