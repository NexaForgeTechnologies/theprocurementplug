import { sendEmail } from "@/lib/EmailsService";

// /business-hub/vip-lounge/exclusive-intelligence-reports/market-research
export async function UserSponsorReportEmail({ email, fullName }) {
    await sendEmail({
        type: "xecXchange",
        to: email,
        subject: "Here’s your copy of our latest Sponsor report",
        html: `
            Hi ${fullName},<br><br>
            Thanks for your interest! You can download the report here:<br>
            <a href="https://theprocurementplug.com/latest-report" target="_blank">Download Latest Report</a><br><br>
            We hope these insights help power your procurement strategy. If you have any questions or want to discuss further, just reply to this email.<br><br>
            Best regards,<br>
            The Procurement Plug Team
        `,
    });
}


export async function AdminSponsorReportEmail({ fullName, email, role, company, }) {
    await sendEmail({
        type: "xecXchange",
        to: process.env.SMTP_XECXCHANGE_USER,
        subject: `Latest report downloaded by ${fullName}`,
        html: `
            A new download of the Latest Sponsor Report occurred:<br>
            * Name: ${fullName}<br>
            • Email: ${email}<br>
            • Role / Title: ${role}<br>
            • Company: ${company}
        `,
    });
}



// /business-hub/vip-lounge/exclusive-intelligence-reports/industry-insights
export async function UserLatestReportEmail({ email, fullName }) {
    await sendEmail({
        type: "xecXchange",
        to: email,
        subject: "Here’s your copy of our latest report",
        html: `
            Hi ${fullName},<br><br>
            Thanks for your interest! You can download the report here:<br>
            <a href="https://theprocurementplug.com/latest-report" target="_blank">Download Latest Report</a><br><br>
            We hope these insights help power your procurement strategy. If you have any questions or want to discuss further, just reply to this email.<br><br>
            Best regards,<br>
            The Procurement Plug Team
        `,
    });
}


export async function AdminLatestReportEmail({ fullName, email, role, company, }) {
    await sendEmail({
        type: "xecXchange",
        to: process.env.SMTP_XECXCHANGE_USER,
        subject: `Latest report downloaded by ${fullName}`,
        html: `
            A new download of the Latest Report occurred:<br>
            * Name: ${fullName}<br>
            • Email: ${email}<br>
            • Role / Title: ${role}<br>
            • Company: ${company}
        `,
    });
}

