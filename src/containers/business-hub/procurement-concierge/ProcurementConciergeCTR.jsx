"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'

function Breadcrumb() {
    return (
        <nav className="text-sm breadcrumbs my-4 md:my-10">
            <ol className="list-reset flex gap-2 text-[#9C9C9C] whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <li>
                    <Link href="/business-hub" className="hover:underline">Business Hub</Link>
                </li>
                <li>/</li>
                <li className="text-[#696969]">
                    The Procurement Plug Concierge
                </li>
            </ol>
        </nav>
    )
}

function ProcurementConciergeCTR() {

    const [activeTab, setActiveTab] = useState("Light");
    const [openIndex, setOpenIndex] = useState(0);


    const getButtonClass = (tabName) => {
        const baseClasses = "w-full text-center text-2xl py-4 font-semibold";
        if (activeTab === tabName) {
            return `${baseClasses} bg-[#D44CED] text-[#FFFBF5]`;
        } else {
            return `${baseClasses} border border-[#85009D] text-[#BC1ED9]`;
        }
    };

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What tasks do you handle?",
            answer: `Submit your task through the dashboard. We’ll review it and assign the
            right expert. You’ll receive updates and a completed deliverable—fast
            and hassle-free.`
        },
        {
            question: "What’s included in my subscription?",
            answer: "Your subscription includes access to experts, task submission, progress tracking, and guaranteed SLAs."
        },
        {
            question: "What tasks do you handle?",
            answer: "We cover sourcing, contract review, vendor management, and more."
        },
        {
            question: "How fast can I get my task done",
            answer: "Turnaround is typically within 48–120 hours depending on task complexity."
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
                <div className="flex flex-col-reverse md:flex-row items-center justify-between md:gap-2 bg-[#FFFBF5] border border-[#DBBB89] p-5 rounded-[6px]">
                    <div className="w-full md:flex-1">
                        <h3 className="font-semibold text-2xl text-[#85009D]">
                            The Procurement Plug Concierge
                        </h3>
                        <p className="md:max-w-[491px] text-[#1B1B1B] mt-4 mb-4 md:mb-8">
                            Plug Concierge gives you immediate access to
                            procurement experts across categories. Whether
                            you need strategic sourcing, contract drafting,
                            supplier management, or strategic advice, our
                            on-demand task-based system helps clear your
                            backlog without the need for additional hires.
                        </p>
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <button
                                className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                                Get Extra Hands
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </button>
                            <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#85009D] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                                How It Works
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <Image
                            className="w-[400px] md:w-[540px] h-[285px] md:h-[285px] object-contain"
                            src={"/images/bussiness-hub/procurement-concierge/firstimg.png"}
                            alt={"member"}
                            width={540}
                            height={285}
                        />
                    </div>
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                    Introducing Procurement Plug Concierge
                </h3>
                <p className="max-w-[954px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                    The UK’s first procurement concierge service – Helping you scale, execute, and optimise without
                    increasing headcount.
                </p>
                <h3 className="font-semibold text-2xl text-[#1B1B1B] mb-4">
                    Key value Propositions
                </h3>
                <div className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">The UK's first procurement concierge for companies of all sizes.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Flexibility & scalability – tasks on-demand when your team is at capacity.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Credits-based system – transparent pricing without hidden fees .</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Get Started
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] leading-none">
                    Track your progress:
                </h3>
                <h3 className="text-2xl md:text-3xl text-[#1B1B1B]">
                    Real-time status updates in <span className="font-semibold">the Plug Concierge</span> Dashboard
                </h3>
                <p className="max-w-[1017px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                    With our easy-to-use credit system, each task is mapped to 1-3 credits based on complexity. You only
                    pay for what you need. Each plan includes credits that can be used throughout the year. Once credits
                    are used, you have the flexibility to buy a Task Pass or upgrade to a higher-tier plan.
                </p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                    <div className="text-center flex flex-col items-center">
                        <p className="text-[20px] text-[#1B1B1B] mb-2">Light</p>
                        <p className="bg-[#D44CED] font-semibold text-[32px] text-[#FFFFFF] p-5 rounded-full w-20 h-20 flex items-center justify-center mb-2">1</p>
                        <p className="text-[20px] text-[#1B1B1B]">Red Flag Scan</p>
                    </div>
                    <div className="w-[1px] rounded-[2px] self-stretch bg-[#B08D57] hidden md:block"></div>
                    <div className="w-full h-[1px] bg-[#B08D57] block md:hidden"></div>
                    <div className="text-center flex flex-col items-center">
                        <p className="text-[20px] text-[#1B1B1B] mb-2">Medium</p>
                        <p className="bg-[#BC1ED9] font-semibold text-[32px] text-[#FFFFFF] p-5 rounded-full w-20 h-20 flex items-center justify-center mb-2">2</p>
                        <p className="text-[20px] text-[#1B1B1B]">Contract Drafting</p>
                    </div>
                    <div className="w-[1px] rounded-[2px] self-stretch bg-[#B08D57] hidden md:block"></div>
                    <div className="w-full h-[1px] bg-[#B08D57] block md:hidden"></div>
                    <div className="text-center flex flex-col items-center">
                        <p className="text-[20px] text-[#1B1B1B] mb-2">Heavy</p>
                        <p className="bg-[#85009D] font-semibold text-[32px] text-[#FFFFFF] p-5 rounded-full w-20 h-20 flex items-center justify-center mb-2">3</p>
                        <p className="text-[20px] text-[#1B1B1B]">Supplier Audit</p>
                    </div>
                </div>
            </div>
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
                        {/* <button className="w-full text-center text-2xl py-4 font-semibold bg-[#D44CED] text-[#FFFBF5] md:rounded-tl-[6px] md:rounded-bl-[6px]">Light</button>
                        <button className="w-full text-center text-2xl py-4 font-semibold border border-[#85009D]  text-[#BC1ED9]">Medium</button>
                        <button className="w-full text-center text-2xl py-4 font-semibold border border-[#85009D] text-[#BC1ED9] md:rounded-tr-[6px] md:rounded-br-[6px]">Heavy</button> */}
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
                                <p className="border py-3 px-5 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full md:w-auto ">Legal Reviews</p>
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
                                className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                                Download full task list
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    boxShadow: "0 0 0 100vmax #FFFBF5",
                    clipPath: "inset(0 -100vmax)",
                }}
                className="flex flex-col md:flex-row items-start justify-between gap-4 bg-[#FFFBF5] py-6 md:py-10">
                <div className='w-full md:flex-1'>
                    <h3 className="text-2xl md:text-[42px] text-[#85009D]">
                        Why Choose
                        <span className='font-semibold'>The Procurement Plug</span>
                        Concierge?
                    </h3>
                    <p className="md:max-w-[567px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                        Whether you’re a large corporation or a small business,
                        the Procurement Plug Concierge ensures you access
                        top-tier procurement expertise exactly when you need it.
                        Our credit system ensures that your spend is predictable
                        while giving you flexibility.
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <button
                            className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                            Get Extra Hands
                            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                        </button>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">UK-based experts</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Fast, guaranteed SLAs (48–120 hours)</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Task-based pricing (no hidden fees)</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">ISO-compliant & GDPR-secure</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Proven ROI: Save time, save money</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        {/* <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div> */}
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Eliminates IR35 stress</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between  gap-6'> 
                <div className='w-full md:w-[581px]'>
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
                        Have Questions? We Have Answers
                    </h3>

                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-center">
                                <p className="font-semibold md:text-xl text-[#1B1B1B]">
                                    {faq.question}
                                </p>
                                <button
                                    onClick={() => toggle(index)}
                                    className="text-[#85009D] text-xl font-semibold cursor-pointer border border-[#85009D] rounded-full w-8 h-8 flex items-center justify-center"
                                >
                                    {openIndex === index ? '-' : '+'}
                                </button>
                            </div>

                            {openIndex === index && (
                                <p className="md:max-w-[567px] md:text-xl text-[#1B1B1B] mt-2">
                                    {faq.answer}
                                </p>
                            )}

                            <div className="w-full h-[1px] bg-[#85009D] my-4"></div>
                        </div>
                    ))}
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <button
                            className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                            See Full FAQs
                            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                        </button>
                    </div>
                </div>
                <Link
                    href={"/"}
                    className=" w-full md:w-[488px] rounded-[6px] hover:border-[#85009D] border border-[#DBBB89] hover:bg-[#85009D] bg-[#FFFBF5] p-5 flex flex-col justify-between text-center md:text-start gap-6  text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
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
                        <p className="text-[#1B1B1B] text-base group-hover:text-white">We’re building the UK’s premier on-demand
                            procurement expert network. As a Plug Concierge Expert,
                            you’ll get flexible, paid opportunities to support top
                            procurement teams across diverse industries on a
                            fractional basis.</p>
                    </div>
                    <span className="flex self-center md:self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
                        Join Now
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </span>
                </Link>
            </div>
            <PartnerWithUsComp data={partnerWithUs} />
        </>
    );
}

export default ProcurementConciergeCTR;
