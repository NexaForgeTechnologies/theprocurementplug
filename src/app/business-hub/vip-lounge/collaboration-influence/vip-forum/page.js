import Link from 'next/link'
import React from 'react'

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import CollaborationInfluenceCTR from '@/containers/business-hub/vip-lounge/collaboration-influence/vip-forum/VipForumCTR'


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
                    img="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/herosection.png"
                    heading={<span className='flex flex-col gap-0 leading-none'>
                        <span className="font-extrabold">VIP</span> Forum
                    </span>}
                    para="The VIP Forum is an exclusive space for high-level
                    discussions, idea exchange, and strategic insights
                    among top members, fostering meaningful
                    connections and impactful collaboration."
                />
                <Breadcrumb />
                <CollaborationInfluenceCTR />
            </div>

            <div className="relative">
                <div
                    style={{
                        backgroundImage: `url("/images/bussiness-hub/vip-lounge/partnerwithus.png")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        boxShadow: '#00000036 0px 0px 0px 100vmax',
                        clipPath: 'inset(0 -100vmax)',
                    }}
                    className="w-screen ml-[calc(50%-50vw)] h-full absolute top-0 left-0 -z-10"
                ></div>
                <div className="relative z-10 flex flex-col gap-6 md:gap-8 rounded-[8px] py-5 md:py-10 ">
                    <div className='max-w-[780px] m-auto text-center'>
                        <h3 className='font-semibold text-[32px] text-[#ffff]'>Partner With Us</h3>
                        <p className='text-[#ffff] text-sm md:text-base font-medium leading-normal md:leading-relaxed'><strong>partnerships@theprocurementplug.com</strong> - <Link className='font-light' href="/partnerships">Visit our partnership page</Link>
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                        {partnerWithUs?.map((content, idx) => (
                            <PartnerWithUsComp key={idx} data={content} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
