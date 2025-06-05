"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RequestDemoForm from "@/components/business-hub/legal-compliance/RequestDemoForm";
import PartnerWithUsComp from '@/components/partner-with-us/PartnerWithUsComp'

function Breadcrumb() {
    return (
        <nav className="text-sm breadcrumbs mb-4">
            <ol className="list-reset flex gap-2 text-gray-600">
                <li>
                    <Link href="/business-hub" className="hover:underline">Business Hub</Link>
                </li>
                <li>/</li>
                <li className="text-gray-900 font-semibold">
                    Legal & Compliance Detail
                </li>
            </ol>
        </nav>
    )
}

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const partnerWithUs = [
        {
            id: 1,
            heading: "The Prcurement Plug Academy",
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
                <Breadcrumb />
                <div className="max-w-3xl m-auto text-left text-[#85009D] mb-20 md:mb-28">
                    <div className="flex flex-col md:flex-row items-center mb-4 md:mb-8 gap-4 md:gap-8">
                        <div>
                            <div className="rounded-full w-40 h-40 bg-[#c39dca] border-2 border-[#85009D]">
                            </div>
                        </div>
                        <div>
                            <h1 className="text-center mb-4 text-3xl md:text-4xl font-extrabold text-[#85009D]">
                                Law Practice Name
                            </h1>
                            <div className="flex items-center justify-center md:justify-start">
                                <span className="text-[#ffff] px-2 py-1 rounded bg-[#85009D] text-2xl md:text-3xl">★★★★</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">
                            Overview
                        </h2>
                        <p className="text-[#010101] mb-4 md:mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus quo animi doloribus odio unde vero voluptatibus, laborum officia nisi exercitationem
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-4 md:mb-8">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">
                                    Practice Areas
                                </h2>
                                <p
                                    className="border-2 border-[#85009D] px-4 py-3 rounded text-[#010101] mb-2"
                                >
                                    Commercial Law
                                </p>
                                <p
                                    className="border-2 border-[#85009D] px-4 py-3 rounded text-[#010101] mb-2"
                                >
                                    Employment
                                </p>
                                <p
                                    className="border-2 border-[#85009D] px-4 py-3 rounded text-[#010101] mb-2"
                                >
                                    Data Protection
                                </p>
                                <p
                                    className="border-2 border-[#85009D] px-4 py-3 rounded text-[#010101]"
                                >
                                    Compliance
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">
                                    Services
                                </h2>
                                <ul className="text-[#010101] marker:text-[#85009D] list-disc pl-5">
                                    <li className="mb-2">Quarterly compliance audits</li>
                                    <li className="mb-2">In-house consel programs</li>
                                    <li className="mb-2">Contract review</li>
                                    <li className="mb-2">Policy drafting</li>
                                </ul>
                                <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">
                                    Sample Templates
                                </h2>
                                <ul className="text-[#010101] marker:text-[#85009D] list-disc pl-5">
                                    <li className="mb-2">Master Services Agreement</li>
                                    <li>Data Processing Addendum</li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-4 md:mb-8">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-2">
                                    Juristiconial coverage
                                </h2>
                                <div className="flex items-center gap-2 mb-4">
                                    <p className="font-bold text-sm text-[#85009D] border-2 border-[#85009D] w-[40px] px-2 py-1 rounded">
                                        UK
                                    </p>
                                    <p className="font-bold text-sm text-[#85009D] border-2 border-[#85009D] w-[40px] px-2 py-1 rounded">
                                        EU
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-center">
                                    <p className="bg-gray-300 text-[#9a9595] px-2 py-1 rounded">CLIENT LOGO</p>
                                    <p className="bg-gray-300 text-[#9a9595] px-2 py-1 rounded">CLIENT LOGO</p>
                                    <p className="bg-gray-300 text-[#9a9595] px-2 py-1 rounded">CLIENT LOGO</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="bg-[#b58c4a] w-full text-white px-6 py-3 rounded"
                                >
                                    Book Consultation
                                </button>
                                <button
                                    className="bg-[#b58c4a] text-white px-6 py-3 rounded"
                                >
                                    Contact
                                </button>
                                <button
                                    className="border-2 border-[#85009D] text-[#85009D] px-6 py-3 rounded"
                                >
                                    Download T&Cs
                                </button>
                            </div>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#85009D] mb-4">
                            Testimonials
                        </h2>
                        <div className="flex items-start gap-2 text-[#010101] ">
                            <span className="text-5xl text-[#85009D] leading-none">“</span>
                            <p>
                                The team exceeded our expectations with their dedication and attention to detail. From planning to execution, everything was handled with the utmost professionalism.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 md:gap-8">
                    <div className='max-w-[780px] m-auto text-center'>
                        <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#85009D]'>Partner With Us</h3>
                        <p className='text-[#85009D] text-sm md:text-lg leading-normal md:leading-relaxed'><strong>partnerships@theprocurementplug.com</strong> - <Link href="/partnerships">Visit our partnership page</Link>
                        </p>
                    </div>
                    <div className="bg-[#85009D] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-[8px] p-5 md:p-10 ">
                        {partnerWithUs?.map((content, idx) => (
                            <PartnerWithUsComp key={idx} data={content} />
                        ))}
                    </div>
                </div>
            </div>
            <RequestDemoForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}

export default Page
