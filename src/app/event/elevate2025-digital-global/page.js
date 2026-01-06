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
import AgendaCTR from '@/containers/events/boardroom/AgendaCTR'

export const metadata = {
    title: 'Elevate Digital Global Edition January 2026',
    description: 'Transforming Procurement Excellence & Leadership',
    icons: {
        icon: 'https://theprocurementplug.com/images/header/headerlogo.png',
    },
    openGraph: {
        title: 'Elevate Digital Global Edition January 2026',
        description: 'Transforming Procurement Excellence & Leadership',
        images: [
            {
                url: 'https://theprocurementplug.com/images/og/elevate_digital_thumbnail.jpg',
                width: 1200,
                height: 630,
                alt: 'Event',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Elevate Digital Global Edition January 2026',
        description: 'Transforming Procurement Excellence & Leadership',
        images: ['https://theprocurementplug.com/images/og/elevate_digital_thumbnail_2026.jpeg'],
    },
};

function page() {
    return (
        <>
            {/* <EventsHeroComp /> */}
            <EventHeroCont />
            <EventBenifitsCTR />
            <EventHighlightCTR />
            {/* <EventHighlightDigitalGlobalDayOneCont />
            <EventHighlightDigitalGlobalDayTwoCont /> */}
            {/* <AgendaCTR /> */}
            <GuestCTR />
            <EventsOppertunityCTR />
            <EventReviewCTR />
            <EventSponserComp />


            {/* old design */}


            {/*<OurSpeakersCont />
            <RegionalCoverageCont /> */}



        </>
    )
}

export default page
