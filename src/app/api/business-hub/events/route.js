import { EventRepo } from '@/repository/business-hub/EventRepo';

export async function GET(request) {
    try {
        // extract query params from URL
        const { searchParams } = new URL(request.url);
        const event_id = searchParams.get("event_id");

        if (event_id) {
            // ✅ get single event
            const event = await EventRepo.getEventById(event_id);

            if (!event) {
                return Response.json({ error: "Event not found" }, { status: 404 });
            }

            return Response.json(event, { status: 200 });
        }

        // ✅ get all events
        const events = await EventRepo.getAllEvents();
        return Response.json(events, { status: 200 });

    } catch (error) {
        console.error("Error processing GET request:", error);
        return Response.json(
            { error: "Failed to process GET request for events" },
            { status: 500 }
        );
    }
}
