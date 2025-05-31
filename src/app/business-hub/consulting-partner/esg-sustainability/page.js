import React from 'react'

import FeaturedPartnerCTR from '@/containers/business-hub/esg-sustainability/FeaturedPartnerCTR'
import ConsultingPartnerCTR from '@/containers/business-hub/esg-sustainability/ConsultingPartnerCTR'
import PartnerWithUsComp from '@/components/partner-with-us/PartnerWithUsComp'
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
                <li>
                    <Link href="/business-hub/consulting-partner" className="hover:underline">Consulting Partner</Link>
                </li>
                <li>/</li>
                <li className="text-gray-900 font-semibold">
                    ESG Sustainability
                </li>
            </ol>
        </nav>
    )
}

function Page() {
    const partnerWithUs = [
        {
            id: 1,
            heading: "Prcurement Plug Academy",
            text: "",
            link: "",
            linkText: "Upskill Now",
            bgColor: "#85009D"
        },
        {
            id: 2,
            heading: "Recruitment Services",
            text: "",
            link: "",
            linkText: "Find Talent",
            bgColor: "#85009D"
        },
        {
            id: 3,
            heading: "Procurement Xec Plug",
            text: "",
            link: "",
            linkText: "Explore Membership",
            bgColor: "#85009D"
        }
    ]
    return (
        <>
            <Breadcrumb />
            <ConsultingPartnerCTR />
            <FeaturedPartnerCTR />

            <div className="flex flex-col gap-6 md:gap-8">
                <div className='max-w-[780px] m-auto text-center'>
                    <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#85009D]'>Partner With Us</h3>
                    <p className='text-[#85009D] text-sm md:text-lg leading-normal md:leading-relaxed'><strong>marketing@theprocurement.com</strong> - <Link href="/partnerships">Visit our partnership page</Link>
                    </p>
                </div>
                <div className="bg-[#85009D] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-[8px] p-5 md:p-10 ">
                    {partnerWithUs?.map((content, idx) => (
                        <PartnerWithUsComp key={idx} data={content} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Page
