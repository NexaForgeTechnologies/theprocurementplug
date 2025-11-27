import { validate } from '@/lib/shared/validation/validation';
import { createStripeSession, saveFile } from '@/lib/shared/helper';
import { insert } from '@/lib/shared/database/db-query';

import crypto from "crypto";

function generateToken() {
  return crypto.randomBytes(32).toString("hex");  // 64-char token
}

export async function POST(req) {
  try {
    const formData = await req.formData();

    const origin = req.headers.get("origin");

    const textFields = {
      companyName: formData.get("companyName") || "",
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      website: formData.get("website") || "",
      package: formData.get("package") || "",
      title: formData.get("title") || "",
      description: formData.get("description") || "",
      targetAudience: formData.get("targetAudience") || "",
      date: formData.get("date") || "",
      already_partner: Number(formData.get("already_partner") || 0), // ← convert to number
    };

    // 2️⃣ Validate text fields with Zod
    const parsed = await validate(textFields, "hostRoundTableSchema");

    let priceId = process.env.price_id_week_1;

    if (parsed.package === "2 Weeks" && parsed.already_partner === 1) {
      priceId = process.env.price_id_week_2_existing_partner;
    } else if (parsed.package === "2 Weeks") {
      priceId = process.env.price_id_week_2_non_partner;
    }

    let stripe = await createStripeSession({ origin, priceId })

    // // 3️⃣ Extract files
    const bannerImageFile = formData.get("bannerImage");
    const logoImageFile = formData.get("logoImage");

    if (bannerImageFile.size > 2 * 1024 * 1024) { // 2MB limit
      return new Response(
        JSON.stringify({ success: false, error: "Banner image too large" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (logoImageFile.size > 2 * 1024 * 1024) {
      return new Response(
        JSON.stringify({ success: false, error: "logo image too large" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const bannerImagePath = bannerImageFile && bannerImageFile.size > 0
      ? await saveFile(bannerImageFile)
      : null;

    const logoImagePath = logoImageFile && logoImageFile.size > 0
      ? await saveFile(logoImageFile)
      : null;

    const slug = parsed.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')  // remove invalid characters
      .replace(/\s+/g, '-')          // spaces to dashes
      .replace(/-+/g, '-');          // remove multiple dashes
    const public_url = `${origin}/business-hub/vip-lounge/collaboration-influence/vip-forum/${slug}?status=false&session_id=null`;
    const secret_url = `${origin}/business-hub/vip-lounge/collaboration-influence/vip-forum/${slug}?status=true&session_id=${stripe.id}`;

    // Generate secure token
    const access_token = generateToken();

    // 6️⃣ Continue with DB insert / Stripe
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

// Handle non-POST methods
export async function GET() {
  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}