// import React from 'react'

// import FeaturedPartnerCTR from '@/containers/business-hub/consulting-partner/FeaturedPartnerCTR'
// import ConsultingPartnerCTR from '@/containers/business-hub/consulting-partner/ConsultingPartnerCTR'

// function page() {
//     return (
//         <>
//             <ConsultingPartnerCTR />
//             <FeaturedPartnerCTR />
//         </>
//     )
// }

// export default page


import React from 'react'

import FeaturedPartnerCTR from '@/containers/business-hub/consulting-partner/FeaturedPartnerCTR'
import ConsultingPartnerCTR from '@/containers/business-hub/consulting-partner/ConsultingPartnerCTR'
import Link from 'next/link'

function Breadcrumb() {
    return (
        <nav className="text-sm breadcrumbs mb-4">
            <ol className="list-reset flex gap-2 text-gray-600">
                <li>
                    <Link href="/" className="hover:underline">Home</Link>
                </li>
                <li>/</li>
                <li>
                    <Link href="/business-hub" className="hover:underline">Business Hub</Link>
                </li>
                <li>/</li>
                <li className="text-gray-900 font-semibold">
                    Consulting Partner
                </li>
            </ol>
        </nav>
    )
}

function Page() {
    return (
        <>
            <Breadcrumb />
            <ConsultingPartnerCTR />
            <FeaturedPartnerCTR />
        </>
    )
}

export default Page
