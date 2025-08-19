import { ProcureTechRepo } from '@/repository/business-hub/ProcuretechRepo';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const typeId = searchParams.get("type_id");

    let procuretech;
    if (typeId) {
      procuretech = await ProcureTechRepo.getProcuretechByTypeId(typeId);
    } else {
      procuretech = await ProcureTechRepo.getAllProcuretechSolutions();
    }

    return Response.json(procuretech, { status: 200 });
  } catch (error) {
    console.error('Error processing GET request:', error);
    return Response.json(
      { error: 'Failed to process GET request for procuretech' },
      { status: 500 }
    );
  }
}
