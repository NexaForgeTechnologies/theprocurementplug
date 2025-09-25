"use client";
import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
import MembershipPlansComp from "@/components/personaldevelopmenthub/MembershipPlansComp";
import Link from "next/link";
import { useState } from "react";
export default function ChooseMembershipPlans() {
    const [tab, setTab] = useState("Monthly");

    return (
        <>
            <section className="flex flex-col text-white gap-y-4 mb-10 lg:mb-15">
                <div className="flex flex-col items-center justify-center gap-y-4">
                    <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent text-center">Choose Your Membership </h1>
                    <p className="max-w-2xl text-center text-sm lg:text-base">Save 10% on an annual subscription</p>


                    <ul className="flex justify-center items-center bg-[#85009D66] border border-[#F3B3FF]/50 text-white rounded text-sm md:text-base">
                        <li
                            className={`${tab === "Monthly"
                                ? "bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] w-full h-full text-black py-3 px-6"
                                : ""
                                } cursor-pointer py-3 px-6`}
                            onClick={() => setTab("Monthly")}
                        >
                            Monthly
                        </li>
                        <li
                            className={`${tab === "Yearly"
                                ? "bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] w-full h-full text-black py-3 px-6"
                                : ""
                                } cursor-pointer py-3 px-6`}
                            onClick={() => setTab("Yearly")}
                        >
                            Yearly
                        </li>
                    </ul>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {tab === "Monthly" && (
                        <>
                            <MembershipPlansComp
                                titletxtclr="text-[#85009D]"
                                titlebgclr="bg-[#EAC6FF]"
                                plugType="Plug Ascend"
                                price="Free"
                                btnName="Select"
                                data={[
                                    { title: `Your first step into the growth ecosystem`, para: `` },
                                    { title: `My Elevate Bloom Journal`, para: `capture insights & commitments from events` },
                                    { title: `Knowledge Analyser quiz tool`, para: `Benchmark your procurement knowledge` },
                                    {
                                        title: `Directory access to mentors & coaches`, para: `(view profiles & book direct)`
                                    },
                                    { title: `Earn basic Plug Badges`, para: `Start tracking your journey` },
                                    { title: `Salary Tracker (lite view)`, para: `Explore general salary benchmarks` },
                                    { title: `Select procurement career blogs & community forums`, para: `` },

                                ]} />

                            <MembershipPlansComp
                                titletxtclr="text-[#85009D]"
                                titlebgclr="bg-[#FEF989]"
                                plugType="Plug Grower"
                                price="£25.99"
                                period="/ Month"
                                btnName="Select"
                                data={[
                                    { title: `Expand your skills, network, and career opportunities`, para: `` },
                                    { title: `Everything in Free`, para: `plus` },
                                    { title: `Monthly career guides & ready-to-use templates`, para: `(negotiation, leadership, branding)` },
                                    {
                                        title: `Full mentorship & coaching directory messaging`, para: `connect & grow`
                                    },
                                    { title: `Salary Tracker (full interactive access)`, para: `Compare roles, industries & regions` },
                                    { title: `Unlock more Plug Badges`, para: `Celebrate bigger milestones` },
                                    {
                                        title: `Productivity tools & personal branding downloads`, para: ``
                                    },
                                    {
                                        title: `10% off Elevate Bloom events`, para: ``
                                    },

                                ]} />
                            <MembershipPlansComp
                                titletxtclr="text-[white]"
                                titlebgclr="bg-[#B08D57CC]"
                                plugType="Plug Ascend"
                                price="£34.99"
                                period="/ Month"
                                btnName="Select"
                                data={[
                                    {
                                        title: `Reach the peak of procurement excellence and leadership`, para: ``
                                    },
                                    { title: `Everything in Grower`, para: `plus` },
                                    { title: `Monthly Masterclasses (live & on-demand)`, para: `Learn from procurement leaders` },
                                    { title: `Real-world challenges & 30-day career sprints`, para: `Sharpen your edge` },
                                    { title: `Premium planners`, para: `SWOT analysis, inspiration boards, networking plans, decision tools` },
                                    { title: `Advanced Salary Tracker filters & insights`, para: `Get strategic with your data` },
                                    { title: `Unlock all Plug Badges`, para: `showcase your complete journey` },
                                    {
                                        title: `Procurement Goody Bags & Expert Q&A sessions`, para: ``
                                    },
                                    {
                                        title: `20% off Elevate Bloom events & VIP experiences`, para: ``
                                    },
                                ]}
                            />
                            <MembershipPlansComp
                                titletxtclr="text-[white]"
                                titlebgclr="bg-[#85009D]"
                                plugType="Plug Enterprise"
                                price="Custom Pricing"
                                period=""
                                btnName="Learn More"
                                data={[
                                    {
                                        title: `For companies investing in procurement team growth & strategic capability.`, para: ``
                                    },
                                    { para: `All benefits of Plug Ascend for each user` },
                                    { para: `Admin dashboard & team progress tracking` },
                                    { para: `Central billing & easy seat management` },
                                    { para: `Bespoke quarterly impact reports on team skills & career progress` },
                                    { para: `Private masterclasses / AMAs tailored to your team` },
                                ]}
                            />
                        </>
                    )}
                    {tab === "Yearly" && (
                        <>

                        </>
                    )}
                </section>

                <div className="flex flex-col items-center justify-center gap-y-4 mt-2 text-center">
                    <p className="text-sm font-semibold">Secure Checkout</p>
                    <p className="text-sm text-center">Cancel anytime  |  No hidden fees  |  Encrypted payments</p>

                    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-x-4 md:gap-x-6 gap-y-3">
                        <Link href="/" className="flex flex-col items-center justify-center">
                            <ArrowButtonCom
                                text="Select Plug Ascend – Free"
                                bgColor="bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687]"
                                textColor="text-black font-bold"
                                arrowColor="border-black"
                            />
                            <i className="text-sm text-center mt-1">(recommended for full access)</i>
                        </Link>
                        OR
                        <Link href="/" className="flex flex-col items-center justify-center">
                            <ArrowButtonCom
                                text="Explore Plug Grower or stay on Free"
                                bgColor="bg-[#85009D]"
                                textColor="text-[#F0CE4D] font-bold"
                                arrowColor="border-[#FBF687]"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}