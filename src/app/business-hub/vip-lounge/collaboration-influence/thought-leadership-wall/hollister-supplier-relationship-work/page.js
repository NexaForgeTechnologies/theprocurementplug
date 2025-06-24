import Link from 'next/link'
import React from 'react'

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import HollisterSupplierRelationshipCTR from '@/containers/business-hub/vip-lounge/collaboration-influence/thought-leadership-wall/hollister-supplier-relationship-work/HollisterSupplierRelationshipCTR'


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
                    Hollister Supplier Relationship work
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
                        <span className="font-extrabold">Hollister Supplier Relationship work</span>
                    </span>}
                    para="Hollister's supplier relationships thrive with AI, blockchain, and analytics, fostering collaboration, transparency, and efficiency for adaptable, resilient procurement."
                />
                <Breadcrumb />
                <HollisterSupplierRelationshipCTR />
            </div>
            <PartnerWithUsComp data={partnerWithUs} />
        </>
    )
}

export default page