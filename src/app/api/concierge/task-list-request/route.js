import { NextResponse } from "next/server";

// Repository
import { ConciergeRepo } from "@/repository/concierge/ConciergeRepo";

// Emails
import { UserTaskListDownloadEmail, AdminTaskListDownloadEmail } from "@/lib/emails/ConciergeEmail";

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

        // Send email
        await UserTaskListDownloadEmail(data);
        await AdminTaskListDownloadEmail(data);

        return NextResponse.json({ success: true, data: saved });
    } catch (error) {
        console.error("Error in POST /task-list-download:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
