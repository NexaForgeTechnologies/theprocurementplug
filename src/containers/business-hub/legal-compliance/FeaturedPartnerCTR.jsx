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
      region_name: "Region One",
    },
    {
      id: 2,
      heading: "Jackson Legal",
      text1: "Legal compliance experts",
      text2: "J",
      industry_id: 2,
      industry_name: "Industry One",
      region_id: 2,
      region_name: "Region One",
    },
    {
      id: 3,
      heading: "Harrison LLP",
      text1: "Contract management services",
      text2: "H",
      industry_id: 3,
      industry_name: "Industry One",
      region_id: 3,
      region_name: "Region One",
    },
    {
      id: 4,
      heading: "Amanda Green",
      text1: "Risk assessment consultant",
      text2: "A",
      industry_id: 1,
      industry_name: "Industry One",
      region_id: 1,
      region_name: "Region One",
    },
    {
      id: 5,
      heading: "Smith & Associates",
      text1: "Specialized in procurement Law",
      text2: "S",
      industry_id: 2,
      industry_name: "Industry One",
      region_id: 2,
      region_name: "Region One",
    },
    {
      id: 6,
      heading: "Jackson Legal",
      text1: "Legal compliance experts",
      text2: "J",
      industry_id: 3,
      industry_name: "Industry One",
      region_id: 3,
      region_name: "Region One",
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
              <option value="">Select Specialism</option>
              <option value="1">Region One</option>
              <option value="2">Region Two</option>
              <option value="3">Region Three</option>
            </select>
          </div>

          {/* Clear Filters */}
          <div className="flex flex-col justify-end gap-2 sm:col-span-1">
            <button
              onClick={handleClearFilters}
              className="bg-gray-300 text-black px-2 py-[10px] cursor-pointer rounded-md font-semibold hover:bg-gray-400 transition"
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
