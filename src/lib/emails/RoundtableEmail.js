import { sendEmail } from "@/lib/EmailsService";

// ------------------------- Roundtable Emails
export async function UserSecretRoundtableLinkEmail({ email, title, date, secret_url }) {
    await sendEmail({
        type: "round-table",
        to: email,
        subject: "Roundtable Secret Link",
        html: `
            <p><b>Hi,</b></p>

            <p>You are invited to join our upcoming Roundtable: <b>${title}</b>!</p>

            <p>This is a private discussion where you can:</p>
            <ul style="list-style-type: disc; padding-left: 15px; margin: 0;">
                <li>View the discussion topics</li>
                <li>Share your thoughts and insights</li>
                <li>Ask questions and interact with other participants</li>
                <li>Contribute to meaningful conversations in real time</li>
            </ul>

            <p style="margin-top: 12px;">
                <b>Access your private roundtable here:</b><br/>
                <a href="${secret_url}" style="color: #1a73e8; text-decoration: underline;">
                ${secret_url}
                </a>
            </p>

            <p>The roundtable is scheduled for <b>${date}</b>. We’d love to have you join and share your perspectives!</p>

            <p>Looking forward to seeing you there!</p>

            <p>Best regards,<br/>The Procurement Plug Team</p>
        `,
    });
}