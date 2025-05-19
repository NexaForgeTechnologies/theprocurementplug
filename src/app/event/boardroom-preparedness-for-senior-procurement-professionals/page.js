import React from 'react'

import EventBenifitsCTR from '@/containers/events/boardroom/EventBenifitsCTR'
import EventHighlightCTR from '@/containers/events/boardroom/EventHighlightCTR'
import GuestCTR from '@/containers/events/boardroom/GuestCTR'
import EventsOppertunityCTR from '@/containers/events/boardroom/EventOppertunityCTR'

import EventsHeroComp from '@/components/events/EventsHeroCompBoard'
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
