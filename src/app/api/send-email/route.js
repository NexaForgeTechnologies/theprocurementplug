import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { userEmail, name, message, type, jobTitle, company, phoneNumber, linkedInUrl, consent, eventName, eventLocation, eventDate } = await request.json();

    // Validate email
    if (!userEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), { status: 400 });
    }

    // Create transporter with basic configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: 'sardarjalil102@nexaforgetech.com',
        pass: 'abcd1234A@#',
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email templates based on type
    let htmlContent, subject, toEmail;

    if (type === 'newsletter_subscription') {
      // Newsletter subscription template
      subject = 'Welcome to The Procurement Plug Newsletter!';
      toEmail = userEmail;
      
      htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to The Procurement Plug Newsletter</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
    body {
      font-family: 'Poppins', Arial, sans-serif;
      background: linear-gradient(135deg, #FFFBF5 0%, #f8f6f0 100%);
      padding: 0;
      margin: 0;
      line-height: 1.6;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(133, 0, 157, 0.1);
      overflow: hidden;
      border: 1px solid rgba(176, 141, 87, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #85009D 0%, #6a007a 100%);
      padding: 40px 30px;
      text-align: center;
      position: relative;
    }
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="40" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
      opacity: 0.3;
    }
    .logo {
      max-width: 280px;
      height: auto;
      position: relative;
      z-index: 1;
      filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
    }
    .content {
      padding: 50px 40px;
      text-align: center;
      background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
    }
    .welcome-badge {
      display: inline-block;
      background: linear-gradient(135deg, #b08d57 0%, #d09b48 100%);
      color: white;
      padding: 12px 28px;
      border-radius: 30px;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 30px;
      box-shadow: 0 8px 25px rgba(176, 141, 87, 0.4);
      position: relative;
      overflow: hidden;
    }
    .welcome-badge::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.8s ease;
    }
    .welcome-badge:hover::before {
      left: 100%;
    }
    h1 {
      color: #1B1B1B;
      margin: 0 0 25px;
      font-size: 32px;
      font-weight: 700;
      background: linear-gradient(135deg, #85009D 0%, #b08d57 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .subtitle {
      font-size: 18px;
      color: #666666;
      margin: 0 0 30px;
      font-weight: 400;
    }
    .features-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 25px;
      max-width: 500px;
      margin: 50px auto;
      text-align: left;
    }
    .feature-item {
      display: flex;
      align-items: center;
      padding: 25px 30px;
      background: linear-gradient(135deg, #FFFBF5 0%, #f8f6f0 100%);
      border-radius: 20px;
      border: 2px solid rgba(176, 141, 87, 0.15);
      transition: all 0.4s ease;
      box-shadow: 0 6px 20px rgba(133, 0, 157, 0.08);
      position: relative;
      overflow: hidden;
      margin-bottom: 20px;
    }
    .feature-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(133, 0, 157, 0.05), transparent);
      transition: left 0.6s ease;
    }
    .feature-item:hover::before {
      left: 100%;
    }
    .feature-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 35px rgba(133, 0, 157, 0.15);
      border-color: #b08d57;
    }
    .feature-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #85009D 0%, #b08d57 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 25px;
      font-size: 24px;
      color: white;
      flex-shrink: 0;
      box-shadow: 0 6px 20px rgba(133, 0, 157, 0.25);
      position: relative;
      z-index: 1;
    }
    .feature-icon::after {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(135deg, #85009D 0%, #b08d57 100%);
      border-radius: 50%;
      z-index: -1;
      opacity: 0.3;
    }
    .feature-text {
      font-size: 17px;
      color: #1B1B1B;
      font-weight: 600;
      line-height: 1.5;
      flex: 1;
    }
    .cta-section {
      margin: 60px 0;
      padding: 40px;
      background: linear-gradient(135deg, #FFFBF5 0%, #f8f6f0 100%);
      border-radius: 24px;
      border: 3px solid rgba(176, 141, 87, 0.2);
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .cta-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #85009D 0%, #b08d57 0%, #d09b48 100%);
    }
    .cta-button {
      display: inline-block;
      padding: 20px 40px;
      background: linear-gradient(135deg, #85009D 0%, #6a007a 100%);
      color: #ffffff;
      text-decoration: none;
      border-radius: 16px;
      font-size: 17px;
      font-weight: 700;
      margin: 25px 0;
      box-shadow: 0 8px 30px rgba(133, 0, 157, 0.4);
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;
      letter-spacing: 0.5px;
    }
    .cta-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
      transition: left 0.6s ease;
    }
    .cta-button:hover::before {
      left: 100%;
    }
    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 40px rgba(133, 0, 157, 0.5);
    }
    .footer {
      background: linear-gradient(135deg, #1B1B1B 0%, #2a2a2a 100%);
      padding: 30px;
      text-align: center;
      position: relative;
    }
    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #85009D 0%, #b08d57 0%, #d09b48 100%);
    }
    .footer p {
      font-size: 14px;
      color: #cccccc;
      margin: 8px 0;
    }
    .unsubscribe {
      color: #b08d57;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }
    .unsubscribe:hover {
      color: #d09b48;
    }
    .footer-note {
      font-size: 12px;
      color: #999999;
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    @media (max-width: 600px) {
      .container {
        margin: 20px;
        border-radius: 12px;
      }
      .content {
        padding: 30px 20px;
      }
      h1 {
        font-size: 28px;
      }
      .features-grid {
        margin: 20px auto;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://theprocurementplug.com/images/footer/Horizontal-V1-copy.png" alt="The Procurement Plug Logo" class="logo">
    </div>
    
    <div class="content">
      <div class="welcome-badge">🎉 Welcome to the Community!</div>
      
      <h1>Welcome to The Procurement Plug</h1>
      <p class="subtitle">You're now part of our exclusive community of procurement professionals</p>
      
      <p style="font-size: 16px; color: #666666; margin: 0 0 30px;">
        Thank you for subscribing! You'll receive the latest insights, opportunities, and updates delivered straight to your inbox.
      </p>
      
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">📈</div>
          <div class="feature-text">Industry insights and market trends</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🎯</div>
          <div class="feature-text">Career development and growth tips</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">📅</div>
          <div class="feature-text">Exclusive events and webinars</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">💼</div>
          <div class="feature-text">Procurement opportunities</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🔔</div>
          <div class="feature-text">Platform updates and new features</div>
        </div>
      </div>
      
      <div class="cta-section">
        <p style="font-size: 16px; color: #1B1B1B; margin: 0 0 20px; font-weight: 500;">
          Ready to explore more? Visit our platform to discover exclusive content and opportunities.
        </p>
        <a href="https://theprocurementplug.com" class="cta-button">
          Explore Our Platform →
        </a>
      </div>
      
      <p style="font-size: 14px; color: #888; margin-top: 30px;">
        Have questions? We'd love to hear from you! Simply reply to this email.
      </p>
    </div>
    
    <div class="footer">
      <p style="color: #ffffff; font-weight: 600; margin-bottom: 15px;">© ${new Date().getFullYear()} The Procurement Plug</p>
      <p style="color: #cccccc;">All rights reserved. Empowering procurement professionals worldwide.</p>
      <p style="margin-top: 20px;">
        <a href="mailto:unsubscribe@theprocurementplug.com?subject=Unsubscribe" class="unsubscribe">
          Unsubscribe from this newsletter
        </a>
      </p>
      <div class="footer-note">
        This email was sent to ${userEmail} because you subscribed to our newsletter.<br>
        The Procurement Plug | Building the future of procurement together.
      </div>
    </div>
  </div>
</body>
</html>
      `;

      // Send welcome email to subscriber
      await transporter.sendMail({
        from: '"The Procurement Plug" <sardarjalil102@nexaforgetech.com>',
        to: userEmail,
        subject: subject,
        html: htmlContent,
        headers: {
          'List-Unsubscribe': '<mailto:unsubscribe@theprocurementplug.com>',
          'X-Mailer': 'The Procurement Plug Newsletter System'
        }
      });

      // Send admin notification
      const adminHtmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Newsletter Subscription</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
    body {
      font-family: 'Poppins', Arial, sans-serif;
      background: linear-gradient(135deg, #FFFBF5 0%, #f8f6f0 100%);
      padding: 0;
      margin: 0;
      line-height: 1.6;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(133, 0, 157, 0.1);
      overflow: hidden;
      border: 1px solid rgba(176, 141, 87, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #85009D 0%, #6a007a 100%);
      padding: 30px;
      text-align: center;
      position: relative;
    }
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="40" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
      opacity: 0.3;
    }
    .logo {
      max-width: 200px;
      height: auto;
      position: relative;
      z-index: 1;
      filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
    }
    .content {
      padding: 40px 30px;
      text-align: center;
      background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
    }
    .notification-badge {
      display: inline-block;
      background: linear-gradient(135deg, #b08d57 0%, #d09b48 100%);
      color: white;
      padding: 8px 20px;
      border-radius: 25px;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 20px;
      box-shadow: 0 4px 12px rgba(176, 141, 87, 0.3);
    }
    h2 {
      color: #1B1B1B;
      margin: 0 0 25px;
      font-size: 28px;
      font-weight: 700;
      background: linear-gradient(135deg, #85009D 0%, #b08d57 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 25px;
      max-width: 500px;
      margin: 50px auto;
      text-align: left;
    }
    .info-item {
      display: flex;
      align-items: center;
      padding: 25px 30px;
      background: linear-gradient(135deg, #FFFBF5 0%, #f8f6f0 100%);
      border-radius: 20px;
      border: 2px solid rgba(176, 141, 87, 0.15);
      box-shadow: 0 6px 20px rgba(133, 0, 157, 0.08);
      position: relative;
      overflow: hidden;
    }
    .info-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(133, 0, 157, 0.05), transparent);
      transition: left 0.6s ease;
    }
    .info-item:hover::before {
      left: 100%;
    }
    .info-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #85009D 0%, #b08d57 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 25px;
      font-size: 24px;
      color: white;
      flex-shrink: 0;
      box-shadow: 0 6px 20px rgba(133, 0, 157, 0.25);
      position: relative;
      z-index: 1;
    }
    .info-icon::after {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(135deg, #85009D 0%, #b08d57 100%);
      border-radius: 50%;
      z-index: -1;
      opacity: 0.3;
    }
    .info-text {
      font-size: 17px;
      color: #1B1B1B;
      font-weight: 600;
      line-height: 1.5;
      flex: 1;
    }
    .info-label {
      font-weight: 700;
      color: #85009D;
      margin-right: 12px;
    }
    .cta-section {
      margin: 40px 0;
      padding: 30px;
      background: linear-gradient(135deg, #FFFBF5 0%, #f8f6f0 100%);
      border-radius: 16px;
      border: 2px solid rgba(176, 141, 87, 0.2);
      text-align: center;
    }
    .footer {
      background: linear-gradient(135deg, #1B1B1B 0%, #2a2a2a 100%);
      padding: 25px;
      text-align: center;
      position: relative;
    }
    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #85009D 0%, #b08d57 0%, #d09b48 100%);
    }
    .footer p {
      font-size: 14px;
      color: #cccccc;
      margin: 8px 0;
    }
    .footer-note {
      font-size: 12px;
      color: #999999;
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://theprocurementplug.com/images/footer/Horizontal-V1-copy.png" alt="The Procurement Plug Logo" class="logo">
    </div>
    
    <div class="content">
      <div class="notification-badge">📧 New Subscription Alert</div>
      
      <h2>New Newsletter Subscription</h2>
      <p style="font-size: 16px; color: #666666; margin: 0 0 30px;">
        A new user has joined The Procurement Plug newsletter community!
      </p>
      
      <div class="info-grid">
        <div class="info-item">
          <div class="info-icon">📧</div>
          <div class="info-text">
            <span class="info-label">Email:</span> ${userEmail}
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">⏰</div>
          <div class="info-text">
            <span class="info-label">Subscribed:</span> ${new Date().toLocaleString()}
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">🎯</div>
          <div class="info-text">
            <span class="info-label">Type:</span> Newsletter Subscription
          </div>
        </div>
      </div>
      
      <div class="cta-section">
        <p style="font-size: 16px; color: #1B1B1B; margin: 0; font-weight: 500;">
          This subscriber will now receive our newsletter updates and exclusive content.
        </p>
      </div>
    </div>
    
    <div class="footer">
      <p style="color: #ffffff; font-weight: 600; margin-bottom: 15px;">© ${new Date().getFullYear()} The Procurement Plug</p>
      <p style="color: #cccccc;">Admin Notification System</p>
      <div class="footer-note">
        This is an automated notification from your website subscription system.<br>
        The Procurement Plug | Building the future of procurement together.
      </div>
    </div>
  </div>
</body>
</html>
      `;

      await transporter.sendMail({
        from: '"The Procurement Plug" <sardarjalil102@nexaforgetech.com>',
        to: 'abubakar.suhail13@gmail.com',
        subject: 'New Newsletter Subscription',
        html: adminHtmlContent
      });

      return new Response(JSON.stringify({
        success: true,
        message: 'Newsletter subscription successful! Welcome email sent.',
        data: { email: userEmail }
      }), { status: 200 });

    } else if (type === 'event_registration') {
      // Event registration template
      subject = 'Thank You for Registering for Elevate 2025!';
      toEmail = userEmail;
      
      htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Elevate 2025!</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
    body {
      font-family: 'Poppins', Arial, sans-serif;
      background: linear-gradient(135deg, #FFFBF5 0%, #f8f6f0 100%);
      padding: 0;
      margin: 0;
      line-height: 1.6;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(133, 0, 157, 0.1);
      overflow: hidden;
      border: 1px solid rgba(176, 141, 87, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #85009D 0%, #6a007a 100%);
      padding: 40px 30px;
      text-align: center;
      position: relative;
    }
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="40" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
      opacity: 0.3;
    }
    .logo {
      max-width: 280px;
      height: auto;
      position: relative;
      z-index: 1;
      filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
    }
    .content {
      padding: 50px 40px;
      text-align: center;
      background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
    }
    .welcome-badge {
      display: inline-block;
      background: linear-gradient(135deg, #b08d57 0%, #d09b48 100%);
      color: white;
      padding: 12px 28px;
      border-radius: 30px;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 30px;
      box-shadow: 0 8px 25px rgba(176, 141, 87, 0.4);
      position: relative;
      overflow: hidden;
    }
    .welcome-badge::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.8s ease;
    }
    .welcome-badge:hover::before {
      left: 100%;
    }
    h1 {
      color: #1B1B1B;
      margin: 0 0 25px;
      font-size: 32px;
      font-weight: 700;
      background: linear-gradient(135deg, #85009D 0%, #b08d57 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .subtitle {
      font-size: 18px;
      color: #666666;
      margin: 0 0 30px;
      font-weight: 400;
    }
    .event-details {
      background: linear-gradient(135deg, #FFFBF5 0%, #f8f6f0 100%);
      border-radius: 20px;
      border: 2px solid rgba(176, 141, 87, 0.15);
      padding: 30px;
      margin: 30px 0;
      text-align: left;
    }
    .event-detail-item {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      padding: 15px 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(133, 0, 157, 0.08);
    }
    .event-detail-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #85009D 0%, #b08d57 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      font-size: 18px;
      color: white;
      flex-shrink: 0;
    }
    .event-detail-text {
      font-size: 16px;
      color: #1B1B1B;
      font-weight: 600;
    }
    .event-detail-label {
      font-weight: 700;
      color: #85009D;
      margin-right: 8px;
    }
    .cta-section {
      margin: 40px 0;
      padding: 30px;
      background: linear-gradient(135deg, #FFFBF5 0%, #f8f6f0 100%);
      border-radius: 16px;
      border: 2px solid rgba(176, 141, 87, 0.2);
      text-align: center;
    }
    .cta-button {
      display: inline-block;
      padding: 16px 32px;
      background: linear-gradient(135deg, #85009D 0%, #6a007a 100%);
      color: #ffffff;
      text-decoration: none;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 700;
      margin: 20px 0;
      box-shadow: 0 6px 20px rgba(133, 0, 157, 0.3);
      transition: all 0.3s ease;
    }
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(133, 0, 157, 0.4);
    }
    .footer {
      background: linear-gradient(135deg, #1B1B1B 0%, #2a2a2a 100%);
      padding: 30px;
      text-align: center;
      position: relative;
    }
    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #85009D 0%, #b08d57 0%, #d09b48 100%);
    }
    .footer p {
      font-size: 14px;
      color: #cccccc;
      margin: 8px 0;
    }
    .unsubscribe {
      color: #b08d57;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }
    .unsubscribe:hover {
      color: #d09b48;
    }
    .footer-note {
      font-size: 12px;
      color: #999999;
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    @media (max-width: 600px) {
      .container {
        margin: 20px;
        border-radius: 12px;
      }
      .content {
        padding: 30px 20px;
      }
      h1 {
        font-size: 28px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://theprocurementplug.com/images/footer/Horizontal-V1-copy.png" alt="The Procurement Plug Logo" class="logo">
    </div>
    
    <div class="content">
      <div class="welcome-badge">🎉 Registration Confirmed!</div>
      
      <h1>Thank You for Registering!</h1>
      <p class="subtitle">Dear ${name}, you're now registered for our exclusive event</p>
      
      <p style="font-size: 16px; color: #666666; margin: 0 0 30px;">
        Thank you for registering your interest in <strong>${eventName}</strong>! You're now part of our community and will receive updates about the event and more.
      </p>
      
      <div class="event-details">
        <h3 style="color: #85009D; margin: 0 0 20px; font-size: 20px;">Event Details:</h3>
        <div class="event-detail-item">
          <div class="event-detail-icon">📅</div>
          <div class="event-detail-text">
            <span class="event-detail-label">Event:</span> ${eventName}
          </div>
        </div>
        <div class="event-detail-item">
          <div class="event-detail-icon">📍</div>
          <div class="event-detail-text">
            <span class="event-detail-label">Location:</span> ${eventLocation}
          </div>
        </div>
        <div class="event-detail-item">
          <div class="event-detail-icon">⏰</div>
          <div class="event-detail-text">
            <span class="event-detail-label">Date:</span> ${eventDate}
          </div>
        </div>
      </div>
      
      <div class="cta-section">
        <p style="font-size: 16px; color: #1B1B1B; margin: 0 0 20px; font-weight: 500;">
          Stay tuned for exciting news and insights straight to your inbox!
        </p>
        <a href="https://theprocurementplug.com" class="cta-button">
          Visit Our Website →
        </a>
      </div>
      
      <p style="font-size: 14px; color: #888; margin-top: 30px;">
        Have questions? We'd love to hear from you! Simply reply to this email.
      </p>
    </div>
    
    <div class="footer">
      <p style="color: #ffffff; font-weight: 600; margin-bottom: 15px;">© ${new Date().getFullYear()} The Procurement Plug</p>
      <p style="color: #cccccc;">All rights reserved. Empowering procurement professionals worldwide.</p>
      <p style="margin-top: 20px;">
        <a href="mailto:unsubscribe@theprocurementplug.com?subject=Unsubscribe" class="unsubscribe">
          Unsubscribe from event updates
        </a>
      </p>
      <div class="footer-note">
        This email was sent to ${userEmail} because you registered for our event.<br>
        The Procurement Plug | Building the future of procurement together.
      </div>
    </div>
  </div>
</body>
</html>
      `;

      // Send confirmation email to registrant
      await transporter.sendMail({
        from: '"The Procurement Plug" <sardarjalil102@nexaforgetech.com>',
        to: userEmail,
        subject: subject,
        html: htmlContent,
        headers: {
          'X-Mailer': 'The Procurement Plug Event Registration System'
        }
      });

      // Send admin notification
      const adminHtmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Event Registration</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
    body {
      font-family: 'Poppins', Arial, sans-serif;
      background: linear-gradient(135deg, #FFFBF5 0%, #f8f6f0 100%);
      padding: 0;
      margin: 0;
      line-height: 1.6;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(133, 0, 157, 0.1);
      overflow: hidden;
      border: 1px solid rgba(176, 141, 87, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #85009D 0%, #6a007a 100%);
      padding: 30px;
      text-align: center;
      position: relative;
    }
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="40" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
      opacity: 0.3;
    }
    .logo {
      max-width: 200px;
      height: auto;
      position: relative;
      z-index: 1;
      filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
    }
    .content {
      padding: 40px 30px;
      text-align: center;
      background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
    }
    .notification-badge {
      display: inline-block;
      background: linear-gradient(135deg, #b08d57 0%, #d09b48 100%);
      color: white;
      padding: 8px 20px;
      border-radius: 25px;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 20px;
      box-shadow: 0 4px 12px rgba(176, 141, 87, 0.3);
    }
    h2 {
      color: #1B1B1B;
      margin: 0 0 25px;
      font-size: 28px;
      font-weight: 700;
      background: linear-gradient(135deg, #85009D 0%, #b08d57 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 25px;
      max-width: 500px;
      margin: 50px auto;
      text-align: left;
    }
    .info-item {
      display: flex;
      align-items: center;
      padding: 25px 30px;
      background: linear-gradient(135deg, #FFFBF5 0%, #f8f6f0 100%);
      border-radius: 20px;
      border: 2px solid rgba(176, 141, 87, 0.15);
      box-shadow: 0 6px 20px rgba(133, 0, 157, 0.08);
      position: relative;
      overflow: hidden;
    }
    .info-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(133, 0, 157, 0.05), transparent);
      transition: left 0.6s ease;
    }
    .info-item:hover::before {
      left: 100%;
    }
    .info-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #85009D 0%, #b08d57 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 25px;
      font-size: 24px;
      color: white;
      flex-shrink: 0;
      box-shadow: 0 6px 20px rgba(133, 0, 157, 0.25);
      position: relative;
      z-index: 1;
    }
    .info-icon::after {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(135deg, #85009D 0%, #b08d57 100%);
      border-radius: 50%;
      z-index: -1;
      opacity: 0.3;
    }
    .info-text {
      font-size: 17px;
      color: #1B1B1B;
      font-weight: 600;
      line-height: 1.5;
      flex: 1;
    }
    .info-label {
      font-weight: 700;
      color: #85009D;
      margin-right: 12px;
    }
    .cta-section {
      margin: 40px 0;
      padding: 30px;
      background: linear-gradient(135deg, #FFFBF5 0%, #f8f6f0 100%);
      border-radius: 16px;
      border: 2px solid rgba(176, 141, 87, 0.2);
      text-align: center;
    }
    .footer {
      background: linear-gradient(135deg, #1B1B1B 0%, #2a2a2a 100%);
      padding: 25px;
      text-align: center;
      position: relative;
    }
    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #85009D 0%, #b08d57 0%, #d09b48 100%);
    }
    .footer p {
      font-size: 14px;
      color: #cccccc;
      margin: 8px 0;
    }
    .footer-note {
      font-size: 12px;
      color: #999999;
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://theprocurementplug.com/images/footer/Horizontal-V1-copy.png" alt="The Procurement Plug Logo" class="logo">
    </div>
    
    <div class="content">
      <div class="notification-badge">🎫 New Event Registration</div>
      
      <h2>New Event Registration</h2>
      <p style="font-size: 16px; color: #666666; margin: 0 0 30px;">
        A new user has registered for <strong>${eventName}</strong>.
      </p>
      
      <div class="info-grid">
        <div class="info-item">
          <div class="info-icon">👤</div>
          <div class="info-text">
            <span class="info-label">Name:</span> ${name}
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">📧</div>
          <div class="info-text">
            <span class="info-label">Email:</span> ${userEmail}
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">💼</div>
          <div class="info-text">
            <span class="info-label">Job Title:</span> ${jobTitle || 'Not provided'}
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">🏢</div>
          <div class="info-text">
            <span class="info-label">Company:</span> ${company || 'Not provided'}
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">📱</div>
          <div class="info-text">
            <span class="info-label">Phone:</span> ${phoneNumber || 'Not provided'}
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">🔗</div>
          <div class="info-text">
            <span class="info-label">LinkedIn:</span> ${linkedInUrl || 'Not provided'}
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">✅</div>
          <div class="info-text">
            <span class="info-label">Consent:</span> ${consent ? 'Yes' : 'No'}
          </div>
        </div>
        <div class="info-item">
          <div class="info-icon">⏰</div>
          <div class="info-text">
            <span class="info-label">Registered:</span> ${new Date().toLocaleString()}
          </div>
        </div>
      </div>
      
      <div class="cta-section">
        <p style="font-size: 16px; color: #1B1B1B; margin: 0; font-weight: 500;">
          This registrant will receive event updates and confirmation emails.
        </p>
      </div>
    </div>
    
    <div class="footer">
      <p style="color: #ffffff; font-weight: 600; margin-bottom: 15px;">© ${new Date().getFullYear()} The Procurement Plug</p>
      <p style="color: #cccccc;">Event Registration Notification System</p>
      <div class="footer-note">
        This is an automated notification from your event registration system.<br>
        The Procurement Plug | Building the future of procurement together.
      </div>
    </div>
  </div>
</body>
</html>
      `;

      await transporter.sendMail({
        from: '"The Procurement Plug" <sardarjalil102@nexaforgetech.com>',
        to: 'abubakar.suhail13@gmail.com',
        subject: 'New Event Registration for ' + eventName,
        html: adminHtmlContent
      });

      return new Response(JSON.stringify({
        success: true,
        message: 'Event registration successful! Confirmation email sent.',
        data: { name, userEmail, eventName }
      }), { status: 200 });

    } else {
          // Original contact form template
    subject = 'New Message Received';
    toEmail = 'abubakar.suhail13@gmail.com';
    
    htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Message Received</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
    body {
      font-family: 'Poppins', Arial, sans-serif;
      background: linear-gradient(135deg, #FFFBF5 0%, #f8f6f0 100%);
      padding: 0;
      margin: 0;
      line-height: 1.6;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(133, 0, 157, 0.1);
      overflow: hidden;
      border: 1px solid rgba(176, 141, 87, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #85009D 0%, #6a007a 100%);
      padding: 30px;
      text-align: center;
      position: relative;
    }
    .header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="60" r="0.5" fill="rgba(255,255,255,0.1)"/><circle cx="90" cy="40" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
      opacity: 0.3;
    }
    .logo {
      max-width: 200px;
      height: auto;
      position: relative;
      z-index: 1;
      filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
    }
    .content {
      padding: 40px 30px;
      text-align: center;
      background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
    }
    .notification-badge {
      display: inline-block;
      background: linear-gradient(135deg, #b08d57 0%, #d09b48 100%);
      color: white;
      padding: 8px 20px;
      border-radius: 25px;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 20px;
      box-shadow: 0 4px 12px rgba(176, 141, 87, 0.3);
    }
    h2 {
      color: #1B1B1B;
      margin: 0 0 25px;
      font-size: 28px;
      font-weight: 700;
      background: linear-gradient(135deg, #85009D 0%, #b08d57 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .message-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 25px;
      max-width: 500px;
      margin: 50px auto;
      text-align: left;
    }
    .message-item {
      display: flex;
      align-items: center;
      padding: 25px 30px;
      background: linear-gradient(135deg, #FFFBF5 0%, #f8f6f0 100%);
      border-radius: 20px;
      border: 2px solid rgba(176, 141, 87, 0.15);
      box-shadow: 0 6px 20px rgba(133, 0, 157, 0.08);
      position: relative;
      overflow: hidden;
    }
    .message-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(133, 0, 157, 0.05), transparent);
      transition: left 0.6s ease;
    }
    .message-item:hover::before {
      left: 100%;
    }
    .message-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #85009D 0%, #b08d57 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 25px;
      font-size: 24px;
      color: white;
      flex-shrink: 0;
      box-shadow: 0 6px 20px rgba(133, 0, 157, 0.25);
      position: relative;
      z-index: 1;
    }
    .message-icon::after {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(135deg, #85009D 0%, #b08d57 100%);
      border-radius: 50%;
      z-index: -1;
      opacity: 0.3;
    }
    .message-text {
      font-size: 17px;
      color: #1B1B1B;
      font-weight: 600;
      line-height: 1.5;
      flex: 1;
    }
    .message-label {
      font-weight: 700;
      color: #85009D;
      margin-right: 12px;
    }
    .message-content {
      margin: 30px 0;
      padding: 25px;
      background: linear-gradient(135deg, #FFFBF5 0%, #f8f6f0 100%);
      border-radius: 16px;
      border: 2px solid rgba(176, 141, 87, 0.2);
      text-align: left;
    }
    .message-content p {
      font-size: 16px;
      color: #1B1B1B;
      line-height: 1.6;
      margin: 0;
      white-space: pre-wrap;
    }
    .footer {
      background: linear-gradient(135deg, #1B1B1B 0%, #2a2a2a 100%);
      padding: 25px;
      text-align: center;
      position: relative;
    }
    .footer::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #85009D 0%, #b08d57 0%, #d09b48 100%);
    }
    .footer p {
      font-size: 14px;
      color: #cccccc;
      margin: 8px 0;
    }
    .footer-note {
      font-size: 12px;
      color: #999999;
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://theprocurementplug.com/images/footer/Horizontal-V1-copy.png" alt="The Procurement Plug Logo" class="logo">
    </div>
    
    <div class="content">
      <div class="notification-badge">📩 New Contact Message</div>
      
      <h2>New Message Received</h2>
      <p style="font-size: 16px; color: #666666; margin: 0 0 30px;">
        Someone has sent a message through your contact form.
      </p>
      
      <div class="message-grid">
        <div class="message-item">
          <div class="message-icon">👤</div>
          <div class="message-text">
            <span class="message-label">Name:</span> ${name || 'Not provided'}
          </div>
        </div>
        <div class="message-item">
          <div class="message-icon">📧</div>
          <div class="message-text">
            <span class="message-label">Email:</span> ${userEmail}
          </div>
        </div>
      </div>
      
      <div class="message-content">
        <p style="font-weight: 600; color: #85009D; margin-bottom: 15px; font-size: 18px;">Message:</p>
        <p>${message ? message.replace(/\n/g, '<br />') : 'No message provided'}</p>
      </div>
    </div>
    
    <div class="footer">
      <p style="color: #ffffff; font-weight: 600; margin-bottom: 15px;">© ${new Date().getFullYear()} The Procurement Plug</p>
      <p style="color: #cccccc;">Contact Form Notification System</p>
      <div class="footer-note">
        This message was sent from your website contact form.<br>
        The Procurement Plug | Building the future of procurement together.
      </div>
    </div>
  </div>
</body>
</html>
`;

      await transporter.sendMail({
        from: `"The Procurement Plug Contact Form" <sardarjalil102@nexaforgetech.com>`,
        to: toEmail,
        subject: subject,
        html: htmlContent
      });

      return new Response(JSON.stringify({
        success: true,
        message: 'Email sent successfully!',
        data: { name, userEmail, message }
      }), { status: 200 });
    }

  } catch (error) {
    console.error('❌ Email send failed:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email', 
        details: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      }),
      { status: 500 }
    );
  }
}
