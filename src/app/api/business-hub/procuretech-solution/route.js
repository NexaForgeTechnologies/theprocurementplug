import { ProcureTechRepo } from '@/repository/business-hub/ProcuretechRepo';

export async function GET() {
    try {
        const procuretech = await ProcureTechRepo.getAllProcuretechSolutions();
        return Response.json(procuretech, { status: 200 });
    } catch (error) {
        console.error('Error processing GET request:', error);
        return Response.json({ error: 'Failed to process GET request for procuretech' }, { status: 500 });
    }
}