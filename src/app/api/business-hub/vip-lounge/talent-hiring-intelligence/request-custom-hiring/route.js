import { convertFileToBase64 } from "@/lib/upload/convertFileToBase64";
import { RequestCustomHiringRepo } from "@/repository/business-hub/vip-lounge/talent-hiring-intelligence/RequestCustomHiringRepo";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const base64Document = await convertFileToBase64(formData.get("documents"));
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

        const result = await RequestCustomHiringRepo(data);
        console.log("📥 DB Insert result:", result);

        if (!result.success) {
            console.error("❌ Insert failed:", result.error);
            return NextResponse.json({ success: false, message: "Database insert failed" }, { status: 500 });
        }

        return NextResponse.json({ success: true, message: "Form submitted successfully" }, { status: 200 });

    } catch (error) {
        console.error("Error submitting form:", error);
        return NextResponse.json({ success: false, message: "Error submitting form" }, { status: 500 });
    }
}
