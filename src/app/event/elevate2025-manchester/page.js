import React from 'react'

import EventBenifitsCTR from '@/containers/events/manchester/EventBenifitsCTR'
import EventHighlightCTR from '@/containers/events/manchester/EventHighlightCTR'
import GuestCTR from '@/containers/events/manchester/GuestCTR'
import EventsOppertunityCTR from '@/containers/events/manchester/EventOppertunityCTR'

import EventsHeroComp from '@/components/events/EventsHeroComp'
import EventSponserComp from '@/components/events/EventSponserComp'

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
