import React from 'react'

import EventBenifitsCTR from '@/containers/business-hub/events/scotland/EventBenifitsCTR'
import EventHighlightCTR from '@/containers/business-hub/events/scotland/EventHighlightCTR'
import EventsHeroComp from '@/components/events/EventsHeroCompScot'
import EventSponserComp from '@/components/events/EventSponserComp'

import EventsOppertunityCTR from '@/containers/business-hub/events/scotland/EventOppertunityCTR'
import EventReviewCTR from '@/containers/business-hub/events/scotland/EventReviewCTR'

import GuestCTR from '@/containers/business-hub/events/scotland/GuestCTR'
import AgendaCTR from '@/containers/business-hub/events/scotland/AgendaCTR'

export const metadata = {
    title: 'Elevate Glasgow August 2025',
    description: 'Fast-Track Your Career & Elevate Your Leadership Skills with Elevate 2025!',
    openGraph: {
        title: 'Elevate Glasgow August 2025',
        description: 'Fast-Track Your Career & Elevate Your Leadership Skills with Elevate 2025!',
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
        title: 'Elevate Glasgow August 2025',
        description: 'Fast-Track Your Career & Elevate Your Leadership Skills with Elevate 2025!',
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
            {/* <EventReviewCTR /> */}
            <EventSponserComp />
        </>
    )
}

export default page
