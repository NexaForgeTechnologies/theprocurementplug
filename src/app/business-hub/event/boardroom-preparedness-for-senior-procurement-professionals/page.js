import React from 'react'

import EventBenifitsCTR from '@/containers/business-hub/events/boardroom/EventBenifitsCTR'
import EventHighlightCTR from '@/containers/business-hub/events/boardroom/EventHighlightCTR'
import GuestCTR from '@/containers/business-hub/events/boardroom/GuestCTR'
import EventsOppertunityCTR from '@/containers/business-hub/events/boardroom/EventOppertunityCTR'
import EventReviewCTR from '@/containers/business-hub/events/boardroom/EventReviewCTR'

import EventsHeroComp from '@/components/events/EventsHeroCompBoard'
import EventSponserComp from '@/components/events/EventSponserComp'
import AgendaCTR from '@/containers/business-hub/events/boardroom/AgendaCTR'

export const metadata = {
    title: 'Boardroom Preparedness',
    description: 'Unlock the Skills to Secure Your Seat at the Boardroom Table',
    openGraph: {
        title: 'Boardroom Preparedness',
        description: 'Unlock the Skills to Secure Your Seat at the Boardroom Table',
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
        title: 'Boardroom Preparedness',
        description: 'Unlock the Skills to Secure Your Seat at the Boardroom Table',
        images: ['https://theprocurementplug.com/images/og/events.jpg'],
    },
};

function page() {
    return (
        <>
            <EventsHeroComp />
            <EventBenifitsCTR />
            {/* <EventHighlightCTR /> */}
            <AgendaCTR />
            <GuestCTR />
            <EventsOppertunityCTR />
            {/* <EventReviewCTR /> */}
            <EventSponserComp />
        </>
    )
}

export default page
