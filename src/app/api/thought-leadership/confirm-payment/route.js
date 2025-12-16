// import { NextResponse } from "next/server";
// import Stripe from "stripe";
// import { db } from "@/lib/db";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(req) {
//     try {
//         const { sessionId } = await req.json();

//         const session = await stripe.checkout.sessions.retrieve(sessionId);

//         if (session.payment_status !== "paid") {
//             return NextResponse.json(
//                 { success: false, error: "Payment not completed" },
//                 { status: 400 }
//             );
//         }

//         // Update DB
//         await db.query(
//             `
//                 UPDATE viplounge_insight_posts
//                 SET payment = 'paid', updated_at = NOW()
//                 WHERE session_id = ?
//             `,
//             [sessionId]
//         );

//         return NextResponse.json({ success: true });
//     } catch (error) {
//         console.error("Payment confirmation error:", error);
//         return NextResponse.json(
//             { success: false, error: "Server error" },
//             { status: 500 }
//         );
//     }
// }


import { NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/lib/db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const { sessionId } = await req.json();

        if (!sessionId) {
            return NextResponse.json(
                { success: false, error: "Missing sessionId" },
                { status: 400 }
            );
        }

        // Check DB FIRST (idempotency)
        const [rows] = await db.query(
            `
        SELECT payment
        FROM viplounge_insight_posts
        WHERE session_id = ?
        LIMIT 1
      `,
            [sessionId]
        );

        if (!rows.length) {
            return NextResponse.json(
                { success: false, error: "Invalid session" },
                { status: 400 }
            );
        }

        // Already paid → stop here
        if (rows[0].payment === "paid") {
            return NextResponse.json({ success: true, alreadyPaid: true });
        }

        // 2️⃣ Verify with Stripe ONLY if not paid
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (session.payment_status !== "paid") {
            return NextResponse.json(
                { success: false, error: "Payment not completed" },
                { status: 400 }
            );
        }

        // Update DB ONCE
        await db.query(
            `
        UPDATE viplounge_insight_posts
        SET payment = 'paid', updated_at = NOW()
        WHERE session_id = ? AND payment != 'paid'
      `,
            [sessionId]
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Payment confirmation error:", error);
        return NextResponse.json(
            { success: false, error: "Server error" },
            { status: 500 }
        );
    }
}
