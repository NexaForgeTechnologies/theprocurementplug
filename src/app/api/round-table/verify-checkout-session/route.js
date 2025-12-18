export const runtime = 'nodejs'; // important
export const dynamic = 'force-dynamic';

import { update, get } from '@/lib/shared/database/db-query';
import { emailParser, varifyStripeSession } from '@/lib/shared/helper';
import { sendEmail } from '@/lib/shared/email/email';

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { id: sessionId } = body;

    // Basic validation
    if (!sessionId) {
      return jsonResponse({ error: 'Missing required fields' }, 400);
    }

    // Get record from DB
    const { data: records } = await get("round_table", { eq: { session_id: sessionId, status: "pending" } });
    if (!Array.isArray(records) || records.length === 0) {
      return jsonResponse({ error: 'Unauthorized or invalid token' }, 401);
    }

    // Get session from Stripe
    const session = await varifyStripeSession(sessionId);
    if (!session || Object.keys(session).length === 0) {
      return jsonResponse({ error: 'Invalid session ID or Session Expired' }, 404);
    }

    // Check if payment is complete
    if (session.status !== "complete") {
      return jsonResponse({ error: 'Payment is not processed yet' }, 400);
    }

    // Amount in currency
    const payment = session.amount_subtotal / 100;

    // Use payment_status to determine success
    const newStatus =
      session.payment_status === 'paid'
        ? 'payment done, but pending from admin'
        : 'payment failed';

    // Update DB
    await update(
      "round_table",
      { payment, status: newStatus },
      { session_id: sessionId }
    );
    setImmediate(async () => {
      let userHtml = await emailParser("host-round-table-user.html", { name: records.name, year: new Date().getFullYear() });
      let adminHtml = await emailParser("host-round-table-admin.html", { ...records[0], year: new Date().getFullYear() })
      await Promise.all([
        sendEmail(records[0].email, "Thanks New Host Round a Table", userHtml),
        sendEmail(process.env.SMTP_REQUEST_USER, "Request New Host Round a Table", adminHtml)
      ]);

    })
    return jsonResponse({
      message: `Thank You! Your RoundTable submission is received
      We have charged ${payment} and your session is now pending review. We will email you within 24 hours when it is 
      approved and live in forum`,
      payment_status: "verified",
      stripe_status: session.status, // will show "complete"
      payment_status_stripe: session.payment_status, // will show "paid" or "unpaid"
      db_status: newStatus
    });

  } catch (error) {
    console.error('Error verifying session:', error);
    return jsonResponse(
      { error: 'Internal Server Error', details: error.message },
      500
    );
  }
}

export async function GET() {
  try {
    const record = await get("round_table", { eq: { status: "pending" } });
  } catch (e) {
    console.error('Error verifying session:', e);
    return jsonResponse(
      { error: 'Internal Server Error', details: e.message },
      500
    );
  }

}