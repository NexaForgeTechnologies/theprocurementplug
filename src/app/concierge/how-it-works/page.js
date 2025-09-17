"use client";
import Link from "next/link";
import { useState } from "react";

import Breadcrumb from "@/components/BreadCrumbs";
import HeroCTR from "@/components/business-hub/BussinessHeroSection";
import ReadyToWorkBannerComp from "@/components/concierge/ReadyToWorkBannerComp";
import TaskListForm from "@/components/forms/concierge/TaskListForm";
import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";

export default function HowItWorks() {

    const [taskListHeading, setTaskListHeading] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section>
                <HeroCTR
                    img="/images/concierge/plug-concierge-how-it-works/hero-ctr.png"
                    heading={
                        <span className="flex flex-col gap-0 leading-none">
                            <span className="font-extrabold">The Procurement Plug Concierge</span>
                        </span>
                    }
                    para="Welcome to The Procurement Plug Concierge Your On-Demand
                    Procurement Office"
                />
                <Breadcrumb />
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                    How It Works: From Task to Transformation
                </h3>
                <p className="max-w-[954px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                    Our concierge workflow is built for speed, quality, and impact – giving you a seamless route from
                    request to results
                </p>


                <section className="grid grid-cols-1 gap-y-4 my-5">

                    <div className="flex flex-col gap-y-4 rounded justify-start bg-[#FFFBF5] border border-[#DBBB89] p-6">
                        <span className="bg-[#85009D] text-white rounded-full self-start w-22 h-22 text-center flex flex-col items-center justify-center mb-2">
                            <span className="font-medium text-xl relative top-2">STEP</span>
                            <span className="text-3xl font-bold">01</span>
                        </span>

                        <h3 className="font-semibold text-xl md:text-2xl text-[#85009D]">
                            Onboard with Plug Concierge
                        </h3>

                        <p className="max-w-[954px] md:text-xl text-[#1B1B1B]">
                            Get started with a simple 1-year Master ServicesAgreement (MSA).
                        </p>
                        <p className="max-w-[954px] md:text-xl text-[#1B1B1B]">
                            Our minimum entry package, Plug Lite, gives you flexible access to task support when you need it.
                        </p>
                    </div>

                    <div className="flex flex-col gap-y-4 rounded justify-start bg-[#FFFBF5] border border-[#DBBB89] p-6">
                        <span className="bg-[#85009D] text-white rounded-full self-start w-22 h-22 text-center flex flex-col items-center justify-center mb-2">
                            <span className="font-medium text-xl relative top-2">STEP</span>
                            <span className="text-3xl font-bold">02</span>
                        </span>

                        <h3 className="font-semibold text-xl md:text-2xl text-[#85009D]">
                            Submit Your Request
                        </h3>
                        <p className="max-w-[954px] md:text-xl text-[#1B1B1B]">
                            You let us know what you need – whether it&apos;s a one-off task, leadership support, or a complex procurement
                            challenge. We guide you through a structured intake to capture objectives, timelines, and scope.
                        </p>
                    </div>
                    {[
                        { step: "03", title: "Task Scoping & Matching", description: "Every request is reviewed and scoped by our concierge team. Based on your requirements, we match you with the most suitable Plug Expert - a vetted procurement professional with direct experience in your industry or category.", listItems: ["Expert matching by skill, category, and seniority", "Real-world experience from former Heads of Procurement, Buyers, Analysts, and SMEs", "Flexible involvement: short-term, project-based, or advisory"] },
                        {
                            step: "04",
                            title: "Delivery & Updates",
                            description:
                                "Your Plug Expert gets to work - with timelines and milestones agreed upfront. You'll receive regular updates and can communicate directly with the concierge team throughout.",
                            listItems: [
                                "Streamlined workflow",
                                "Regular progress check-ins",
                                "Resource sharing via secure workspace"
                            ]
                        },
                        {
                            step: "05", title: `Quality Assurance`, description: `Depending on the task level, your deliverable is reviewed by a QA Partner – a senior procurement leader
with 12+ years’ strategic experience.`, listItems: [`QA reviews are mandatory for heavy/strategic tasks`, `You receive structured feedback and recommendations`, `Final sign-off ensures consistency, quality, and alignment`]
                        },
                        {
                            step: "06", title: `Delivery & Reflection`, description: `Once complete, you receive your final output packaged professionally with optional value-adds like a
delivery summary, insights, or next-step recommendations.`, listItems: [`Delivered in your preferred format`, `Optional ROI snapshot or implementation tracker`, `Concierge+ support for follow-up actions (e.g. training, coaching, stakeholder comms)`]
                        }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col gap-y-4 rounded justify-start bg-[#FFFBF5] border border-[#DBBB89] p-6">
                            {/* Step Indicator */}
                            <span className="bg-[#85009D] text-white rounded-full self-start w-22 h-22 text-center flex flex-col items-center justify-center mb-2">
                                <span className="font-medium text-xl relative top-2">STEP</span>
                                <span className="text-3xl font-bold">{item.step}</span>
                            </span>

                            {/* Step Title */}
                            <h3 className="font-semibold text-xl md:text-2xl text-[#85009D]">{item.title}</h3>

                            {/* Step Description */}
                            <p className="max-w-[954px] md:text-xl text-[#1B1B1B]">{item.description}</p>

                            {/* List Items for the step */}
                            {item.listItems.map((listItem, idx) => (
                                <div key={idx} className="flex gap-2 md:gap-4 items-start">
                                    <div className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                                    <div>
                                        <p className="text-base md:text-lg text-[#1B1B1B]">{listItem}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}


                </section>

                {/* What Makes The Plug Concierge Workflow Unique? */}
                <section
                    className="flex flex-col md:flex-row items-center justify-evenly gap-4 bg-gradient-to-r from-[#FBE3FF] to-[#FFFBF5] py-6 md:py-10 w-screen ml-[calc(50%-50vw)] px-6 sm:px-10 md:px-14 lg:px-20 my-20">


                    <div className='md:flex-1 flex items-start justify-evenly flex-col'>

                        <div className="">
                            <h3 className='font-medium text-xl md:text-2xl lg:text-3xl text-[#85009D]'>
                                What Makes
                                <strong className=" mr-1 font-semibold text-xl md:text-2xl lg:text-3xl"> The Plug Concierge</strong>

                                <br /> Workflow Unique?</h3>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 max-w-100 mt-4">

                            {/* <button
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setTaskListHeading("Join the Waitlist");
                                }}
                                className="bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto flex items-center justify-center cursor-pointer">
                                Join the Waitlist
                                <div className="ml-2 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45" />
                            </button> */}
                            <div
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setTaskListHeading("Join the Waitlist");
                                }}>
                                <ArrowButtonCom
                                    text={"Join the Waitlist"}
                                    bgColor="bg-[#b08d57]"
                                    textColor="text-white"
                                    hoverBgColor="hover:bg-white"
                                    hoverTextColor="hover:text-[#b08d57]"
                                    borderColor='border-[#b08d57]'
                                    arrowColor="hover:border-[#b08d57]" />
                            </div>


                            {/* <button
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setTaskListHeading("Download Full Task List");
                                }}
                                className="bg-[#85009D] text-white px-4 py-2 rounded-[6px] w-full md:w-auto flex items-center justify-center cursor-pointer">
                                Download Full Task List
                                <div className="ml-2 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45" />
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

                            <Link href={"https://outlook.office.com/bookwithme/user/8e972724e33941cc97d6343e75912f92@theprocurementplug.com/meetingtype/hLubckipTEuEbpXYBmnMYg2?anonymous&ep=mLinkFromTile"}>
                                {/* <button className="bg-transparent border border-[#85009D] text-[#85009D] px-4 py-2 rounded-[6px] w-full md:w-auto flex items-center justify-center cursor-pointer">
                                    Book a Discovery Call
                                    <div className="ml-2 w-2 h-2 border-t-2 border-r-2 border-[#85009D] transform rotate-45" />
                                </button> */}
                                <ArrowButtonCom
                                    text={"Book a Discovery Call"}
                                    bgColor="bg-white"
                                    textColor="text-[#85009D]"
                                    hoverBgColor="hover:bg-[#85009D]"
                                    hoverTextColor="hover:text-white"
                                    borderColor='border-[#85009D]'
                                    arrowColor="hover:border-[#85009D]" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        {[
                            `Concierge-led intake to help shape your request`,
                            `Access to our talent pool of vetted procurement SMEs`,
                            `Optional QA Partner review on key deliverables`,
                            `Fast mobilization – most tasks start within 24–72 hour`,
                            `Flexible, secure, and always focused on outcomes`,
                        ].map((list, idx) => (
                            <div key={idx} className="flex gap-2 md:gap-4 items-start mb-4 max-w-110">
                                <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                                <div>
                                    <p className="text-md md:text-lg text-[#1B1B1B]">
                                        {list}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


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