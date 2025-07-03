# Email Spam Prevention Guide

## Current Implementation Status

✅ **Implemented:**
- Newsletter subscription using `/api/send-email` endpoint
- Professional email templates with proper HTML structure
- Spam prevention headers (List-Unsubscribe, X-Auto-Response-Suppress, etc.)
- Rate limiting and connection pooling
- Proper email validation

## Why Emails Go to Spam

### 1. **Technical Issues**
- Missing or incorrect SPF/DKIM records
- Poor sender reputation
- High bounce rates
- Suspicious email content patterns

### 2. **Content Issues**
- Spam trigger words
- Poor HTML to text ratio
- Missing unsubscribe links
- Suspicious links or attachments

### 3. **Infrastructure Issues**
- Shared IP addresses with poor reputation
- Missing reverse DNS (PTR) records
- Incorrect email headers

## Immediate Actions to Reduce Spam

### 1. **Domain Authentication (CRITICAL)**

Add these DNS records to your domain:

```dns
# SPF Record (add to your domain's DNS)
TXT @ "v=spf1 include:hostinger.com ~all"

# DKIM Record (if available from Hostinger)
TXT default._domainkey "v=DKIM1; k=rsa; p=YOUR_PUBLIC_KEY"

# DMARC Record
TXT _dmarc "v=DMARC1; p=quarantine; rua=mailto:dmarc@theprocurementplug.com"
```

### 2. **Email Configuration Updates**

Update your SMTP configuration in `src/app/api/send-email/route.js`:

```javascript
const transporter = nodemailer.createTransporter({
  host: 'smtp.hostinger.com',
  port: 587,
  secure: false,
  auth: {
    user: 'sardarjalil102@nexaforgetech.com',
    pass: 'abcd1234A@#',
  },
  // Enhanced spam prevention
  tls: {
    rejectUnauthorized: false,
    ciphers: 'SSLv3'
  },
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  rateLimit: 14,
  connectionTimeout: 60000,
  greetingTimeout: 30000,
  socketTimeout: 60000
});
```

### 3. **Email Headers Best Practices**

```javascript
headers: {
  'List-Unsubscribe': '<mailto:unsubscribe@theprocurementplug.com>',
  'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
  'Precedence': 'bulk',
  'X-Auto-Response-Suppress': 'OOF, AutoReply',
  'X-Mailer': 'The Procurement Plug Newsletter System',
  'X-Priority': '3',
  'X-MSMail-Priority': 'Normal',
  'Importance': 'Normal',
  'X-Report-Abuse': 'Please report abuse here: abuse@theprocurementplug.com',
  'X-Campaign': 'newsletter-welcome',
  'X-Subscription-Type': 'newsletter'
}
```

## Content Best Practices

### 1. **Subject Line**
- Avoid spam trigger words: "Free", "Act Now", "Limited Time", "Click Here"
- Use clear, descriptive subjects
- Keep under 50 characters

### 2. **Email Body**
- Maintain 60/40 text-to-HTML ratio
- Include physical address
- Use proper HTML structure
- Avoid excessive use of images
- Include clear unsubscribe link

### 3. **Sender Information**
- Use consistent "From" address
- Include company name in sender
- Use professional email addresses

## Monitoring and Testing

### 1. **Email Testing Tools**
- [Mail Tester](https://www.mail-tester.com/)
- [GlockApps](https://glockapps.com/)
- [250ok](https://250ok.com/)

### 2. **Spam Score Checkers**
- [SpamAssassin](https://spamassassin.apache.org/)
- [Barracuda Central](https://www.barracuda.com/products/central)

## Additional Recommendations

### 1. **Use a Dedicated IP**
- Request dedicated IP from Hostinger
- Warm up the IP gradually
- Monitor reputation regularly

### 2. **Implement Double Opt-in**
```javascript
// Add to your subscription flow
const verificationToken = crypto.randomBytes(32).toString('hex');
// Send verification email first
// Only subscribe after verification
```

### 3. **Monitor Bounce Rates**
- Remove hard bounces immediately
- Monitor soft bounces
- Keep bounce rate under 5%

### 4. **Engagement Tracking**
- Track open rates
- Monitor click-through rates
- Remove inactive subscribers

## Emergency Actions if Still Going to Spam

### 1. **Immediate Steps**
1. Check sender reputation on [SenderScore](https://senderscore.org/)
2. Verify DNS records are correct
3. Test with [Mail Tester](https://www.mail-tester.com/)
4. Contact Hostinger support about IP reputation

### 2. **Alternative Solutions**
- Switch to a dedicated email service (SendGrid, Mailgun, etc.)
- Use transactional email services
- Implement email authentication properly

## Code Implementation Status

The current implementation includes:
- ✅ Professional email templates
- ✅ Spam prevention headers
- ✅ Rate limiting
- ✅ Proper error handling
- ✅ Email validation

**Next Steps:**
1. Configure DNS records (SPF, DKIM, DMARC)
2. Test with email testing tools
3. Monitor delivery rates
4. Implement double opt-in if needed

## Contact Information

For technical support:
- Email: support@theprocurementplug.com
- Abuse reports: abuse@theprocurementplug.com
- Unsubscribe: unsubscribe@theprocurementplug.com 