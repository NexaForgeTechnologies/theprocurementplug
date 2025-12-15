export const runtime = 'nodejs'; // important
export const dynamic = 'force-dynamic';

import { createSessionForInsightPost } from '@/lib/shared/helper';
import { insert } from '@/lib/shared/database/db-query';

import crypto from "crypto";

function generateToken() {
    return crypto.randomBytes(32).toString("hex");  // 64-char token
}

export async function POST(request) {
    try {
        const formData = await request.json();

        const origin = request.headers.get("origin");

        let priceId = process.env.price_id_insight_posts;

        let stripe = await createSessionForInsightPost({ origin, priceId })

        const slug = formData.heading
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')  // remove invalid characters
            .replace(/\s+/g, '-')          // spaces to dashes
            .replace(/-+/g, '-');          // remove multiple dashes
        const public_url = `${origin}/business-hub/vip-lounge/collaboration-influence/thought-leadership-wall/${slug}?status=false&session_id=null`;
        const secret_url = `${origin}/business-hub/vip-lounge/collaboration-influence/thought-leadership-wall/${slug}?status=true&session_id=${stripe.id}`;

        // // Generate secure token
        const access_token = generateToken();

        // // 6️⃣ Continue with DB insert / Stripe
        await insert("round_table", { ...textFields, banner_image: bannerImagePath, logo_image: logoImagePath, session_id: stripe.id, public_url: public_url, secret_url: secret_url, access_token: access_token });

        return new Response(JSON.stringify({ url: stripe.url }), { status: 200 });
    } catch (error) {
        console.error("Error creating checkout session:", error);

        if (error.name === "ValidationError") {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: "Validation failed",
                    details: error.errors,
                }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(
            JSON.stringify({
                success: false,
                error: "Failed to create checkout session",
                details: error.message || "Unknown error",
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

// export async function POST(request) {
//     try {
//         const body = await request.json();
//         console.log(body);

//         const saved = await ConciergeRepo.saveBecomeExpertForm(body);

//         // Send email
//         await UserBecomeExpertEmail(body);
//         await AdminBecomeExpertEmail(body);

//         return NextResponse.json({ success: true, data: saved });
//     } catch (error) {
//         console.error("Error in POST /become-a-plug-concierge-expert:", error);
//         return NextResponse.json(
//             { success: false, error: "Internal server error" },
//             { status: 500 }
//         );
//     }
// }
