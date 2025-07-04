"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'

import RequestDemoForm from "@/components/business-hub/consultinng-partner/RequestDemoForm";

function Breadcrumb() {
  return (
    <nav className="text-sm breadcrumbs my-4 md:my-10">
      <ol className="list-reset flex gap-2 text-[#9C9C9C] whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <li>
          <Link href="/business-hub" className="hover:underline">Business Hub</Link>
        </li>
        <li>/</li>
        <li>
          <Link href="/business-hub/consulting-partner" className="hover:underline">Consulting Partners</Link>
        </li>
        <li>/</li>
        <li className="text-[#696969]">
          Consulting Partners Overview
        </li>
      </ol>
    </nav>
  );
}

export default function ConsultantDetailClient({ consultant }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          img="/images/bussiness-hub/consulting-partner/herosection.png"
          heading={
            <span className="flex flex-col gap-0 leading-none">
              <span className="font-extrabold">Consulting Partners</span>
            </span>
          }
          para="The Procurement Plug’s Consulting Partners deliver
          expert solutions to enhance your procurement
          strategy, from process improvement and strategy
          development to ESG and sustainability impact."
        />
        <Breadcrumb />
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-4 md:gap-0">
          <div className="w-full md:w-auto">
            <h1 className="text-3xl md:text-[52px] font-semibold text-[#85009D]">
              {consultant.heading}
            </h1>
            <span className="text-[#F89800] text-2xl md:text-[63px]">
              ★★★★
            </span>
            <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
              Overview
            </h3>
            <p className="max-w-[553px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro accusamus quo animi distinctio nulla
              unde vero voluptatibus, laborum officia nisi.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                Request Consultation
                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
              </button>
              <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                Contact
                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center w-full md:w-auto">
            <Image
              className="rounded-full w-[200px] md:w-[300px] h-[200px] md:h-[300px] object-cover"
              src={consultant.img}
              alt={consultant.heading}
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="text-[#85009D]">
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
          Expertise Areas
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4 text-center font-semibold">
          <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl">AI & Machine Learning</p>
          <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl">Cloud Computing</p>
          <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl">Data Analytics</p>
          <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl">Cybersecurity</p>
        </div>
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
          Engagement Models
        </h3>
        <div className="flex flex-wrap gap-6 mb-4 text-center font-semibold">
          <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full sm:w-auto">Dedicated Team</p>
          <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full sm:w-auto">Time & Material</p>
          <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full sm:w-auto">Fixed Price</p>
        </div>
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
          Clients
        </h3>
        <div className="flex flex-wrap gap-6 mb-4 text-center font-semibold">
          <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full sm:w-auto">TechCorp Inc.</p>
          <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full sm:w-auto">HealthPlus</p>
          <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full sm:w-auto">FinServe Ltd.</p>
          <p className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl w-full sm:w-auto">EduWorld</p>
        </div>
      </div>
      <div
        className="bg-[#FBE3FF] pt-6 pb-10 md:pt-10 md:pb-10 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8"
        style={{
          boxShadow: "0 0 0 100vmax #FBE3FF",
          clipPath: "inset(0 -100vmax)",
        }}
      >
        <h2 className="font-medium max-w-[700px] text-3xl md:text-5xl text-[#85009D]">
          <strong>Testimonials</strong>
        </h2>
        <div className="relative w-full max-w-xl  bg-[#FFF9F5] border border-[#85009D] rounded-3xl p-6 text-[#1b1b1b]">
          <span className="absolute top-4 md:top-0 left-4 text-4xl md:text-8xl text-[#85009D] font-semibold">”</span>
          <p className="mt-6 md:text-2xl leading-relaxed">
            "The team exceeded our expectations with their
            dedication and attention to detail. From planning
            to execution, everything was handled with the
            utmost professionalism."
          </p>
          <div className="absolute -bottom-[30px] right-10 w-0 h-0 border-r-[40px] border-r-transparent border-t-[30px] border-t-[#85009D]"></div>
          <div className="absolute -bottom-[28px] right-[41.5px] w-0 h-0 border-r-[39px] border-r-transparent border-t-[29px] border-t-[#FFF9F5]"></div>
        </div>
      </div >
      <PartnerWithUsComp data={partnerWithUs} />
      <RequestDemoForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
