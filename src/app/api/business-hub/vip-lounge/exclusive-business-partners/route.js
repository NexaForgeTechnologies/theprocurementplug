// import { AdminIntroRequestEmail, UserIntroRequestEmail } from "@/lib/emails/ConciergeEmail";
import { AdminIntroRequestEmail, UserIntroRequestEmail } from "@/lib/emails/PartnerEmail";
import { RequestAnIntroRepo } from "@/repository/business-hub/vip-lounge/exclusive-business-partners/RequestAnIntroRepo";
import { NextResponse } from "next/server";

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