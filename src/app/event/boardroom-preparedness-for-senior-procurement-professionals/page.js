import React from 'react'

import EventBenifitsCTR from '@/containers/events/boardroom/EventBenifitsCTR'
import EventHighlightCTR from '@/containers/events/boardroom/EventHighlightCTR'
import GuestCTR from '@/containers/events/boardroom/GuestCTR'
import EventsOppertunityCTR from '@/containers/events/boardroom/EventOppertunityCTR'

import EventsHeroComp from '@/components/events/EventsHeroCompBoard'
import EventSponserComp from '@/components/events/EventSponserComp'
import AgendaCTR from '@/containers/events/boardroom/AgendaCTR'

export const metadata = {
    title: 'Boardroom Preparedness',
    description: 'Unlock the Skills to Secure Your Seat at the Boardroom Table',
    openGraph: {
        title: 'Boardroom Preparedness',
        description: 'Unlock the Skills to Secure Your Seat at the Boardroom Table',
        images: [
            {
                url: 'https://theprocurementplug.com/images/og/boardroom.png',
                width: 1200,
                height: 630,
                alt: 'Boardroom Event',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Boardroom Preparedness',
        description: 'Unlock the Skills to Secure Your Seat at the Boardroom Table',
        images: ['https://theprocurementplug.com/images/og/boardroom.png'],
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
            <EventSponserComp />
        </>
    )
}

export default page
