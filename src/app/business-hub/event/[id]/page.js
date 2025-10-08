import React from 'react'

import EventBenifitsCTR from '@/containers/business-hub/events/manchester/EventBenifitsCTR'
import EventHighlightCTR from '@/containers/business-hub/events/manchester/EventHighlightCTR'
import GuestCTR from '@/containers/business-hub/events/manchester/GuestCTR'
import EventsOppertunityCTR from '@/containers/business-hub/events/manchester/EventOppertunityCTR'
import EventReviewCTR from '@/containers/business-hub/events/manchester/EventReviewCTR'
import AgendaCTR from '@/containers/business-hub/events/manchester/AgendaCTR'

import EventsHeroComp from '@/components/events/EventsHeroComp'
import EventSponserComp from '@/components/events/EventSponserComp'

export const metadata = {
    title: 'Elevate Manchester June 2025',
    description: 'Fast-Track Your Procurement Career & Elevate Your Leadership Skills with Elevate 2025!',
    openGraph: {
        title: 'Elevate Manchester June 2025',
        description: 'Fast-Track Your Procurement Career & Elevate Your Leadership Skills with Elevate 2025!',
        images: [
            {
                url: 'https://theprocurementplug.com/images/og/events.jpg',
                width: 1200,
                height: 630,
                alt: 'Event',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Elevate Manchester June 2025',
        description: 'Fast-Track Your Procurement Career & Elevate Your Leadership Skills with Elevate 2025!',
        images: ['https://theprocurementplug.com/images/og/events.jpg'],
    },
};

function page() {
    return (
        <>
            <EventsHeroComp />
            <EventBenifitsCTR />
            <EventHighlightCTR />
            <AgendaCTR />
            <GuestCTR />
            <EventsOppertunityCTR />
            <EventReviewCTR />
            <EventSponserComp />
        </>
    )
}

export default page
