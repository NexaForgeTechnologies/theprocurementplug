"use client";

import React from 'react'

// Containers
import EventBenifitsCTR from '@/containers/business-hub/events/manchester/EventBenifitsCTR'
import EventHighlightCTR from '@/containers/business-hub/events/manchester/EventHighlightCTR'
import GuestCTR from '@/containers/business-hub/events/manchester/GuestCTR'
import EventsOppertunityCTR from '@/containers/business-hub/events/manchester/EventOppertunityCTR'
import EventReviewCTR from '@/containers/business-hub/events/manchester/EventReviewCTR'
import AgendaCTR from '@/containers/business-hub/events/manchester/AgendaCTR'

// Components
import EventsHeroComp from '@/components/events/EventsHeroComp'
import EventSponserComp from '@/components/events/EventSponserComp'

// Store
import { useEventStore } from '@/store/eventStore'

// export const metadata = {
//     title: 'Elevate Manchester June 2025',
//     description: 'Fast-Track Your Procurement Career & Elevate Your Leadership Skills with Elevate 2025!',
//     openGraph: {
//         title: 'Elevate Manchester June 2025',
//         description: 'Fast-Track Your Procurement Career & Elevate Your Leadership Skills with Elevate 2025!',
//         images: [
//             {
//                 url: 'https://theprocurementplug.com/images/og/events.jpg',
//                 width: 1200,
//                 height: 630,
//                 alt: 'Event',
//             },
//         ],
//     },
//     twitter: {
//         card: 'summary_large_image',
//         title: 'Elevate Manchester June 2025',
//         description: 'Fast-Track Your Procurement Career & Elevate Your Leadership Skills with Elevate 2025!',
//         images: ['https://theprocurementplug.com/images/og/events.jpg'],
//     },
// };

function Page() {
    const event = useEventStore((state) => state.event);

    // Check Workshops exists and has valid data
    const workshops = Array.isArray(event.workshops) ? event.workshops : JSON.parse(event.workshops || "[]");
    const hasValidWorkshops = Array.isArray(workshops) && workshops.some(group =>
        group.tiles.some(
            tile => tile.heading?.trim() || tile.details?.trim()
        )
    );

    // Check Agenda exists
    let parsedAgenda = {};
    try {
        if (typeof agenda === "string") {
            const trimmed = agenda.trim();
            parsedAgenda = trimmed ? JSON.parse(trimmed) : {};
        } else {
            parsedAgenda = agenda || {};
        }
    } catch (e) {
        parsedAgenda = {};
    }
    const hasAgendaData = parsedAgenda && typeof parsedAgenda === "object" && !Array.isArray(parsedAgenda) && Object.keys(parsedAgenda).length > 0;

    return (
        <>
            <EventsHeroComp data={event} />
            <EventBenifitsCTR />
            {hasValidWorkshops && <EventHighlightCTR data={workshops} />}
            {hasAgendaData && <AgendaCTR data={parsedAgenda} />}

            <GuestCTR speakers={event.speakers} heading={event.speakers_heading} />

            <EventsOppertunityCTR data={event} />

            {event.event_name === "ELEVATE MANCHESTER" && (
                <EventReviewCTR />
            )}

            <EventSponserComp />
        </>
    )
}

export default Page;
