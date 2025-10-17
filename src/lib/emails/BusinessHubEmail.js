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


// /business-hub/vip-lounge/exclusive-intelligence-reports/industry-insights
export async function UserRequestCustomBriefEmail({ email, fullName, topic }) {
    await sendEmail({
        type: "xecXchange",
        to: email,
        subject: "We’ve received your custom briefing request",
        html: `
        <p>Hi ${fullName},</p>

        <p>Thanks for requesting a tailored procurement intelligence briefing. Our team is reviewing your input on <strong>${topic}</strong> and will reach out within the next 24 hours to clarify any details and lock in your delivery timeline.</p>

        <p>In the meantime, you might browse our latest published reports here: 
        <a href="https://theprocurementplug.com/reports-library" target="_blank">Reports Library</a>
        </p>

        <p>Talk soon,<br>
        The Procurement Plug Intelligence Team</p>
`
        ,
    });
}


export async function AdminRequestCustomBriefEmail({ fullName, email, role, company, topic, objectives, desiredDeliveryDate }) {
    await sendEmail({
        type: "xecXchange",
        to: process.env.SMTP_XECXCHANGE_USER,
        subject: `New custom briefing request: ${fullName}`,
        html: `
    <p>A new “Custom Briefing” request has arrived:</p>

    <ul>
        <li><strong>Name:</strong> ${fullName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Company:</strong> ${company}</li>
        <li><strong>Role:</strong> ${role}</li>
        <li><strong>Topic / Scope:</strong> ${topic}</li>
        <li><strong>Key Questions / Objectives:</strong> “${objectives}”</li>
        <li><strong>Desired Delivery Date:</strong> ${desiredDeliveryDate}</li>
    </ul>

    <p>Please review and follow up within 24 hours to confirm details.</p>
`
    });
}
