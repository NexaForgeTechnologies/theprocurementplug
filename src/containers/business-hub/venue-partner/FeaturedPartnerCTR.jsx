"use client";

import React, { useState } from "react";
import Link from "next/link";

// import ConsultantTile from "@/components/business-hub/venue-partner/ConsultantTile";
import ConsultantTile from "@/components/business-hub/consultinng-partner/ConsultingPartnerTile";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'

function Breadcrumb() {
  return (
    <nav className="text-sm breadcrumbs my-4 md:my-10">
      <ol className="list-reset flex gap-2 text-[#9C9C9C] whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <li>
          <Link href="/business-hub" className="hover:underline">Business Hub</Link>
        </li>
        <li>/</li>
        <li className="text-[#696969]">
          Venue Partners
        </li>
      </ol>
    </nav>
  )
}

function ConsultantPartnerCTR() {

  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState("");
  const [selectedAmenity, setSelectedAmenity] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  const consultantPartners = [
    {
      id: 1,
      heading: "Grand Horizon Hall",
      text: "New York City",
      text2: "500+ Capacity",
      industry_id: 1,
      industry_name: "Industry One",
      region_id: 1,
      region_name: "Region One",
      url: "/business-hub/venue-partner/venue-partner-detail",
      btntext: "View Details",
    },
    {
      id: 2,
      heading: "Summit Venue Center",
      text: "Chicago",
      text2: "300 Capacity",
      industry_id: 2,
      industry_name: "Industry One",
      region_id: 2,
      region_name: "Region One",
      url: "/business-hub/venue-partner/venue-partner-detail",
      btntext: "View Details",
    },
    {
      id: 3,
      heading: "The Event Loft",
      text: "San Francisco",
      text2: "500+ Capacity",
      industry_id: 3,
      industry_name: "Industry One",
      region_id: 3,
      region_name: "Region One",
      url: "/business-hub/venue-partner/venue-partner-detail",
      btntext: "View Details",
    },
    {
      id: 4,
      heading: "Coastal Retreat Space",
      text: "Miami",
      text2: "600+ Capacity",
      industry_id: 1,
      industry_name: "Industry One",
      region_id: 1,
      region_name: "Region One",
      url: "/business-hub/venue-partner/venue-partner-detail",
      btntext: "View Details",
    },
    {
      id: 5,
      heading: "Urban Sky Lounge",
      text: "Seattle",
      text2: "350+ Capacity",
      industry_id: 2,
      industry_name: "Industry One",
      region_id: 2,
      region_name: "Region One",
      url: "/business-hub/venue-partner/venue-partner-detail",
      btntext: "View Details",
    },
    {
      id: 6,
      heading: "Starlight Convention Center",
      text: "Los Angeles",
      text2: "700+ Capacity",
      industry_id: 3,
      industry_name: "Industry One",
      region_id: 3,
      region_name: "Region One",
      url: "/business-hub/venue-partner/venue-partner-detail",
      btntext: "View Details",
    },
  ];

  const filteredConsultants = consultantPartners.filter((partner) => {
    const matchesIndustry = selectedIndustry
      ? partner.industry_id.toString() === selectedIndustry
      : true;
    const matchesRegion = selectedRegion
      ? partner.text === selectedRegion
      : true;
    const matchesCapacity = selectedCapacity
      ? selectedCapacity === "300"
        ? partner.text2.includes("300") || partner.text2.includes("350")
        : partner.text2.includes("500") || partner.text2.includes("600") || partner.text2.includes("700")
      : true;
    const matchesAmenity = selectedAmenity
      ? partner.amenities?.includes(selectedAmenity) // Requires amenities field in data
      : true;

    return matchesIndustry && matchesRegion && matchesCapacity && matchesAmenity;
  });

  const handleClearFilters = () => {
    setSelectedIndustry("");
    setSelectedRegion("");
    setSelectedCapacity("");
    setSelectedAmenity("");
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
          img="/images/bussiness-hub/venue-partner/herosection.png"
          heading={
            <span className="flex flex-col gap-0 leading-none">
              <span className="font-extrabold">Venue Partners</span>
            </span>
          }
          para="Explore handpicked venues ideal for procurement
          events, conferences, and workshops—designed to
          meet your professional needs with the right
          capacity and amenities."
        />
        <Breadcrumb />
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Venue Partners
        </h3>
        <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
          Curated venues for procurement events and conferences
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 md:mb-10 text-[#363636]">
          <select
            id="location"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Locations</option>
            {[...new Set(consultantPartners.map((partner) => partner.text))].map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>

          <select
            id="capacity"
            value={selectedCapacity}
            onChange={(e) => setSelectedCapacity(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Capacities</option>
            <option value="300">300-499</option>
            <option value="500">500+</option>
          </select>

          <select
            id="amenities"
            value={selectedAmenity}
            onChange={(e) => setSelectedAmenity(e.target.value)}
            className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
          >
            <option value="">Amenities</option>
            <option value="Wi-Fi">Wi-Fi</option>
            <option value="Projector">Projector</option>
            <option value="Catering">Catering</option>
            <option value="Parking">Parking</option>
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
                heading={partner.heading}
                text={partner.text}
                text2={partner.text2}
                url={partner.url}
                btntext={partner.btntext}
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
              View All Venue Partners
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
