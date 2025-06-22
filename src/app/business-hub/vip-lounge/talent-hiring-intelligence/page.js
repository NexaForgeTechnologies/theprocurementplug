import Link from 'next/link'
import React from 'react'

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import TalentHiringIntelligenceCTR from '@/containers/business-hub/vip-lounge/talent-hiring-intelligence/TalentHiringIntelligenceCTR'
import ArrowButtonCom from '@/components/buttons/ArrowButtonCom'


function Breadcrumb() {
    return (
        <nav className="text-sm breadcrumbs my-4 md:my-10">
            <ol className="list-reset flex gap-2 text-[#9C9C9C] whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <li>
                    <Link href="/business-hub" className="hover:underline">Business Hub</Link>
                </li>
                <li>/</li>
                <li>
                    <Link href="/business-hub/vip-lounge" className="hover:underline">Vip Lounge</Link>
                </li>
                <li>/</li>
                <li className="text-[#696969] ">
                    Talent & Hiring Intelligence
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
                    img="/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/herosection.png"
                    heading={<span className='flex flex-col gap-0 leading-none'>
                        <span className="font-extrabold">Talent & Hiring
                        </span> Intelligence
                    </span>}
                    para="Talent & Hiring Intelligence uses smart
                    data to find top talent, streamline hiring, 
                    and build stronger teams faster."
                />
                <Breadcrumb />
                <TalentHiringIntelligenceCTR />
            </div>
            <div
                className="bg-[#FBE3FF] py-6 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8"
                style={{
                    boxShadow: "0 0 0 100vmax #FBE3FF",
                    clipPath: "inset(0 -100vmax)",
                }}
            >
                <h2 className="font-medium max-w-[700px] text-3xl md:text-5xl text-[#85009D]">
                    Want access to <strong>Premium talent</strong>,
                    research and promotion
                </h2>
                <div className="min-w-[200px]">
                    <ArrowButtonCom text="Become a Talent Partner" />
                </div>
            </div>
            <PartnerWithUsComp data={partnerWithUs} />
        </>
    )
}

export default page
