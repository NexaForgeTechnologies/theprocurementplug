"use client";

import React, { useState } from "react";

import ConsultantTile from "@/components/business-hub/legal-compliance/ConsultantTile";
function ConsultantPartnerCTR() {

  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  const consultantPartners = [
    {
      id: 1,
      heading: "Smith & Associates",
      text1: "Specialized in procurement Law",
      text2: "S",
      industry_id: 1,
      industry_name: "Industry One",
      region_id: 1,
      region_name: "England",
    },
    {
      id: 2,
      heading: "Jackson Legal",
      text1: "Legal compliance experts",
      text2: "J",
      industry_id: 2,
      industry_name: "Industry One",
      region_id: 2,
      region_name: "Scotland",
    },
    {
      id: 3,
      heading: "Harrison LLP",
      text1: "Contract management services",
      text2: "H",
      industry_id: 3,
      industry_name: "Industry One",
      region_id: 3,
      region_name: "Northern Ireland",
    },
    {
      id: 4,
      heading: "Amanda Green",
      text1: "Risk assessment consultant",
      text2: "A",
      industry_id: 4,
      industry_name: "Industry One",
      region_id: 4,
      region_name: "wales",
    },
    {
      id: 5,
      heading: "Smith & Associates",
      text1: "Specialized in procurement Law",
      text2: "S",
      industry_id: 5,
      industry_name: "Industry One",
      region_id: 5,
      region_name: "europe",
    },
    {
      id: 6,
      heading: "Jackson Legal",
      text1: "Legal compliance experts",
      text2: "J",
      industry_id: 6,
      industry_name: "Industry One",
      region_id: 6,
      region_name: "International",
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

  return (
    <div>
      <div className="max-w-[780px] m-auto text-center">
        <h3 className="font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]">
          Featured Practitiooners & Firms
        </h3>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 md:mb-10 text-[#363636]">
          {/* Industry */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-bold" htmlFor="industry">
              <strong>Industry</strong>
            </label>
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
          </div>

          {/* region */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-bold" htmlFor="region">
              <strong>Region</strong>
            </label>
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
          </div>

          {/* Clear Filters */}
          <div className="flex flex-col justify-end gap-2 sm:col-span-1">
            <button
              onClick={handleClearFilters}
              className="text-white bg-[#b08d57] cursor-pointer flex justify-center items-center gap-2 
            py-[10px] px-2 rounded-md font-semibold w-full hover:shadow-lg transition hover:border-[#a07a4c] hover:text-white"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Consultant Cards */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {filteredConsultants.length > 0 ? (
            filteredConsultants.slice(0, visibleCount).map((partner) => (
              <ConsultantTile
                key={partner.id}
                heading={partner.heading}
                text1={partner.text1}
                text2={partner.text2}
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
              className="mt-4 text-white cursor-pointer px-4 py-2 bg-[#b08d57] rounded">
              View All all Practitioners & firms
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConsultantPartnerCTR;
