"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useVenueStore } from "@/store/venueStore";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import RequestDemoForm from "@/components/business-hub/venue-partner/RequestDemoForm";

function Breadcrumb() {
    return (
        <nav className="text-sm breadcrumbs my-4 md:my-10">
            <ol className="list-reset flex gap-2 text-[#9C9C9C] whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <li>
                    <Link href="/business-hub" className="hover:underline">Business Hub</Link>
                </li>
                <li>/</li>
                <li>
                    <Link href="/business-hub/venue-partner" className="hover:underline">Venue Partners</Link>
                </li>
                <li>/</li>
                <li className="text-[#696969]">
                    Overview
                </li>
            </ol>
        </nav>
    )
}

function page() {
    const venue = useVenueStore((state) => state.venue);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const partnerWithUs = {
        Partnerheader: {
            crossSellh3: "Cross Sell the Collaboration and Thought Leadership Zone",
            h3: "",
            p: ""
        },
        items: [
            {
                id: 1,
                heading: "The Procurement Plug Academy",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: "#85009D"
            },
            {
                id: 2,
                heading: "Resources Library",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: "#85009D"
            },
            {
                id: 3,
                heading: "The Personal Development Hub",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: "#85009D"
            }
        ]
    };

    return (
        <>
            <div>
                <HeroCTR
                    img="/images/bussiness-hub/venue-partner/herosection.png"
                    heading={
                        <span className="flex flex-col gap-0 leading-none">
                            <span className="font-extrabold">Venue Partners</span>
                        </span>
                    }
                    para="Explore handpicked venues ideal for procurement
                    events, conferences, and workshops—designed to
                    meet your professional needs with the right
                    capacity and amenities."
                />
                <Breadcrumb />
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
                    Venue Partners overview
                </h3>
                <Image
                    className="w-full h-[200px] md:h-[451px] object-cover mb-4"
                    src="/images/bussiness-hub/venue-partner/venue-partner-detail/mainimg.png"
                    alt="Venue Partner Image"
                    width={1140}
                    height={451}
                />
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#85009D]">{venue.name}</h2>
                <p className="text-[#1B1B1B] text-base group-hover:text-white">{venue.location}</p>
                <p className="text-[#1B1B1B] text-base group-hover:text-white mt-2">{venue.capacity_name} Capacity</p>
            </div>
            <div>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
                    Overview
                </h3>
                <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mb-4">
                    {venue.overview}
                </p>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-[auto]">
                    Request Quote
                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                </button>
            </div>
            <div>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
                    Location
                </h3>
                <Image
                    className="w-full h-[200px] md:h-[451px] object-cover"
                    src="/images/bussiness-hub/venue-partner/venue-partner-detail/map.png"
                    alt="Venue Partner Image"
                    width={1140}
                    height={451}
                />
            </div>
            <div
                className="bg-[#FBE3FF] pt-6 pb-10 md:pt-10 md:pb-10 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8"
                style={{
                    boxShadow: "0 0 0 100vmax #FBE3FF",
                    clipPath: "inset(0 -100vmax)",
                }}
            >
                <h2 className="font-medium max-w-[700px] text-3xl md:text-5xl text-[#85009D]">
                    <strong>Testimonials</strong>
                </h2>
                <div className="relative w-full max-w-xl  bg-[#FFF9F5] border border-[#85009D] rounded-3xl p-6 text-[#1b1b1b]">
                    <span className="absolute top-4 md:top-0 left-4 text-4xl md:text-8xl text-[#85009D] font-semibold">”</span>
                    <p className="mt-6 md:text-2xl leading-relaxed">
                        {venue.testimonials}
                    </p>
                    <div className="absolute -bottom-[30px] right-10 w-0 h-0 border-r-[40px] border-r-transparent border-t-[30px] border-t-[#85009D]"></div>
                    <div className="absolute -bottom-[28px] right-[41.5px] w-0 h-0 border-r-[39px] border-r-transparent border-t-[29px] border-t-[#FFF9F5]"></div>
                </div>
            </div >

            <PartnerWithUsComp data={partnerWithUs} />
            <RequestDemoForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

export default page;
