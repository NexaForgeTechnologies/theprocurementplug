// import { AdminRequestCustomBriefEmail, UserRequestCustomBriefEmail } from "@/lib/emails/XecXchangeEmail";
import { AdminRequestCustomBriefEmail, UserRequestCustomBriefEmail } from "@/lib/emails/BusinessHubEmail";
import { convertFileToBase64 } from "@/lib/upload/convertFileToBase64";
import { RequestACustomBriefRepo } from "@/repository/business-hub/vip-lounge/exclusive-intelligence-reports/industry-insights/RequestACustomBriefRepo";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const formData = await req.formData();

        const file = formData.get("documents");

        let base64Document = null;
        if (file && typeof file === "object") {
            base64Document = await convertFileToBase64(file);
        }

        const data = {
            fullName: formData.get("fullName"),
            email: formData.get("email"),
            company: formData.get("company"),
            role: formData.get("role"),
            topic: formData.get("topic"),
            objectives: formData.get("objectives"),
            desiredDeliveryDate: formData.get("desiredDeliveryDate"),
            budgetRange: formData.get("budgetRange"),
            documents: base64Document, // now contains base64 string
        };

        await RequestACustomBriefRepo(data);
        await AdminRequestCustomBriefEmail(data);
        await UserRequestCustomBriefEmail(data);

        return NextResponse.json({ success: true, message: "Form submitted successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error submitting form:", error);
        return NextResponse.json({ success: false, message: "Error submitting form" }, { status: 500 });
    }
}
