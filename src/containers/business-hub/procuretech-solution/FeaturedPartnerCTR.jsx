"use client";

import React, { useState } from "react";

// import ConsultantTile from "@/components/business-hub/procuretech-solution/ConsultantTile";
import ConsultantTile from "@/components/business-hub/legal-compliance/ConsultantTile";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import Link from 'next/link'

function Breadcrumb() {
  return (
    <nav className="text-sm breadcrumbs my-4 md:my-10">
      <ol className="list-reset flex gap-2 text-[#9C9C9C] whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <li>
          <Link href="/business-hub" className="hover:underline">Business Hub</Link>
        </li>
        <li>/</li>
        <li className="text-[#696969]">
          ProcureTech Solutions
        </li>
      </ol>
    </nav>
  )
}

function ConsultantPartnerCTR() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const consultantPartners = [
    {
      id: 1,
      heading: "Source-to-Contract",
      img: "/images/bussiness-hub/sourcetocontract64.png",
      text1: "Check sourcing pipeline easily.",
      industry_id: 1,
      industry_name: "Industry One",
      region_id: 1,
      region_name: "Region One",
      btntext: "View Details",
      icon: "/images/bussiness-hub/procuretech-solution/icon1.png",
      url: "/business-hub/procuretech-solution/procuretech-solution-detail",
    },
    {
      id: 2,
      heading: "P2P",
      img: "/images/bussiness-hub/sourcetocontract64.png",
      text1: "Review procurement quickly.",
      industry_id: 2,
      industry_name: "Industry One",
      region_id: 2,
      region_name: "Region One",
      btntext: "View Details",
      icon: "/images/bussiness-hub/procuretech-solution/icon2.png",
      url: "/business-hub/procuretech-solution/procuretech-solution-detail",
    },
    {
      id: 3,
      heading: "Spend Analytics",
      img: "/images/bussiness-hub/sourcetocontract64.png",
      text1: "See spending insights fast.",
      industry_id: 3,
      industry_name: "Industry One",
      region_id: 3,
      region_name: "Region One",
      btntext: "View Details",
      icon: "/images/bussiness-hub/procuretech-solution/icon3.png",
      url: "/business-hub/procuretech-solution/procuretech-solution-detail",
    },
    {
      id: 4,
      heading: "SRM",
      img: "/images/bussiness-hub/sourcetocontract64.png",
      text1: "Boost supplier ties simply.",
      industry_id: 1,
      industry_name: "Industry One",
      region_id: 1,
      region_name: "Region One",
      btntext: "View Details",
      icon: "/images/bussiness-hub/procuretech-solution/icon4.png",
      url: "/business-hub/procuretech-solution/procuretech-solution-detail",
    },
    {
      id: 5,
      heading: "Agentic AI",
      img: "/images/bussiness-hub/sourcetocontract64.png",
      text1: "Optimize docs with AI.",
      industry_id: 2,
      industry_name: "Industry One",
      region_id: 2,
      region_name: "Region One",
      btntext: "View Details",
      icon: "/images/bussiness-hub/procuretech-solution/icon5.png",
      url: "/business-hub/procuretech-solution/procuretech-solution-detail",
    },
    {
      id: 6,
      heading: "Contract Management",
      img: "/images/bussiness-hub/sourcetocontract64.png",
      text1: "Improve connectivity via AI.",
      industry_id: 3,
      industry_name: "Industry One",
      region_id: 3,
      region_name: "Region One",
      btntext: "View Details",
      icon: "/images/bussiness-hub/procuretech-solution/icon6.png",
      url: "/business-hub/procuretech-solution/procuretech-solution-detail",
    },
  ];

  const filteredConsultants = consultantPartners.filter((partner) => {
    const matchesIndustry = selectedIndustry
      ? partner.industry_id.toString() === selectedIndustry
      : true;
    const matchesRegion = selectedRegion
      ? partner.region_id.toString() === selectedRegion
      : true;

    return matchesIndustry && matchesRegion;
  });

  const handleClearFilters = () => {
    setSelectedIndustry("");
    setSelectedRegion("");
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

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
          img="/images/bussiness-hub/procuretech-solution/herosection.png"
          heading={
            <span className="flex flex-col gap-0 leading-none">
              <span className="font-extrabold">ProcureTech Solutions</span>
            </span>
          }
          para="ProcureTech Solutions offers smart digital tools to
          simplify and speed up the procurement process,
          helping businesses manage sourcing, contracts,
          and spending more efficiently."
        />
        <Breadcrumb />
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          ProcureTech Solutions
        </h3>
        <p className="md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
          Digital tools and platform to streamline procurement
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 md:mb-10 text-[#363636]">
          <select
            id="region"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Location</option>
            <option value="1">Region One</option>
            <option value="2">Region Two</option>
            <option value="3">Region Three</option>
          </select>
          <select
            id="region"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Vendor</option>
            <option value="1">Region One</option>
            <option value="2">Region Two</option>
            <option value="3">Region Three</option>
          </select>

          <div className="flex flex-col justify-end gap-2 sm:col-span-1">
            <button
              onClick={handleClearFilters}
              className="text-white bg-[#b08d57] cursor-pointer flex justify-start items-center gap-2 
              p-3 rounded-md w-full hover:shadow-lg transition hover:border-[#a07a4c] hover:text-white"
            >
              Clear Filters
            </button>
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {filteredConsultants.length > 0 ? (
            filteredConsultants
              .slice(0, visibleCount)
              .map((partner) => (
                <ConsultantTile
                  key={partner.id}
                  icon={partner.icon}
                  heading={partner.heading}
                  text1={partner.text1}
                  btntext={partner.btntext}
                  url={partner.url}
                />
              ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No consultant found matching your criteria.
            </div>
          )}
        </div>
      </div>

      {/* Consultant Cards */}
      {/* <div className="flex items-center justify-center w-full">
        {visibleCount < filteredConsultants.length && (
          <button
            onClick={handleShowMore}
            className="mt-4 text-white cursor-pointer px-4 py-2 bg-[#b08d57] rounded"
          >
            View All Venue Partners
          </button>
        )}
      </div> */}
      <PartnerWithUsComp data={partnerWithUs} />
    </>
  );
}

export default ConsultantPartnerCTR;
