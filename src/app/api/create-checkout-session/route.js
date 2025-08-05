// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: '2022-11-15',
// });

// export async function POST(req) {
//   try {
//     const { subscriptionType, quantity, priceId, metadata } = await req.json();

//     if (!subscriptionType || !quantity || !priceId || !metadata) {
//       return new Response(JSON.stringify({ error: 'Missing required fields' }), {
//         status: 400,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     }

//     // Format metadata to ensure all values are strings
//     const formattedMetadata = {
//       duration: String(metadata.duration || 'monthly'),
//       subscriptionType: String(metadata.subscriptionType || 'one_time'),
//       quantity: String(metadata.quantity || '1'),
//     };

//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           price: priceId,
//           quantity: parseInt(quantity),
//         },
//       ],
//       mode: subscriptionType === 'one_time' ? 'payment' : 'subscription',
//       allow_promotion_codes: true,
//       metadata: formattedMetadata,
//       success_url: 'http://localhost:3000/',
//       cancel_url: 'http://localhost:3000/',
//     });

//     return new Response(JSON.stringify({ url: session.url }), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error('Error creating checkout session:', {
//       message: error.message,
//       type: error.type,
//       code: error.code,
//       raw: error.raw,
//     });
//     return new Response(
//       JSON.stringify({ error: 'Failed to create checkout session', details: error.message }),
//       {
//         status: 500,
//         headers: { 'Content-Type': 'application/json' },
//       }
//     );
//   }
// }

// // Explicitly handle non-POST methods
// export async function GET() {
//   return new Response(JSON.stringify({ error: 'Method not allowed' }), {
//     status: 405,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2022-11-15",
// });

// export async function POST(req) {
//   try {
//     const { quantity, amount, metadata } = await req.json();

//     if (!quantity || !amount || !metadata) {
//       return new Response(JSON.stringify({ error: "Missing required fields" }), {
//         status: 400,
//         headers: { "Content-Type": "application/json" },
//       });
//     }

//     // Format metadata to ensure all values are strings
//     const formattedMetadata = {
//       quantity: String(metadata.quantity || "1"),
//       amount: String(metadata.amount),
//       paymentType: String(metadata.paymentType || "sponsor"),
//     };

//     // Create a Checkout Session for a one-time payment
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: "VIP Forum Payment",
//               description: `Sponsor Payment`,
//               // description: `One-time sponsor payment for ${formattedMetadata.quantity} seat(s)`,
//             },
//             unit_amount: parseInt(amount), // Amount in cents
//           },
//           quantity: parseInt(quantity),
//         },
//       ],
//       mode: "payment", // One-time payment mode
//       allow_promotion_codes: true,
//       metadata: formattedMetadata,
//       success_url: "http://localhost:3000/",
//       cancel_url: "http://localhost:3000/",
//     });

//     return new Response(JSON.stringify({ url: session.url }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error creating checkout session:", {
//       message: error.message,
//       type: error.type,
//       code: error.code,
//       raw: error.raw,
//     });
//     return new Response(
//       JSON.stringify({
//         error: "Failed to create checkout session",
//         details: error.message,
//       }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }

// // Handle non-POST methods
// export async function GET() {
//   return new Response(JSON.stringify({ error: "Method not allowed" }), {
//     status: 405,
//     headers: { "Content-Type": "application/json" },
//   });
// }
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export async function POST(req) {
  try {
    const { quantity, packageType , subscriptionType, metadata } = await req.json();

    // Validate required fields
    if (!quantity || !packageType || !metadata || !metadata.duration || !metadata.subscriptionType || !metadata.quantity) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    let priceId=process.env.price_id_week;
   const origin = req.headers.get("origin");
    if(packageType==="2 Weeks"){
    priceId=process.env.price_id_2week
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
         
        {
          price: priceId,
          quantity: parseInt(quantity),
        },
      ],
      mode:"subscription",
      allow_promotion_codes: true,
      metadata: {
        duration: metadata.duration,
        subscriptionType: metadata.subscriptionType,
        quantity: metadata.quantity,
      },
      success_url: origin+"/business-hub/vip-lounge/collaboration-influence/vip-forum?status=true&session_id={CHECKOUT_SESSION_ID}",
      cancel_url:  origin+"/business-hub/vip-lounge/collaboration-influence/vip-forum?status=false",
    });
console.log(session)
    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating checkout session:", {
      message: error.message,
      type: error.type,
      code: error.code,
      raw: error.raw,
    });
    return new Response(
      JSON.stringify({
        error: "Failed to create checkout session",
        details: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// Handle non-POST methods
export async function GET() {
  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}