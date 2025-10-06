import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PaymentCheckoutFormRepo } from "@/repository/personaldevelopmenthub/PaymentCheckoutFormRepo";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-08-16",
});

export async function POST(request) {
    try {
        const body = await request.json();
        
        // Destructure selectedPlan from the request body
        const { firstName, email, phoneNumber, selectedPlan } = body;

        // Log to check if selectedPlan is correctly passed
        console.log("✅ Creating Stripe Checkout session for:", body);

        if (!selectedPlan) {
            return NextResponse.json({ error: "No selected plan found." }, { status: 400 });
        }

        // Save non-sensitive data to DB
        await PaymentCheckoutFormRepo({ firstName, email, phoneNumber, selectedPlan });

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
                            name: selectedPlan?.plugType || "Membership Plan",
                            description: selectedPlan?.data?.[0]?.title || "Membership plan description",
                        },
                        unit_amount: selectedPlan?.price === "Free" 
                    ? 0 
                    : parseInt(selectedPlan?.price?.replace(/[£,]/g, "") * 100 || 1000), // handle the rest
            },
                    quantity: 1,
                },
            ],
            metadata: {
                firstName,
                phoneNumber,
                planType: selectedPlan?.plugType,
                planPrice: selectedPlan?.price,
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
