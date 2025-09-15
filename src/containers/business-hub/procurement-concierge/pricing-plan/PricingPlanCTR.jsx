"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PricingPlanTile from '@/components/business-hub/procurement-concierge/pricing-plan/PricingPlanTile';
import RegisterInterestForm from "@/components/forms/business-hub/concierge/RegisterInterestForm";
import Breadcrumb from '@/components/BreadCrumbs';

function PricingPlanCTR() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const tagStyles = {
        "Plug lite": { bgColor: "#EAC6FF", textColor: "#85009D" },
        "Plug Prime": { bgColor: "#B08D57", textColor: "#FFFFFF" },
        "Plug Single Task": { bgColor: "#EAC6FF", textColor: "#85009D" },
        "Plug Strategic": { bgColor: "#B08D57", textColor: "#FFFFFF" },
        "Plug QA Reviews": { bgColor: "#85009D", textColor: "#FFFFFF" },
        "Plug Fractional CPO": { bgColor: "#EFCB91", textColor: "#85009D" },
        "Plug Concierge+": { bgColor: "#85009D", textColor: "#FFFFFF" },
        "Advisory Call": { bgColor: "#EAC6FF", textColor: "#85009D" },
    };

    const pricingplan = [
        {
            id: 1,
            tag: "Plug lite",
            // heading: "£21,300",
            credit: "Credits",
            creditvalue: "8",
            name: "Rollover Grace",
            data: "Up to 2 credit",
            workingday: "Working days SLA",
            workingdayvalue: "≤  5 days",
            btntext: "Register your interest",
            url: "",
            // isAnnual: true,
        },
        {
            id: 2,
            tag: "Plug Prime",
            // heading: "£42,000",
            credit: "Credits",
            creditvalue: "16",
            name: "Rollover Grace",
            data: "Up to 3 credit",
            workingday: "Working days SLA",
            workingdayvalue: "≤  5 days",
            btntext: "Register your interest",
            url: "",
            // isAnnual: true,
        },
        {
            id: 3,
            tag: "Plug Single Task",
            // heading: "£73,900",
            credit: "Credits",
            creditvalue: "30",
            name: "Rollover Grace",
            data: "Up to 5 credit",
            workingday: "Working days SLA",
            workingdayvalue: "≤  5 days",
            btntext: "Register your interest",
            url: "",
            // isAnnual: true,
        },
        {
            id: 4,
            tag: "Plug Strategic",
            // heading: "£3,250",
            credit: "Credits",
            creditvalue: "8",
            name: "Rollover Grace",
            data: "Up to 2 credit",
            workingday: "Working days SLA",
            workingdayvalue: "≤  5 days",
            btntext: "Register your interest",
            url: "",
            // isAnnual: false,
        },
        {
            id: 5,
            tag: "Plug QA Reviews",
            // heading: "£3,250",
            credit: "Credits",
            creditvalue: "16",
            name: "Rollover Grace",
            data: "Up to 3 credit",
            workingday: "Working days SLA",
            workingdayvalue: "≤  5 days",
            btntext: "Register your interest",
            url: "",
            // isAnnual: false,
        },
        {
            id: 6,
            tag: "Plug Fractional CPO",
            // heading: "£3,250",
            credit: "Credits",
            creditvalue: "30",
            name: "Rollover Grace",
            data: "Up to 5 credit",
            workingday: "Working days SLA",
            workingdayvalue: "≤  5 days",
            btntext: "Register your interest",
            url: "",
            // isAnnual: false,
        },
        {
            id: 7,
            tag: "Plug Concierge+",
            // heading: "£3,250",
            credit: "Credits",
            creditvalue: "8",
            name: "Rollover Grace",
            data: "Up to 2 credit",
            workingday: "Working days SLA",
            workingdayvalue: "≤  5 days",
            btntext: "Register your interest",
            url: "",
            // isAnnual: false,
        },
        {
            id: 8,
            tag: "Advisory Call",
            // heading: "£3,250",
            credit: "Hourly",
            creditvalue: "8",
            name: "Rollover Grace",
            data: "Up to 2 credit",
            workingday: "Working days SLA",
            workingdayvalue: "≤  5 days",
            btntext: "Register your interest",
            url: "",
            // isAnnual: false,
        }
    ];

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
                    Investment Plans
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-7">
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
                                onRegister={() => setIsModalOpen(true)}
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
            <div
                className="relative flex flex-col gap-6 md:gap-8 py-5"
                style={{
                    width: "100vw",
                    left: "50%",
                    right: "50%",
                    marginLeft: "-50vw",
                    marginRight: "-50vw",
                    backgroundColor: "#85009D",
                }}
            >
                <Image
                    width={76}
                    height={163}
                    src="/images/bussiness-hub/plug1.png"
                    alt="The Procurement Plug Logo"
                    className="absolute top-0  left-0"
                />
                <Image
                    width={136}
                    height={154}
                    src="/images/bussiness-hub/plug2.png"
                    alt="The Procurement Plug Logo"
                    className="absolute bottom-0 right-0 md:top-1/2 md:-translate-y-1/2"
                />

                <div className="relative z-10 flex flex-col gap-6 md:gap-8 rounded-lg py-5 md:py-10 mx-auto max-w-[1440px] w-full
      px-6 sm:px-10 md:px-14 lg:px-20">
                    <div>
                        <div className="max-w-[780px] m-auto text-center">
                            <h3 className="max-w-[521px] m-auto leading-none font-semibold text-[32px] text-[#ffff]">
                                Need a bespoke task?
                            </h3>
                            <p className="text-[#ffff] text-sm md:text-2xl font-medium leading-normal md:leading-relaxed mt-4">
                                Contact us at -{' '}
                                <Link className="font-semibold" href="/business-hub/procurement-concierge">
                                    concierge@theprocurementplug.com
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* <PartnerWithUsComp data={partnerWithUs} /> */}
            <RegisterInterestForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

export default PricingPlanCTR;
