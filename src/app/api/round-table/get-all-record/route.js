import { PartnerRepo } from '@/repository/round-table/PartnerRepo';

export async function GET() {
  try {

    const tables = await PartnerRepo.getAll();
    return Response.json(tables, { status: 200 });

  } catch (error) {
    console.error("Error processing GET request:", error);
    return Response.json(
      { error: "Failed to process GET request for tables" },
      { status: 500 }
    );
  }
}
