import Link from 'next/link'
import React from 'react'

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import AchieveMeterBetaCTR from '@/containers/business-hub/vip-lounge/talent-hiring-intelligence/achieveMeter-beta/AchieveMeterBetaCTR'


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
                    <Link href="/business-hub/vip-lounge/talent-hiring-intelligence" className="hover:underline">Talent & Hiring Intelligence</Link>
                </li>
                <li>/</li>
                <li className="text-[#696969] ">
                    AchieveMeter (Beta)
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
                    img="/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/achieveMeter-beta/herosection.png"
                    heading={<span className='flex flex-col gap-0 leading-none'>
                        <span className="font-extrabold">AchieveMeter (Beta)
                        </span>
                    </span>}
                    para="Measure goals, track progress, and
                    stay on target with real-time insights
                    now available in beta."
                />
                <Breadcrumb />
                <AchieveMeterBetaCTR />
            </div>
            <PartnerWithUsComp data={partnerWithUs} />
        </>
    )
}

export default page
