import { EventRepo } from '@/repository/business-hub/EventRepo';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const events = await EventRepo.getAllEvents();
        return NextResponse.json(events, { status: 200 });
    }
    catch (error) {
        console.error('Error processing GET request:', error);
        return NextResponse.json({ error: 'Failed to process GET request for events' }, { status: 500 });
    }
}
