import React from 'react'

import EventBenifitsCTR from '@/containers/events/scotland/EventBenifitsCTR'
import EventHighlightCTR from '@/containers/events/scotland/EventHighlightCTR'
import EventsHeroComp from '@/components/events/EventsHeroCompScot'
import EventSponserComp from '@/components/events/EventSponserComp'

import EventsOppertunityCTR from '@/containers/events/scotland/EventOppertunityCTR'

function page() {
    return (
        <>
            <EventsHeroComp />
            <EventBenifitsCTR />
            <EventHighlightCTR />
            <EventsOppertunityCTR />
            <EventSponserComp />
        </>
    )
}

export default page
