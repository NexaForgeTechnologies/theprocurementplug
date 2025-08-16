import { LegalRepo } from '@/repository/business-hub/LegalRepo';

export async function GET() {
    try {
        const legals = await LegalRepo.getAllLegal();
        return Response.json(legals, { status: 200 });
    } catch (error) {
        console.error('Error processing GET request:', error);
        return Response.json({ error: 'Failed to process GET request for legal' }, { status: 500 });
    }
}