import { ConsultantRepo } from '@/repository/business-hub/ConsultantRepo';

export async function GET(request, context) {
    try {
        const { id } = context.params;

        const consultant = await ConsultantRepo.getConsultantById(id);

        if (!consultant) {
            return Response.json({ error: 'Consultant not found' }, { status: 404 });
        }

        return Response.json(consultant, { status: 200 });
    } catch (error) {
        console.error('Error processing GET request:', error);
        return Response.json(
            { error: 'Failed to fetch consultant' },
            { status: 500 }
        );
    }
}

