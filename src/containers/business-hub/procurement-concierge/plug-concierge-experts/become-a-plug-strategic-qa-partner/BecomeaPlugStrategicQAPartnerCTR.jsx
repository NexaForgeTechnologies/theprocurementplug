"use client";

import React, { useState } from 'react';
import Link from "next/link";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import QaPartnerForm from '@/components/forms/business-hub/concierge/QaPartnerForm';


function Breadcrumb() {
    return (
        <nav className="text-sm breadcrumbs my-4 md:my-10">
            <ol className="list-reset flex gap-2 text-[#9C9C9C] whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <li>
                    <Link href="/business-hub" className="hover:underline">Business Hub</Link>
                </li>
                <li>/</li>
                <li>
                    <Link href="/business-hub/procurement-concierge" className="hover:underline">The Procurement Plug Concierge</Link>
                </li>
                <li>/</li>
                <li>
                    <Link href="/business-hub/procurement-concierge/plug-concierge-experts" className="hover:underline">Plug Concierge Experts</Link>
                </li>
                <li>/</li>
                <li className="text-[#696969]">
                    Become a Plug Strategic QA Partner
                </li>
            </ol>
        </nav>
    )
}

function BecomeaPlugStrategicQAPartnerCTR() {

    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

    // const partnerWithUs = [
    //     {
    //         id: 1,
    //         heading: "The Procurement Plug Academy",
    //         text: "",
    //         link: "",
    //         linkText: "View",
    //         bgColor: "#85009D"
    //     },
    //     {
    //         id: 2,
    //         heading: "Resources Library",
    //         text: "",
    //         link: "",
    //         linkText: "View",
    //         bgColor: "#85009D"
    //     },
    //     {
    //         id: 3,
    //         heading: "The Personal Development Hub",
    //         text: "",
    //         link: "",
    //         linkText: "View",
    //         bgColor: "#85009D"
    //     }
    // ]

    return (
        <>
            <div>
                <HeroCTR
                    img="/images/bussiness-hub/procurement-concierge/plug-concierge-experts/become-a-plug-strategic-qa-partner/herosection.png"
                    heading={
                        <span className="flex flex-col gap-0 leading-none">
                            <span className="font-extrabold">Become a Plug Strategic QA Partner</span>
                        </span>
                    }
                    para="Partner with Plug to elevate QA standards and ensure flawless
                    digital experiences."
                />
                <Breadcrumb />
                <h3 className="font-semibold text-2xl md:text-[32px] text-[#1B1B1B] mb-4">
                    Elevate Procurement Outcomes
                </h3>
                <p className="max-w-[1029px] font-semibold text-[20px] md:text-[24px] text-[#1B1B1B] mb-4">  Join our exclusive circle of Plug Strategic Quality Assurance Partners — senior experts
                    trusted to safeguard client deliverables at the highest level.</p>
                <p className=" text-[#1B1B1B] mb-4">
                    As a QA Partner, you’ll:
                </p>
                <div className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">Independently review complex deliverables before they reach the client.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">Validate that strategies are robust, aligned to governance and enterprise goals. </p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">Provide expert feedback that shapes outcomes and protects our brand promise.</p>
                    </div>
                </div>
            </div>

            <div
                style={{
                    boxShadow: "0 0 0 100vmax #FFFBF5",
                    clipPath: "inset(0 -100vmax)",
                }}
                className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#FFFBF5] py-6 md:py-10">
                <div className='w-full md:flex-1'>
                    <h3 className="text-2xl md:text-[42px] text-[#85009D]">
                        Who Should <strong>Apply?</strong>
                    </h3>
                </div>
                <div className='w-full md:flex-1'>
                    <div className="flex gap-2 md:gap-4 items-start md:items-center mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px] md:mt-0">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">12+ years in procurement, supply chain, or
                                strategic consulting.</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start md:items-center mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px] md:mt-0">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Demonstrated experience advising C-suite or
                                boards.</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start md:items-center mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px] md:mt-0">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Skilled in identifying gaps, risks, and opportunities
                                in procurement strategies, sourcing plans, or
                                transformation initiatives.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-2xl md:text-[32px] text-[#1B1B1B] mb-4">
                    Why Join?
                </h3>
                <div className="flex gap-2 md:gap-4 items-start md:items-center mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[4px] md:mt-0 shrink-0"></div>
                    <div>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">Earn premium fees for your strategic oversight.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start md:items-center mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[4px] md:mt-0 shrink-0"></div>
                    <div>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">Be recognised as part of a board-level quality circle.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start md:items-center">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[4px] md:mt-0 shrink-0"></div>
                    <div>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">Shape the direction of projects — without the full delivery workload.</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-2xl md:text-[32px] text-[#1B1B1B] mb-4">
                    How It Works
                </h3>
                <div className="flex gap-2 md:gap-4 items-start md:items-center mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[4px] md:mt-0 shrink-0"></div>
                    <div>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">Submit your application.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start md:items-center mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full  mt-[4px] md:mt-0 shrink-0"></div>
                    <div>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">Sign a Mutual NDA + QA Partner Agreement.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start md:items-center mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[4px] md:mt-0 shrink-0"></div>
                    <div>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">Complete a short calibration session to align on Plug standards.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start md:items-center mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[4px] md:mt-0 shrink-0"></div>
                    <div>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">Begin reviewing strategic deliverables on your schedule.</p>
                    </div>
                </div>
                <button
                    onClick={() => setIsJoinModalOpen(true)}
                    className="text-[12px] md:text-[16px] flex items-center cursor-pointer bg-[#B08D57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                    Apply to Become a Plug Strategic QA Partner
                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                </button>
            </div>

            {/* <PartnerWithUsComp data={partnerWithUs} /> */}
            <QaPartnerForm isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
        </>
    );
}

export default BecomeaPlugStrategicQAPartnerCTR;
