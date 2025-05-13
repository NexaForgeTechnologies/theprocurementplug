// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import mysql from "mysql2/promise";

// export async function POST(req) {
//     const { email } = await req.json();

//     // Validate email
//     if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//         return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
//     }

//     // Initialize MySQL connection
//     let connection;
//     try {
//         connection = await mysql.createConnection({
//             host: process.env.DB_HOST,
//             user: process.env.DB_USER,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_NAME,
//         });

//         // Insert email into subscribers table
//         await connection.execute(
//             "INSERT INTO subscribers (email, subscribed_at) VALUES (?, NOW())",
//             [email]
//         );
//     } catch (error) {
//         console.error("Database error:", error);
//         if (error.code === "ER_DUP_ENTRY") {
//             return NextResponse.json({ error: "Email already subscribed" }, { status: 400 });
//         }
//         return NextResponse.json({ error: "Failed to save email to database" }, { status: 500 });
//     } finally {
//         if (connection) await connection.end();
//     }

//     // Configure Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//         service: "gmail", // Or your email service
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS,
//         },
//     });

//     // HTML email template
//     const emailTemplate = `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Welcome to The Procurement Plug!</title>
//         </head>
//         <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
//             <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//                 <tr>
//                     <td style="padding: 20px; text-align: center; background-color: #212121; border-top-left-radius: 8px; border-top-right-radius: 8px;">
//                         <img src="https://yourdomain.com/images/footer/Horizontal-V1-copy.png" alt="The Procurement Plug Logo" style="max-width: 260px; height: auto;" />
//                     </td>
//                 </tr>
//                 <tr>
//                     <td style="padding: 30px; text-align: center;">
//                         <h1 style="font-size: 24px; color: #333333; margin: 0 0 20px;">Thank You for Subscribing!</h1>
//                         <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
//                             Welcome to <strong>The Procurement Plug</strong>! You're now part of our community and will receive the latest updates on features, releases, and more.
//                         </p>
//                         <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
//                             Stay tuned for exciting news and insights straight to your inbox!
//                         </p>
//                         <a href="https://theprocurementplug.com" style="display: inline-block; padding: 12px 24px; background-color: #85009D; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;">
//                             Visit Our Website
//                         </a>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td style="padding: 20px; text-align: center; background-color: #f4f4f4; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
//                         <p style="font-size: 14px; color: #999999; margin: 0;">
//                             © ${new Date().getFullYear()} The Procurement Plug. All rights reserved.
//                         </p>
//                         <p style="font-size: 14px; color: # kwaliteit: 14px; color: #999999; margin: 5px 0 0;">
//                             <a href="https://theprocurementplug.com" style="color: #85009D; text-decoration: none;">Unsubscribe</a>
//                         </p>
//                     </td>
//                 </tr>
//             </table>
//         </body>
//         </html>
//     `;

//     // Email options
//     const mailOptions = {
//         from: `"The Procurement Plug" <${process.env.EMAIL_USER}>`,
//         to: email,
//         subject: "Welcome to The Procurement Plug Newsletter!",
//         html: emailTemplate,
//     };

//     // Send email
//     try {
//         await transporter.sendMail(mailOptions);
//         return NextResponse.json({ message: "Subscription email sent successfully" });
//     } catch (error) {
//         console.error("Email error:", error);
//         return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
//     }
// }
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import mysql from "mysql2/promise";

export async function POST(req) {
    const { email } = await req.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Initialize MySQL connection
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
            // Email already exists
            return NextResponse.json({ error: "You are already subscribed" }, { status: 400 });
        }

        // Insert email into subscribers table
        await connection.execute(
            "INSERT INTO subscribers (email, subscribed_at) VALUES (?, NOW())",
            [email]
        );
    } catch (error) {
        console.error("Database error:", error);
        if (error.code === "ER_DUP_ENTRY") {
            return NextResponse.json({ error: "You are already subscribed" }, { status: 400 });
        }
        return NextResponse.json({ error: "Failed to save email to database" }, { status: 500 });
    } finally {
        if (connection) await connection.end();
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: "gmail", // Or your email service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // HTML email template
    const emailTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to The Procurement Plug!</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <tr>
                    <td style="padding: 20px; text-align: center; background-color: #212121; border-top-left-radius: 8px; border-top-right-radius: 8px;">
                        <img src="https://yourdomain.com/images/footer/Horizontal-V1-copy.png" alt="The Procurement Plug Logo" style="max-width: 260px; height: auto;" />
                    </td>
                </tr>
                <tr>
                    <td style="padding: 30px; text-align: center;">
                        <h1 style="font-size: 24px; color: #333333; margin: 0 0 20px;">Thank You for Subscribing!</h1>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            Welcome to <strong>The Procurement Plug</strong>! You're now part of our community and will receive the latest updates on features, releases, and more.
                        </p>
                        <p style="font-size: 16px; color: #666666; line-height: 1.5; margin: 0 0 20px;">
                            Stay tuned for exciting news and insights straight to your inbox!
                        </p>
                        <a href="https://theprocurementplug.com" style="display: inline-block; padding: 12px 24px; background-color: #85009D; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px;">
                            Visit Our Website
                        </a>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 20px; text-align: center; background-color: #f4f4f4; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                        <p style="font-size: 14px; color: #999999; margin: 0;">
                            © ${new Date().getFullYear()} The Procurement Plug. All rights reserved.
                        </p>
                        <p style="font-size: 14px; color: #999999; margin: 5px 0 0;">
                            <a href="https://theprocurementplug.com" style="color: #85009D; text-decoration: none;">Unsubscribe</a>
                        </p>
                    </td>
                </tr>
            </table>
        </body>
        </html>
    `;

    // Email options
    const mailOptions = {
        from: `"The Procurement Plug" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Welcome to The Procurement Plug Newsletter!",
        html: emailTemplate,
    };

    // Send email
    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Subscription email sent successfully" });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}