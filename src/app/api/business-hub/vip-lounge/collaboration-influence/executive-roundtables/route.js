// import { AdminXecXchangeEmail, UserXecXchangeEmail } from "@/lib/emails/ConciergeEmail";
import { AdminXecXchangeEmail, UserXecXchangeEmail } from "@/lib/emails/XecXchangeEmail";
import { JoinTheWaitlistRepo } from "@/repository/business-hub/vip-lounge/collaboration-influence/executive-roundtables/JoinTheWaitlistRepo";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        console.log("Form successfully recieved by Api server :", body);
        await JoinTheWaitlistRepo(body);
        await UserXecXchangeEmail(body);
        await AdminXecXchangeEmail(body);

    } catch (error) {
        console.log(error);
    }
    return NextResponse.json({ success: true });
}