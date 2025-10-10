import { sendEmail } from "@/lib/EmailsService";


// ------------------------- XecXchange Join the waitlist Emails
export async function UserXecXchangeEmail({ email, name }) {
    const firstName = name?.split(" ")[0] || "there";

    await sendEmail({
        type: "xecXchange",
        to: email,
        subject: "You’re on the XecXchange beta waitlist!",
        html: `
            <p><b>Hi ${firstName},</b></p>
            <p>Thanks for joining our early-access waitlist for <b>XecXchange</b>. We’re hard at work building the platform and expect to start sending beta invites in the next few months.</p>
            <p>While you wait, feel free to:</p>
            <ul>
                <li>Follow Our Dev Blog for regular sneak peeks: <a href="https://theprocurementplug.com/dev-blog" target="_blank">Dev Blog</a></li>
                <li>Join the Community to share feedback: <a href="https://www.linkedin.com/company/theprocurementplug/" target="_blank">LinkedIn</a></li>
            </ul>
            <p>We appreciate your patience and can’t wait to get you in the beta!</p>
            <p>—The XecXchange Team</p>
        `,
    });
}


export async function AdminXecXchangeEmail({ name, email, company, role }) {
    await sendEmail({
        type: "xecXchange",
        to: process.env.SMTP_XECXCHANGE_USER, // Internal team email
        subject: `New XecXchange beta waitlist signup – ${name}`,
        html: `
            <p>A new user signed up for the XecXchange beta:</p>
            <ul>
                <li><b>Name:</b> ${name || "N/A"}</li>
                <li><b>Email:</b> ${email || "N/A"}</li>
                <li><b>Company/Role :</b> ${company || "N/A"}, ${role || "N/A"}</li>
            </ul>
        `,
    });
}


