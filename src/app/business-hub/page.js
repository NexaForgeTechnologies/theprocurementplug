import BlogHeading from '@/components/blogs/BlogHeading'
import BusinesFeatureComp from '@/components/business-feature/BusinessFeatureComp'
import Link from 'next/link'
import React from 'react'

function page() {
    const businessFeatures = [
        {
            id: 1,
            heading: "Events",
            text: "Webinar - Seminar - Workshops - Networking Oppertunity",
            link: "",
            linkText: "View"
        },
        {
            id: 2,
            heading: "Consulting Partners",
            text: "Six Sigma & Change Management - Procurement - ESG2 Sustainability",
            link: "",
            linkText: "View"
        },
        {
            id: 3,
            heading: "Venue Partners",
            text: "Webinar - Seminar - Workshops - Networking Oppertunity",
            link: "",
            linkText: "View"
        },
        {
            id: 4,
            heading: "ProcureTech Solutions",
            text: "Webinar - Seminar - Workshops - Networking Oppertunity",
            link: "",
            linkText: "View"
        },
        {
            id: 5,
            heading: "Legal & Compliance",
            text: "Webinar - Seminar - Workshops - Networking Oppertunity",
            link: "",
            linkText: "View"
        },
        {
            id: 6,
            heading: "ESG Social Value",
            text: "ESG Lounge - (additional resources)",
            link: "",
            linkText: "View"
        }
    ]

    const businessFeaturesIbfo = [
        {
            id: 1,
            heading: "Prcurement Plug Academy",
            text: "",
            link: "",
            linkText: "Upskill Now"
        },
        {
            id: 2,
            heading: "Recruitment Services",
            text: "",
            link: "",
            linkText: "Find Talent"
        },
        {
            id: 3,
            heading: "Procurement Xec Plug",
            text: "",
            link: "",
            linkText: "Explore Membership"
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
                    {businessFeatures?.map((content, idx) => (
                        <BusinesFeatureComp key={idx} data={content} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-6 md:gap-8">
                <div className='max-w-[780px] m-auto text-center'>
                    <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]'>Partne With Us</h3>
                    <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'><strong>marketing@theprocurement.com</strong> - <Link href="/partnerships">Visit our partnership page</Link>
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded">
                    {businessFeaturesIbfo?.map((content, idx) => (
                        <BusinesFeatureComp key={idx} data={content} />
                    ))}
                </div>
            </div >
        </>
    )
}

export default page