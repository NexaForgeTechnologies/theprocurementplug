"use client";

import { useState } from "react";

import HeroCTR from "@/components/business-hub/BussinessHeroSection";
import ReadyToWorkBannerComp from "@/components/concierge/ReadyToWorkBannerComp";
import TaskListForm from "@/components/forms/concierge/TaskListForm";
import Breadcrumb from "@/components/BreadCrumbs";

export default function PlugConciergeServices() {

    const [taskListHeading, setTaskListHeading] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section>
                <HeroCTR
                    img="/images/concierge/plug-concierge-services/hero-ctr.png"
                    heading={
                        <span className="flex flex-col gap-0 leading-none">
                            <span className="font-semibold">Plug Concierge + Services</span>
                        </span>
                    }
                    para="Welcome to The Procurement Plug Concierge Your On-Demand Procurement Office"
                />
                <Breadcrumb />

                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                    Plug Concierge + Services
                </h3>
                <p className="max-w-[954px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                    Go beyond tasks. Plug Concierge+ supports your team’s productivity, wellbeing, and growth.
                    All used as part of your credits.
                </p>
                <p className="max-w-[954px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                    Let us coordinate and book:
                </p>
                <h3 className="font-semibold text-xl md:text-2xl text-[#85009D] mt-8 mb-4">
                    Plug Concierge + Services
                </h3>
                <div className="flex flex-col gap-y-3">
                    {[
                        {
                            heading: "Beyond task delivery:",
                            list: "supporting 360° procurement team productivity, performance, and wellbeing.",
                        },
                        {
                            heading: "Expert Pool –",
                            list: "Immediate access to procurement talent without long recruitment processes",
                        },
                        {
                            heading: "Your strategic and development partner –",
                            list: `not just for tasks, but for your team’s entire
                         journey. Use your Plug Concierge access to effortlessly book and manage high-impact
                         services designed for growth, wellbeing, and leadership transformation.`,
                        },
                        {
                            heading: "Plug Concierge+",
                            list: `is our premium, procurement-aligned offering designed to power your
                         team’s growth, agility, and balance. From leadership coaching to burnout prevention,
                         we don’t just deliver tasks – we deliver transformation`,
                        },

                    ].map((items, index) => (
                        <div key={index} className="flex gap-x-2 md:gap-x-4 gap-y-5 items-start">
                            <div className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>

                            <p className="md:text-lg text-[#1B1B1B] ">
                                <span className="font-semibold mr-2">
                                    {items.heading}
                                </span>
                                {items.list}</p>
                        </div>
                    ))}
                </div>
                <h3 className="font-semibold text-xl md:text-2xl text-[#85009D] mt-8 mb-4">
                    Plug Concierge + Services
                </h3>
                <div className="flex gap-x-2 md:gap-x-4 gap-y-5 items-start">
                    <div className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>

                    <p className="md:text-lg text-[#1B1B1B] ">
                        <span className="font-semibold mr-2">
                            Plug Academy Bookings –
                        </span>
                        Let us schedule training on topics like stakeholder management,
                        ESG sourcing, tech enablement, strategic negotiation and CPD masterclasses – for individuals
                        or teams.</p>
                </div>

                <div className="my-6 md:my-8">
                    <h3 className="font-semibold text-xl md:text-2xl text-[#85009D] mb-4">
                        Executive Coaching & Mentoring
                    </h3>
                    <p className="max-w-[954px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                        Access top-tier mentors and coaches for:
                    </p>
                    <div className="flex flex-col gap-y-3">
                        {[
                            { heading: "CPO or Director-level coaching" },
                            { heading: "Group mentoring/coaching sessions" },
                            { heading: "Career progression check-ins tied to capacity building with experts" },
                            {
                                heading: "Productivity & Wellbeing Add-Ons – ",
                                list: `Let Plug Concierge+ protect your team's performance
                          and wellbeing with tailored support that builds resilience, alignment, and growth. Our
                          services include but not limited:`,
                            }
                        ].map((items, index) => (
                            <div key={index} className="flex gap-x-2 md:gap-x-4 gap-y-5 items-start">
                                <div className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>

                                <p className="md:text-lg text-[#1B1B1B] ">
                                    <span className="font-semibold mr-2">
                                        {items.heading}
                                    </span>
                                    {items.list}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <section className="my-15 grid grid-cols-1 lg:grid-cols-2 gap-5">

                    {[
                        {
                            heading: "Team Growth Mapping",
                            boldtxt: "Example:",
                            para: "Map development pathways across your team using skills audits, training recommendations, and quarterly milestones - helping leaders identify gaps, high-potential talent, and internal succession opportunities.",
                        },
                        {
                            heading: "Energy & Capacity Pulse Checks",
                            boldtxt: "Example:",
                            para: `Monthly wellbeing and capacity surveys sent via Concierge+ to flag workload pressure, stress triggers, or productivity dips early - with action plans created in response.`,
                        },
                        {
                            heading: "Reflection & Reset Sessions",
                            boldtxt: "Example:",
                            para: ` Dedicated team or 1:1 reset sessions to pause, review goals, resolve blockers, and re-energise focus - especially post-project or before key planning cycles.`,
                        },
                        {
                            heading: "Wellbeing Resource Curation",
                            boldtxt: "Example:",
                            para: `Bespoke wellbeing toolkits (e.g., focus hacks, mental clarity exercises, wellness day planning) sent directly to your team - tailored to their roles, pressure points, and learning styles.`,
                        },
                    ].map((items, index) => (
                        <div key={index} className="bg-[#FFFBF5] rounded border border-[#DBBB89] p-8">
                            <h3 className="font-semibold text-xl md:text-2xl text-[#85009D] mb-4 mt-2">
                                {items.heading}
                            </h3>
                            <p className="md:text-lg text-[#1B1B1B]">
                                <strong className="mr-1">{items.boldtxt}</strong>
                                {items.para}
                            </p>
                        </div>
                    ))}
                </section>

                <div className="flex flex-col justify-start gap-y-4 mt-7 mb-20">
                    <h3 className="font-semibold text-xl md:text-2xl text-[#85009D]">
                        Venue, Team & Leadership Retreat Bookings
                    </h3>
                    <p className="max-w-[954px] md:text-xl text-[#1B1B1B]">
                        Need a reset or leadership breakthrough? We’ll handle:
                    </p>

                    {[
                        { heading: "Growth mapping & capacity pulse check-ins" },
                        { heading: "Any bespoke booking and team needs coordination" },

                    ].map((items, index) => (
                        <div key={index} className="flex gap-x-2 md:gap-x-4 gap-y-5 items-start">
                            <div className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>

                            <p className="md:text-lg text-[#1B1B1B] ">
                                <span className="font-medium mr-2">
                                    {items.heading}
                                </span>
                                {items.list}</p>
                        </div>
                    ))}

                    <p className="max-w-[954px] md:text-xl text-[#1B1B1B]">
                        Your team stays focused. We manage the rest.
                    </p>
                    <button
                        onClick={() => {
                            setIsModalOpen(true);
                            setTaskListHeading("Download and Explore Concierge+ Services");
                        }}
                        className="bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto flex items-center justify-center cursor-pointer self-start">
                        Download and Explore Concierge+ Services
                        <div className="ml-2 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45" />
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
                    Btnlink2={"https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile"}
                />
            </section>

            {/* Task List Modal */}
            <TaskListForm heading={taskListHeading} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}