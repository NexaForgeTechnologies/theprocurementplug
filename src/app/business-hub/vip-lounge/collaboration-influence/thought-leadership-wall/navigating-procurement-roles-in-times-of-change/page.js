import Link from 'next/link'
import React from 'react'

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import NavigatingProcurementCTR from '@/containers/business-hub/vip-lounge/collaboration-influence/thought-leadership-wall/navigating-procurement-roles-in-times-of-change/NavigatingProcurementCTR'


function Breadcrumb() {
    return (
        <nav className="text-sm breadcrumbs my-4 md:my-10">
            <ol className="list-reset flex gap-2 text-[#9C9C9C] whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <li>
                    <Link href="/business-hub" className="hover:underline">Business Hub</Link>
                </li>
                <li>/</li>
                <li>
                    <Link href="/business-hub/vip-lounge" className="hover:underline">VIP Business Lounge</Link>
                </li>
                <li>/</li>
                <li>
                    <Link href="/business-hub/vip-lounge/collaboration-influence" className="hover:underline">Collaboration & Influence Zone</Link>
                </li>
                <li>/</li>
                <li>
                    <Link href="/business-hub/vip-lounge/collaboration-influence/thought-leadership-wall" className="hover:underline">Thought Leadership Wall</Link>
                </li>
                <li>/</li>
                <li className="text-[#696969] ">
                   Navigating Procurement Roles In Times Of Change
                </li>
            </ol>
        </nav>
    )
}

function page() {
    const partnerWithUs = [
        {
            id: 1,
            heading: "Partners hub",
            text: "",
            link: "",
            linkText: "View Details",
            bgColor: ""
        }
        ,
        {
            id: 2,
            heading: "Events hub",
            text: "",
            link: "",
            linkText: "View Details",
            bgColor: ""
        },
        {
            id: 3,
            heading: "Business hub",
            text: "",
            link: "",
            linkText: "View Details",
            bgColor: ""
        }
    ]

    return (
        <>
            <div>
                <HeroCTR
                    img="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/herosection.png"
                    heading={<span className='flex flex-col gap-0 leading-none'>
                        <span className="font-extrabold"> Navigating Procurement Roles in </span> Times of change
                    </span>}
                    para="In 2025, procurement evolves with AI-driven insights, blockchain transparency, sustainable sourcing, advanced analytics, and agile supply chains, shaping resilient and efficient strategies."
                />
                <Breadcrumb />
                <NavigatingProcurementCTR />
            </div>
            <PartnerWithUsComp data={partnerWithUs} />
        </>
    )
}

export default page