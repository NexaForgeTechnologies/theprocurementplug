import { VenuPartnerRepo } from '@/repository/business-hub/VenueRepo';

export async function GET() {
    try {
        const venues = await VenuPartnerRepo.getAllVenuePartners();
        return Response.json(venues, { status: 200 });
    } catch (error) {
        console.error('Error processing GET request:', error);
        return Response.json({ error: 'Failed to process GET request for venue' }, { status: 500 });
    }
}