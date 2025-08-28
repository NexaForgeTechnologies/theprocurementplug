import db from "@/config/db";
import nodemailer from "nodemailer";

export async function POST(request) {
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
    const userEmailTemplate = `
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
          <p style="margin-bottom: 15px;">Hi ${name},</p>

          <p style="margin-bottom: 15px;">
            Thank you for joining the waitlist for <strong>The Xec Plug</strong> — our invitation-only platform preparing procurement leaders for enterprise transformation and boardroom influence.
          </p>

          <p style="margin-bottom: 15px;">
            This is not just a membership. It’s a high-calibre leadership ecosystem designed to support your next leap — from CPO to COO, CEO, or board-level strategist.
          </p>

          <p style="margin-bottom: 15px;">As part of the waitlist, you’ll be among the first to:</p>
          <ul style="list-style: none; padding-left: 0; margin-bottom: 20px;">
            <p style="margin-bottom: 8px;">✔ Access our<strong> proprietary XecEdge tools</strong> including XecAchieve and the Decision-Making Impact Tracker</p>
            <p style="margin-bottom: 8px;">✔ Join executive peer exchange placements via <strong>XecXchange</strong></p>
            <p style="margin-bottom: 8px;">✔ Explore our concierge services and virtual masterclasses</p>
            <p style="margin-bottom: 8px;">✔ Receive an early invitation to <strong>The Xec House</strong> membership and our 2026 executive retreats</p>
          </ul>

          <p style="margin-bottom: 15px;">
            📅 We’ll begin onboarding founding members from <strong>Spring 2026</strong>. Until then, you’ll receive exclusive updates and insights on how the platform is shaping up.
          </p>

          <p style="margin-bottom: 5px;">Welcome aboard,</p>
          <p style="font-weight: bold;">— The Xec Plug Team</p>
        </div>

      </div>
    </body>
  </html>
`;


    const userEmailOptions = {
      from: `"The XecPlug Team" <${process.env.SMTP_XEC_USER}>`,
      to: email,
      subject: "You're on the list — welcome to Xec Plug",
      html: userEmailTemplate,
      // Add text version
      text: `Hi ${name || 'there'},\n\nThank you for applying to join XecPlug.\n\nYou're now part of an exclusive group of senior leaders preparing to shape the future of procurement at enterprise and board level.\n\nYou'll receive a confirmation email shortly with more information.\n\nStay connected with us on LinkedIn @The Procurement Plug and check your inbox for next steps.\n\nWe're honored to have you on this journey.\n\n— The XecPlug Team`,
      // Add headers
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

    // ---- Respond only AFTER emails are sent ----
    return Response.json(
      {
        success: true,
        message:
          "🎉 You’re on the Founding Waitlist! Thank you for applying to join Xec Plug. You’re now part of an exclusive group of senior leaders preparing to shape the future of procurement aenterprise and board level. You’ll receive a confirmation email shortly with more information. Stay connected with us on LinkedIn @The Procurement Plug and check your inbox for next steps. We’re honoured to have you in this journey— The Xec Plug Team", applicationId: result.insertId,
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