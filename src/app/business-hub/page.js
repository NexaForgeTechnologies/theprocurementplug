import Link from 'next/link'
import React from 'react'

import BlogHeading from '@/components/blogs/BlogHeading'
import BusinesFeatureComp from '@/components/business-feature/BusinessFeatureComp'
import PartnerWithUsComp from '@/components/partner-with-us/PartnerWithUsComp'

export const metadata = {
    title: 'Business Hub',
    description: 'Exclusive Business Hub',
    openGraph: {
        title: 'Business Hub',
        description: 'Exclusive Business Hub',
        images: [
            {
                url: 'https://theprocurementplug.com/images/og/main.png',
                width: 1200,
                height: 630,
                alt: 'Home',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Business Hub',
        description: 'Exclusive Business Hub',
        images: ['https://theprocurementplug.com/images/og/main.png'],
    },
};

function page() {
    const businessFeatures = [
        {
            id: 1,
            heading: "Events",
            text: "Webinar - Seminar - Workshops - Networking Oppertunity",
            link: "/event",
            linkText: "View",
            bgColor: ""
        },
        {
            id: 2,
            heading: "Consulting Partners",
            text: "Six Sigma & Change Management - Procurement - ESG2 Sustainability",
            link: "/business-hub/consulting-partner",
            linkText: "View",
            bgColor: ""
        },
        {
            id: 3,
            heading: "Venue Partners",
            text: "Webinar - Seminar - Workshops - Networking Oppertunity",
            link: "/business-hub/venue-partner",
            linkText: "View",
            bgColor: ""
        },
        {
            id: 4,
            heading: "ProcureTech Solutions",
            text: "Webinar - Seminar - Workshops - Networking Oppertunity",
            link: "/business-hub/procuretech-solution",
            linkText: "View",
            bgColor: ""
        },
        {
            id: 5,
            heading: "Legal & Compliance",
            text: "Webinar - Seminar - Workshops - Networking Oppertunity",
            link: "/business-hub/legal-compliance",
            linkText: "View",
            bgColor: ""
        },
        {
            id: 6,
            heading: "ESG Social Value",
            text: "ESG Lounge - (additional resources)",
            link: "/business-hub/esg-social-value",
            linkText: "View",
            bgColor: ""
        },
        {
            id: 7,
            heading: "VIP Lounge",
            text: "ESG Lounge - (additional resources)",
            link: "/business-hub/vip-lounge",
            linkText: "View",
            bgColor: "#363636"
        }
    ]

    const partnerWithUs = [
        {
            id: 1,
            heading: "The Prcurement Plug Academy",
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
            <BlogHeading
                img="/images/home/tiles/tile-3.png"
                heading="Welcome to The Procurement Plug Business Hub"
                name="Empowering Procurement Professionals"
                date="Businesses"
                comment="Cutting-Edge Technologies"
            />

            <div className="flex flex-col gap-6 md:gap-8">
                <div className='max-w-[780px] m-auto text-center'>
                    <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]'>Exclusive Business Hub Features</h3>
                    <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'><strong>Procurement Strategy & Transformation - </strong>Improve procure-mentorations with data-driven strategies and best practices. <strong>Market Research - </strong>Access industry reports and analytics make informed business decisions. <strong>Sustainability & ESG Initiatives - </strong>Drive ethical and sustainable procurement practices aligned with gbual standards.<strong> Legal & Complince - </strong>Strengthen procurement governance with research-led risk assessment and mitigation strategies.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {businessFeatures?.map((content, idx) => {
                        const isLast = idx === businessFeatures.length - 1;
                        return (
                            <div
                                key={idx}
                                className={`h-full ${isLast ? 'md:col-span-3 sm:col-span-2 col-span-1' : ''}`}
                            >
                                <BusinesFeatureComp data={content} />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-6 md:gap-8">
                <div className='max-w-[780px] m-auto text-center'>
                    <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#85009D]'>Partner With Us</h3>
                    <p className='text-[#85009D] text-sm md:text-lg leading-normal md:leading-relaxed'><strong>partnerships@theprocurementplug.com</strong> - <Link href="/partnerships">Visit our partnership page</Link>
                    </p>
                </div>
                <div className="bg-[#85009D] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-[8px] p-5 md:p-10 ">
                    {partnerWithUs?.map((content, idx) => (
                        <PartnerWithUsComp key={idx} data={content} />
                    ))}
                </div>
            </div >
        </>
    )
}

export default page
