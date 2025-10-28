"use client";

import React, { useState } from "react";

import { useLegalCompliance } from "@/hooks/GetLegalCompliance";
import { useGenericTable } from "@/hooks/GetGenericType";

import HeroCTR from "@/components/business-hub/BussinessHeroSection";
import PartnerWithUsComp from "@/components/business-hub/vip-lounge/PartnerWithUs";
import ConsultantType from "@/components/business-hub/consulting-partner/ConsultantTypeComp";
import Breadcrumb from "@/components/BreadCrumbs";
import LegalTile from "@/components/business-hub/legal-compliance/LegalTileComp";

function ContractManagementCTR() {
  const { legals } = useLegalCompliance(1);

  const { data: industries } = useGenericTable("industries");
  const { data: regions } = useGenericTable("regions");

  const legal_types = [
    {
      id: 1,
      value: "Contract Management",
      description: "Measurement & disclose impact",
    },
    {
      id: 2,
      value: "Regulatory Updates",
      description: "Decarbonisation strategy",
    },
    {
      id: 3,
      value: "Risk Assessments",
      description: "Assess supplier practices",
    },
  ];

  // filter states
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const [visibleCount, setVisibleCount] = useState(3);

  const filteredLegalCompliance = legals.filter((legal) => {
    const matchesIndustry = selectedIndustry
      ? legal.industry_id.toString() === selectedIndustry
      : true;
    const matchesRegion = selectedRegion
      ? legal.region_id.toString() === selectedRegion
      : true;

    return matchesIndustry && matchesRegion;
  });

  const handleClearFilters = () => {
    setSelectedIndustry("");
    setSelectedRegion("");
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const partnerWithUs = {
    Partnerheader: {
      crossSellh3: "Thought Leadership Zone",
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

  return (
    <>
      <div>
        <HeroCTR
          img="/images/bussiness-hub/legal-compliance/herosection.png"
          heading="Contract Management"
          para="We help organizations meet environmental, social,
          and governance goals through expert-led strategies
          in ESG reporting, decarbonization, and supplier
          risk management."
        />
        <Breadcrumb />
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Contract Management
        </h3>
        <p className="max-w-[738px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
          Consultancy services to help your organisation achieve its
          environmental, social, and governance goals
        </p>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {legal_types.map((type) => (
            <ConsultantType key={type.id} type={type} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Featured Legal & Compliance
        </h3>
        <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
          We are honored to be supported by a team of highly experienced
          consultants who bring deep industry knowledge, strategic insight, and
          proven leadership to our mission. These experts hold key roles such as
          CEOs and Consulting Directors across respected organizations, and they
          contribute valuable perspectives on innovation, compliance, and
          organizational transformation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 md:mb-10 text-[#363636]">
          {/* Industry */}
          <select
            id="industry"
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Industry</option>
            {industries.map((industry) => (
              <option key={industry.id} value={industry.id}>
                {industry.value}
              </option>
            ))}
          </select>

          {/* Regions */}
          <select
            id="region"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Legal Region</option>
            {regions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.value}
              </option>
            ))}
          </select>

          <button
            onClick={handleClearFilters}
            className="text-center text-white bg-[#b08d57] cursor-pointer p-3 rounded-md w-full hover:shadow-lg transition hover:border-[#a07a4c] hover:text-white"
          >
            Clear Filters
          </button>
        </div>

        {/* Legal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredLegalCompliance.length > 0 ? (
            filteredLegalCompliance
              .slice(0, visibleCount)
              .map((legal) => (
                <LegalTile
                  key={legal.id}
                  data={legal}
                  url={`/business-hub/legal-compliance/contract-management/${legal.id}`}
                />
              ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No legal & compliance found matching your criteria.
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center justify-center w-full">
          {visibleCount < filteredLegalCompliance.length && (
            <button
              onClick={handleShowMore}
              className="flex items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]"
            >
              View All Legal & Compliance
              <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </button>
          )}
        </div>
      </div>
      <PartnerWithUsComp data={partnerWithUs} />
    </>
  );
}

export default ContractManagementCTR;
