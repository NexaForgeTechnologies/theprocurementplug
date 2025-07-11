import React from 'react'

import EventBenifitsCTR from '@/containers/events/caribbean/EventBenifitsCTR'
import EventHighlightCTR from '@/containers/events/caribbean/EventHighlightCTR'
import GuestCTR from '@/containers/events/caribbean/GuestCTR'
import EventsOppertunityCTR from '@/containers/events/caribbean/EventOppertunityCTR'
import EventReviewCTR from '@/containers/events/caribbean/EventReviewCTR'

import EventsHeroComp from '@/components/events/EventsHeroCompCarib'
import EventSponserComp from '@/components/events/EventSponserComp'

export const metadata = {
    title: 'Elevate Caribbean Edition Trinidad November 2025',
    description: 'Transforming Procurement Excellence & Leadership',
    openGraph: {
        title: 'Elevate Caribbean Edition Trinidad November 2025',
        description: 'Transforming Procurement Excellence & Leadership',
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
        title: 'Elevate Caribbean Edition Trinidad November 2025',
        description: 'Transforming Procurement Excellence & Leadership',
        images: ['https://theprocurementplug.com/images/og/events.jpg'],
    },
};

function page() {
    return (
        <>
            <EventsHeroComp />
            <EventBenifitsCTR />
            <EventHighlightCTR />
            <GuestCTR />
            <EventsOppertunityCTR />
            {/* <EventReviewCTR /> */}
            <EventSponserComp />
        </>
    )
}

export default page
