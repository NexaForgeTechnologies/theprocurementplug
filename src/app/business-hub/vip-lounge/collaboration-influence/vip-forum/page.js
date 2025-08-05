import Link from 'next/link'
import React from 'react'

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import VipForumCTR from '@/containers/business-hub/vip-lounge/collaboration-influence/vip-forum/VipForumCTR'

import ToastHandler from '@/components/ToasterProvider'

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
                    <Link href="/business-hub/vip-lounge/collaboration-influence" className="hover:underline"> Collaboration & Influence Zone</Link>
                </li>
                <li>/</li>
                <li className="text-[#696969] ">
                    VIP Forum
                </li>
            </ol>
        </nav>
    )
}

async function Page({searchParams}) {
    const params=await searchParams;
   
   

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
        { params?.status && <ToastHandler status={params.status}/>}
            <div>
                <HeroCTR
                    img="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/herosection.png"
                    heading={<span className='flex flex-col gap-0 leading-none'>
                        <span className="font-extrabold">VIP Forum</span>
                    </span>}
                    para="The VIP Forum is an exclusive space for high-level
                    discussions, idea exchange, and strategic insights
                    among top members, fostering meaningful
                    connections and impactful collaboration."
                />
                <Breadcrumb />
                <VipForumCTR />
            </div>
            <PartnerWithUsComp data={partnerWithUs} />
        </>
    )
}

export default Page
