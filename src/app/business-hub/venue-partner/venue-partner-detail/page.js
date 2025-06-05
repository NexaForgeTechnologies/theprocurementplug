"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RequestDemoForm from "@/components/business-hub/venue-partner/RequestDemoForm";
import PartnerWithUsComp from '@/components/partner-with-us/PartnerWithUsComp'

function Breadcrumb() {
    return (
        <nav className="text-sm breadcrumbs mb-4">
            <ol className="list-reset flex gap-2 text-gray-600">
                <li>
                    <Link href="/business-hub" className="hover:underline">Business Hub</Link>
                </li>
                <li>/</li>
                <li className="text-gray-900 font-semibold">
                    Venue Partner Detail
                </li>
            </ol>
        </nav>
    )
}

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const partnerWithUs = [
        {
            id: 1,
            heading: "The Prcurement Plug Academy",
            text: "",
            link: "",
            linkText: "View",
            bgColor: "#85009D"
        },
        {
            id: 2,
            heading: "Resources Library",
            text: "",
            link: "",
            linkText: "View",
            bgColor: "#85009D"
        },
        {
            id: 3,
            heading: "The Personal Development Hub",
            text: "",
            link: "",
            linkText: "View",
            bgColor: "#85009D"
        }
    ]

    return (
        <>
            <div>
                <Breadcrumb />
                <div className="max-w-3xl m-auto text-left text-[#85009D] mb-20 md:mb-28">
                    <h1 className="text-center mb-4 text-3xl md:text-4xl font-extrabold text-[#85009D]">
                        Partner Venue
                    </h1>
                    <Image
                        className="w-full h-[300px] object-cover mb-4"
                        src="/images/blogs/blog-1/relationships.webp"
                        alt="Venue Partner Image"
                        width={768}
                        height={288}
                    />
                    <p className="font-bold text-[#85009D] mb-4">
                        Location   Capacity:Up to 50
                    </p>
                    <div className="flex items-center mb-4 gap-2">
                        <p className="font-bold text-sm text-[#85009D] border border-[#85009D] px-2 py-1 rounded">
                            Amenity
                        </p>
                        <p className="font-bold text-sm text-[#85009D] border border-[#85009D] px-2 py-1 rounded">
                            Amenity
                        </p>
                        <p className="font-bold text-sm text-[#85009D] border border-[#85009D] px-2 py-1 rounded">
                            . .
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">
                            Overview
                        </h2>
                        <p className="text-[#010101] mb-4 md:mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus quo animi doloribus odio unde vero voluptatibus, laborum officia nisi exercitationem
                        </p>
                        <div className="flex items-center flex-col md:flex-row text-center gap-4 justify-between mb-4 md:mb-8">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-2">
                                    Floorplan
                                </h2>
                                <p className="text-[#85009D]">
                                    Download PDF
                                </p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#b58c4a] text-white px-6 py-3 rounded"
                            >
                                Request Quote
                            </button>
                        </div>
                        <div className="mb-4 md:mb-8">
                            <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">Location</h2>
                            <Image
                                className="h-[300px] object-cover mb-4 rounded border border-[#85009D] overflow-hidden"
                                src="/images/map/map.jpg"
                                alt="Venue Partner Image"
                                width={768}
                                height={263}
                            />
                        </div>

                        <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">
                            Testimonials
                        </h2>
                        <div className="flex items-start gap-2 text-[#010101]">
                            <span className="text-5xl text-[#85009D] leading-none">“</span>
                            <p>
                                The team exceeded our expectations with their dedication and attention to detail. From planning to execution, everything was handled with the utmost professionalism.
                            </p>
                        </div>
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
                </div>
            </div>
            <RequestDemoForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

export default Page
