"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/exclusive-business-partners/ConsultingPartnerTile";
import IconComponent from "@/components/icon/Icon";
import RequestIntroForm from "@/components/business-hub/vip-lounge/exclusive-business-partners/RequestIntroForm";

function ExclusiveBusinessPartnersCTR() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [partners, setPartners] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Category mapping
  const categoryLabels = {
    ecommerce: "E-commerce / Online Shopping Platform",
    cybersecurity: "Cybersecurity / Tech Services",
    sustainable: "Sustainable Products / Eco-Friendly Brand",
    software: "Software",
  };

  const categoryIdToKey = {
    1: "ecommerce",
    2: "cybersecurity",
    3: "sustainable",
    4: "software",
  };

  // Fetch partners from API
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch(
          "/api/business-hub/vip-lounge/exclusive-business-partners",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();
        setPartners(data.data || []);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    fetchPartners();
  }, []);

  // Dummy slide data
  const slides = [
    {
      client: "AquaPure Bottles",
      logoSrc:
        "/images/bussiness-hub/vip-lounge/exclusive-business-partners/aqualogo.png",
      offerSrc:
        "/images/bussiness-hub/vip-lounge/exclusive-business-partners/offer.png",
      description:
        "AquaPure partnered with us through our Exclusive Business Partner program to expand retail presence. With access to our network and co-branded campaigns, they achieved a 40% sales boost and entered 25 new stores within 3 months. The partnership drove rapid growth and increased brand visibility.",
    },
    {
      client: "AquaFresh Innovations",
      logoSrc:
        "/images/bussiness-hub/vip-lounge/exclusive-business-partners/aqualogo.png",
      offerSrc:
        "/images/bussiness-hub/vip-lounge/exclusive-business-partners/offer.png",
      description:
        "AquaFresh partnered with us through our Exclusive Business Partner program to expand retail presence. With access to our network and co-branded campaigns, they achieved a 40% sales boost and entered 25 new stores within 3 months. The partnership drove rapid growth and increased brand visibility.",
    },
    {
      client: "PureWave Enterprises",
      logoSrc:
        "/images/bussiness-hub/vip-lounge/exclusive-business-partners/aqualogo.png",
      offerSrc:
        "/images/bussiness-hub/vip-lounge/exclusive-business-partners/offer.png",
      description:
        "PureWave partnered with us through our Exclusive Business Partner program to expand retail presence. With access to our network and co-branded campaigns, they achieved a 40% sales boost and entered 25 new stores within 3 months. The partnership drove rapid growth and increased brand visibility.",
    },
  ];

  const handleDotClick = (index) => setActiveIndex(index);

  // Filter partners based on search and category
  const filteredPartners = partners.filter((partner) => {
    const categoryKey = categoryIdToKey[Number(partner.category_id)];
    const categoryName = categoryLabels[categoryKey] || "";
    const matchesSearch =
      partner.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      categoryName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory
      ? categoryKey === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Header Section */}
      <div className="mb-4 md:mb-8">
        <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
          Exclusive Business Partners
        </h3>
        <p className="max-w-[800px] text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-8">
          Your gateway to elite tools, insights, and procurement support from
          our vetted partner ecosystem.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            href="/business-hub/vip-lounge/exclusive-business-partners/partner-directory"
          >
            <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded w-full md:w-auto">
              View Partner Directory
              <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </button>
          </Link>

          <button
            onClick={() => {
              setIsModalOpen(true);
              setTitle("Request an Introduction");
            }}
            className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded w-full md:w-auto"
          >
            Request an Introduction
            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
          </button>

          <Link href="/partnerships">
            <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded w-full md:w-auto">
              Apply to Partner with Us
              <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </button>
          </Link>
        </div>
      </div>

      {/* Slides Section */}
      <div className="bg-[#85009D] rounded gap-6 md:gap-12 flex flex-col lg:flex-row items-center p-5 relative mb-4">
        <div className="mt-10 lg:mt-0">
          <Image
            src={slides[activeIndex].logoSrc}
            alt={`${slides[activeIndex].client} logo`}
            width={269}
            height={269}
            className="w-[269px] h-[269px] object-cover"
          />
        </div>
        <div className="flex-2">
          <h3 className="font-semibold text-[24px] mb-4">
            Client: <span className="font-normal">{slides[activeIndex].client}</span>
          </h3>
          <p className="max-w-[850px] text-[16px] md:text-[20px] mb-4">
            {slides[activeIndex].description}
          </p>
          <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded w-full md:w-auto">
            View Profile
            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
          </button>
        </div>
        <Image
          src={slides[activeIndex].offerSrc}
          alt="offer"
          width={241}
          height={44}
          className="w-[241px] h-[44px] object-cover absolute top-3 right-[-5px]"
        />
      </div>

      {/* Slide Dots */}
      <div className="max-w-[112px] m-auto flex items-center gap-1 mb-4 md:mb-8">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-[6px] rounded-[8px] cursor-pointer ${
              activeIndex === index ? "w-[64px] bg-[#b08d57]" : "w-[20px] bg-[#B08D5766]"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>

      {/* Search & Partners */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4 md:mb-8">
        <div className="flex flex-col gap-2 md:gap-4 flex-2">
          <div className="flex flex-col lg:flex-row gap-4 mb-4 md:mb-8">
            {/* Search */}
            <div className="relative flex items-center flex-2">
              <input
                type="text"
                placeholder="Search"
                className="border border-[#85009D] rounded py-2 px-3 pr-10 text-[#1b1b1b] flex-2 focus:outline-none focus:border-[#85009D]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <IconComponent name="search" color="#85009D" size={16} />
              </span>
            </div>

            {/* Category */}
            <div className="relative w-full flex-1">
              <select
                className="appearance-none border border-[#85009D] rounded py-2 px-3 pr-10 text-[#1b1b1b] w-full focus:outline-none focus:border-[#85009D]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Category</option>
                <option value="ecommerce">{categoryLabels.ecommerce}</option>
                <option value="cybersecurity">{categoryLabels.cybersecurity}</option>
                <option value="sustainable">{categoryLabels.sustainable}</option>
                <option value="software">{categoryLabels.software}</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
                <IconComponent name="drop-down" color="#808080" size={16} />
              </div>
            </div>
          </div>

          {/* Partners List */}
          {filteredPartners.length > 0 ? (
            filteredPartners.map((partner) => {
              const categoryKey = categoryIdToKey[Number(partner.category_id)];
              const categoryName = categoryLabels[categoryKey] || "Unknown Category";

              return (
                <ConsultingPartnerTile
                  key={partner.id}
                  bigimg={partner.logo}
                  heading={partner.title}
                  para={`Tagline: ${partner.tagline}`}
                  description={`Description: ${partner.description}`}
                  category={`Category: ${categoryName}`}
                  btntext="Website Link"
                  BtnLink={partner.website}
                />
              );
            })
          ) : (
            <p className="text-[#9D9D9D]">No partners found.</p>
          )}
        </div>

        {/* Why Partner Section */}
        <div className="rounded border border-[#DBBB89] bg-[#FFFBF5] p-5 w-full lg:self-start hover:text-[#ffff] flex-1 mt-0 lg:mt-[89.5px]">
          <h3 className="font-semibold text-[24px] md:text-2xl mb-4 text-[#85009D]">
            Why Partner with Procurement Plug?
          </h3>
          {[
            "Dedicated feature in Business Lounge",
            "Monthly lead report (clicks + engagement)",
            "Sponsored content & co-hosting rights",
            "VIP event exposure & roundtable slots",
          ].map((item, idx) => (
            <div key={idx} className="flex gap-2 md:gap-4 items-start mb-4">
              <div className="w-3 h-3 bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
              <p className="text-base md:text-lg text-[#1B1B1B]">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Request Intro Form */}
      <RequestIntroForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
      />
    </div>
  );
}

export default ExclusiveBusinessPartnersCTR;
