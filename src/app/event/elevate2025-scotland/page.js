import React from 'react'

import EventBenifitsCTR from '@/containers/events/scotland/EventBenifitsCTR'
import EventHighlightCTR from '@/containers/events/scotland/EventHighlightCTR'
import EventsHeroComp from '@/components/events/EventsHeroCompScot'
import EventSponserComp from '@/components/events/EventSponserComp'

import EventsOppertunityCTR from '@/containers/events/scotland/EventOppertunityCTR'

import GuestCTR from '@/containers/events/scotland/GuestCTR'

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
