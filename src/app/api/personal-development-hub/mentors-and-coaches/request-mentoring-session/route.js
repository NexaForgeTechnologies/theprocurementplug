import { RequestMentoringSessionRepo } from "@/repository/personaldevelopmenthub/RequestMentoringSessionRepo";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        // Parse incoming multipart/form-data
        const body = await req.formData();
        // Send data to repository
        await RequestMentoringSessionRepo(body);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Data not sent to Repo:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
