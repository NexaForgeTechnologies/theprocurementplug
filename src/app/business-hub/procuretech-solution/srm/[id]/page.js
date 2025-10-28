"use client";

import { useState } from "react";
import RequestDemoForm from "@/components/business-hub/procuretech-solution//RequestDemoForm";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs';
import Image from "next/image";
import { useProcureTechStore } from "@/store/ProcuretechStore";
import Breadcrumb from "@/components/BreadCrumbs";


function VendorDetailCTR() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const procuretech = useProcureTechStore((state) => state.procuretech);
  if (!procuretech) {
    return (
      <div className="max-w-[1200px] m-auto text-center p-8">
        <h1 className="font-extrabold text-4xl md:text-6xl mb-6 text-[#010101]">
          Procuretech Not Found
        </h1>
      </div>
    );
  }

  const partnerWithUs = {
    Partnerheader: {
      crossSellh3: "Thought Leadership Zone",
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
          img="/images/bussiness-hub/procuretech-solution/procuretech-solution-detail/herosection.png"
          heading={
            <span className="flex flex-col gap-0 leading-none">
              <span className="font-extrabold">Source-to-Contract</span>
            </span>
          }
          para="Source-to-Contract (S2C) streamlines the procurement
                    process from supplier sourcing to contract signing, helping
                    businesses save time, reduce risks, and improve compliance."
        />
        <Breadcrumb />

        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:gap-4">
          <div className="w-full md:w-auto">
            <h1 className="text-3xl md:text-[52px] font-semibold text-[#85009D]">
              {procuretech.name}
            </h1>
            <span className="text-[#F89800] text-2xl md:text-[63px]">
              ★★★★★
            </span>
            <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
              Overview
            </h3>
            <p className="max-w-[553px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
              {procuretech.overview}
            </p>
          </div>
          <div className="flex justify-center items-center w-full md:w-auto">
            <Image
              className="rounded-md w-[250px] md:w-[451px] h-[145px] md:h-[145px] object-cover my-2"
              src={procuretech.img || "/images/default-rectangle.webp"}
              alt={"Procure tech solution"}
              width={160}
              height={160}
            />
          </div>
        </div>

        <div className="mb-4 md:mb-8">
          <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-2">
            Key Features
          </h3>
          {procuretech.key_features.map((feature, index) => (
            <div key={index} className="flex gap-2 md:gap-4 items-start mb-4">
              <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[3px] md:mt-[5px] shrink-0"></div>
              <div>
                <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">{feature}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4 md:mb-8">
          <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-2">
            Development
          </h3>
          <p
            className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4"
          >
            {procuretech.develpment}
          </p>

          <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-2">
            Integrations
          </h3>
          <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4">{procuretech.integration}</p>

          <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-2">
            Pricing
          </h3>
          <p className="text-[16px] md:text-[20px] text-[#1B1B1B]">{procuretech.pricing}</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
            Request Demo
            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
          </button>
          <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
            Contact Sales
            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
          </button>
          <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
            Download Data Sheets
            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
          </button>
        </div>
      </div>

      <div className="text-[#85009D]">
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4">
          Recommended for you
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center font-semibold">
          {procuretech.recommended
            ?.split(",")
            .map((item, index) => (
              <p key={index} className="border p-3 border-[#D09B48] bg-[#FFFBF5] rounded-md md:text-2xl">{item}</p>
            ))
          }
        </div>
      </div>

      <PartnerWithUsComp data={partnerWithUs} />
      <RequestDemoForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default VendorDetailCTR;
