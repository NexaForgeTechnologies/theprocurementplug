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
          <title>Welcome to XecPlug Waitlist</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2c3e50; margin-bottom: 10px;">🎉 Welcome to XecPlug!</h1>
              <p style="color: #7f8c8d; font-size: 16px;">You're on the Founding Waitlist</p>
            </div>

            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin: 20px 0;">
              <p style="margin-bottom: 15px;">Hi ${name || 'there'},</p>

              <p style="margin-bottom: 15px;">Thank you for applying to join XecPlug.</p>

              <p style="margin-bottom: 15px;">You're now part of an exclusive group of senior leaders preparing to shape the future of procurement at enterprise and board level.</p>

              <p style="margin-bottom: 15px;">You'll receive a confirmation email shortly with more information.</p>

              <p style="margin-bottom: 20px;">Stay connected with us on LinkedIn @The Procurement Plug and check your inbox for next steps.</p>

              <p style="margin-bottom: 5px;">We're honored to have you on this journey.</p>
              <p style="font-weight: bold;">— The XecPlug Team</p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="font-size: 12px; color: #666;">
                This email was sent because you signed up for the XecPlug waitlist.<br>
                If you have any questions, please don't reply to this email.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    const userEmailOptions = {
      from: `"The XecPlug Team" <${process.env.SMTP_XEC_USER}>`,
      to: email,
      subject: "Welcome to XecPlug Founding Waitlist!",
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
          "🎉 You're in! Welcome to the XecPlug Founding Waitlist. We've emailed you confirmation.",
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