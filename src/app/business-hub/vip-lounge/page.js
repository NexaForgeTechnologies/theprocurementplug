import Link from 'next/link'
import React from 'react'

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import VIPLoungeCTR from '@/containers/business-hub/vip-lounge/VipLoungeCTR'


function Breadcrumb() {
    return (
        <nav className="text-sm breadcrumbs my-6 md:my-10">
            <ol className="list-reset flex gap-2 text-gray-600 whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <li>
                    <Link href="/business-hub" className="hover:underline">Business Hub</Link>
                </li>
                <li>/</li>
                <li className="text-[#696969]">
                    VIP Business Lounge
                </li>
            </ol>
        </nav>
    )
}

function page() {

    const partnerWithUs = [
        {
            id: 1,
            heading: "Procure Tech Solution",
            text: "",
            link: "",
            linkText: "View Details",
            bgColor: ""
        }
        ,
        {
            id: 2,
            heading: "PTX",
            text: "",
            link: "",
            linkText: "View Details",
            bgColor: ""
        },
        {
            id: 3,
            heading: "Xec Plug",
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
                    img="/images/bussiness-hub/vip-lounge/herosection.png"
                    heading={<span className='flex flex-col gap-0 leading-none'>
                        <span className="font-extrabold">VIP BUSINESS Lounge</span>
                    </span>}
                    para="A VIP Business Lounge offers a quiet, comfortable space
                with premium services like Wi-Fi, refreshments, and
                workstations—perfect for business travelers to relax
                or work before their flight."
                />
                <Breadcrumb />
                <VIPLoungeCTR />

            </div>
            <PartnerWithUsComp data={partnerWithUs} />
        </>
    )
}

export default page
