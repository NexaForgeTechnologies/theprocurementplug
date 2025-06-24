import Link from 'next/link'
import React from 'react'

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import MarketResearchCTR from '@/containers/business-hub/vip-lounge/exclusive-intelligence-reports/market-research/MarketResearchCTR'


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
                    <Link href="/business-hub/vip-lounge/exclusive-intelligence-reports" className="hover:underline">Exclusive Intelligent & Reports</Link>
                </li>
                <li>/</li>
                <li className="text-[#696969] ">
                    Market Research
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
                    img="/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/herosection.png"
                    heading={<span className='flex flex-col gap-0 leading-none'>
                        <span className="font-extrabold">Market
                        </span> Research
                    </span>}
                    para="Market research provides insights into customer
                    needs, trends, and competition—empowering
                    smarter business decisions and strategic growth."
                />
                <Breadcrumb />
                <MarketResearchCTR />
            </div>
            <PartnerWithUsComp data={partnerWithUs} />
        </>
    )
}

export default page
