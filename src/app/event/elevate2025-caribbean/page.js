import React from 'react'

import EventBenifitsCTR from '@/containers/events/caribbean/EventBenifitsCTR'
import EventHighlightCTR from '@/containers/events/caribbean/EventHighlightCTR'
import GuestCTR from '@/containers/events/caribbean/GuestCTR'
import EventsOppertunityCTR from '@/containers/events/caribbean/EventOppertunityCTR'

import EventsHeroComp from '@/components/events/EventsHeroCompCarib'
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
