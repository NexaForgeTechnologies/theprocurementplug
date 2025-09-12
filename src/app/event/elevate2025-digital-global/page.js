import React from 'react'

import EventBenifitsCTR from '@/containers/events/digital-global/EventBenifitsCTR'
import EventHighlightCTR from '@/containers/events/digital-global/EventHighlightCTR'
import GuestCTR from '@/containers/events/digital-global/GuestCTR'
import EventsOppertunityCTR from '@/containers/events/digital-global/EventOppertunityCTR'
import EventReviewCTR from '@/containers/events/digital-global/EventReviewCTR'

import EventsHeroComp from '@/components/events/EventsHeroCompCarib'
import EventSponserComp from '@/components/events/EventSponserComp'
import EventDaysDigitalGlobalComp from '@/components/events/EventDaysDigitalGlobalComp'
import FeatureComponent from '@/components/features/FeatureComponent'
import EventHighlightDigitalGlobalComp from '@/components/events/EventHighlightDigitalGlobalComp'
import EventHighlightDigitalGlobalCont from '@/containers/events/digital-global/EventHighlightDigitalGlobalDayOneCont'
import EventHighlightDigitalGlobalDayOneCont from '@/containers/events/digital-global/EventHighlightDigitalGlobalDayOneCont'
import EventHighlightDigitalGlobalDayTwoCont from '@/containers/events/digital-global/EventHighlightDigitalGlobalDayTwoCont'
import OurSpeakersCont from '@/containers/events/digital-global/OurSpeakersCont'
import RegionalCoverageCont from '@/containers/events/digital-global/RegionalCoverageCont'
import EventHeroCont from '@/containers/events/digital-global/EventHeroCont'

export const metadata = {
    title: 'Elevate Digital Global Edition November 2025',
    description: 'Transforming Procurement Excellence & Leadership',
    icons: {
        icon: 'https://theprocurementplug.com/images/header/headerlogo.png',
    },
    openGraph: {
        title: 'Elevate Digital Global Edition November 2025',
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
        title: 'Elevate Digital Global Edition November 2025',
        description: 'Transforming Procurement Excellence & Leadership',
        images: ['https://theprocurementplug.com/images/og/events.jpg'],
    },
};

function page() {
    return (
        <>
            {/* <EventsHeroComp />
            <EventBenifitsCTR />
            <EventHighlightCTR />
            <GuestCTR />
            <EventsOppertunityCTR />
            <EventReviewCTR /> 
            <EventSponserComp />*/}

            <EventHeroCont />
            <EventHighlightDigitalGlobalDayOneCont />
            <EventHighlightDigitalGlobalDayTwoCont />
            <OurSpeakersCont />
            <RegionalCoverageCont />



        </>
    )
}

export default page
