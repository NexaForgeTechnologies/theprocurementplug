"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import FeatureSpeakerTile from "@/components/events/become-a-speaker/ConsultingPartnerTile";
import ArrowButtonCom from '@/components/buttons/ArrowButtonCom'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'


function Breadcrumb() {
    return (
        <nav className="text-sm breadcrumbs my-4 md:my-10">
            <ol className="list-reset flex gap-2 text-[#9C9C9C] whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <li>
                    <Link href="/business-hub" className="hover:underline">Business Hub</Link>
                </li>
                <li>/</li>
                <li>
                    <Link href="/event" className="hover:underline">Events</Link>
                </li>
                <li>/</li>
                <li className="text-[#696969] ">
                    Become a Speaker
                </li>
            </ol>
        </nav>
    )
}

function BecomeaSpeaker() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        company: "",
        proposedtopic: "",
        interestin: "",
        proposal: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({
            name: "",
            email: "",
            role: "",
            company: "",
            proposedtopic: "",
            interestin: "",
            proposal: "",
        });
        // onClose(); 
    };

    const featurespeaker = [
        {
            id: 1,
            img: "/images/events/become-a-speaker/feature1.png",
            heading: "Showcase Expertise",
            text: "Share your knowledge with an engaged professional audiences",
            url: "/business-hub/consulting-partner/six-sigma-change-management",
        },
        {
            id: 2,
            img: "/images/events/become-a-speaker/feature2.png",
            heading: "Grow Network",
            text: "Connect with industry leaders and expand your influence",
            url: "/business-hub/consulting-partner/procurement",
        },
        {
            id: 3,
            img: "/images/events/become-a-speaker/feature3.png",
            heading: "Shape Industry",
            text: "Contribute to the conversation on procurement best practices",
            url: "/business-hub/consulting-partner/esg-sustainability",
        },
    ];

    const partnerWithUs = {
        Partnerheader: {
            crossSellh3: "Cross Sell the Collaboration and Thought Leadership Zone",
            h3: "",
            p: ""
        },
        items: [
            {
                id: 1,
                heading: "The Procurement Plug Academy",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: "#85009D"
            },
            {
                id: 2,
                heading: "Resources Library",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: "#85009D"
            },
            {
                id: 3,
                heading: "The Personal Development Hub",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: "#85009D"
            }
        ]
    };

    return (
        <>
            <div>
                <HeroCTR
                    img="/images/events/become-a-speaker/herosection.png"
                    heading={
                        <span className="flex flex-col gap-0 leading-none">
                            <span className="font-extrabold">Become a Speaker</span>
                        </span>
                    }
                    para="hare your insights, grow your network, and make
                    an impact in the procurement industry."
                />
                <Breadcrumb />
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                    Become a Speaker
                </h3>
                <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
                    Contribute to The Procurement Plug Events
                </p>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {featurespeaker.map((partner) => (
                        <FeatureSpeakerTile
                            key={partner.id}
                            img={partner.img}
                            heading={partner.heading}
                            text={partner.text}
                            url={partner.url}
                        />
                    ))}
                </div>
            </div>
            <div>
                <h3 className="font-semibold text-2xl md:text-3xl mb-4 text-[#1B1B1B]">
                    Speaker Benefits
                </h3>
                <div className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <p className="text-[16px] md:text-[24px] text-[#1B1B1B]">Gain visibility among procurement professionals</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <p className="text-[16px] md:text-[24px] text-[#1B1B1B]">Enhance your professional reputation and credibility</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <p className="text-[16px] md:text-[24px] text-[#1B1B1B]">Access exclusive networking opportunities</p>
                    </div>
                </div>
            </div>

            <div
                style={{
                    boxShadow: "0 0 0 100vmax #85009D",
                    clipPath: "inset(0 -100vmax)",
                }}
                className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 bg-[#85009D] py-5 md:py-12">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <Image
                        src={"/images/events/become-a-speaker/n1.png"}
                        alt={"number"}
                        width={100}
                        height={100}
                        className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                    />
                    <p className="text-[20px] font-semibold">Apply:
                        Submit your proposal.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <Image
                        src={"/images/events/become-a-speaker/n2.png"}
                        alt={"number"}
                        width={100}
                        height={100}
                        className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                    />
                    <p className="text-[20px] font-semibold">Review: Our team will
                        evaluate your submission.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <Image
                        src={"/images/events/become-a-speaker/n3.png"}
                        alt={"number"}
                        width={100}
                        height={100}
                        className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
                    />
                    <p className="text-[20px] font-semibold">Confirm: Receive confirmation
                        and event details.
                    </p>
                </div>
            </div>

            <div>
                <div className="border-1 border-[#DBBB89] p-4 md:p-6 rounded-[6px] bg-[#FFFBF5]">
                    <h3 className="font-semibold text-2xl md:text-3xl mb-4 text-[#1B1B1B]">
                        Submit Speaker Proposal
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                id="role"
                                name="role"
                                placeholder="Role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />

                            <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder="Company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                id="proposedtopic"
                                name="proposedtopic"
                                placeholder="Proposed Topic"
                                value={formData.proposedtopic}
                                onChange={handleChange}
                                required
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                            <input
                                type="text"
                                id="interestin"
                                name="interestin"
                                placeholder="Events Interest In"
                                value={formData.interestin}
                                onChange={handleChange}
                                required
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>
                        <div>
                            <textarea
                                id="proposal"
                                name="proposal"
                                placeholder="Proposal"
                                value={formData.proposal}
                                onChange={handleChange}
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
                                rows="4"
                            />
                        </div>
                        <button
                            type="submit"
                            className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                            Submit
                            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                        </button>
                    </form>
                </div>
            </div>
            <div
                className="bg-[#FBE3FF] py-6 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8"
                style={{
                    boxShadow: "0 0 0 100vmax #FBE3FF",
                    clipPath: "inset(0 -100vmax)",
                }}
            >
                <h2 className="font-medium max-w-[700px] text-3xl md:text-5xl text-[#85009D]">
                    Upskill your <strong>Capabilities</strong>
                </h2>
                <div className="min-w-[200px]">
                    <ArrowButtonCom text="Join the Procurement Plug Academy" />
                </div>
            </div>
            <PartnerWithUsComp data={partnerWithUs} />
        </>
    )
}

export default BecomeaSpeaker