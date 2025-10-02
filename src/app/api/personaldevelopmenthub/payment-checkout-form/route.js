import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PaymentCheckoutFormRepo } from "@/repository/personaldevelopmenthub/PaymentCheckoutFormRepo";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-08-16",
});

export async function POST(request) {
    try {
        const body = await request.json();
        const { firstName, email, phoneNumber } = body;

        console.log("✅ Creating Stripe Checkout session for:", body);

        // Save non-sensitive data to DB
        await PaymentCheckoutFormRepo({ firstName, email, phoneNumber });

        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            customer_email: email,
            line_items: [
                {
                    price_data: {
                        currency: "gbp",
                        product_data: {
                            name: "Plug Ascend Membership",
                            description: "Annual plan for procurement professionals",
                        },
                        unit_amount: 37789, // £377.89 → in pence
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                firstName,
                phoneNumber,
            },
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/personaldevelopmenthub/membershipplans/payment-checkout`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
        });

        return NextResponse.json({ url: session.url }, { status: 200 });

    } catch (error) {
        console.error("❌ Error creating Stripe Checkout session:", error);
        return NextResponse.json(
            { error: "Something went wrong while creating checkout session." },
            { status: 500 }
        );
    }
}
