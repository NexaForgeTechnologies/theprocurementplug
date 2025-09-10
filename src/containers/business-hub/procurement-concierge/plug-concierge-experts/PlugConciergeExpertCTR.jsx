"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
// import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import JoinForm from '@/components/business-hub/procurement-concierge/JoinForm';


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
                    Plug Concierge Experts
                </li>
            </ol>
        </nav>
    )
}

function PlugConciergeExpertsCTR() {

    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

    // const partnerWithUs = [
    //     {
    //         id: 1,
    //         heading: "The Procurement Plug Academy",
    //         text: "",
    //         link: "",
    //         linkText: "View",
    //         bgColor: "#85009D"
    //     },
    //     {
    //         id: 2,
    //         heading: "Resources Library",
    //         text: "",
    //         link: "",
    //         linkText: "View",
    //         bgColor: "#85009D"
    //     },
    //     {
    //         id: 3,
    //         heading: "The Personal Development Hub",
    //         text: "",
    //         link: "",
    //         linkText: "View",
    //         bgColor: "#85009D"
    //     }
    // ]

    return (
        <>
            <div>
                <HeroCTR
                    img="/images/bussiness-hub/procurement-concierge/plug-concierge-experts/herosection.png"
                    heading={
                        <span className="flex flex-col gap-0 leading-none">
                            <span className="font-extrabold">Plug Concierge Experts</span>
                        </span>
                    }
                    para="Plug Concierge Experts connect you with skilled professionals
                    on demand—get expert help, when you need it, without the
                    hassle."
                />
                <Breadcrumb />
                <div className='bg-[#85009D] rounded-[6px] p-5 flex flex-col md:flex-row items-start md:items-center justify-between'>
                    <div>
                        <h3 className="font-semibold text-2xl text-[#FFFFFF]">
                            Ready to become a Plug Concierge Expert
                        </h3>
                        <p className="text-[#FFFFFF] mt-4 mb-4 md:mb-0">
                            Join our exclusive network of procurement specialists with us
                        </p>
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
                <h3 className="font-semibold text-2xl md:text-[32px] text-[#1B1B1B] mb-4">
                    Welcome to Plug Concierge Experts
                </h3>
                <p className="font-semibold text-[20px] md:text-[24px] text-[#1B1B1B] mb-4">What We Do</p>
                <p className="max-w-[986px] md:text-xl text-[#1B1B1B] mb-4">
                    Plug Concierge connects exceptional procurement experts with businesses who need on-demand,
                    tailored support.
                </p>
                <p className="max-w-[986px] md:text-xl text-[#1B1B1B]">
                    From rapid sourcing to enterprise-wide transformation, we ensure every task is matched to the
                    right expert level and always reviewed for strategic quality.
                </p>
            </div>

            <div>
                <h3 className="font-semibold text-2xl md:text-[32px] text-[#1B1B1B] mb-4">
                    How It Works
                </h3>
                <div className="flex gap-2 md:gap-4 items-start mb-4 md:mb-8">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <h3 className="font-semibold text-[20px] md:text-[24px] mb-2 md:mb-4 text-[#1B1B1B]">
                            Confidentiality & Trust
                        </h3>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">Every engagement is protected by a Mutual NDA, safeguarding client data, commercial
                            information, and your expertise.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4 md:mb-8">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <h3 className="font-semibold text-[20px] md:text-[24px] mb-2 md:mb-4 text-[#1B1B1B]">
                            Task Brief & Matching
                        </h3>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">We assign projects based on a clear Task Complexity Map to ensure you only receive
                            assignments aligned with your level.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4 md:mb-8">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <h3 className="font-semibold text-[20px] md:text-[24px] mb-2 md:mb-4 text-[#1B1B1B]">
                            Delivery & QA
                        </h3>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">You deliver, we quality check — every deliverable is independently reviewed by our
                            Plug Concierge Strategic QA team before final client submission.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <h3 className="font-semibold text-[20px] md:text-[24px] mb-2 md:mb-4 text-[#1B1B1B]">
                            Feedback & Growth
                        </h3>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">You'll receive clear feedback and opportunities for higher-level engagements as you
                            build trust and showcase your expertise.</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#FFFBF5] text-[#1B1B1B] overflow-x-auto">
                <table className="w-full border-collapse bg-[#FFFBF5] text-left border-2 border-[#DBBB89] rounded-[6px] table-fixed min-w-[600px] md:min-w-0">
                    <thead>
                        <tr className="bg-[#FFFBF5] text-2xl text-[#85009D] font-semibold">
                            <th className="p-4 border-2 border-[#DBBB89] w-1/4">Task Level</th>
                            <th className="p-4 border-2 border-[#DBBB89] w-1/4">Handled by</th>
                            <th className="p-4 border-2 border-[#DBBB89] w-1/4">QA by</th>
                            <th className="p-4 border-2 border-[#DBBB89] w-1/4">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-[#FFFBF5] text-[20px]">
                            <td className="p-4 border-2 border-[#DBBB89] text-[#0062C4] w-1/4">Light Tasks</td>
                            <td className="p-4 border-2 border-[#DBBB89] w-1/4">Plug Concierge Associate Partner</td>
                            <td className="p-4 border-2 border-[#DBBB89] w-1/4">Plug Concierge Strategic QA</td>
                            <td className="p-4 border-2 border-[#DBBB89] w-1/4">Market scans, supplier lists, basic RFQ drafting</td>
                        </tr>
                        <tr className="bg-[#FFFBF5] text-[20px]">
                            <td className="p-4 border-2 border-[#DBBB89] text-[#FF9700] w-1/4">Medium Tasks</td>
                            <td className="p-4 border-2 border-[#DBBB89] w-1/4">Plug Concierge Strategist Partner</td>
                            <td className="p-4 border-2 border-[#DBBB89] w-1/4">Plug Concierge Strategic QA</td>
                            <td className="p-4 border-2 border-[#DBBB89] w-1/4">Full RFP processes, multi-supplier negotiations, category plans</td>
                        </tr>
                        <tr className="bg-[#FFFBF5] text-[20px]">
                            <td className="p-4 border-2 border-[#DBBB89] text-[#EA1600] w-1/4">Heavy Tasks</td>
                            <td className="p-4 border-2 border-[#DBBB89] w-1/4">Plug Concierge Apex Partner</td>
                            <td className="p-4 border-2 border-[#DBBB89] w-1/4">Plug Concierge Strategic QA</td>
                            <td className="p-4 border-2 border-[#DBBB89] w-1/4">Transformation roadmaps, complex multi-jurisdiction contracts, CPO-level advisory</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h3 className="font-semibold text-2xl md:text-[32px] text-[#1B1B1B] mb-4">
                    The Process in Detail
                </h3>
                <div className="flex gap-2 md:gap-4 items-start mb-4 md:mb-8">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <h3 className="font-semibold text-[20px] md:text-[24px] mb-2 md:mb-4 text-[#1B1B1B]">
                            NDA Signing:
                        </h3>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">Ensures all parties are protected from day one.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4 md:mb-8">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <h3 className="font-semibold text-[20px] md:text-[24px] mb-2 md:mb-4 text-[#1B1B1B]">
                            Task Brief:
                        </h3>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">You’ll receive a precise brief outlining scope, timeline, and expectations.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4 md:mb-8">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <h3 className="font-semibold text-[20px] md:text-[24px] mb-2 md:mb-4 text-[#1B1B1B]">
                            Role Clarity:
                        </h3>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">You’ll know if it’s a Light, Medium, or Heavy task — aligned with your agreed expert level.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4 md:mb-8">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <h3 className="font-semibold text-[20px] md:text-[24px] mb-2 md:mb-4 text-[#1B1B1B]">
                            Execute & Upload:
                        </h3>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">Complete the task, submit it to our secure portal.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4 md:mb-8">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <h3 className="font-semibold text-[20px] md:text-[24px] mb-2 md:mb-4 text-[#1B1B1B]">
                            Strategic QA Review:
                        </h3>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">Our senior QA reviewers validate outputs before they reach the client.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                    <div>
                        <h3 className="font-semibold text-[20px] md:text-[24px] mb-2 md:mb-4 text-[#1B1B1B]">
                            Feedback Loop:
                        </h3>
                        <p className="max-w-[872px] text-[16px] md:text-[20px] text-[#1B1B1B]">Continuous improvement and clear insights on your work.</p>
                    </div>
                </div>
            </div>

            <div
                style={{
                    boxShadow: "0 0 0 100vmax #FFFBF5",
                    clipPath: "inset(0 -100vmax)",
                }}
                className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#FFFBF5] py-6 md:py-10">
                <div className='w-full md:flex-1'>
                    <h3 className="md:max-w-[348px] text-2xl md:text-[42px] text-[#85009D] leading-none">
                        Why Join
                    </h3>
                    <h3 className='font-semibold md:max-w-[348px] text-2xl md:text-[42px] text-[#85009D]'>
                        Plug Concierge?
                    </h3>
                    <p className="md:max-w-[417px] md:text-xl text-[#1B1B1B] mt-4">
                        Become a Plug Concierge Expert and Join
                        our Network of Professional
                    </p>
                </div>
                <div className='w-full md:flex-1'>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Premium Branding: Be part of a cutting-edge
                                procurement ecosystem.</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">High-Value Engagements: Get matched to tasks
                                that respect your seniority and expertise. </p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]">Quality & Reputation: Our structured QA process
                                ensures your work stands out, always.</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl mt-[4px]">✓</div>
                        <div>
                            <p className="text-[20px] md:text-[24px] text-[#1B1B1B]"> Flexibility: Choose the assignments you want,
                                aligned with your schedule and interests.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-[6px] border border-[#DBBB89] bg-[#FFFBF5] p-5 w-full lg:self-start hover:text-[#ffff]">
                <h3 className="font-semibold text-2xl text-[#85009D]">
                    Advance Even Further: Become a Plug Strategic QA Partner
                </h3>
                <p className="text-[#1B1B1B] my-4">
                    If you’re a senior procurement leader passionate about safeguarding enterprise outcomes, join our elite QA circle.
                </p>
                <div className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
                    <div>
                        <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">Review deliverables before they reach the client.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
                    <div>
                        <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">Ensure recommendations are robust, risk-validated, and aligned with C-suite objectives.</p>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4 items-start mb-4">
                    <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
                    <div>
                        <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">Earn premium fees for your board-level insights.</p>
                    </div>
                </div>
                <Link
                href={"/business-hub/procurement-concierge/plug-concierge-experts/become-a-plug-strategic-qa-partner"}
                className="text-[12px] md:text-[16px] inline-flex items-center cursor-pointer bg-[#85009D] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                    Become a Plug Strategic QA Partner
                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                </Link>
            </div>

            {/* <PartnerWithUsComp data={partnerWithUs} /> */}
            <JoinForm isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
        </>
    );
}

export default PlugConciergeExpertsCTR;
