import React from 'react'

import EventBenifitsCTR from '@/containers/events/boardroom/EventBenifitsCTR'
import EventHighlightCTR from '@/containers/events/boardroom/EventHighlightCTR'
import GuestCTR from '@/containers/events/boardroom/GuestCTR'
import EventsOppertunityCTR from '@/containers/events/boardroom/EventOppertunityCTR'

import EventsHeroComp from '@/components/events/EventsHeroCompBoard'
import EventSponserComp from '@/components/events/EventSponserComp'

export const metadata = {
    title: 'Boardroom Prep Aredness',
    description: 'Unlock the Skills to Secure Your Seat at the Boardroom Table',
    openGraph: {
        title: 'Boardroom Prep Aredness',
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
        title: 'Boardroom Prep Aredness',
        description: 'Unlock the Skills to Secure Your Seat at the Boardroom Table',
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
            <EventSponserComp />
        </>
    )
}

export default page
