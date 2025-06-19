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
    metadataBase: new URL('https://www.theprocurementplug.com'),
    alternates: {
        canonical: '/event/boardroom-preparedness-for-senior-procurement-professionals',
    },
    openGraph: {
        type: 'website',
        url: 'https://www.theprocurementplug.com/event/boardroom-preparedness-for-senior-procurement-professionals',
        title: 'Boardroom Preparedness',
        description: 'Unlock the Skills to Secure Your Seat at the Boardroom Table',
        siteName: 'The Procurement Plug',
        images: [
            {
                url: 'https://theprocurementplug.com/images/og/boardroom.jpg?v=2',
                width: 1200,
                height: 630,
                alt: 'Boardroom Event',
                type: 'image/png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Boardroom Preparedness',
        description: 'Unlock the Skills to Secure Your Seat at the Boardroom Table',
        images: ['https://theprocurementplug.com/images/og/boardroom.jpg?v=2'],
        site: '@theprocplug', // optional if you have a Twitter handle
        creator: '@theprocplug', // optional
    },
    icons: {
        icon: '/favicon.ico',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
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
