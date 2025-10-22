"use client";

import { useState } from "react";

import HeroCTR from "@/components/business-hub/BussinessHeroSection";
import PartnerWithUsComp from "@/components/business-hub/vip-lounge/PartnerWithUs";

import RequestDemoForm from "@/components/forms/business-hub/BecomeAPartner";
import { useConsultantStore } from "@/store/consultantStore";
import Breadcrumb from "@/components/BreadCrumbs";
import Image from "next/image";

export default function ConsultantDetailClient() {
  const consultant = useConsultantStore((state) => state.consultant);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const partnerWithUs = {
    Partnerheader: {
      crossSellh3: "Cross Sell the Collaboration and Thought Leadership Zone",
      h3: "",
      p: "",
    },
    items: [
      {
        id: 1,
        heading: "The Procurement Plug Academy",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: "#85009D",
      },
      {
        id: 2,
        heading: "Resources Library",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: "#85009D",
      },
      {
        id: 3,
        heading: "The Personal Development Hub",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: "#85009D",
      },
    ],
  };

  if (!consultant) {
    return (
      <div className="max-w-[1200px] m-auto text-center p-8">
        <h1 className="font-extrabold text-4xl md:text-6xl mb-6 text-[#010101]">
          Consultant Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <div>
        <HeroCTR
          img="/images/bussiness-hub/consulting-partner/herosection.png"
          heading="Consulting Partners"
          para="The Procurement Plug’s Consulting Partners deliver
          expert solutions to enhance your procurement
          strategy, from process improvement and strategy
          development to ESG and sustainability impact."
        />

        <Breadcrumb />

        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-4 md:gap-0">
          <div className="w-full md:w-auto">
            <h1 className="text-3xl md:text-[52px] font-semibold text-[#85009D]">
              {consultant.name}
            </h1>
            <span className="text-[#F89800] text-2xl md:text-[63px]">★★★★</span>
            <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
              Overview
            </h3>
            <p className="max-w-[553px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
              {consultant.overview}
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto"
              >
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
              width={160}
              height={160}
              className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover"
              src={consultant.img || "/images/default-circle.png"}
              alt={"consultant"}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-x-4 space-y-4">
          <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
            Expertise Areas
          </h3>

          {consultant.experties_areas.split(",").map((area, index) => (
            <p
              key={index}
              className="inline-block text-[#85009D] w-max border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl"
            >
              {area.trim()}
            </p>
          ))}
        </div>

        <div className="space-x-4 space-y-4">
          <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
            Engagement Models
          </h3>
          {consultant.engagement_models.split(",").map((area, index) => (
            <p
              key={index}
              className="inline-block text-[#85009D] w-max border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl"
            >
              {area.trim()}
            </p>
          ))}
        </div>

        <div className="space-x-4 space-y-4">
          <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
            Clients
          </h3>
          {consultant.clients.split(",").map((area, index) => (
            <p
              key={index}
              className="inline-block text-[#85009D] w-max border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl"
            >
              {area.trim()}
            </p>
          ))}
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
          <span className="absolute top-4 md:top-0 left-4 text-4xl md:text-8xl text-[#85009D] font-semibold">
            ”
          </span>
          <p className="mt-6 md:text-2xl leading-relaxed">
            {'"' + consultant.testimonials + '"'}
          </p>
          <div className="absolute -bottom-[30px] right-10 w-0 h-0 border-r-[40px] border-r-transparent border-t-[30px] border-t-[#85009D]"></div>
          <div className="absolute -bottom-[28px] right-[41.5px] w-0 h-0 border-r-[39px] border-r-transparent border-t-[29px] border-t-[#FFF9F5]"></div>
        </div>
      </div>

      <PartnerWithUsComp data={partnerWithUs} />
      <RequestDemoForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
