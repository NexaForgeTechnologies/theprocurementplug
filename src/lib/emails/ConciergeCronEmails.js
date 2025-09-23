// ConciergeCronEmails.js
import { sendEmail } from "@/lib/EmailsService";
import cron from "node-cron";

// Helper to build cron expression for N days later
function cronForDaysLater(minutes) {
    const now = new Date();
    const future = new Date(now.getTime() + minutes * 60 * 1000);

    const minute = future.getMinutes();
    const hour = future.getHours();
    const day = future.getDate();
    const month = future.getMonth() + 1; // JS months 0–11

    return `${minute} ${hour} ${day} ${month} *`;
}

/**
 * User Task List Download Cron Emails
 */
export async function UserTaskListDownloadEmail({ email, name }) {
    // Email 2 after 3 days
    cron.schedule(cronForDaysLater(3), async () => {
        await sendEmail({
            type: "concierge",
            to: email,
            subject: "What Could Your Team Delegate Tomorrow?",
            html: `
        <p><b>Hi ${name},</b></p>
        <p>From quick supplier shortlists to complex contract negotiations, your team could be offloading high-value procurement work as early as tomorrow.</p>
        <p>With The Procurement Concierge:</p>
        <ul>
          <li>Save Time: Free your team from repetitive, time-draining tasks.</li>
          <li>Boost Quality: Each heavy task reviewed by senior procurement experts.</li>
          <li>Stay Flexible: Use credits when you need them, with no ongoing POs.</li>
        </ul>
        <p>📅 Let’s explore which tasks on your list we can start with right away.</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">Book a Discovery Call</a></p>
      `,
        });
        console.log(`Sent Email 2 to ${email} after 3 days`);
    });

    // Email 3 after 7 days
    cron.schedule(cronForDaysLater(7), async () => {
        await sendEmail({
            type: "concierge",
            to: email,
            subject: "We’d be Delighted to Help with Your Task List",
            html: `
        <p><b>Hi ${name},</b></p>
        <p>We noticed you downloaded our Procurement Task List but haven’t yet scheduled a call.</p>
        <p>Even a few hours of your team’s time saved per week can add up to significant ROI with Procurement Concierge.</p>
        <p>📅 Book a time that suits you, and let’s review your list together.</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">Book Your Call</a></p>
      `,
        });
        console.log(`Sent Email 3 to ${email} after 7 days`);
    });

    // Email 4 after 14 days
    cron.schedule(cronForDaysLater(14), async () => {
        await sendEmail({
            type: "concierge",
            to: email,
            subject: "Still Reviewing Your Procurement Tasks?",
            html: `
        <p><b>Hi ${name},</b></p>
        <p>We’d love to support your team in moving forward with your procurement priorities.</p>
        <p>Procurement Concierge is designed to help leaders like you:</p>
        <ul>
          <li>Clear backlogs of delayed tasks</li>
          <li>Deliver projects faster with expert support</li>
          <li>Stay in control with flexible credits</li>
        </ul>
        <p>📅 Let’s talk about the next steps whenever you’re ready.</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">Book a Call</a></p>
      `,
        });
        console.log(`Sent Email 4 to ${email} after 14 days`);
    });

    console.log(`Scheduled Task List follow-up emails for ${email}`);
}

/**
 * User Pricing & Packaging Cron Emails
 */
export async function UserPricicngPackagingFormEmail({ email, name }) {
    // Email 2 after 3 days
    cron.schedule(cronForDaysLater(3), async () => {
        await sendEmail({
            type: "concierge",
            to: email,
            subject: "How Procurement Concierge Accelerates Your Team",
            html: `
        <p><b>Hi ${name},</b></p>
        <p>Procurement Concierge is more than just task outsourcing — it’s a partner in accelerating your procurement function.</p>
        <p>Here’s how we help teams like yours:</p>
        <ul>
          <li>Take repetitive, time-draining work off your plate</li>
          <li>Provide expert review for heavy tasks</li>
          <li>Offer flexible credits with no long-term commitment</li>
        </ul>
        <p>📅 Let’s schedule a call to explore the right package for your needs.</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">Book a Call</a></p>
      `,
        });
    });

    // Email 3 after 7 days
    cron.schedule(cronForDaysLater(7), async () => {
        await sendEmail({
            type: "concierge",
            to: email,
            subject: "We’d be Delighted to Support Your Procurement Team",
            html: `
        <p><b>Hi ${name},</b></p>
        <p>It looks like you’ve been considering Procurement Concierge. Many leaders like you found that once they delegated even a single task, the value became clear.</p>
        <p>Why not start small and see the impact?</p>
        <p>📅 Book a time that suits you.</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">Book Your Call</a></p>
      `,
        });
    });

    // Email 4 after 14 days
    cron.schedule(cronForDaysLater(14), async () => {
        await sendEmail({
            type: "concierge",
            to: email,
            subject: "Still Exploring Procurement Support?",
            html: `
        <p><b>Hi ${name},</b></p>
        <p>We’d love to help you explore how Procurement Concierge can deliver measurable results for your team.</p>
        <p>Whenever you’re ready, let’s talk.</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">Book a Call</a></p>
      `,
        });
    });
}

/**
 * User Register Interest Cron Emails
 */
export async function UserRegisterInterestEmail({ email, name }) {
    // Email 2 after 3 days
    cron.schedule(cronForDaysLater(3), async () => {
        await sendEmail({
            type: "concierge",
            to: email,
            subject: "How the Concierge Delivers ROI for Your Team",
            html: `
        <p><b>Hi ${name},</b></p>
        <p>Procurement Concierge is built to give procurement leaders like you a clear ROI:</p>
        <ul>
          <li>Free up your team’s time</li>
          <li>Accelerate delivery of projects</li>
          <li>Ensure expert quality assurance on heavy tasks</li>
        </ul>
        <p>📅 Let’s explore together how this could work for you.</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">Book a Call</a></p>
      `,
        });
    });

    // Email 3 after 6 days
    cron.schedule(cronForDaysLater(6), async () => {
        await sendEmail({
            type: "concierge",
            to: email,
            subject: "Trusted by Procurement Leaders",
            html: `
        <p><b>Hi ${name},</b></p>
        <p>Procurement Concierge has been trusted by leaders across industries to deliver meaningful outcomes.</p>
        <p>Start with just one task — and experience the impact yourself.</p>
        <p>📅 Book a quick discovery call today.</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">Book Now</a></p>
      `,
        });
    });

    // Email 4 after 14 days
    cron.schedule(cronForDaysLater(14), async () => {
        await sendEmail({
            type: "concierge",
            to: email,
            subject: "Ready to Explore Procurement Concierge?",
            html: `
        <p><b>Hi ${name},</b></p>
        <p>If now’s the right time, we’d love to support you with your procurement priorities.</p>
        <p>Procurement Concierge is designed to make your life easier and deliver results faster.</p>
        <p>📅 Book a time that suits you.</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">Book a Call</a></p>
      `,
        });
    });
}

/**
 * User Become Expert Cron Emails
 */
export async function UserBecomeExpertEmail({ email, name }) {
    // Email 2 after 3 days
    cron.schedule(cronForDaysLater(3), async () => {
        await sendEmail({
            type: "conciergeExpert",
            to: email,
            subject: "Next Steps to Join the Concierge Experts Network",
            html: `
        <p><b>Hi ${name},</b></p>
        <p>Thank you again for expressing interest in joining the Concierge Experts Network.</p>
        <p>We’re currently reviewing applications and would love to explore your expertise further.</p>
        <p>📅 Book a short call to discuss your potential involvement.</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">Book Your Call</a></p>
      `,
        });
    });
}
