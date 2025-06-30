"use client";

import React, { useState } from "react";

// import ConsultantTile from "@/components/business-hub/procuretech-solution/procuretech-solution-detail/ConsultantTile";
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
        <li>
          <Link href="/business-hub/procuretech-solution" className="hover:underline"> ProcureTech Solutions</Link>
        </li>
        <li>/</li>
        <li className="text-[#696969]">
          Source-to-Contract
        </li>
      </ol>
    </nav>
  )
}

function ConsultantPartnerCTR() {

  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  const consultantPartners = [
    {
      id: 1,
      heading: "Procurement Heads",
      fullimg: "/images/bussiness-hub/procuretech-solution/procuretech-solution-detail/stcicon1.png",
      rating: "★★★★★",
      industry_id: 1,
      industry_name: "Industry One",
      region_id: 1,
      region_name: "Region One",
      btntext: "View Details",
      url: "/business-hub/procuretech-solution/procuretech-solution-detail/vendor-detail",
    },
    {
      id: 2,
      heading: "NatQuest",
      fullimg: "/images/bussiness-hub/procuretech-solution/procuretech-solution-detail/stcicon2.png",
      rating: "★★★★★",
      industry_id: 2,
      industry_name: "Industry One",
      region_id: 2,
      region_name: "Region One",
      btntext: "View Details",
      url: "/business-hub/procuretech-solution/procuretech-solution-detail/vendor-detail",
    },
    {
      id: 3,
      heading: "FLIPTHROUGH",
      fullimg: "/images/bussiness-hub/procuretech-solution/procuretech-solution-detail/stcicon3.png",
      rating: "★★★★★",
      industry_id: 3,
      industry_name: "Industry One",
      region_id: 3,
      region_name: "Region One",
      btntext: "View Details",
      url: "/business-hub/procuretech-solution/procuretech-solution-detail/vendor-detail",
    },
    {
      id: 4,
      heading: "FLIPTHROUGH",
      fullimg: "/images/bussiness-hub/procuretech-solution/procuretech-solution-detail/stcicon3.png",
      rating: "★★★★★",
      industry_id: 1,
      industry_name: "Industry One",
      region_id: 1,
      region_name: "Region One",
      btntext: "View Details",
      url: "/business-hub/procuretech-solution/procuretech-solution-detail/vendor-detail",
    },
    {
      id: 5,
      heading: "Procurement Heads",
      fullimg: "/images/bussiness-hub/procuretech-solution/procuretech-solution-detail/stcicon1.png",
      rating: "★★★★★",
      industry_id: 2,
      industry_name: "Industry One",
      region_id: 2,
      region_name: "Region One",
      btntext: "View Details",
      url: "/business-hub/procuretech-solution/procuretech-solution-detail/vendor-detail",
    },
    {
      id: 6,
      heading: "NatQuest",
      fullimg: "/images/bussiness-hub/procuretech-solution/procuretech-solution-detail/stcicon2.png",
      rating: "★★★★★",
      industry_id: 3,
      industry_name: "Industry One",
      region_id: 3,
      region_name: "Region One",
      btntext: "View Details",
      url: "/business-hub/procuretech-solution/procuretech-solution-detail/vendor-detail",
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
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Source-to-Contract
        </h3>
        <p className="max-w-[843px] md:text-xl text-[#1B1B1B] mt-4">
          End-to-end process covering supplier identification, sourcing, negotiation, contract
          creation, approval, and e-signature
        </p>
        <p className="max-w-[843px] md:text-xl text-[#1B1B1B] mb-4 md:mb-8">Explore solutions that automate each stage of your S2C workflow, boost compliance,
          and accelerate time-to-value.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6 md:mb-10 text-[#363636]">
          <select
            id="region"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Deployment Modal</option>
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
            <option value="">Pricing Modal</option>
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
            <option value="">Integration Modal</option>
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
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-4">
          {filteredConsultants.length > 0 ? (
            filteredConsultants
              .slice(0, visibleCount)
              .map((partner) => (
                <ConsultantTile
                  key={partner.id}
                  fullimg={partner.fullimg}
                  heading={partner.heading}
                  rating={partner.rating}
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
        <div className="flex items-center justify-center w-full">
          {visibleCount < filteredConsultants.length && (
            <button
              onClick={handleShowMore}
              className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
              View All ProcureTech
              <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </button>
          )}
        </div>
      </div>

      <PartnerWithUsComp data={partnerWithUs} />
    </>
  );
}

export default ConsultantPartnerCTR;
