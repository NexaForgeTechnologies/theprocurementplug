"use client";

import React, { useState } from 'react';
import Link from "next/link";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import PricingPlanTile from '@/components/business-hub/procurement-concierge/pricing-plan/PricingPlanTile';
import ExpertForm from "@/components/business-hub/procurement-concierge/pricing-plan/ExpertForm";

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
                <li className="text-[#696969]">
                    Pricing Plan
                </li>
            </ol>
        </nav>
    )
}

function PricingPlanCTR() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const tagStyles = {
        "Plug lite": { bgColor: "#EAC6FF", textColor: "#85009D" },
        "Plug Prime": { bgColor: "#B08D57", textColor: "#FFFFFF" },
        "Plug Elite": { bgColor: "#85009D", textColor: "#FFFFFF" },
        "Plug task pass": { bgColor: "#EFCB91", textColor: "#85009D" },
    };

    const pricingplan = [
        {
            id: 1,
            tag: "Plug lite",
            heading: "£21,300",
            credit: "Credits",
            creditvalue: "8",
            name: "Rollover Grace",
            data: "Up to 2 credit",
            workingday: "Working days SLA",
            workingdayvalue: "≤  5 days",
            btntext: "Select",
            url: "",
            isAnnual: true,
        },
        {
            id: 2,
            tag: "Plug Prime",
            heading: "£42,000",
            credit: "Credits",
            creditvalue: "16",
            name: "Rollover Grace",
            data: "Up to 3 credit",
            workingday: "Working days SLA",
            workingdayvalue: "≤  5 days",
            btntext: "Select",
            url: "",
            isAnnual: true,
        },
        {
            id: 3,
            tag: "Plug Elite",
            heading: "£73,900",
            credit: "Credits",
            creditvalue: "30",
            name: "Rollover Grace",
            data: "Up to 5 credit",
            workingday: "Working days SLA",
            workingdayvalue: "≤  5 days",
            btntext: "Select",
            url: "",
            isAnnual: true,
        },
        {
            id: 4,
            tag: "Plug task pass",
            heading: "£3,250",
            credit: "Light task only",
            creditvalue: "",
            name: "One off",
            data: "",
            workingday: "Working days SLA",
            workingdayvalue: "≤  5 days",
            btntext: "Select",
            url: "",
            isAnnual: false,
        }
    ];

    const partnerWithUs = [
        {
            id: 1,
            heading: "The Procurement Plug Academy",
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
                <HeroCTR
                    img="/images/bussiness-hub/procurement-concierge/pricing-plan/herosection.png"
                    heading={
                        <span className="flex flex-col gap-0 leading-none">
                            <span className="font-extrabold">Pricing Plan</span>
                        </span>
                    }
                    para="Choose the plan that fits your needs—Lite, Prime, Elite,
                    or Task Pass. Each offers flexible credits, rollover options,
                    and extra task support. Upgrade anytime and only
                    pay for what you use."
                />
                <Breadcrumb />
                <h3 className="text-center font-semibold text-2xl md:text-[32px] text-[#1B1B1B] mb-4">
                    Pricing Plan
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {pricingplan.length > 0 ? (
                        pricingplan.map((plan) => (
                            <PricingPlanTile
                                key={plan.id}
                                tag={plan.tag}
                                heading={plan.heading}
                                credit={plan.credit}
                                creditvalue={plan.creditvalue}
                                name={plan.name}
                                data={plan.data}
                                workingday={plan.workingday}
                                workingdayvalue={plan.workingdayvalue}
                                btntext={plan.btntext}
                                url={plan.url}
                                bgColor={tagStyles[plan.tag].bgColor}
                                textColor={tagStyles[plan.tag].textColor}
                                isAnnual={plan.isAnnual}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500">
                            No consultant found matching your criteria.
                        </div>
                    )}
                </div>
            </div>


            <div className='flex flex-col items-center justify-center gap-4'>
                <h3 className="text-center font-semibold text-2xl md:text-[32px] text-[#1B1B1B]">
                    Additional Tasks
                </h3>
                <input
                    type="text"
                    id="credits"
                    name="credits"
                    placeholder="Buy Extra Credits"
                    className="w-full md:max-w-[538px] mx-auto p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                />
                <p className='md:text-[20px] text-[#1B1B1B]'><span className='font-semibold'>Sign In</span> or <span className='font-semibold'>Register</span> to begin using your plan.</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Register your Interest
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
            </div>



            <PartnerWithUsComp data={partnerWithUs} />
            <ExpertForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

export default PricingPlanCTR;
