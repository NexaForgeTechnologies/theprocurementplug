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
import PartnerWithUsComp from '@/components/partner-with-us/PartnerWithUsComp'
import Link from 'next/link'

function Breadcrumb() {
    return (
        <nav className="text-sm breadcrumbs mb-4">
            <ol className="list-reset flex gap-2 text-gray-600">
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
    const partnerWithUs = [
        {
            id: 1,
            heading: "Procure Tech Solution",
            text: "",
            link: "",
            linkText: "View",
            bgColor: "#85009D"
        }
        ,
        {
            id: 2,
            heading: "Collaboration & Influence",
            text: "",
            link: "",
            linkText: "View",
            bgColor: "#85009D"
        },
        {
            id: 3,
            heading: "Innovation Vault",
            text: "",
            link: "",
            linkText: "View",
            bgColor: "#85009D"
        }
    ]
    return (
        <>
            <div>
                <Breadcrumb />
                <ConsultingPartnerCTR />
            </div>

            <FeaturedPartnerCTR />
            <div className="flex flex-col gap-6 md:gap-8">
                <div className='max-w-[780px] m-auto text-center'>
                    <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#85009D]'>Partner With Us</h3>
                    <p className='text-[#85009D] text-sm md:text-lg leading-normal md:leading-relaxed'><strong>marketing@theprocurement.com</strong> - <Link href="/partnerships">Visit our partnership page</Link>
                    </p>
                </div>
                <div className="bg-[#85009D] rounded-[8px] px-5 pb-5 md:px-10 md:pb-10">
                    <h2 className="text-xl md:text-2xl font-extrabold text-center my-5">Cross-sell / Upsell</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-[8px]">
                        {partnerWithUs?.map((content, idx) => (
                            <PartnerWithUsComp key={idx} data={content} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
