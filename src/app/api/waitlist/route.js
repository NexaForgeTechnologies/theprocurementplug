import db from "@/config/db";
import nodemailer from "nodemailer";
import cron from "node-cron";

console.log("🚀 waitlist API file loaded");
// cron.schedule("*/1 * * * *", () => {
//   console.log("⏰ Test reminder running every 1 minute");
// });
export async function POST(request) {

  const TEST_CRON = process.env.TEST_CRON === "true"; // put TEST_CRON=true in .env.local for testing

  console.log("📩 API /waitlist POST called");
  try {
    const body = await request.json();

    const {
      membership_type,
      name,
      job,
      company_name,
      email,
      linkedin,
      country,
      interests,
      membership_options,
      seniority,
      goals,
      benefits,
      source,
      source_other,
      invite_option,
    } = body;

    // ---- Insert into database ----
    const [result] = await db.execute(
      `INSERT INTO waitlist 
      (
        membership_type, 
        name, 
        job_title, 
        company_name, 
        email, 
        linkedin, 
        country, 
        interests, 
        membership_options,
        seniority,
        goals,
        benefits,
        source,
        source_other,
        invite_option
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        membership_type || null,
        name || null,
        job || null,
        company_name || null,
        email || null,
        linkedin || null,
        country || null,
        JSON.stringify(interests) || null,
        JSON.stringify(membership_options) || null,
        seniority || null,
        goals || null,
        benefits || null,
        JSON.stringify(source) || null,
        source_other || null,
        invite_option || null,
      ]
    );

    // ---- Nodemailer setup ----
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_XEC_USER,
        pass: process.env.SMTP_XEC_PASS,
      },
      // Add these for better deliverability
      tls: {
        rejectUnauthorized: false
      }
    });

    // ---- Send admin email ----
    const adminEmail = process.env.SMTP_XEC_USER;

    const adminEmailTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Waitlist Signup</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2c3e50;">New XecPlug Waitlist Registration</h2>

            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name || 'Not provided'}</p>
              <p><strong>Email:</strong> ${email || 'Not provided'}</p>
              <p><strong>Job Title:</strong> ${job || 'Not provided'}</p>
              <p><strong>Company:</strong> ${company_name || 'Not provided'}</p>
              <p><strong>Country:</strong> ${country || 'Not provided'}</p>
              <p><strong>Membership Type:</strong> ${membership_type || 'Not provided'}</p>
              <p><strong>LinkedIn:</strong> ${linkedin || 'Not provided'}</p>
            </div>

            <p>A new registration has been submitted to the XecPlug waitlist.</p>
            <p style="margin-top: 30px; font-size: 12px; color: #666;">
              This is an automated notification from your XecPlug waitlist system.
            </p>
          </div>
        </body>
      </html>
    `;

    const adminEmailOptions = {
      from: `"XecPlug Waitlist" <${process.env.SMTP_XEC_USER}>`,
      to: adminEmail,
      subject: "New Waitlist Signup - XecPlug",
      html: adminEmailTemplate,
      // Add text version for better deliverability
      text: `New XecPlug Waitlist Registration\n\nName: ${name}\nEmail: ${email}\nJob Title: ${job}\nCompany: ${company_name}\nCountry: ${country}\nMembership Type: ${membership_type}\n\nA new registration has been submitted to the XecPlug waitlist.`,
      // Add headers to improve deliverability
      headers: {
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal',
        'Importance': 'Normal'
      }
    };

    // ---- Send user email ----
    // ---- Send user email ----
    let userEmailTemplate;
    let userEmailSubject;
    let userEmailText;

    if (membership_type === "business") {
      // Enterprise (organisation) email
      userEmailSubject = "Your organisation is on the waitlist – Xec Plug Enterprise";
      userEmailTemplate = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Welcome to Xec Plug Enterprise</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #2c3e50; margin-bottom: 10px;">Xec Plug Enterprise</h1>
                <p style="color: #7f8c8d; font-size: 16px;">Your organisation is on the waitlist</p>
              </div>

              <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin: 20px 0;">
                <p>Hi ${name},</p>

                <p>Thank you for registering your organisation’s interest in <strong>The Xec Plug</strong> — the first-of-its-kind leadership platform preparing procurement teams for enterprise transformation, C-suite progression, and boardroom influence.</p>

                <p>Your interest confirms a shared vision: that procurement is no longer just a function, but a force for strategic enterprise value.</p>

                <p>As an enterprise partner, you’ll soon gain priority access to:</p>
                <ul style="list-style: none; padding-left: 0; margin-bottom: 20px;">
                  <p>✅ Our <strong>XecEdge Leadership Suite</strong> — including team diagnostics, AI benchmarking, and enterprise-level leadership analytics</p>
                  <p>✅ Bespoke <strong>CPO-to-COO capability programmes</strong></p>
                  <p>✅ Access to our strategic secondment model via <strong>XecXchange</strong></p>
                  <p>✅ Tailored team access to our concierge service, retreats, and masterclasses</p>
                  <p>✅ Enterprise onboarding to both Digital and Xec House tier pathways</p>
                </ul>

                <p>📅 Enterprise onboarding will begin from <strong>Spring 2026</strong>, with strategic briefings and early partner discovery calls scheduled ahead of launch.</p>

                <p>We’ll be in touch shortly to schedule an optional intro call with our founder or partnerships team.</p>

                <p style="margin-bottom: 5px;">Warm regards,</p>
                <p style="font-weight: bold;">— The Xec Plug Team</p>
                <p>xecplug@theprocurementplug.com</p>
              </div>
            </div>
          </body>
        </html>
      `;
      userEmailText = `Hi ${name},\n\nThank you for registering your organisation’s interest in The Xec Plug — the first-of-its-kind leadership platform preparing procurement teams for enterprise transformation, C-suite progression, and boardroom influence.\n\nAs an enterprise partner, you’ll soon gain access to:\n- XecEdge Leadership Suite (diagnostics, AI benchmarking, analytics)\n- Bespoke CPO-to-COO capability programmes\n- XecXchange secondment model\n- Concierge, retreats, masterclasses\n- Digital and Xec House pathways\n\nOnboarding begins Spring 2026. We’ll reach out soon to schedule an intro call.\n\nWarm regards,\nThe Xec Plug Team\nxecplug@theprocurementplug.com`;
    } else {
      // Individual email (default)
      userEmailSubject = "You're on the list — welcome to Xec Plug";
      userEmailTemplate = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Welcome to Xec Plug</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #2c3e50; margin-bottom: 10px;">🎉 Welcome to Xec Plug!</h1>
                <p style="color: #7f8c8d; font-size: 16px;">You're on the Founding Waitlist</p>
              </div>

              <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin: 20px 0;">
                <p>Hi ${name},</p>

                <p>Thank you for joining the waitlist for <strong>The Xec Plug</strong> — our invitation-only platform preparing procurement leaders for enterprise transformation and boardroom influence.</p>

                <p>This is not just a membership. It’s a high-calibre leadership ecosystem designed to support your next leap — from CPO to COO, CEO, or board-level strategist.</p>

                <p>As part of the waitlist, you’ll be among the first to:</p>
                <ul style="list-style: none; padding-left: 0; margin-bottom: 20px;">
                  <p>✅ Access our <strong>XecEdge tools</strong> including XecAchieve and the Decision-Making Impact Tracker</p>
                  <p>✅ Join executive peer exchange placements via <strong>XecXchange</strong></p>
                  <p>✅ Explore our concierge services and virtual masterclasses</p>
                  <p>✅ Receive an early invitation to <strong>The Xec House</strong> membership and our 2026 executive retreats</p>
                </ul>

                <p>📅 We’ll begin onboarding founding members from <strong>Spring 2026</strong>. Until then, you’ll receive exclusive updates and insights on how the platform is shaping up.</p>

                <p style="margin-bottom: 5px;">Welcome aboard,</p>
                <p style="font-weight: bold;">— The Xec Plug Team</p>
              </div>
            </div>
          </body>
        </html>
      `;
      userEmailText = `Hi ${name},\n\nThank you for joining the waitlist for The Xec Plug — our invitation-only platform preparing procurement leaders for enterprise transformation and boardroom influence.\n\nAs part of the waitlist, you’ll be among the first to:\n- Access XecEdge tools (XecAchieve, Decision-Making Impact Tracker)\n- Join executive exchanges via XecXchange\n- Explore concierge + masterclasses\n- Get early invite to The Xec House + 2026 retreats\n\nOnboarding begins Spring 2026.\n\nWelcome aboard,\nThe Xec Plug Team`;
    }

    const userEmailOptions = {
      from: `"The XecPlug Team" <${process.env.SMTP_XEC_USER}>`,
      to: email,
      subject: userEmailSubject,
      html: userEmailTemplate,
      text: userEmailText,
      headers: {
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal',
        'Importance': 'Normal'
      }
    };


    // ---- Verify connection + Send emails sequentially ----
    await transporter.verify();
    await transporter.sendMail(userEmailOptions);
    await transporter.sendMail(adminEmailOptions);




    // ---- CRON REMINDERS ----
    if (membership_type === "individual") {
      
      // const delayMs = 1 * 60 * 1000; // 1 minutes in milliseconds
      // 5 days from signup
      const delayMs = 5 * 24 * 60 * 60 * 1000;
      const fireAt = Date.now() + delayMs;

      const reminderJob = cron.schedule("0 9 * * *", async () => {
        if (Date.now() >= fireAt) {
          try {
            await transporter.sendMail({
              from: `"The XecPlug Team" <${process.env.SMTP_XEC_USER}>`,
              to: email,
              subject: "What’s coming next at Xec Plug (and how to prepare)",
              text: `Hi ${name || "there"},

      You’re on the waitlist — and soon, you’ll have early access to something that’s never existed before in procurement leadership.

      Here’s what to expect:
      - Founding members will be invited to shape our beta phase, access pre-launch tools, and preview our signature programmes — including our global executive retreats and enterprise coaching labs.
      - Whether you selected Digital Membership or The Xec House, you’ll be supported with exclusive learning, concierge access, and C-suite readiness pathways.

      To prepare for onboarding, we’ll soon be inviting a small number of waitlisted leaders to complete a short readiness form — including your career goals, current leadership challenges, and how we can tailor your membership experience.

      If you haven’t already, follow us on LinkedIn via @The Procurement Plug for behind-the-scenes updates and expert insights.

      We’re excited to build the future of procurement leadership — and even more excited you’re part of it.

      The Xec Plug Team
      xecplug@theprocurementplug.com`,
              html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2>Hi ${name || "there"},</h2>
      <p>You’re on the waitlist — and soon, you’ll have early access to something that’s never existed before in procurement leadership.</p>
      
      <h3>Here’s what to expect:</h3>
      <p>Founding members will be invited to shape our <strong>beta phase</strong>, access pre-launch tools, and preview our signature programmes — including <strong>global executive retreats</strong> and <strong>enterprise coaching labs</strong>.</p>
      <p>Whether you selected <strong>Digital Membership</strong> or <strong>The Xec House</strong>, you’ll be supported with exclusive learning, concierge access, and <strong>C-suite readiness pathways</strong>.</p>

      <p>To prepare for onboarding, we’ll soon be inviting a small number of waitlisted leaders to complete a short readiness form — including your career goals, current leadership challenges, and how we can tailor your membership experience.</p>

      <p>If you haven’t already, follow us on 
      <a href="xecplug@theprocurementplug.com" target="_blank">@The Procurement Plug</a> 
      for behind-the-scenes updates and expert insights.</p>

      <p>We’re excited to build the future of procurement leadership — and even more excited you’re part of it.</p>

      <p><strong>The Xec Plug Team</strong><br>
      <a href="mailto:xecplug@theprocurementplug.com">xecplug@theprocurementplug.com</a></p>
      </div>`,
            });

            console.log(`✅ Individual 5-day reminder email sent to ${email}`);
            reminderJob.stop(); // stop after sending once
          } catch (error) {
            console.error("❌ Error sending Individual reminder email:", error);
          }
        }
      });

      console.log("⏳ Individual reminder scheduled for", new Date(fireAt).toISOString());
    }
    else if (membership_type === "business") {

      // const delayMs = 1 * 60 * 1000; // 1 minutes in milliseconds
      // 120 days from signup
      const delayMs = 120 * 24 * 60 * 60 * 1000;
      const fireAt = Date.now() + delayMs;
      // 0 0 * * * this time means: every day at midnight
      const reminderJob = cron.schedule("0 9 * * *", async () => {
        if (Date.now() >= fireAt) {
          try {
            await transporter.sendMail({
              from: `"The XecPlug Team" <${process.env.SMTP_XEC_USER}>`,
              to: email,
              subject: "Let’s discuss your procurement leadership vision",
              text: `Hi ${name},

            Thank you again for joining the enterprise waitlist for The Xec Plug.

            We’re now scheduling brief discovery sessions with selected organisations to better understand:
            ✅ Your current procurement leadership structure
            ✅ Strategic goals around CPO development, retention, and enterprise alignment
            ✅ How Xec Plug’s platform, tools, and retreats can support capability building
            ✅ Opportunities for early-stage partnership, co-branded executive development, or pilot participation

            👉 Click here to schedule your 20-minute call with our Founder or Partnerships Lead.

            This is an opportunity to shape how your organisation fits into a leadership ecosystem built for the next generation of procurement boardroom leaders.

            We look forward to learning more.

            Best regards,  
            The Xec Plug Team  
            xecplug@theprocurementplug.com`,
              html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2>Hi ${name || "there"},</h2>
      <p>Thank you again for joining the <strong>enterprise waitlist</strong> for <strong>The Xec Plug</strong>.</p>

      <p>We’re now scheduling <strong>brief discovery sessions</strong> with selected organisations to better understand:</p>
      <ul>
        <li>✅ Your current procurement leadership structure</li>
        <li>✅ Strategic goals around CPO development, retention, and enterprise alignment</li>
        <li>✅ How Xec Plug’s platform, tools, and retreats can support capability building</li>
        <li>✅ Opportunities for early-stage partnership, co-branded executive development, or pilot participation</li>
      </ul>

      <p>👉 <a href="#" target="_blank">Click here to schedule your 20-minute call</a> with our Founder or Partnerships Lead.</p>

      <p>This is an opportunity to shape how your organisation fits into a leadership ecosystem built for the next generation of procurement boardroom leaders.</p>

      <p>We look forward to learning more.</p>

      <p>Best regards,<br>
      <strong>The Xec Plug Team</strong><br>
      <a href="mailto:xecplug@theprocurementplug.com">xecplug@theprocurementplug.com</a></p>
    </div>`,
            });

            console.log(`✅ Business Email2 120-day reminder email sent to ${email}`);
            reminderJob.stop(); // stop after sending once
          } catch (error) {
            console.error("❌ Error sending business Email2, The 120 day reminder email:", error);
          }
        }
      });

      console.log("⏳ Business reminder scheduled for", new Date(fireAt).toISOString());
    }

    console.log("✅ Email sent to", email);

    // ---- Respond only AFTER emails are sent ----
    return Response.json(
      {
        success: true,
        message: `🎉 You’re on the Founding Waitlist!  

Thank you for applying to join Xec Plug.  
You’re now part of an exclusive group of senior leaders preparing to shape the future of procurement at enterprise and board level.  

You’ll receive a confirmation email shortly with more information.  
Stay connected with us on LinkedIn @The Procurement Plug and check your inbox for next steps.  

We’re honoured to have you in this journey —  
The Xec Plug Team`,
        applicationId: result.insertId,

      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error inserting into database:", error);
    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}