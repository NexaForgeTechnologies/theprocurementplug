import { AdminIntroRequestEmail, UserIntroRequestEmail } from "@/lib/emails/PartnerEmail";
import { RequestAnIntroRepo } from "@/repository/business-hub/vip-lounge/exclusive-business-partners/RequestAnIntroRepo";
import { NextResponse } from "next/server";
import { ExclusiveBusinessPartnersRepo } from "@/repository/business-hub/vip-lounge/exclusive-business-partners/ExculsiveBusinessPartnersRepo";

export async function POST(request) {
    try {
        const body = await request.json();
        console.log("Form successfully recieved by Api server :", body);
        await RequestAnIntroRepo(body);
        await UserIntroRequestEmail(body);
        await AdminIntroRequestEmail(body);
        return NextResponse.json({ success: true });

    } catch (error) {
        console.log("error recieving data in API server", error);
    }

}


export async function GET() {
  try {
    const result = await ExclusiveBusinessPartnersRepo();

    if (!result || !result.success || !result.data) {
      return NextResponse.json(
        { error: result?.error || "Failed to fetch partners" },
        { status: 500 }
      );
    }

    // Ensure JSON-serializable data
    const data = Array.isArray(result.data)
      ? result.data.map(row => ({ ...row }))
      : [];

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("❌ Error processing GET request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}