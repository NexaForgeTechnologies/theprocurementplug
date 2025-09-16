"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import JoinForm from '@/components/forms/concierge/JoinForm';
import ReadyToWorkBannerComp from '@/components/concierge/ReadyToWorkBannerComp';
import Breadcrumb from '@/components/BreadCrumbs';

function PlugConciergeExpertsCTR() {
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

    const howItWorksData = [
        {
            title: "Confidentiality & Trust",
            text: "Every engagement is protected by a Mutual NDA, safeguarding client data, commercial information, and your expertise."
        },
        {
            title: "Task Brief & Matching",
            text: "We assign projects based on a clear Task Complexity Map to ensure you only receive assignments aligned with your level."
        },
        {
            title: "Delivery & QA",
            text: "You deliver, we quality check — every deliverable is independently reviewed by our Plug Concierge Strategic QA team before final client submission."
        },
        {
            title: "Feedback & Growth",
            text: "You'll receive clear feedback and opportunities for higher-level engagements as you build trust and showcase your expertise."
        }
    ];

    const taskTableData = [
        {
            level: "Light Tasks",
            levelColor: "text-[#0062C4]",
            handledBy: "Plug Concierge Associate Partner",
            qaBy: "Plug Concierge Strategic QA",
            examples: "Market scans, supplier lists, basic RFQ drafting"
        },
        {
            level: "Medium Tasks",
            levelColor: "text-[#FF9700]",
            handledBy: "Plug Concierge Strategist Partner",
            qaBy: "Plug Concierge Strategic QA",
            examples: "Full RFP processes, multi-supplier negotiations, category plans"
        },
        {
            level: "Heavy Tasks",
            levelColor: "text-[#EA1600]",
            handledBy: "Plug Concierge Apex Partner",
            qaBy: "Plug Concierge Strategic QA",
            examples: "Transformation roadmaps, complex multi-jurisdiction contracts, CPO-level advisory"
        }
    ];

    const processSteps = [
        { title: "NDA Signing:", text: "Ensures all parties are protected from day one." },
        { title: "Task Brief:", text: "You’ll receive a precise brief outlining scope, timeline, and expectations." },
        { title: "Role Clarity:", text: "You’ll know if it’s a Light, Medium, or Heavy task — aligned with your agreed expert level." },
        { title: "Execute & Upload:", text: "Complete the task, submit it to our secure portal." },
        { title: "Strategic QA Review:", text: "Our senior QA reviewers validate outputs before they reach the client." },
        { title: "Feedback Loop:", text: "Continuous improvement and clear insights on your work." }
    ];

    const benefits = [
        "Premium Branding: Be part of a cutting-edge procurement ecosystem.",
        "High-Value Engagements: Get matched to tasks that respect your seniority and expertise.",
        "Quality & Reputation: Our structured QA process ensures your work stands out, always.",
        "Flexibility: Choose the assignments you want, aligned with your schedule and interests."
    ];

    const qaPartnerPerks = [
        "Review deliverables before they reach the client.",
        "Ensure recommendations are robust, risk-validated, and aligned with C-suite objectives.",
        "Earn premium fees for your board-level insights."
    ];

    return (
        <>
            <div>
                <HeroCTR
                    img="/images/concierge/plug-concierge-experts/herosection.png"
                    heading={<span className="flex flex-col gap-0 leading-none"><span className="font-extrabold">Plug Concierge Experts</span></span>}
                    para="Plug Concierge Experts connect you with skilled professionals on demand—get expert help, when you need it, without the hassle."
                />
                <Breadcrumb />
                <div className='bg-[#85009D] rounded-[6px] p-5 flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <div>
                        <h3 className="font-semibold text-2xl text-[#FFFFFF]">Ready to become a Plug Concierge Expert</h3>
                        <p className="text-[#FFFFFF] mt-4 mb-4 md:mb-0">Join our exclusive network of procurement specialists with us</p>
                    </div>
                    <button
                        onClick={() => setIsJoinModalOpen(true)}
                        className="text-[12px] md:text-[16px] flex self-center items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Apply to become a Plug Concierge Expert
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-lg md:text-3xl text-[#1B1B1B] mb-4">Welcome to Plug Concierge Experts</h3>
                <p className="font-semibold text-lg md:text-2xl text-[#1B1B1B] mb-4">What We Do</p>
                <p className="max-w-[986px] md:text-xl text-[#1B1B1B] mb-4">Plug Concierge connects exceptional procurement experts with businesses who need on-demand, tailored support.</p>
                <p className="max-w-[986px] md:text-xl text-[#1B1B1B]">From rapid sourcing to enterprise-wide transformation, we ensure every task is matched to the right expert level and always reviewed for strategic quality.</p>
            </div>

            <div>
                <h3 className="font-semibold text-lg md:text-2xl text-[#1B1B1B] mb-4">How It Works</h3>
                {howItWorksData.map((item, idx) => (
                    <div key={idx} className="flex gap-2 md:gap-4 items-start mb-4 md:mb-8">
                        <div className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                        <div>
                            <h3 className="font-semibold text-md md:text-lg text-[#1B1B1B] mb-2">{item.title}</h3>
                            <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-[#FFFBF5] text-[#1B1B1B] overflow-x-auto">
                <table className="w-full border-collapse bg-[#FFFBF5] text-left border-2 border-[#DBBB89] rounded-[6px] table-fixed min-w-[600px] md:min-w-0">
                    <thead>
                        <tr className="bg-[#FFFBF5] text-md md:text-lg text-[#85009D] font-medium">
                            <th className="p-4 border-2 border-[#DBBB89] w-1/4">Task Level</th>
                            <th className="p-4 border-2 border-[#DBBB89] w-1/4">Handled by</th>
                            <th className="p-4 border-2 border-[#DBBB89] w-1/4">QA by</th>
                            <th className="p-4 border-2 border-[#DBBB89] w-1/4">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskTableData.map((row, idx) => (
                            <tr key={idx} className="bg-[#FFFBF5] text-sm md:text-base font-medium">
                                <td className={`p-4 border-2 border-[#DBBB89] ${row.levelColor} w-1/4`}>{row.level}</td>
                                <td className="p-4 border-2 border-[#DBBB89] w-1/4">{row.handledBy}</td>
                                <td className="p-4 border-2 border-[#DBBB89] w-1/4">{row.qaBy}</td>
                                <td className="p-4 border-2 border-[#DBBB89] w-1/4">{row.examples}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <h3 className="font-semibold text-lg md:text-2xl text-[#1B1B1B] mb-4">The Process in Detail</h3>
                {processSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-2 md:gap-4 items-start mb-4 md:mb-6">
                        <div className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                        <div>
                            <h3 className="font-semibold text-md md:text-lg text-[#1B1B1B] mb-1">{step.title}</h3>
                            <p className="md:text-lg text-[#1B1B1B]">{step.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#FFFBF5] py-6 md:py-10"
                style={{ boxShadow: "0 0 0 100vmax #FFFBF5", clipPath: "inset(0 -100vmax)" }}>
                <div className='w-full md:flex-1'>
                    <h3 className="md:max-w-[348px] text-2xl md:text-[42px] text-[#85009D] leading-none">Why Join</h3>
                    <h3 className='font-semibold md:max-w-[348px] text-2xl md:text-[42px] text-[#85009D]'>Plug Concierge?</h3>
                    <p className="md:max-w-[417px] md:text-xl text-[#1B1B1B] mt-4">Become a Plug Concierge Expert and Join our Network of Professional</p>
                </div>
                <div className='w-full md:flex-1'>
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex gap-2 md:gap-4 items-start mb-4">
                            <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                            <p className="md:text-lg text-[#1B1B1B]">{benefit}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="rounded-[6px] border border-[#DBBB89] bg-[#FFFBF5] p-5 w-full lg:self-start hover:text-[#ffff]">
                <h3 className="font-semibold text-2xl text-[#85009D]">Advance Even Further: Become a Plug Strategic QA Partner</h3>
                <p className="text-[#1B1B1B] my-4">If you’re a senior procurement leader passionate about safeguarding enterprise outcomes, join our elite QA circle.</p>
                {qaPartnerPerks.map((perk, idx) => (
                    <div key={idx} className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                        <p className="md:text-lg text-[#1B1B1B]">{perk}</p>
                    </div>
                ))}
                <Link
                    href={"/concierge/plug-concierge-experts/become-a-plug-strategic-qa-partner"}
                    className="text-[12px] md:text-[16px] inline-flex items-center cursor-pointer bg-[#85009D] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                    Become a Plug Strategic QA Partner
                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                </Link>
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

            <JoinForm isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
        </>
    );
}

export default PlugConciergeExpertsCTR;
