"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import TaskListForm from "@/components/forms/business-hub/concierge/TaskListForm";
import OurValuePropositionDivComp from '@/components/business-hub/procurement-concierge/OurValuePropositionDivComp';
import OurPackagesComp from '@/components/business-hub/procurement-concierge/OurPackagesComp';
import WhyChooseThePlugComp from '@/components/business-hub/procurement-concierge/WhyChooseThePlugComp';
import ReadyToWorkBannerComp from '@/components/business-hub/procurement-concierge/ReadyToWorkBannerComp';
import Breadcrumb from '@/components/BreadCrumbs';

function ProcurementConciergeCTR() {

    const [activeTab, setActiveTab] = useState("Light");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getButtonClass = (tabName) => {
        const baseClasses = "w-full text-center text-2xl py-4 font-semibold";
        if (activeTab === tabName) {
            return `${baseClasses} bg-[#D44CED] text-[#FFFBF5]`;
        } else {
            return `${baseClasses} border border-[#85009D] text-[#BC1ED9]`;
        }
    };

    return (
        <>
            <div>
                <HeroCTR
                    img="/images/bussiness-hub/firsttile.png"
                    heading={
                        <span className="flex flex-col gap-0 leading-none">
                            <span className="font-extrabold">The Procurement Plug Concierge</span>
                        </span>
                    }
                    para="Welcome to The Procurement Plug Concierge Your On-Demand
                    Procurement Office"
                />
                <Breadcrumb />
                <div className="relative border border-[#DBBB89] rounded-[6px] overflow-hidden">
                    {/* Background Image Layer */}
                    <div className="absolute inset-0 bg-[url('/images/bussiness-hub/procurement-concierge/firstimg.png')] bg-cover bg-center z-0" />

                    {/* Content Layer */}
                    <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-x-6">

                        {/* Left: Text Content */}
                        <div
                            className="w-full lg:w-[40%] bg-[#FFFBF5] backdrop-blur-md p-6 min-h-full"
                            style={{
                                boxShadow: '0 25px 50px 50px #FFFBF5'
                                // boxShadow: '0 25px 50px 100px black'
                            }}
                        >

                            <h3 className="relative inline-block font-semibold text-2xl text-[#85009D] pb-6">
                                The Procurement Plug Concierge
                                <span className="absolute right-0 bottom-0 text-[#1B1B1B] text-xs">
                                    Powered by The Procurement Plug
                                </span>
                            </h3>

                            <p className="mt-4 mb-2 text-[#1B1B1B] font-semibold">
                                Your On-Demand Procurement Office
                            </p>
                            <div className="flex items-center gap-x-2 flex-wrap mb-4">
                                {[
                                    "Tasks", "Fractional CPO", "Concierge+ Services", "Strategy", "Advisory"
                                ].map((item, index, arr) => (
                                    <React.Fragment key={index}>
                                        <p className="text-[#1B1B1B] font-normal">{item}</p>
                                        {index !== arr.length - 1 && (
                                            <span className="inline-block rounded-full h-2 w-2 bg-[#85009D] shrink-0" />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                            <div className="flex flex-col flex-wrap md:flex-row items-center gap-4">
                                <button className="bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto flex items-center justify-center cursor-pointer">
                                    Join the waitlist
                                    <div className="ml-2 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45" />
                                </button>
                                <button className="bg-[#85009D] text-white px-4 py-2 rounded-[6px] w-full md:w-auto flex items-center justify-center cursor-pointer">
                                    How It Works
                                    <div className="ml-2 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45" />
                                </button>
                                <button className="bg-transparent border border-[#85009D] text-[#85009D] px-4 py-2 rounded-[6px] w-full md:w-auto flex items-center justify-center cursor-pointer">
                                    Concierge+ Services
                                    <div className="ml-2 w-2 h-2 border-t-2 border-r-2 border-[#85009D] transform rotate-45" />
                                </button>
                            </div>
                        </div>

                        {/* Optional right section (e.g., Image on large screens) */}
                        {/* <div className="hidden md:block w-full md:w-1/2 h-[285px]"> */}
                        {/* Leave empty or add another image/div if needed */}
                        {/* </div> */}

                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                    Welcome to The Procurement Concierge
                </h3>
                <p className="max-w-[954px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                    The UK’s first procurement concierge service built for speed, flexibility, and strategic delivery.
                </p>
                <p className="max-w-[954px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                    Whether you're facing resource gaps, leadership vacancies, or major procurement priorities, Plug Concierge connects you with vetted experts to deliver tasks, lead transformation, and support your team’s development – all with guaranteed speed and quality.
                </p>
            </div>

            <div>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                    The Procurement Plug Concierge
                </h3>
                <p className="max-w-[954px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                    Plug Concierge gives you fast, flexible access to procurement experts across all categories and industries. Whether
                    you need strategic sourcing, contract drafting, supplier onboarding, or high-level advisory, our on-demand support
                    clears your backlog and drives results – without additional hires.
                </p>
                <p className="max-w-[954px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                    Need help beyond tasks? We also manage training bookings, leadership retreats, executive coaching, and bespoke
                    procurement services – all coordinated through our Concierge+ offering for complete support at every stage.
                </p>
            </div>

            {/* Our Value Proposition */}
            <div>
                <h3 className="font-semibold text-2xl text-[#1B1B1B] mb-4">
                    Our Value Proposition
                </h3>
                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4'>
                    <OurValuePropositionDivComp
                        src={"/images/bussiness-hub/procurement-concierge/task.png"}
                        heading={"Task-Based Delivery"}
                        text={"Quick turnaround tasks delivered by vetted procurement experts"}
                    /><OurValuePropositionDivComp
                        src={"/images/bussiness-hub/procurement-concierge/credit.png"}
                        heading={"Credit System"}
                        text={"Purchase credits and use them anytime throughout the year."}
                    /><OurValuePropositionDivComp
                        src={"/images/bussiness-hub/procurement-concierge/expert.png"}
                        heading={"Expert Pool"}
                        text={"Immediate access to procurement talent without long recruitment processes."}
                    /><OurValuePropositionDivComp
                        src={"/images/bussiness-hub/procurement-concierge/task.png"}
                        heading={"QA Reviews"}
                        text={"Optional or mandatory Quality Assurance reviews ensure output is best-in-class."}
                    /><OurValuePropositionDivComp
                        src={"/images/bussiness-hub/procurement-concierge/cpo.png"}
                        heading={"Fractional CPO Services"}
                        text={"Executive-level procurement leadership without the full-time cost."}
                    /><OurValuePropositionDivComp
                        src={"/images/bussiness-hub/procurement-concierge/hour.png"}
                        heading={"24-hour Mobilisation"}
                        text={"Ready when you need us"}
                    /><OurValuePropositionDivComp
                        src={"/images/bussiness-hub/procurement-concierge/Concierge.png"}
                        heading={"Concierge+ Services"}
                        text={"booking for coaching, wellbeing, retreats & training"}
                    /><OurValuePropositionDivComp
                        src={"/images/bussiness-hub/procurement-concierge/qa.png"}
                        heading={"QA Reviews"}
                        text={"Optional or mandatory Quality Assurance reviews ensure output is best-in-class."}
                    />
                    <OurValuePropositionDivComp
                        colspan={"lg:col-span-2"}
                        src={"/images/bussiness-hub/procurement-concierge/support.png"}
                        heading={"Strategic Procurement Support"}
                        text={"High-impact advisory and delivery for transformation or complex projects."}
                    />
                    <OurValuePropositionDivComp
                        colspan={"lg:col-span-2"}
                        src={"/images/bussiness-hub/procurement-concierge/snapshot.png"}
                        heading={"Concierge ROI Snapshot"}
                        text={"Personalized performance dashboard showing time saved, cost  efficiency, risk mitigation, and procurement maturity uplift. Delivered as a downloadable PDF and internal presentation pack."}
                    />
                </section>
            </div >

            {/* Built in ROI */}
            <div className='flex flex-col gap-y-4'>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] leading-none">
                    Built-In ROI, Not Just Delivery
                </h3>
                <p className="md:text-xl text-[#1B1B1B]">
                    Every task and booking comes with:
                </p>

                <section className='grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-4'>
                    {[{
                        text: "Real-time status updates in The Plug Concierge Dashboard",
                    },
                    {
                        text: "Optional ROI snapshot",
                        optional: "(time saved, value unlocked, maturity uplift)",
                    },
                    {
                        text: "Post-delivery reporting",
                    },
                    {
                        text: "QA partner reviews for top-tier quality",
                    }
                    ].map((item, index) => (
                        <div key={index} className='flex flex-row justify-start items-center gap-1 px-4 py-5 bg-[#FFFBF5] border border-[#DBBB89] rounded'>
                            <p className="md:text-lg font-semibold text-[#1B1B1B]">{item.text}</p>
                            {index === 1 && (
                                <span className="ml-1 text-xs font-medium text-[#1B1B1B]">
                                    {item.optional}
                                </span>
                            )}
                        </div>
                    ))}

                </section>
            </div>

            {/* Our Packages */}
            <section className='flex flex-col gap-y-5'>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] leading-none max-w-2xl">
                    Our Packages
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-4'>
                    <OurPackagesComp
                        textColor="text-[#85009D]"
                        bgColor="bg-[#EAC6FF]"
                        text="Plug lite"
                        description="Infrequent support or project-based task overflow"
                    />
                    <OurPackagesComp
                        textColor="text-[#FFFFFF]"
                        bgColor="bg-[#B08D57]"
                        text="Plug Prime"
                        description="Ongoing procurement support across the year"
                    />
                    <OurPackagesComp
                        textColor="text-[#85009D]"
                        bgColor="bg-[#EAC6FF]"
                        text="Plug Single Task"
                        description="One-off light tasks without a full commitment"
                    />
                    <OurPackagesComp
                        textColor="text-[#FFFFFF]"
                        bgColor="bg-[#B08D57]"
                        text="Plug Strategic"
                        description="Scoped transformation or complex procurement projects"
                    />
                    <OurPackagesComp
                        textColor="text-[#FFFFFF]"
                        bgColor="bg-[#85009D]"
                        text="Plug QA Reviews"
                        description="External quality assurance of your internal outputs"
                    />
                    <OurPackagesComp
                        textColor="text-[#85009D]"
                        bgColor="bg-[#EFCB91]"
                        text="Plug Fractional CPO"
                        description="Executive Interim procurement leadership and transformation support - without the overhead "
                    />
                    <OurPackagesComp
                        textColor="text-[#85009D]"
                        bgColor="bg-[#EAC6FF]"
                        text="Plug Concierge+"
                        description="Procurement booking and management of wellbeing, coaching, and more"
                    />
                </div>
                <Link href="/business-hub/procurement-concierge/pricing-plan">
                    <button
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] self-start">
                        View more details on Pricing Plan
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </Link>
            </section>

            {/* Fractional CPO Service */}
            <section className='flex flex-col gap-y-5'>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] leading-none max-w-2xl">
                    Fractional CPO Services
                </h3>
                <p className="md:text-xl text-[#1B1B1B]">
                    Executive procurement leadership –
                </p>
                <p className="md:text-xl text-[#1B1B1B] max-w-250">
                    Access senior procurement leaders (CPO/Director level) to drive performance, stabilise delivery, and guide transformation.
                </p>

                <div className='rounded border border-[#DBBB89] bg-[#FFFBF5] p-4 flex flex-col items-start gap-y-3'>
                    {[
                        "Scoped to your needs (weekly, monthly, or project-based)",
                        "Fully embedded into your Plug Concierge access",
                        "Ideal for scaling teams, leadership vacancies, or strategic change"
                    ].map((list, index) => (
                        <div className="flex gap-2 md:gap-4 items-start">
                            <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                            <div>
                                <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">{list}</p>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={() => { alert("Available soon!") }}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] ">
                        Request a Fractional CPO Intro
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
            </section >

            {/* Strategic Oval shaped section*/}
            < section className='flex flex-col gap-y-5' >
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] leading-none max-w-2xl">
                    Strategic and simple credit based system Real time spend visibility
                </h3>
                <p className="md:text-xl text-[#1B1B1B]">
                    With our easy-to-use credit system, each task is mapped to 1-3 credits based on complexity. You only
                    pay for what you need. Each plan includes credits that can be used throughout the year. Once credits
                    are used, you have the flexibility to buy a Task Pass or upgrade to a higher-tier plan.
                </p>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                    <div className="text-center flex flex-col items-center w-1/3">
                        <p className="text-[20px] text-[#1B1B1B] mb-2">Light</p>
                        <p className="bg-[#D44CED] font-semibold text-[32px] text-[#FFFFFF] p-5 rounded-full w-20 h-20 flex items-center justify-center mb-2">1</p>
                        <p className="text-[20px] text-[#1B1B1B]">Red Flag Scan</p>
                    </div>
                    <div className="w-[1px] rounded-[2px] self-stretch bg-[#B08D57] hidden md:block"></div>

                    <div className="w-full h-[1px] bg-[#B08D57] block md:hidden"></div>
                    <div className="text-center flex flex-col items-center w-1/3">
                        <p className="text-[20px] text-[#1B1B1B] mb-2">Medium</p>
                        <p className="bg-[#BC1ED9] font-semibold text-[32px] text-[#FFFFFF] p-5 rounded-full w-20 h-20 flex items-center justify-center mb-2">2</p>
                        <p className="text-[20px] text-[#1B1B1B]">Contract Drafting</p>
                    </div>

                    <div className="w-[1px] rounded-[2px] self-stretch bg-[#B08D57] hidden md:block"></div>
                    <div className="w-full h-[1px] bg-[#B08D57] block md:hidden"></div>
                    <div className="text-center flex flex-col items-center w-1/3">
                        <p className="text-[20px] text-[#1B1B1B] mb-2">Heavy</p>
                        <p className="bg-[#85009D] font-semibold text-[32px] text-[#FFFFFF] p-5 rounded-full w-20 h-20 flex items-center justify-center mb-2">3</p>
                        <p className="text-[20px] text-[#1B1B1B]">Supplier Audit</p>
                    </div>
                </div>
            </section >

            <div>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                    What Tasks Can You Delegate?
                </h3>
                <p className="max-w-[976px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                    Whether it’s sourcing, legal, risk management, or reporting, we handle it all. From small tasks like a
                    supplier short-list to comprehensive projects such as a full supplier audit or contract negotiation.
                </p>
                <div className="bg-[#FFFBF5] border border-[#DBBB89] rounded-[6px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center mb-6">
                        <button
                            onClick={() => setActiveTab("Light")}
                            className={`${getButtonClass("Light")} md:rounded-tl-[6px] md:rounded-bl-[6px]`}
                        >
                            Light
                        </button>
                        <button
                            onClick={() => setActiveTab("Medium")}
                            className={getButtonClass("Medium")}
                        >
                            Medium
                        </button>
                        <button
                            onClick={() => setActiveTab("Heavy")}
                            className={`${getButtonClass("Heavy")} md:rounded-tr-[6px] md:rounded-br-[6px]`}
                        >
                            Heavy
                        </button>
                    </div>
                    <div className="px-5 pb-5">
                        {activeTab === "Light" && (
                            <div className="text-[#85009D] flex max-w-[1000px] items-center justify-center mx-auto flex-wrap gap-6 text-center font-semibold mb-4">
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto">Red-Flag Scan</p>
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto ">Interview support</p>
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto">Supplier Audits</p>
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto">Supplier Shortlists</p>
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto">RFP drafting</p>
                            </div>
                        )}
                        {activeTab === "Medium" && (
                            <div className="text-[#85009D] flex max-w-[1000px] items-center justify-center mx-auto flex-wrap gap-6 text-center font-semibold mb-4">
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto">Advanced Risk Scan</p>
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto">In-depth Legal Reviews</p>
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto">Onsite Supplier Audits</p>
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto">Compliance Checks</p>
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto">Tailored Supplier Shortlists</p>
                            </div>
                        )}
                        {activeTab === "Heavy" && (
                            <div className="text-[#85009D] flex max-w-[1000px] items-center justify-center mx-auto flex-wrap gap-6 text-center font-semibold mb-4">
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto">Full RFP Management</p>
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto">Contract Drafting & Negotiation</p>
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto">Post-Award Compliance</p>
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto">Custom Vendor Strategy</p>
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto">Global Risk Analysis</p>
                            </div>
                        )}
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                                Download full task list
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                    Why Choose The Plug Concierge?
                </h3>
                <p className="max-w-[976px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                    Whether you’re a large corporation or a small business, the Procurement Plug Concierge ensures you access top-tier procurement expertise exactly when you need it. Our credit system ensures that your spend is predictable while giving you flexibility.
                </p>

                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
                    <WhyChooseThePlugComp
                        text='Speed'
                        description='Get tasks started within days, not weeks or months.'
                    />
                    <WhyChooseThePlugComp
                        text='Flexibility'
                        description='No lock-ins. Use credits when you need support.'
                    />
                    <WhyChooseThePlugComp
                        text='Quality'
                        description='Every deliverable can be QA-reviewed by senior partners.'
                    />
                    <WhyChooseThePlugComp
                        text='Savings'
                        description='Save up to 40% vs day rates or traditional consultancies.'
                    />
                    <WhyChooseThePlugComp
                        text='Talent'
                        description='All experts are handpicked, procurement- qualified, and ready to deliver.'
                    />
                    <WhyChooseThePlugComp
                        text='Innovation'
                        description='Access The Procurement Plug ecosystem: training, reports, legal/ESG support, and more.'
                    />
                </section>

                <section className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <WhyChooseThePlugComp
                        text='Centre of Excellence'
                        description='Tap into our Plug Concierge Centre of Excellence, a strategic knowledge engine powering your results. Access proprietary data, documented lessons learned, process improvements, templates, and real-world use cases to supercharge procurement delivery and decision-making.'
                    />
                    <WhyChooseThePlugComp
                        text='Plug Concierge Trial Lab'
                        description='Exclusive to Prime and Strategic clients. Be one of four partners selected annually to participate in a scoped 7-10 days innovation sprint led by a Plug Expert Squad. Includes delivery planning, tech/process pilot, co-branding, and innovation debrief.'
                    />
                    <WhyChooseThePlugComp
                        text='Plug Vendor Radar'
                        description='Curated introductions to high-performing suppliers, tech providers, and consultants. Backed by concierge insights and smart matchmaking.'
                    />
                    <WhyChooseThePlugComp
                        text='Plug Prestige Rewards'
                        description='Earn points for usage, referrals, and event participation. Redeem for QA reviews, executive coaching, training, and Elevate perks.'
                    />
                </section>
            </section>

            {/* Powered By Procurement PLug */}
            <section
                className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#FBE3FF] to-[#FFFBF5] py-6 md:py-10 w-screen ml-[calc(50%-50vw)] px-6 sm:px-10 md:px-14 lg:px-20">

                <div className='w-full md:flex-1'>
                    <h3 className="font-medium text-2xl md:text-[42px] text-[#85009D]">
                        Powered by
                    </h3>
                    <h3 className='font-semibold text-2xl md:text-[42px] text-[#85009D]'>The Procurement Plug  <span className="font-medium">Ecosystem</span></h3>

                    <p className="md:max-w-[567px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                        Your Concierge access unlocks premium support from across our ecosystem:
                    </p>
                </div>

                <div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Innovation Vault – Procurement tech & tools</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Business Hub – Pre-vetted legal, ESG & consultancies</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Plug Academy – Preferential CPD training access</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Mentors & Coaches – Career leadership support</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Market Reports – Benchmarks and trend insights</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        {/* <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div> */}
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Plug Prestige – Earn rewards through usage and referrals</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs section */}
            <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] ">
                Have Questions? We Have Answers
            </h3>

            <section className='flex items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Link
                        href={"/business-hub/procurement-concierge/plug-concierge-experts"}
                        // onClick={() => setIsJoinModalOpen(true)}
                        className="rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5] p-5 flex flex-col text-center md:text-start gap-6  text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
                    >
                        <div className=" self-center md:self-start bg-white px-5 py-6.5 rounded-full 
                        border border-[#85009D]/35 w-26">
                            <Image
                                className="w-full h-full"
                                src={"/images/bussiness-hub/procurement-concierge/want-to.png"}
                                alt={"Procurement Concierge Icon"}
                                width={100}
                                height={100}
                            />
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold mb-4">Want to Delegate a Task?</h2>
                            <p className="text-[#1B1B1B] text-base group-hover:text-white">We handle it all – from red flag scans to full sourcing strategies.</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <span className="flex items-center self-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
                                Join the waitlist
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </span>
                            <span className="flex items-center self-start cursor-pointer bg-[#85009D] text-white px-4 py-2 rounded-[6px] border border-[#85009D] group-hover:border-[white]">
                                Download Full Task List
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </span>
                            <span className="flex items-center self-start cursor-pointer bg-transparent text-[#85009D] group-hover:text-white px-4 py-2 rounded-[6px] border border-[#85009D] group-hover:border-[white]">
                                Book a Discovery Call
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-[#85009D] group-hover:border-white transform rotate-45"></div>
                            </span>
                            <span className="flex items-center self-start cursor-pointer bg-transparent text-[#85009D] group-hover:text-white px-4 py-2 rounded-[6px] border border-[#85009D] group-hover:border-[white]">
                                Explore Concierge+ Services
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-[#85009D] group-hover:border-[white] transform rotate-45"></div>
                            </span>
                        </div>
                    </Link>

                    <Link
                        href={"/business-hub/procurement-concierge/plug-concierge-experts"}
                        // onClick={() => setIsJoinModalOpen(true)}
                        className="rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5] p-5 flex flex-col justify-between text-center md:text-start gap-6  text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
                    >
                        <div className=" self-center md:self-start">
                            <Image
                                className="w-25 h-25"
                                src={"/images/bussiness-hub/procurement-concierge/icon.png"}
                                alt={"Procurement Concierge Icon"}
                                width={100}
                                height={100}
                            />
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold mb-4">Join The Plug Concierge as a
                                fractional expert</h2>
                            <p className="text-[#1B1B1B] text-base group-hover:text-white">Support top procurement teams on a flexible, fractional basis.Apply to become a Plug Expert or QA Reviewer.</p>
                        </div>
                        <span className="flex self-center md:self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
                            Join Now
                            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                        </span>
                    </Link>
                </div>
            </section >

            <ReadyToWorkBannerComp
                title={"Ready to Work Together?"}
                description={"Let’s build a better procurement function – task by task, strategy by strategy."}
                link1={"concierge@theprocurementplug.com"}
                link2={"Concierge.expert@theprocurementplug.com "}
                btnText1={"Download Pricing & Package Sheet"}
                btnText2={"Book a Discovery Call"} />

            <TaskListForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

export default ProcurementConciergeCTR;
