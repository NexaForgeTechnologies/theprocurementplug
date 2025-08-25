// import db from "@/config/db";
// import nodemailer from "nodemailer";

// //New Deployment 

// export async function POST(request) {
//   try {
//     const body = await request.json();

//     const {
//       membership_type,
//       name,
//       job,
//       company_name,
//       email,
//       linkedin,
//       country,
//       interests,
//       membership_options,
//       seniority,
//       goals,
//       benefits,
//       source,
//       source_other,
//       invite_option,
//     } = body;

//     // ---- Insert into database ----
//     const [result] = await db.execute(
//       `INSERT INTO waitlist 
//       (
//         membership_type, 
//         name, 
//         job_title, 
//         company_name, 
//         email, 
//         linkedin, 
//         country, 
//         interests, 
//         membership_options,
//         seniority,
//         goals,
//         benefits,
//         source,
//         source_other,
//         invite_option
//       )
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//       [
//         membership_type || null,
//         name || null,
//         job || null,
//         company_name || null,
//         email || null,
//         linkedin || null,
//         country || null,
//         JSON.stringify(interests) || null,
//         JSON.stringify(membership_options) || null,
//         seniority || null,
//         goals || null,
//         benefits || null,
//         JSON.stringify(source) || null,
//         source_other || null,
//         invite_option || null,
//       ]
//     );

//     // ---- Nodemailer setup ----
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: process.env.SMTP_PORT,
//       secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
//       auth: {
//         user: process.env.SMTP_XEC_USER,
//         pass: process.env.SMTP_XEC_PASS,
//       },
//       // Add these for better deliverability
//       tls: {
//         rejectUnauthorized: false
//       }
//     });

//     // ---- Send admin email ----
//     const adminEmail = process.env.SMTP_XEC_USER;

//     const adminEmailTemplate = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <meta charset="utf-8">
//           <title>New Waitlist Signup</title>
//         </head>
//         <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//           <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
//             <h2 style="color: #2c3e50;">New XecPlug Waitlist Registration</h2>

//             <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
//               <p><strong>Name:</strong> ${name || 'Not provided'}</p>
//               <p><strong>Email:</strong> ${email || 'Not provided'}</p>
//               <p><strong>Job Title:</strong> ${job || 'Not provided'}</p>
//               <p><strong>Company:</strong> ${company_name || 'Not provided'}</p>
//               <p><strong>Country:</strong> ${country || 'Not provided'}</p>
//               <p><strong>Membership Type:</strong> ${membership_type || 'Not provided'}</p>
//               <p><strong>LinkedIn:</strong> ${linkedin || 'Not provided'}</p>
//             </div>

//             <p>A new registration has been submitted to the XecPlug waitlist.</p>
//             <p style="margin-top: 30px; font-size: 12px; color: #666;">
//               This is an automated notification from your XecPlug waitlist system.
//             </p>
//           </div>
//         </body>
//       </html>
//     `;

//     const adminEmailOptions = {
//       from: `"XecPlug Waitlist" <${process.env.SMTP_XEC_USER}>`,
//       to: adminEmail,
//       subject: "New Waitlist Signup - XecPlug",
//       html: adminEmailTemplate,
//       // Add text version for better deliverability
//       text: `New XecPlug Waitlist Registration\n\nName: ${name}\nEmail: ${email}\nJob Title: ${job}\nCompany: ${company_name}\nCountry: ${country}\nMembership Type: ${membership_type}\n\nA new registration has been submitted to the XecPlug waitlist.`,
//       // Add headers to improve deliverability
//       headers: {
//         'X-Priority': '3',
//         'X-MSMail-Priority': 'Normal',
//         'Importance': 'Normal'
//       }
//     };

//     // ---- Send user email ----
//     const userEmailTemplate = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <meta charset="utf-8">
//           <title>Welcome to XecPlug Waitlist</title>
//         </head>
//         <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//           <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
//             <div style="text-align: center; margin-bottom: 30px;">
//               <h1 style="color: #2c3e50; margin-bottom: 10px;">🎉 Welcome to XecPlug!</h1>
//               <p style="color: #7f8c8d; font-size: 16px;">You're on the Founding Waitlist</p>
//             </div>

//             <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin: 20px 0;">
//               <p style="margin-bottom: 15px;">Hi ${name || 'there'},</p>

//               <p style="margin-bottom: 15px;">Thank you for applying to join XecPlug.</p>

//               <p style="margin-bottom: 15px;">You're now part of an exclusive group of senior leaders preparing to shape the future of procurement at enterprise and board level.</p>

//               <p style="margin-bottom: 15px;">You'll receive a confirmation email shortly with more information.</p>

//               <p style="margin-bottom: 20px;">Stay connected with us on LinkedIn @The Procurement Plug and check your inbox for next steps.</p>

//               <p style="margin-bottom: 5px;">We're honored to have you on this journey.</p>
//               <p style="font-weight: bold;">— The XecPlug Team</p>
//             </div>

//             <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
//               <p style="font-size: 12px; color: #666;">
//                 This email was sent because you signed up for the XecPlug waitlist.<br>
//                 If you have any questions, please don't reply to this email.
//               </p>
//             </div>
//           </div>
//         </body>
//       </html>
//     `;

//     const userEmailOptions = {
//       from: `"The XecPlug Team" <${process.env.SMTP_XEC_USER}>`,
//       to: email,
//       subject: "Welcome to XecPlug Founding Waitlist!",
//       html: userEmailTemplate,
//       // Add text version
//       text: `Hi ${name || 'there'},\n\nThank you for applying to join XecPlug.\n\nYou're now part of an exclusive group of senior leaders preparing to shape the future of procurement at enterprise and board level.\n\nYou'll receive a confirmation email shortly with more information.\n\nStay connected with us on LinkedIn @The Procurement Plug and check your inbox for next steps.\n\nWe're honored to have you on this journey.\n\n— The XecPlug Team`,
//       // Add headers
//       headers: {
//         'X-Priority': '3',
//         'X-MSMail-Priority': 'Normal',
//         'Importance': 'Normal'
//       }
//     };

//     // ✅ Respond immediately BEFORE sending emails
//     const response = Response.json(
//       {
//         success: true,
//         message: "🎉 You're in! Welcome to the XecPlug Founding Waitlist. You'll receive a confirmation email shortly with next steps.",
//         applicationId: result.insertId,
//       },
//       { status: 200 }
//     );

//     // ---- Send emails in background (fire and forget) ----
//     setImmediate(async () => {
//       try {
//         await transporter.verify();
//         console.log("SMTP connection verified successfully");

//         const emailResults = await Promise.allSettled([
//           transporter.sendMail(userEmailOptions),
//           transporter.sendMail(adminEmailOptions),
//         ]);

//         emailResults.forEach((result, index) => {
//           if (result.status === 'rejected') {
//             console.error(`Email ${index + 1} failed:`, result.reason);
//           } else {
//             console.log(`Email ${index + 1} sent successfully:`, result.value.messageId);
//           }
//         });

//       } catch (emailError) {
//         console.error("Background email sending error:", emailError);
//       }
//     });

//     return response;
//   } catch (error) {
//     console.error("❌ Error inserting into database:", error);
//     return Response.json(
//       {
//         success: false,
//         message: "Something went wrong. Please try again later.",
//       },
//       { status: 500 }
//     );
//   }
// }




import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import mysql from "mysql2/promise";

export async function POST(req) {
  const { email } = await req.json();

  // Validate email
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    console.error("Invalid or missing email:", email);
    return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 });
  }

  // Validate environment variables
  if (!process.env.SMTP_XEC_USER || !process.env.SMTP_XEC_PASS) {
    console.error("Missing email environment variables:", {
      SMTP_XEC_USER: !!process.env.SMTP_XEC_USER,
      SMTP_XEC_PASS: !!process.env.SMTP_XEC_PASS,
    });
    return NextResponse.json({ error: "Internal server configuration error" }, { status: 500 });
  }

  // Initialize MySQL connection
  /*
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
 
    // Check if email already exists
    const [rows] = await connection.execute(
      "SELECT email FROM subscribers WHERE email = ?",
      [email]
    );
 
    if (rows.length > 0) {
      return NextResponse.json({ error: "This email is already subscribed" }, { status: 400 });
    }
 
    // Insert email into subscribers table
    await connection.execute(
      "INSERT INTO subscribers (email, subscribed_at) VALUES (?, NOW())",
      [email]
    );
  } catch (error) {
    console.error("Database error:", error);
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json({ error: "This email is already subscribed" }, { status: 400 });
    }
    return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
  */

  // Configure Nodemailer transporter
  // const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //         user: process.env.SMTP_XEC_USER,
  //         pass: process.env.SMTP_XEC_PASS,
  //     },
  // });
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_XEC_USER,
      pass: process.env.SMTP_XEC_PASS,
    },
  });



  // Subscriber confirmation email template
  const subscriberEmailTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to The Procurement Plug!</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <div style=" background-color: #F4F4F4; width: 100%; height: 20px;"></div>
      <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <tr>
          <td style="padding: 20px;">
            <h1 style="font-size: 24px; color: #333333; margin: 0 0 20px;">Thank You for Subscribing!</h1>
            <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
              Welcome to <strong>The Procurement Plug</strong>! You're now part of our community and will receive the latest updates on features, releases, and more.
            </p>
            <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
              Stay tuned for exciting news and insights straight to your inbox!
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; text-align: center; background-color: #f4f4f4; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
            <p style="font-size: 14px; color: #999999; margin: 0;">
              © ${new Date().getFullYear()} The Procurement Plug. All rights reserved.
            </p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  // Admin notification email template
  const adminEmailTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Subscriber Notification</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <div style=" background-color: #F4F4F4; width: 100%; height: 20px;"></div>
      <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <tr>
          <td style="padding: 20px;">
            <h1 style="font-size: 24px; color: #333333; margin: 0 0 20px;">New Subscriber Notification</h1>
            <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
              A new user has subscribed to <strong>The Procurement Plug</strong> newsletter.
            </p>
            <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
              <strong>Subscriber Details:</strong><br/>
              Email: ${email}<br/>
              Subscribed at: ${new Date().toLocaleString()}
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px; text-align: center; background-color: #f4f4f4; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
            <p style="font-size: 14px; color: #999999; margin: 0;">
              © ${new Date().getFullYear()} The Procurement Plug. All rights reserved.
            </p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  // Email options for subscriber
  const subscriberMailOptions = {
    from: `"The Procurement Plug" <${process.env.SMTP_XEC_USER}>`,
    to: email,
    subject: "Welcome to The Procurement Plug Newsletter!",
    html: subscriberEmailTemplate,
  };

  // Email options for admin
  const adminMailOptions = {
    from: `"The Procurement Plug" <${process.env.SMTP_XEC_USER}>`,
    to: process.env.SMTP_XEC_USER,
    subject: "New Subscriber Notification",
    html: adminEmailTemplate,
  };

  // Send both emails
  try {
    await transporter.verify();
    console.log("Sending emails to:", { subscriberEmail: email, adminEmail: process.env.SMTP_XEC_USER });
    await Promise.all([
      transporter.sendMail(subscriberMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);
    return NextResponse.json({ message: "Subscription successful! Confirmation emails sent." });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send confirmation emails" }, { status: 500 });
  }
}