import ProfessionalsRepo from "@/repository/business-hub/vip-lounge/talent-hiring-intelligence/ProfessionalsRepo";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const professionals = await ProfessionalsRepo.getProfessionals();
    return NextResponse.json({
      success: true,
      data: professionals, // 👈 direct array from DB
    });
  } catch (error) {
    console.error("❌ Error receiving data in API server:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
