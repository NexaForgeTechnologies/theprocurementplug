// ConciergeCronEmails.js
import { sendEmail } from "@/lib/EmailsService";
import cron from "node-cron";

// Helper to build cron expression for N days later
function cronForDaysLater(days) {
  const now = new Date();
  const future = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);

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
        <p>Warm regards,</p>
        <p>The Procurement Concierge Team</p>
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
        <p>We’d be delighted to help transform your task list into results delivered. Whether you need light support or complex project oversight, The Procurement Concierge is built to adapt to your workload.</p>
        <p>Our clients love:</p>
        <ul>
          <li>Mobilisation in as little as 24 hours.</li>
          <li> Access to a pool of vetted procurement professionals.</li>
          <li> Predictable delivery at a fraction of agency costs.</li>
        </ul>
        <p>Let’s turn your backlog into fast wins.</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile"></a>Schedule Your Discovery Call</p>
        <p>Warm regards,</p>
        <p>The Procurement Concierge Team</p>
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
        <p>Just one last reminder in case you’re still considering options for your procurement tasks.</p>
        <p>The Procurement Concierge offers:</p>
        <ul>
          <li>A flexible credit system to match your workload.</li>
          <li>QA reviews from senior leaders for high-impact projects.</li>
          <li>On-demand support without the commitment of long-term day rates.</li>
        </ul>
        <p>📅Let’s talk about which tasks we can start taking off your plate:</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">Book a Discovery Call</a></p>
        <p>Warm regards,</p>
        <p>The Procurement Concierge Team</p>
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
        <p>Imagine your team cutting turnaround times from weeks to days — while reducing reliance on costly day rates.</p>
        <p>Imagine your team cutting turnaround times from weeks to days — while reducing reliance on costly day rates.:</p>
        <ul>
          <li> Rapid Task Support: From supplier shortlists to full audits.</li>
          <li> QA by Experts: Every heavy task reviewed by senior procurement leaders.</li>
          <li>Scalable Model: Credits flex to your workload, so you only pay for what you need.</li>
        </ul>
        <p>It’s like having a fractional CPO and a procurement SWAT team on demand.</p>
        <p>📅 Let’s schedule a call to explore the right package for your needs.</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">Book a Call</a></p>
        <p>Warm regards,</p>
        <p>The Procurement Concierge Team</p>
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
        <p>We would be delighted to support your procurement function with tailored, on-demand expertise. Whether you need extra bandwidth, strategic oversight, or specialist delivery, our Concierge is built to fit seamlessly into your operations.</p>
        <p>Our clients value:</p>
        <ul>
        <li>Immediate mobilisation within 24 hours.</li>
        <li>Access to a pool of vetted professionals</li>
        <li> Quality-assured delivery every time.</li>
        </ul>
        <p>Let’s discuss how we can become a trusted extension of your team.</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">Schedule Your Discovery Call</a></p>
        <p>Warm regards,</p>
        <p>The Procurement Concierge Team</p>
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
        <p>I wanted to follow up one last time to make sure you didn’t miss this.</p>
        <p>The Procurement Concierge is designed to:</p>
        <ul>
          <li>Give your team instant access to vetted experts.</li>
          <li> Provide fractional CPO oversight without the overhead.</li>
          <li>Deliver fast, quality-assured results — from small tasks to major projects.</li>
          </ul>
          <p>If building more agility into your procurement team is still a priority, we’d love to talk.</p>
        <p>📅 You can book a quick discovery call at a time that works for you:</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">Book a Discovery Call</a></p>
        <p>If now isn’t the right time, that’s absolutely fine — you’ll still have the brochure and our details whenever you’re ready.</p>
        <p>Warm regards,</p>
        <p>The Procurement Concierge Team</p>
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
        <p>Many of our clients come to us with one goal: to do more with less.</p>
        <p>That’s why The Procurement Concierge is designed to:</p>
        <ul>
          <li> Reduce reliance on high day rates and external consultancies.</li>
          <li>Deliver tasks faster — weeks into days.</li>
          <li>Provide fractional CPO-level guidance without the cost of full-time headcount.</li>
        </ul>
        <p>The result? Procurement teams that are more agile, efficient, and cost-effective.</p>
        <p>📅 Let’s discuss what this could look like for your team.</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">Book Your Discovery Call</a></p>
        <p>Best regards,</p>
        <p>The Procurement Concierge Team</p>
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
        <p>We’re proud that procurement leaders across industries can trust The Procurement Concierge to deliver critical outcomes.</p>
        <p>Here’s why:</p>
        <ul>
          <li>Vetted Talent Pool: Access to experienced professionals across categories</li>
          <li>Strategic Oversight: Senior QA ensures top-tier quality.</li>
          <li>Proven Model: Teams consistently save up to 40% versus traditional day rates.</li>
        </ul>
        <p>We’d love to show you how we can implement  these results for your team.</p>
        
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">📅 Schedule a Call</a></p>

        <p>Warm regards,</p>
        <p>The Procurement Concierge Team</p>
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
        <p>Just one last note to say we’d love the chance to support your procurement team.</p>
        <p>If agility, quality, and measurable ROI are on your agenda this year, The Procurement Concierge is built to help you achieve it.</p>
        <p>Book a quick call to explore how we can fit into your procurement strategy:</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">📅 Book a Discovery Call</a></p>
        <p>Best regards,</p>
        <p>The Procurement Concierge Team</p>
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
        <p>We’re excited to onboard you into the Procurement Concierge Experts Network.</p>
        <p>As a reminder, our team will confirm your expert level shortly, which determines the types of tasks you’ll be eligible to support. You’ll then receive guidance on onboarding and how to access upcoming opportunities.</p>
        <p>In the meantime, help us strengthen the network by inviting other experts:</p>
        <p><a target="_blank" href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">📅 Share this Link: Join the Concierge Experts Network</a></p>
        <p>Together, we’re building the go-to hub for procurement expertise, quality assurance, and leadership support.</p>
        <p>We look forward to welcoming you fully onboard.</p>
        <p>Best regards,<br/>
        The Procurement Concierge Team</p>
      `,
    });
  });
}
