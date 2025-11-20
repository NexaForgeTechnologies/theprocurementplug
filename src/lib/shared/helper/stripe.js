import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export async function createStripeSession(data) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        { price: data.priceId, quantity: 1 },
      ],
      mode: "payment",
      allow_promotion_codes: true,

      success_url: data.origin + "/business-hub/vip-lounge/collaboration-influence/vip-forum?status=true&session_id={CHECKOUT_SESSION_ID}",
      cancel_url: data.origin + "/business-hub/vip-lounge/collaboration-influence/vip-forum?status=false",
    });
    return session;
  } catch (e) {
    const validationError = new Error("Stripe Failed");
    validationError.name = "StripeFailed";
    validationError.errors = e.message;

    throw validationError;
  }
}

export async function varifyStripeSession(sessionId) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items.data.price.product"], // expand price and product
    });

    // 2. Access the first line item's price
    const lineItem = session.line_items.data[0]; // assuming single item checkout
    const price = lineItem.price.unit_amount; // in cents
    const currency = lineItem.price.currency; // e.g. 'usd'
    return session;
  } catch (e) {
    const validationError = new Error("Stripe Failed");
    validationError.name = "Stripe Failed";

    validationError.errors = e.meesage;

    throw validationError;
  }

}
