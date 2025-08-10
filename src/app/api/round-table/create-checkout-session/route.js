import { validate } from '@/lib/shared/validation/validation';
import { createStripeSession, saveFile } from '@/lib/shared/helper';
import { insert } from '@/lib/shared/database/db-query';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const textFields = {
      companyName: formData.get("companyName") || "",
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      website: formData.get("website") || "",
      package: formData.get("package") || "",
      title: formData.get("title") || "",
      description: formData.get("description") || "",
      targetAudience: formData.get("targetAudience") || "",
      date: formData.get("date") || ""
    };
// 2️⃣ Validate text fields with Zod
    const parsed = await validate(textFields,"hostRoundTableSchema");
    let priceId=process.env.price_id_week;
    const origin = req.headers.get("origin");
    if(parsed.package==="2 Weeks"){
    priceId=process.env.price_id_2week
    }
    let stripe=await createStripeSession({origin,priceId})
    
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
   
    const logoImagePath =logoImageFile && logoImageFile.size > 0
        ? await saveFile(logoImageFile)
        : null;
     
    // 6️⃣ Continue with DB insert / Stripe
   await insert("round_table",{...textFields,banner_image:bannerImagePath,logo_image:logoImagePath,session_id:stripe.id})
  
    return new Response(JSON.stringify({ url:stripe.url }), { status: 200 });
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