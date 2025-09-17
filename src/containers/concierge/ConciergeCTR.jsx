"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import TaskListForm from "@/components/forms/concierge/TaskListForm";
import OurValuePropositionDivComp from '@/components/concierge/OurValuePropositionDivComp';
import OurPackagesComp from '@/components/concierge/OurPackagesComp';
import WhyChooseThePlugComp from '@/components/concierge/WhyChooseThePlugComp';
import ReadyToWorkBannerComp from '@/components/concierge/ReadyToWorkBannerComp';
import Breadcrumb from '@/components/BreadCrumbs';
import FAQS from './FAQS';
import ArrowButtonCom from '@/components/buttons/ArrowButtonCom';

function ProcurementConciergeCTR() {

    const [activeTab, setActiveTab] = useState("Light");
    const [taskListHeading, setTaskListHeading] = useState("");
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
                            <span className="font-extrabold">The Procurement Concierge</span>
                        </span>
                    }
                    para="Welcome to The Procurement Concierge Your On-Demand
                    Procurement Office"
                />
                <Breadcrumb />
                <div className="relative border border-[#DBBB89] rounded-[6px] overflow-hidden">
                    {/* Background Image Layer */}
                    <div className="absolute inset-0 bg-[url('/images/concierge/firstimg.png')] bg-cover bg-center z-0" />

                    {/* Content Layer */}
                    <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-x-6 gap-y-2">

                        {/* Left: Text Content */}
                        <div
                            className="w-full lg:w-[50%] bg-[#FFFBF5] backdrop-blur-md p-6 min-h-full"
                            style={{
                                boxShadow: '0 25px 50px 50px #FFFBF5'
                                // boxShadow: '0 25px 50px 100px black'
                            }}
                        >

                            <h3 className="relative inline-block font-semibold text-xl md:text-2xl text-[#85009D] pb-6">
                                The Procurement Concierge
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
                            <div className="flex flex-col flex-wrap md:flex-row items-center gap-4 max-w-100">
                                {/* <button
                                    onClick={() => {
                                        setIsModalOpen(true);
                                        setTaskListHeading("Join the waitlist");
                                    }}
                                    className="bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto flex items-center justify-center cursor-pointer">
                                    Join the waitlist
                                    <div className="ml-2 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45" /> 
                                    </button> */}
                                <div
                                    onClick={() => {
                                        setIsModalOpen(true);
                                        setTaskListHeading("Join the waitlist");
                                    }}>
                                    <ArrowButtonCom
                                        text={"Join the waitlist"}
                                        bgColor="bg-[#b08d57]"
                                        textColor="text-white"
                                        hoverBgColor="hover:bg-transparent"
                                        hoverTextColor="hover:text-[#b08d57]"
                                        borderColor='border-[#b08d57]'
                                        arrowColor="hover:border-[#b08d57]" />
                                </div>
                                <Link href={"/concierge/how-it-works"}>
                                    {/* <button className="bg-[#85009D] text-white px-4 py-2 rounded-[6px] w-full md:w-auto flex items-center justify-center cursor-pointer">
                                        How It Works
                                        <div className="ml-2 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45" />
                                    </button> */}
                                    <ArrowButtonCom
                                        text={"How It Works"}
                                        bgColor="bg-[#85009D]"
                                        textColor="text-white"
                                        hoverBgColor="hover:bg-white"
                                        hoverTextColor="hover:text-[#85009D]"
                                        borderColor='border-[#85009D]'
                                        arrowColor="hover:border-[#85009D]" />
                                </Link>
                                <Link href={"/concierge/plug-concierge-services"}>
                                    {/* <button className="bg-transparent border border-[#85009D] text-[#85009D] px-4 py-2 rounded-[6px] w-full md:w-auto flex items-center justify-center cursor-pointer">
                                        Concierge+ Services
                                        <div className="ml-2 w-2 h-2 border-t-2 border-r-2 border-[#85009D] transform rotate-45" />
                                    </button> */}

                                    <ArrowButtonCom
                                        text={"Concierge+ Services"}
                                        bgColor="bg-transparent"
                                        textColor="text-[#85009D]"
                                        hoverBgColor="hover:bg-[#85009D]"
                                        hoverTextColor="hover:text-white"
                                        borderColor='border-[#85009D]'
                                        arrowColor="hover:border-white" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div>
                <h3 className="font-semibold text-xl md:text-2xl text-[#1B1B1B]">
                    Welcome to The Procurement Concierge
                </h3>
                <p className="max-w-[954px] md:text-xl text-[#1B1B1B] mt-4">
                    The UK’s first procurement concierge service built for speed, flexibility, and strategic delivery.
                </p>
                <p className="max-w-[954px] md:text-xl text-[#1B1B1B] mt-4">
                    Whether you're facing resource gaps, leadership vacancies, or major procurement priorities, Plug Concierge connects you with vetted experts to deliver tasks, lead transformation, and support your team’s development – all with guaranteed speed and quality.
                </p>
            </div>

            <div>
                <h3 className="font-semibold text-xl md:text-2xl text-[#1B1B1B]">
                    The Procurement Plug Concierge
                </h3>
                <p className="max-w-[954px] md:text-xl text-[#1B1B1B] mt-4">
                    Plug Concierge gives you fast, flexible access to procurement experts across all categories and industries. Whether
                    you need strategic sourcing, contract drafting, supplier onboarding, or high-level advisory, our on-demand support
                    clears your backlog and drives results – without additional hires.
                </p>
                <p className="max-w-[954px] md:text-xl text-[#1B1B1B] mt-4">
                    Need help beyond tasks? We also manage training bookings, leadership retreats, executive coaching, and bespoke
                    procurement services – all coordinated through our Concierge+ offering for complete support at every stage.
                </p>
            </div>

            {/* Our Value Proposition */}
            <div>
                <h3 className="font-semibold text-xl md:text-2xl text-[#1B1B1B] mb-4">
                    Our Value Proposition
                </h3>
                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4'>
                    <OurValuePropositionDivComp
                        src={"/images/concierge/task.png"}
                        heading={"Task-Based Delivery"}
                        text={"Quick turnaround tasks delivered by vetted procurement experts"}
                    /><OurValuePropositionDivComp
                        src={"/images/concierge/credit.png"}
                        heading={"Credit System"}
                        text={"Purchase credits and use them anytime throughout the year."}
                    /><OurValuePropositionDivComp
                        src={"/images/concierge/expert.png"}
                        heading={"Expert Pool"}
                        text={"Immediate access to procurement talent without long recruitment processes."}
                    /><OurValuePropositionDivComp
                        src={"/images/concierge/task.png"}
                        heading={"QA Reviews"}
                        text={"Optional or mandatory Quality Assurance reviews ensure output is best-in-class."}
                    /><OurValuePropositionDivComp
                        src={"/images/concierge/cpo.png"}
                        heading={"Fractional CPO Services"}
                        text={"Executive-level procurement leadership without the full-time cost."}
                    /><OurValuePropositionDivComp
                        src={"/images/concierge/hour.png"}
                        heading={"24-hour Mobilisation"}
                        text={"Ready when you need us"}
                    /><OurValuePropositionDivComp
                        src={"/images/concierge/concierge.png"}
                        heading={"Concierge+ Services"}
                        text={"booking for coaching, wellbeing, retreats & training"}
                    /><OurValuePropositionDivComp
                        src={"/images/concierge/qa.png"}
                        heading={"QA Reviews"}
                        text={"Optional or mandatory Quality Assurance reviews ensure output is best-in-class."}
                    />
                    <OurValuePropositionDivComp
                        colspan={"lg:col-span-2"}
                        src={"/images/concierge/support.png"}
                        heading={"Strategic Procurement Support"}
                        text={"High-impact advisory and delivery for transformation or complex projects."}
                    />
                    <OurValuePropositionDivComp
                        colspan={"lg:col-span-2"}
                        src={"/images/concierge/snapshot.png"}
                        heading={"Concierge ROI Snapshot"}
                        text={"Personalized performance dashboard showing time saved, cost  efficiency, risk mitigation, and procurement maturity uplift. Delivered as a downloadable PDF and internal presentation pack."}
                    />
                </section>
            </div >

            {/* Built in ROI */}
            <div className='flex flex-col gap-y-4 mt-2'>
                <h3 className="font-semibold text-xl md:text-2xl text-[#1B1B1B] leading-none">
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

            {/* Your Investment Options */}
            <section className='flex flex-col gap-y-5'>
                <h3 className="font-semibold text-xl md:text-2xl text-[#1B1B1B] leading-none max-w-2xl">
                    Your Investment Options
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
                    <OurPackagesComp
                        textColor="text-[#85009D]"
                        bgColor="bg-[#EFCB91]"
                        text="Advisory call"
                        description="Specialised Procurement guidance tailored to your needs"
                    />
                </div>
                <Link href="/concierge/pricing-plan" className='flex justify-center'>
                    {/* <button
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] self-start">
                        View more details on Pricing Plan
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button> */}
                    <ArrowButtonCom
                        text={"View more details on Pricing Plan"}
                        bgColor="bg-[#b08d57]"
                        textColor="text-white"
                        hoverBgColor="hover:bg-transparent"
                        hoverTextColor="hover:text-[#b08d57]"
                        borderColor='border-[#b08d57]'
                        arrowColor="hover:border-[#b08d57]" />
                </Link>
            </section>

            {/* Fractional CPO Service */}
            <section className='flex flex-col gap-y-2 md:gap-y-4'>
                <h3 className="font-semibold text-xl md:text-2xl text-[#1B1B1B] leading-none max-w-2xl">
                    Fractional CPO Services
                </h3>
                <p className="text-sm md:text-lg text-[#1B1B1B]">
                    Executive procurement leadership –
                </p>
                <p className="text-sm md:text-lg text-[#1B1B1B] max-w-250">
                    Access senior procurement leaders (CPO/Director level) to drive performance, stabilise delivery, and guide transformation.
                </p>

                <div className='rounded border border-[#DBBB89] bg-[#FFFBF5] p-4 flex flex-col items-start gap-y-3'>
                    {[
                        "Scoped to your needs (weekly, monthly, or project-based)",
                        "Fully embedded into your Plug Concierge access",
                        "Ideal for scaling teams, leadership vacancies, or strategic change"
                    ].map((list, index) => (
                        <div key={index} className="flex gap-2 md:gap-4 items-start">
                            <div className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                            <div>
                                <p className="md:text-lg text-[#1B1B1B]">{list}</p>
                            </div>
                        </div>
                    ))}

                    {/* <button
                        onClick={() => { alert("Available soon!") }}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] ">
                        Request a Fractional CPO Intro
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button> */}

                    <div onClick={() => { alert("Available soon!") }}>
                        <ArrowButtonCom
                            text={"Request a Fractional CPO Intro"}
                            bgColor="bg-[#b08d57]"
                            textColor="text-white"
                            hoverBgColor="hover:bg-transparent"
                            hoverTextColor="hover:text-[#b08d57]"
                            borderColor='border-[#b08d57]'
                            arrowColor="hover:border-[#b08d57]" />
                    </div>
                </div>
            </section >

            {/* Strategic Oval shaped section*/}
            < section className='flex flex-col gap-y-5' >
                <h3 className="font-semibold text-xl md:text-2xl text-[#1B1B1B] leading-none">
                    Strategic and simple credit based system Real time spend visibility
                </h3>
                <p className="md:text-xl text-[#1B1B1B]">
                    With our easy-to-use credit system, each task is mapped to 1-3 credits based on complexity. You only
                    pay for what you need. Each plan includes credits that can be used throughout the year. Once credits
                    are used, you have the flexibility to buy a Task Pass or upgrade to a higher-tier plan.
                </p>

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                    {[
                        { title: "Light", num: "1", color: "#D44CED", text: "Red Flag Scan" },
                        { title: "Medium", num: "2", color: "#BC1ED9", text: "Contract Drafting" },
                        { title: "Heavy", num: "3", color: "#85009D", text: "Supplier Audit" },
                    ].map((item, idx) => (
                        <React.Fragment key={idx}>
                            <div className="text-center flex flex-col items-center w-1/3">
                                <p className="text-lg text-[#1B1B1B] mb-2">{item.title}</p>
                                <p
                                    className="font-semibold text-[32px] text-[#FFFFFF] p-5 rounded-full w-15 h-15 flex items-center justify-center mb-2"
                                    style={{ backgroundColor: item.color }}
                                >
                                    {item.num}
                                </p>
                                <p className="text-lg text-[#1B1B1B]">{item.text}</p>
                            </div>

                            {/* Divider (only between items, not after last) */}
                            {idx < 2 && (
                                <>
                                    <div className="w-[1px] rounded-[2px] self-stretch bg-[#B08D57] hidden md:block"></div>
                                    <div className="w-full h-[1px] bg-[#B08D57] block md:hidden"></div>
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </div>

            </section >

            <div>
                <h3 className="font-semibold text-xl md:text-2xl text-[#1B1B1B]">
                    What Tasks Can You Delegate?
                </h3>
                <p className="max-w-[976px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                    Whether it’s sourcing, legal, risk management, or reporting, we handle it all. From small tasks like a
                    supplier short-list to comprehensive projects such as a full supplier audit or contract negotiation.
                </p>
                <div className="bg-[#FFFBF5] border border-[#DBBB89] rounded-[6px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center mb-6 lg:mb-8">
                        <button
                            onClick={() => setActiveTab("Light")}
                            className={`${getButtonClass("Light")} md:rounded-tl-[6px] md:rounded-bl-[6px] font-normal text-lg`}
                        >
                            Light
                        </button>
                        <button
                            onClick={() => setActiveTab("Medium")}
                            className={`${getButtonClass("Medium")} font-normal text-lg`}
                        >
                            Medium
                        </button>
                        <button
                            onClick={() => setActiveTab("Heavy")}
                            className={`${getButtonClass("Heavy")} font-normal text-lg`}
                        >
                            Heavy
                        </button>
                        <button
                            onClick={() => setActiveTab("Strategic ")}
                            className={`${getButtonClass("Strategic ")} font-normal md:rounded-tr-[6px] md:rounded-br-[6px] text-lg`}
                        >
                            Strategic
                        </button>
                    </div>
                    <div className="px-5 pb-5">
                        {activeTab === "Light" && (
                            <div className="text-[#85009D] flex max-w-[1000px] items-center justify-center mx-auto flex-wrap gap-6 text-center font-medium mb-6 lg:mb-8">
                                {[
                                    "Communication & Outreach",
                                    "Research",
                                    "Templates & Documents",
                                    "Training & Knowledge",
                                    "Analysis & Reporting",
                                    "Planning & Frameworks",
                                    "Communication & Outreach",
                                    "Compliance & Risk",
                                    "Research & Benchmarking",
                                ].map((text, idx) => (
                                    <p
                                        key={idx}
                                        className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md text-md md:text-lg w-full md:w-auto"
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>
                        )}

                        {activeTab === "Medium" && (
                            <div className="text-[#85009D] flex max-w-[1000px] items-center justify-center mx-auto flex-wrap gap-6 text-center font-medium mb-4">
                                {[
                                    "Compliance & Risk",
                                    "Contract & Legal",
                                    "Compliance & Risk",
                                    "Data & Analytics",
                                    "Strategy & Planning",
                                    "Process Improvement",
                                    "Market Intelligence",
                                    "Supplier Management",
                                    "Market Intelligence",
                                    "ESG & Sustainability",
                                ].map((text, idx) => (
                                    <p
                                        key={idx}
                                        className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md text-md md:text-lg w-full md:w-auto"
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>
                        )}

                        {activeTab === "Heavy" && (
                            <div className="text-[#85009D] flex max-w-[1000px] items-center justify-center mx-auto flex-wrap gap-6 text-center font-medium mb-4">
                                {[
                                    "Advanced Data & Analytics",
                                    "Market Intelligence & Scenario Planning",
                                    "Market Intelligence & Scenario Planning",
                                    "Supplier Development & Risk",
                                    "Strategy & Operating Mode",
                                    "M&A & Integration",
                                    "ESG & Sustainability",
                                ].map((text, idx) => (
                                    <p
                                        key={idx}
                                        className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md text-md md:text-lg w-full md:w-auto"
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>
                        )}

                        {activeTab === "Strategic " && (
                            <div className="text-[#85009D] flex max-w-[1000px] items-center justify-center mx-auto flex-wrap gap-6 text-center font-medium mb-4">
                                {[
                                    "Transformation & Operating Model",
                                    "Risk & Resilience",
                                    "ESG & Sustainability Leadership",
                                    "Stakeholder & Governance",
                                    "M&A & Synergy Realization",
                                    "Capability & Culture",
                                    "Advanced Analytics & Insights",
                                    "Innovation & Ecosystem",
                                ].map((text, idx) => (
                                    <p
                                        key={idx}
                                        className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md text-md md:text-lg w-full md:w-auto"
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>
                        )}
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
                            {/* <button
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setTaskListHeading("Download Full Task List");
                                }}
                                className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                                Download Full Task List
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </button> */}
                            <div
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setTaskListHeading("Download Full Task List");
                                }}>
                                <ArrowButtonCom
                                    text={"Download Full Task List"}
                                    bgColor="bg-[#b08d57]"
                                    textColor="text-white"
                                    hoverBgColor="hover:bg-transparent"
                                    hoverTextColor="hover:text-[#b08d57]"
                                    borderColor='border-[#b08d57]'
                                    arrowColor="hover:border-[#b08d57]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <h3 className="font-semibold text-xl md:text-2xl text-[#1B1B1B]">
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
                    <h3 className="font-medium text-xl md:text-2xl lg:text-3xl text-[#85009D]">
                        Powered by
                    </h3>
                    <h3 className='font-semibold text-xl md:text-2xl lg:text-3xl text-[#85009D]'>The Procurement Plug  <span className="font-medium">Ecosystem</span></h3>

                    <p className="md:max-w-[567px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                        Your Concierge access unlocks premium support from across our ecosystem:
                    </p>
                </div>

                <div>
                    {[
                        "Innovation Vault – Procurement tech & tools",
                        "Business Hub – Pre-vetted legal, ESG & consultancies",
                        "Plug Academy – Preferential CPD training access",
                        "Mentors & Coaches – Career leadership support",
                        "Market Reports – Benchmarks and trend insights",
                        "Plug Prestige – Earn rewards through usage and referrals",
                    ].map((text, idx) => (
                        <div
                            key={idx}
                            className="flex gap-2 md:gap-4 items-start mb-2 lg:mb-4"
                        >
                            <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">
                                ✓
                            </div>
                            <div>
                                <p className="text-md md:text-lg text-[#1B1B1B]">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            {/* FAQs section */}
            <div>
                <h3 className="font-semibold text-xl md:text-2xl mb-4 text-[#1B1B1B] ">
                    Have Questions? We Have Answers
                </h3>
                <FAQS />
            </div>

            <section className='flex items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div
                        href={"/concierge/plug-concierge-experts"}
                        // onClick={() => setIsJoinModalOpen(true)}
                        className="rounded-[6px] border border-[#DBBB89] bg-[#FFFBF5] p-5 flex flex-col text-center md:text-start gap-6 text-[#85009D]"
                    >
                        <div className="self-center md:self-start bg-white px-5 py-6.5 rounded-full border border-[#85009D]/35 w-26">
                            <Image
                                className="w-full h-full"
                                src={"/images/concierge/want-to.png"}
                                alt={"Procurement Concierge Icon"}
                                width={100}
                                height={100}
                            />
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold mb-4">
                                Want to Delegate a Task?
                            </h2>
                            <p className="text-[#1B1B1B] text-base">
                                We handle it all – from red flag scans to full sourcing strategies.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {/* <button
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setTaskListHeading("Join the waitlist")
                                }}
                                className="flex items-center self-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
                                Join the waitlist
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </button> */}
                            <div
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setTaskListHeading("Join the waitlist");
                                }}>
                                <ArrowButtonCom
                                    text={"Join the waitlist"}
                                    bgColor="bg-[#b08d57]"
                                    textColor="text-white"
                                    hoverBgColor="hover:bg-transparent"
                                    hoverTextColor="hover:text-[#b08d57]"
                                    borderColor='border-[#b08d57]'
                                    arrowColor="hover:border-[#b08d57]" />
                            </div>

                            {/* <button
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setTaskListHeading("Download Full Task List");
                                }}>
                               <span className="flex items-center self-start cursor-pointer bg-[#85009D] text-white px-4 py-2 rounded-[6px] border border-[#85009D]">
                                    Download Full Task List
                                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                                </span> 
                            </button> */}
                            <div
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setTaskListHeading("Download Full Task List");
                                }}>
                                <ArrowButtonCom
                                    text={"Download Full Task List"}
                                    bgColor="bg-[#85009D]"
                                    textColor="text-white"
                                    hoverBgColor="hover:bg-white"
                                    hoverTextColor="hover:text-[#85009D]"
                                    borderColor='border-[#85009D]'
                                    arrowColor="hover:border-[#85009D]" />
                            </div>

                            <Link href="https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile">
                                {/* <span className="flex items-center self-start cursor-pointer bg-transparent text-[#85009D] px-4 py-2 rounded-[6px] border border-[#85009D]">
                                    Book a Discovery Call
                                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-[#85009D] transform rotate-45"></div>
                                </span> */}
                                <ArrowButtonCom
                                    text={"Book a Discovery Call"}
                                    bgColor="bg-transparent"
                                    textColor="text-[#85009D]"
                                    hoverBgColor="hover:bg-[#85009D]"
                                    hoverTextColor="hover:text-white"
                                    borderColor='border-[#85009D]'
                                    arrowColor="hover:border-white" />
                            </Link>

                            <Link href="/concierge/plug-concierge-services">
                                {/* <span className="flex items-center self-start cursor-pointer bg-transparent text-[#85009D] px-4 py-2 rounded-[6px] border border-[#85009D]">
                                    Explore Concierge+ Services
                                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-[#85009D] transform rotate-45"></div>
                                </span> */}
                                 <ArrowButtonCom
                                    text={"Explore Concierge+ Services"}
                                    bgColor="bg-transparent"
                                    textColor="text-[#85009D]"
                                    hoverBgColor="hover:bg-[#85009D]"
                                    hoverTextColor="hover:text-white"
                                    borderColor='border-[#85009D]'
                                    arrowColor="hover:border-white" />
                            </Link>
                        </div>
                    </div>

                    <div
                        href={"/concierge/plug-concierge-experts"}
                        // onClick={() => setIsJoinModalOpen(true)}
                        className="rounded-[6px] border border-[#DBBB89] bg-[#FFFBF5] p-5 flex flex-col justify-between text-center md:text-start gap-6 text-[#85009D]"
                    >
                        <div className="self-center md:self-start">
                            <Image
                                className="w-25 h-25"
                                src={"/images/concierge/icon.png"}
                                alt={"Procurement Concierge Icon"}
                                width={100}
                                height={100}
                            />
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold mb-4">
                                Join The Plug Concierge as a fractional expert
                            </h2>
                            <p className="text-[#1B1B1B] text-base">
                                Support top procurement teams on a flexible, fractional basis.
                                Apply to become a Plug Expert or QA Reviewer.
                            </p>
                        </div>
                        <Link
                            href={"/concierge/plug-concierge-experts"}
                            className="self-start"
                        >
                            {/* <span className="flex self-center md:self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
                                Join Now
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </span> */}
                            <ArrowButtonCom
                                    text={"Join Now"}
                                    bgColor="bg-[#b08d57]"
                                    textColor="text-white"
                                    hoverBgColor="hover:bg-transparent"
                                    hoverTextColor="hover:text-[#b08d57]"
                                    borderColor='border-[#b08d57]'
                                    arrowColor="hover:border-[#b08d57]" />
                        </Link>
                    </div>
                </div>

            </section >

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

            {/* Task List Modal */}
            <TaskListForm heading={taskListHeading} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

export default ProcurementConciergeCTR;
