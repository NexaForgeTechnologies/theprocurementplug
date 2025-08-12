import { ConsultantRepo } from '@/repository/ConsultantRepo';

export async function GET() {
    try {
        const consultants = await ConsultantRepo.getAllConsultants();
        return Response.json(consultants, { status: 200 });
    } catch (error) {
        console.error('Error processing GET request:', error);
        return Response.json({ error: 'Failed to process GET request for speakers' }, { status: 500 });
    }
}