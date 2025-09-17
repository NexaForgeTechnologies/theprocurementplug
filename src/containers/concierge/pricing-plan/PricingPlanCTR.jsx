"use client";

import React, { useState } from 'react';

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PricingPlanTile from '@/components/concierge/pricing-plan/PricingPlanTile';
import RegisterInterestForm from "@/components/forms/concierge/RegisterInterestForm";
import Breadcrumb from '@/components/BreadCrumbs';
import ReadyToWorkBannerComp from '@/components/concierge/ReadyToWorkBannerComp';
import ArrowButtonCom from '@/components/buttons/ArrowButtonCom';

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
                    img="/images/concierge/pricing-plan/herosection.png"
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
                    {/* <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Register your Interest
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button> */}
                    <div
                        onClick={() => setIsModalOpen(true)}
                    >
                        <ArrowButtonCom
                            text={"Register your Interest"}
                            bgColor="bg-[#b08d57]"
                            textColor="text-white"
                            hoverBgColor="hover:bg-white"
                            hoverTextColor="hover:text-[#b08d57]"
                            borderColor='border-[#b08d57]'
                            arrowColor="hover:border-[#b08d57]" />
                    </div>
                </div>
            </div>
            <ReadyToWorkBannerComp
                title={"Ready to Work Together?"}
                description={"Let’s build a better procurement function – task by task, strategy by strategy."}
                link1={"concierge@theprocurementplug.com"}
                link2={"Concierge.expert@theprocurementplug.com"}
                btnText1={"Download Pricing & Package Sheet"}
                btnText2={"Book a Discovery Call"}
                Btnlink1={"/"}
                Btnlink2={"https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile"}
            />

            {/* <PartnerWithUsComp data={partnerWithUs} /> */}
            <RegisterInterestForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

export default PricingPlanCTR;
