"use client";

import React, { useState } from "react";
import Link from "next/link";

import EsgConsultantTile from "@/components/business-hub/consultinng-partner/esg-sustainability/EsgConsultantTile";
import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'

import EsgTile from "@/components/business-hub/consultinng-partner/esg-sustainability/EsgTile";


function Breadcrumb() {
  return (
    <nav className="text-sm breadcrumbs my-4 md:my-10">
      <ol className="list-reset flex gap-2 text-[#9C9C9C] whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <li>
          <Link href="/business-hub" className="hover:underline">Business Hub</Link>
        </li>
        <li>/</li>
        <li>
          <Link href="/business-hub/consulting-partner" className="hover:underline">Consulting Partner</Link>
        </li>
        <li>/</li>
        <li className="text-[#696969]">
          Six Sigma & Change Management
        </li>
      </ol>
    </nav>
  )
}

function ConsultantPartnerCTR() {

  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

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

  const consultantPartnerTile = [
    {
      id: 1,
      heading: "ESG Reporting",
      text: "Measurement & disclose impact",
    },
    {
      id: 2,
      heading: "Net-zero Roadmap",
      text: "Decarbonisation strategy",
    },
    {
      id: 3,
      heading: "Supplier ESG Risk",
      text: "Assess supplier practices",
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
    // setVisibleCount(4);
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <>
      <div>
        <HeroCTR
          img="/images/bussiness-hub/consulting-partner/six-sigma/herosection.png"
          heading={
            <span className="flex flex-col gap-0 leading-none">
              <span className="font-extrabold">Six Sigma & Change Management</span>
            </span>
          }
          para="We help organizations meet environmental, social,
          and governance goals through expert-led strategies
          in ESG reporting, decarbonization, and supplier
          risk management."
        />
        <Breadcrumb />
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Six Sigma & Change Management
        </h3>
        <p className="max-w-[738px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
          Consultancy services to help your organisation achieve its environmental,
          social, and governance goals
        </p>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {consultantPartnerTile.map((partner) => (
            <EsgTile
              key={partner.id}
              heading={partner.heading}
              text={partner.text}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
          Featured Consultants
        </h3>
        <p className="max-w-[930px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
          We are honored to be supported by a team of highly experienced
          consultants who bring deep industry knowledge, strategic insight, and
          proven leadership to our mission. These experts hold key roles such as
          CEOs and Consulting Directors across respected organizations, and they
          contribute valuable perspectives on innovation, compliance, and
          organizational transformation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6 md:mb-10 text-[#363636]">
          {/* Industry */}
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


          {/* Location */}

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

          {/* Specialism */}

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

          {/* Clear Filters */}
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

        {/* Consultant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-4">
          {filteredConsultants.length > 0 ? (
            filteredConsultants.slice(0, visibleCount).map((partner) => (
              <EsgConsultantTile
                key={partner.id}
                img={partner.img}
                heading={partner.heading}
                text1={partner.text1}
                text2={partner.text2}
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
              className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
              View All Consultants
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
