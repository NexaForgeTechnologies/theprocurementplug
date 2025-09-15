import { NextResponse } from "next/server";
import { ConciergeRepo } from "@/repository/business-hub/concierge/ConciergeRepo";
// import { sendConfirmationEmail } from "@/lib/emails/TaskListEmail";

export async function POST(request) {
    try {
        const formData = await request.formData();

        const data = {
            name: formData.get("name"),
            company: formData.get("company"),
            email: formData.get("email"),
            interest: formData.get("interest"),
        };

        const saved = await ConciergeRepo.saveTaskListForm(data);

        // Send confirmation email
        // await sendConfirmationEmail(data);

        return NextResponse.json({ success: true, data: saved });
    } catch (error) {
        console.error("Error in POST /task-list-download:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
