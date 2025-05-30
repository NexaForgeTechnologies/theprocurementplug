"use client";

import React, { useState } from "react";

import ConsultantTile from "@/components/business-hub/consultinng-partner/ConsultantTile";

function ConsultantPartnerCTR() {
  const consultantPartners = [
    {
      id: 1,
      img: "/images/guess/guess-1.jpg",
      heading: "Oliver Jones",
      text1: "Consulting Director",
      industry_id: 1,
      industry_name: "Industry One",
      region_id: 1,
      region_name: "Region One",
      text2: "H&Z Management Consulting",
    },
    {
      id: 2,
      img: "/images/guess/guess-2.jpg",
      heading: "Kiran Kachela",
      text1: "CEO",
      industry_id: 2,
      industry_name: "Industry Two",
      region_id: 2,
      region_name: "Region Two",
      text2: "CI Projects",
    },
    {
      id: 3,
      img: "/images/guess/guess-3.jpg",
      heading: "Sarah Socca",
      text1: "CEO",
      industry_id: 3,
      industry_name: "Industry Three",
      region_id: 3,
      region_name: "Region Three",
      text2: "Co Comply",
    },
    {
      id: 4,
      img: "/images/guess/guess-1.jpg",
      heading: "Oliver Jones",
      text1: "Consulting Director",
      industry_id: 1,
      industry_name: "Industry One",
      region_id: 1,
      region_name: "Region One",
      text2: "H&Z Management Consulting",
    },
    {
      id: 5,
      img: "/images/guess/guess-2.jpg",
      heading: "Kiran Kachela",
      text1: "CEO",
      industry_id: 2,
      industry_name: "Industry Two",
      region_id: 2,
      region_name: "Region Two",
      text2: "CI Projects",
    },
    {
      id: 6,
      img: "/images/guess/guess-1.jpg",
      heading: "Oliver Jones",
      text1: "Consulting Director",
      industry_id: 1,
      industry_name: "Industry One",
      region_id: 1,
      region_name: "Region One",
      text2: "H&Z Management Consulting",
    },
    {
      id: 7,
      img: "/images/guess/guess-3.jpg",
      heading: "Sarah Socca",
      text1: "CEO",
      industry_id: 3,
      industry_name: "Industry Three",
      region_id: 3,
      region_name: "Region Three",
      text2: "Co Comply",
    },
    {
      id: 8,
      img: "/images/guess/guess-1.jpg",
      heading: "Oliver Jones",
      text1: "Consulting Director",
      industry_id: 1,
      industry_name: "Industry One",
      region_id: 1,
      region_name: "Region One",
      text2: "H&Z Management Consulting",
    },
  ];

  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

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
    // setVisibleCount(4);
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div>
      <div className="max-w-[780px] m-auto text-center">
        <h3 className="font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]">
          Featured Consultants
        </h3>
        <p className="text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
          We are honored to be supported by a team of highly experienced
          consultants who bring deep industry knowledge, strategic insight, and
          proven leadership to our mission. These experts hold key roles such as
          CEOs and Consulting Directors across respected organizations, and they
          contribute valuable perspectives on innovation, compliance, and
          organizational transformation.
        </p>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 md:mb-10 text-[#363636]">
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

          {/* Specialism */}
          <div className="flex flex-col gap-2">
            <label className="text-xl font-bold" htmlFor="region">
              <strong>Specialism</strong>
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
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredConsultants.length > 0 ? (
            // filteredConsultants.map((partner) => (
            filteredConsultants.slice(0, visibleCount).map((partner) => (
              <ConsultantTile
                key={partner.id}
                img={partner.img}
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
              View All Consultants
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConsultantPartnerCTR;
