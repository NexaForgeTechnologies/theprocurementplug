"use client";

import React, { useState } from "react";

import LegalComplianceTile from "@/components/business-hub/consultinng-partner/ConsultingPartnerTile";
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
          Legal & Compliance
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
      heading: "Smith & Associates",
      img: "/images/bussiness-hub/legal-compliance/member.png",
      text1: "Specialized in procurement Law",
      industry_id: 1,
      industry_name: "Industry One",
      region_id: 1,
      region_name: "England",
      btntext: "View Details",
      url: "/business-hub/legal-compliance/legal-compliance-detail",
    },
    {
      id: 2,
      heading: "Jackson Legal",
      img: "/images/bussiness-hub/legal-compliance/member.png",
      text1: "Legal compliance experts",
      industry_id: 2,
      industry_name: "Industry One",
      region_id: 2,
      region_name: "Scotland",
      btntext: "View Details",
      url: "/business-hub/legal-compliance/legal-compliance-detail",
    },
    {
      id: 3,
      heading: "Harrison LLP",
      img: "/images/bussiness-hub/legal-compliance/member.png",
      text1: "Contract management services",
      industry_id: 3,
      industry_name: "Industry One",
      region_id: 3,
      region_name: "Northern Ireland",
      btntext: "View Details",
      url: "/business-hub/legal-compliance/legal-compliance-detail",
    },
    {
      id: 4,
      heading: "Amanda Green",
      img: "/images/bussiness-hub/legal-compliance/member.png",
      text1: "Risk assessment consultant",
      industry_id: 4,
      industry_name: "Industry One",
      region_id: 4,
      region_name: "wales",
      btntext: "View Details",
      url: "/business-hub/legal-compliance/legal-compliance-detail",
    },
    {
      id: 5,
      heading: "Smith & Associates",
      img: "/images/bussiness-hub/legal-compliance/member.png",
      text1: "Specialized in procurement Law",
      industry_id: 5,
      industry_name: "Industry One",
      region_id: 5,
      region_name: "europe",
      btntext: "View Details",
      url: "/business-hub/legal-compliance/legal-compliance-detail",
    },
    {
      id: 6,
      img: "/images/bussiness-hub/legal-compliance/member.png",
      heading: "Jackson Legal",
      text1: "Legal compliance experts",
      industry_id: 6,
      industry_name: "Industry One",
      region_id: 6,
      region_name: "International",
      btntext: "View Details",
      url: "/business-hub/legal-compliance/legal-compliance-detail",
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

  const ComplianceTile = [
    {
      id: 1,
      heading: "Contract Management",
      text: "Customizable legal docs",
      btntext: "View Details",
      url: "",
    },
    {
      id: 2,
      heading: "Regulatory Updates",
      text: "Stay current with laws",
      btntext: "View Details",
      url: "",
    },
    {
      id: 3,
      heading: "Risk Assessments",
      text: "Identify migitate risks",
      btntext: "View Details",
      url: "",
    },
  ];

  const partnerWithUs = [
    {
      id: 1,
      heading: "Procure Tech Solution",
      text: "",
      link: "",
      linkText: "View",
      bgColor: "#85009D"
    }
    ,
    {
      id: 2,
      heading: "Collaboration & Influence",
      text: "",
      link: "",
      linkText: "View",
      bgColor: "#85009D"
    },
    {
      id: 3,
      heading: "Innovation Vault",
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
          img="/images/bussiness-hub/legal-compliance/herosection.png"
          heading={
            <span className="flex flex-col gap-0 leading-none">
              <span className="font-extrabold">Legal & Compliance</span>
            </span>
          }
          para="Source-to-Contract (S2C) streamlines the procurement
          process from supplier sourcing to contract signing, helping
          businesses save time, reduce risks, and improve compliance."
        />
        <Breadcrumb />
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Legal & Compliance
        </h3>
        <p className="md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
          Legal resources and contract management to safeguard your procurement operations:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {ComplianceTile.map((partner) => {
            return (
              <div key={partner.id}>
                <LegalComplianceTile
                  heading={partner.heading}
                  text={partner.text}
                  btntext={partner.btntext}
                  url={partner.url}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4 md:md-8">
          Featured Practitioners & Firms
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 md:mb-10 text-[#363636]">
          <select
            id="industry"
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Select Industry</option>
            <option value="1">Industry One</option>
            <option value="2">Industry Two</option>
            <option value="3">Industry Three</option>
          </select>

          <select
            id="region"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Select Legal Region</option>
            <option value="1">England</option>
            <option value="2">Scotland</option>
            <option value="3">Northern Ireland</option>
            <option value="4">wales</option>
            <option value="5">europe</option>
            <option value="6">International</option>
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
            filteredConsultants.slice(0, visibleCount).map((partner) => (
              <ConsultantTile
                key={partner.id}
                img={partner.img}
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
        <div className="flex items-center justify-center w-full">
          {visibleCount < filteredConsultants.length && (
            <button
              onClick={handleShowMore}
              className="flex self-center md:self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
              View All all Practitioners & firms
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
