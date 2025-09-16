"use client";

import React, { useState } from 'react';

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import QaPartnerForm from '@/components/forms/concierge/QaPartnerForm';
import ReadyToWorkBannerComp from '@/components/concierge/ReadyToWorkBannerComp';
import Breadcrumb from '@/components/BreadCrumbs';

function BecomeaPlugStrategicQAPartnerCTR() {
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

    const qaPartnerPoints = [
        "Independently review complex deliverables before they reach the client.",
        "Validate that strategies are robust, aligned to governance and enterprise goals.",
        "Provide expert feedback that shapes outcomes and protects our brand promise."
    ];

    const whoShouldApply = [
        "12+ years in procurement, supply chain, or strategic consulting.",
        "Demonstrated experience advising C-suite or boards.",
        "Skilled in identifying gaps, risks, and opportunities in procurement strategies, sourcing plans, or transformation initiatives."
    ];

    const whyJoin = [
        "Earn premium fees for your strategic oversight.",
        "Be recognised as part of a board-level quality circle.",
        "Shape the direction of projects — without the full delivery workload."
    ];

    const howItWorks = [
        "Submit your application.",
        "Sign a Mutual NDA + QA Partner Agreement.",
        "Complete a short calibration session to align on Plug standards.",
        "Begin reviewing strategic deliverables on your schedule."
    ];

    return (
        <>
            <div>
                <HeroCTR
                    img="/images/concierge/plug-concierge-experts/become-a-plug-strategic-qa-partner/herosection.png"
                    heading={
                        <span className="flex flex-col gap-0 leading-none">
                            <span className="font-extrabold">Become a Plug Strategic QA Partner</span>
                        </span>
                    }
                    para="Partner with Plug to elevate QA standards and ensure flawless
                    digital experiences."
                />
                <Breadcrumb />
                <h3 className="font-semibold text-lg md:text-2xl text-[#1B1B1B] mb-4">
                    Elevate Procurement Outcomes
                </h3>
                <p className="max-w-[1029px] font-semibold text-lg md:text-2xl text-[#1B1B1B] mb-4">
                    Join our exclusive circle of Plug Strategic Quality Assurance Partners — senior experts
                    trusted to safeguard client deliverables at the highest level.
                </p>
                <p className="text-[#1B1B1B] mb-4">As a QA Partner, you’ll:</p>

                {qaPartnerPoints.map((text, idx) => (
                    <div key={idx} className={`flex gap-2 md:gap-4 items-start ${idx !== qaPartnerPoints.length - 1 ? "mb-4" : ""}`}>
                        <div className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                        <div>
                            <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">{text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div
                style={{
                    boxShadow: "0 0 0 100vmax #FFFBF5",
                    clipPath: "inset(0 -100vmax)",
                }}
                className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#FFFBF5] py-6 md:py-10"
            >
                <div className="w-full md:flex-1">
                    <h3 className="font-medium text-xl md:text-3xl text-[#85009D]">
                        Who Should <strong>Apply?</strong>
                    </h3>
                </div>
                <div className="w-full md:flex-1">
                    {whoShouldApply.map((text, idx) => (
                        <div key={idx} className="flex gap-2 md:gap-4 items-start md:items-center mb-4">
                            <div className="font-semibold text-[#B08D57] text-lg md:text-2xl mt-[4px] md:mt-0">✓</div>
                            <div>
                                <p className="text-sm md:text-lg text-[#1B1B1B]">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-lg md:text-2xl text-[#1B1B1B] mb-4">Why Join?</h3>
                {whyJoin.map((text, idx) => (
                    <div key={idx} className={`flex gap-2 md:gap-4 items-start md:items-center ${idx !== whyJoin.length - 1 ? "mb-4" : ""}`}>
                        <div className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                        <div>
                            <p className="max-w-[872px] text-sm md:text-lg text-[#1B1B1B]">{text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <h3 className="font-semibold text-lg md:text-2xl text-[#1B1B1B] mb-4">How It Works</h3>
                {howItWorks.map((text, idx) => (
                    <div key={idx} className="flex gap-2 md:gap-4 items-start md:items-center mb-4">
                        <div className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                        <div>
                            <p className="max-w-[872px] text-sm md:text-lg text-[#1B1B1B]">{text}</p>
                        </div>
                    </div>
                ))}
                <button
                    onClick={() => setIsJoinModalOpen(true)}
                    className="text-[12px] md:text-[16px] flex items-center cursor-pointer bg-[#B08D57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto"
                >
                    Apply to Become a Plug Strategic QA Partner
                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                </button>
            </div>

            <ReadyToWorkBannerComp
                title={"Ready to Work Together?"}
                description={"Let’s build a better procurement function – task by task, strategy by strategy."}
                link1={"concierge@theprocurementplug.com"}
                link2={"Concierge.expert@theprocurementplug.com"}
                btnText1={"Download Pricing & Package Sheet"}
                btnText2={"Book a Discovery Call"}
                Btnlink1={"/"}
                Btnlink2={
                    "https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile"
                }
            />
            <QaPartnerForm isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
        </>
    );
}

export default BecomeaPlugStrategicQAPartnerCTR;
