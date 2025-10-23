"use client";

import React, { useState } from "react";
import Image from "next/image";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import RequestDemoForm from "@/components/business-hub/legal-compliance/RequestDemoForm";
import Breadcrumb from "@/components/BreadCrumbs";
import { useLegalStore } from "@/store/LegalComplianceStore";

function ConsultantPartnerCTR() {
    const legal = useLegalStore((state) => state.legal);
    const [isModalOpen, setIsModalOpen] = useState(false);
    if (!legal) {
        return (
            <div className="max-w-[1200px] m-auto text-center p-8">
                <h1 className="font-extrabold text-4xl md:text-6xl mb-6 text-[#010101]">
                    Featured Practitioners & Firms Not Found
                </h1>
            </div>
        );
    }


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
                    img="/images/bussiness-hub/legal-compliance/herosection.png"
                    heading={
                        <span className="flex flex-col gap-0 leading-none">
                            <span className="font-extrabold">Legal & Compliance</span>
                        </span>
                    }
                    para="Source-to-Contract (S2C) streamlines the procurement
                    process from supplier sourcing to contract signing, helping
                    businesses save time, reduce risks, and improve compliance."
                />
                <Breadcrumb />
                <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-4 md:gap-0">
                    <div className="w-full md:w-auto">
                        <h1 className="text-3xl md:text-[52px] font-semibold text-[#85009D]">
                            {legal.name}
                        </h1>
                        <span className="text-[#F89800] text-2xl md:text-[63px]">
                            ★★★★
                        </span>
                        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                            Overview
                        </h3>
                        <p className="max-w-[553px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
                            {legal.overview}
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                                Request Consultation
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </button>
                            <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                                Contact
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </button>
                            <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#85009D] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                                Download T&Cs
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full md:w-auto">
                        <Image
                            className="rounded-full w-[200px] md:w-[300px] h-[200px] md:h-[300px] object-cover"
                            src={legal.img || "/images/default-circle.png"}
                            alt={"member"}
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
                    Jurisdictional Coverage
                </h3>
                <div className="text-[#85009D] flex gap-2 items-center mb-4">
                    <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl">UK</p>
                    <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl">EU</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center">
                    <Image
                        className="w-[200px] md:w-[321px] md:h-[103px] object-contain"
                        src={"/images/bussiness-hub/legal-compliance/brand1.png"}
                        alt={"member"}
                        width={321}
                        height={103}
                    />
                    <Image
                        className="w-[200px] md:w-[321px] md:h-[103px] object-contain"
                        src={"/images/bussiness-hub/legal-compliance/brand2.png"}
                        alt={"member"}
                        width={321}
                        height={103}
                    />
                    <Image
                        className="w-[200px] md:w-[321px] md:h-[103px] object-contain"
                        src={"/images/bussiness-hub/legal-compliance/brand3.png"}
                        alt={"member"}
                        width={321}
                        height={103}
                    />
                </div>
            </div>

            <div className="text-[#85009D]">
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
                    Practice Areas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center font-semibold">
                    <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl">Commercial Law</p>
                    <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl">Employment</p>
                    <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl">Data Protection</p>
                    <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl">Compliance</p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
                    Services
                </h3>
                <div className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Align with execs by challenge, industry, or investment type</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">In-house counsel programs</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Contract review</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4 md:mb-8">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Policy drafting</p>
                    </div>
                </div>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
                    Sample Templates
                </h3>
                <div className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Master Services Agreement</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Data Processing Addendum</p>
                    </div>
                </div>
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
                    <p>
                        &quot;The team exceeded our expectations with their
                        dedication and attention to detail. From planning
                        to execution, everything was handled with the
                        utmost professionalism.&quot;
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

export default ConsultantPartnerCTR;
