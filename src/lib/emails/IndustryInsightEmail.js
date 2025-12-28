import { sendEmail } from "@/lib/EmailsService";

export async function UserIndustryInsightDownloadEmail(data) {
    const {
        email,
        username,
        selectedTile,
    } = data;

    const pdf = selectedTile?.pdf;
    const BASE_URL = "https://staging.theprocurementplug.com/";

    if (!email || !pdf) {
        throw new Error("Missing email or pdf");
    }

    await sendEmail({
        type: "insightPost",
        to: email,
        subject: "Your Requested Document",
        html: `
            <p><b>Hi ${username},</b></p>

            <p>You can download your requested document below:</p>

            <p>
                <a href="${BASE_URL}${pdf}" download>
                    Download the report
                </a>
            </p>

            <p>
                Best regards,<br/>
                The Procurement Plug Team
            </p>
        `,
    });
}
