import React from 'react'

import EventBenifitsCTR from '@/containers/events/scotland/EventBenifitsCTR'
import EventHighlightCTR from '@/containers/events/scotland/EventHighlightCTR'
import EventsHeroComp from '@/components/events/EventsHeroCompScot'
import EventSponserComp from '@/components/events/EventSponserComp'

import EventsOppertunityCTR from '@/containers/events/scotland/EventOppertunityCTR'

import GuestCTR from '@/containers/events/scotland/GuestCTR'
import AgendaCTR from '@/containers/events/scotland/AgendaCTR'

export const metadata = {
    title: 'Elevate Glasgow August 2025',
    description: 'Fast-Track Your Career & Elevate Your Leadership Skills with Elevate 2025!',
    openGraph: {
        title: 'Elevate Glasgow August 2025',
        description: 'Fast-Track Your Career & Elevate Your Leadership Skills with Elevate 2025!',
        images: [
            {
                url: 'https://theprocurementplug.com/images/og/glasgow.jpg',
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
        images: ['https://theprocurementplug.com/images/og/glasgow.jpg'],
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
            <EventSponserComp />
        </>
    )
}

export default page
