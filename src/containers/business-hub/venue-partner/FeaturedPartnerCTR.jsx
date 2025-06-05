"use client";

import React, { useState } from "react";

import ConsultantTile from "@/components/business-hub/venue-partner/ConsultantTile";
function ConsultantPartnerCTR() {

  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  const consultantPartners = [
    {
      id: 1,
      heading: "Venue Partner Name",
      text1: "City, Capacity",
      industry_id: 1,
      industry_name: "Industry One",
      region_id: 1,
      region_name: "Region One",
    },
    {
      id: 2,
      heading: "Venue Partner Name",
      text1: "City, Capacity",
      industry_id: 2,
      industry_name: "Industry One",
      region_id: 2,
      region_name: "Region One",
    },
    {
      id: 3,
      heading: "Venue Partner Name",
      text1: "City, Capacity",
      industry_id: 3,
      industry_name: "Industry One",
      region_id: 3,
      region_name: "Region One",
    },
    {
      id: 4,
      heading: "Venue Partner Name",
      text1: "City, Capacity",
      industry_id: 1,
      industry_name: "Industry One",
      region_id: 1,
      region_name: "Region One",
    },
    {
      id: 5,
      heading: "Venue Partner Name",
      text1: "City, Capacity",
      industry_id: 2,
      industry_name: "Industry One",
      region_id: 2,
      region_name: "Region One",
    },
    {
      id: 6,
      heading: "Venue Partner Name",
      text1: "City, Capacity",
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

      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 md:mb-10 text-[#363636]">

          {/* Location */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-bold" htmlFor="region">
              <strong>Location</strong>
            </label>
            <select
              id="region"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
            >
              <option value="">Select Location</option>
              <option value="1">Region One</option>
              <option value="2">Region Two</option>
              <option value="3">Region Three</option>
            </select>
          </div>

          {/* Capacity */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-bold" htmlFor="region">
              <strong>Capacity</strong>
            </label>
            <select
              id="region"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
            >
              <option value="">Select Capacity</option>
              <option value="1">1-10</option>
              <option value="2">11-20</option>
              <option value="3">21-50</option>
              <option value="4">51+</option>
            </select>
          </div>

          {/* Amenities */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-bold" htmlFor="region">
              <strong>Amenities</strong>
            </label>
            <select
              id="region"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
            >
              <option value="">Select Amenities</option>
              <option value="1">Wi-Fi</option>
              <option value="2">Projector</option>
              <option value="3">Catering</option>
              <option value="4">Parking</option>
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
              View All Venue Partners
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConsultantPartnerCTR;
