import { PartnerRepo } from "@/repository/round-table/PartnerRepo";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return Response.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const partner = await PartnerRepo.findByEmail(email);

    if (!partner) {
      return Response.json({
        exists: false
      });
    }

    return Response.json({
      exists: true,
      already_partner: partner.already_partner
    });

  } catch (error) {
    console.error("Error checking email:", error);
    return Response.json(
      { error: "Failed to check email" },
      { status: 500 }
    );
  }
}
