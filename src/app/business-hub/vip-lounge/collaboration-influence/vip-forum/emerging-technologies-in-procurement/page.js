import Link from 'next/link'
import React from 'react'

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import EmergingTechnologiesProcurementCTR from '@/containers/business-hub/vip-lounge/collaboration-influence/vip-forum/emerging-technologies-in-procurement/EmergingTechnologiesProcurementCTR'


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
                    <Link href="/business-hub/vip-lounge/collaboration-influence/vip-forum" className="hover:underline">VIP Forum</Link>
                </li>
                <li>/</li>
                <li className="text-[#696969] ">
                    Emerging Technologies in Procurement
                </li>
            </ol>
        </nav>
    )
}

function page() {
    const partnerWithUs = {
        Partnerheader: {
            h3: "Partner With Us",
            p: (
                <>
                    <a
                        href="mailto:partnerships@theprocurementplug.com"
                        className="font-semibold text-white hover:underline"
                    >
                        partnerships@theprocurementplug.com
                    </a> -{' '}
                    <Link className="font-light" href="/partnerships">
                        Visit our partnership page
                    </Link>
                </>
            )
        },
        items: [
            {
                id: 1,
                heading: "Partners hub",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: ""
            },
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
    }

    return (
        <>
            <div>
                <HeroCTR
                    img="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/herosection.png"
                    heading={<span className='flex flex-col gap-0 leading-none'>
                        <span className="font-extrabold">Emerging Technologies in Procurement</span>
                    </span>}
                    para="AI, blockchain, and analytics are transforming procurement, boosting efficiency and adaptability. These technologies help businesses cut risks and respond swiftly to market shifts, ensuring a resilient supply chain."
                />
                <Breadcrumb />
                <EmergingTechnologiesProcurementCTR />
            </div>
            <PartnerWithUsComp data={partnerWithUs} />
        </>
    )
}

export default page