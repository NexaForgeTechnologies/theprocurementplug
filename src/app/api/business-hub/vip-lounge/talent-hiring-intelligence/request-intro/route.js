import { RequestIntroRepo } from "@/repository/business-hub/vip-lounge/talent-hiring-intelligence/RequestIntroRepo";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const formData = await req.formData();

        const data = {
            fullName: formData.get("fullName"),
            email: formData.get("email"),
            company: formData.get("company"),
            role: formData.get("role"),
            topic: formData.get("topic"),
            objectives: formData.get("objectives"),
        };

        await RequestIntroRepo(data);

        return NextResponse.json({ success: true, message: "Form submitted successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error submitting form:", error);
        return NextResponse.json({ success: false, message: "Error submitting form" }, { status: 500 });
    }
}
