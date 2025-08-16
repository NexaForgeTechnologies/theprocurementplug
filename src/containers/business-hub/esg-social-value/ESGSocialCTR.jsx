"use client";

import React, { useState } from "react";
import Link from "next/link";

import { useConsultants } from "@/hooks/GetConsultant";
import { useGenericTable } from "@/hooks/GetGenericType";

import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import ESGSocialType from "@/components/business-hub//esg-social-value/ESGSocialTypeComp";
import ConsultantTile from "@/components/business-hub/consulting-partner/ConsultantTileComp";

function Breadcrumb() {
    return (
        <nav className="text-sm breadcrumbs my-4 md:my-10">
            <ol className="list-reset flex gap-2 text-[#9C9C9C] whitespace-nowrap overflow-x-auto scrollbar-none md:overflow-x-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <li>
                    <Link href="/business-hub" className="hover:underline">Business Hub</Link>
                </li>
                <li>/</li>
                <li className="text-[#696969]">
                    Esg Social Value
                </li>
            </ol>
        </nav>
    )
}

function ESGSocialPartnerCTR() {
    const { consultants, consultantLoading, error, refetch } = useConsultants();

    const {
        data: industries,
        loading,
        error: industryLoading,
        refetch: industryRefetch,
    } = useGenericTable("industries");
    const {
        data: locations,
        loading: isLocationLoading,
        error: isLocationError,
        refetch: locationsRefetch,
    } = useGenericTable("locations");
    const {
        data: specialisms,
        loading: isSpecialismLoading,
        error: isSpecialismError,
        refetch: specialismRefetch,
    } = useGenericTable("specialisms");

    const partnerWithUs = {
        Partnerheader: {
            crossSellh3: "Cross Sell the Collaboration and Thought Leadership Zone",
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

    const esg_social_partner_types = [
        {
            id: 1,
            value: "ESG Reporting",
            description: "Measurement & disclose impact",
        },
        {
            id: 2,
            value: "Net-zero Roadmap",
            description: "Decarbonisation strategy",
        },
        {
            id: 3,
            value: "Supplier ESG Risk",
            description: "Assess supplier practices",
        },
    ];

    // filter states
    const [selectedIndustry, setSelectedIndustry] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedSpecialism, setSelectedSpecialism] = useState("");

    const [visibleCount, setVisibleCount] = useState(3);

    const filteredConsultants = consultants.filter((partner) => {
        const matchesIndustry = selectedIndustry
            ? partner.industry_id.toString() === selectedIndustry
            : true;
        const matchesLocation = selectedLocation
            ? partner.location_id.toString() === selectedLocation
            : true;
        const matchesSpecialism = selectedSpecialism
            ? partner.specialism_id?.toString() === selectedSpecialism
            : true;

        return matchesIndustry && matchesLocation && matchesSpecialism;
    });

    const handleClearFilters = () => {
        setSelectedIndustry("");
        setSelectedLocation("");
        setSelectedSpecialism("");
    };

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };

    return (
        <>
            <div>
                <HeroCTR
                    img="/images/bussiness-hub/consulting-partner/esg-sustainability-consulting/herosection.png"
                    heading={
                        <span className="flex flex-col gap-0 leading-none">
                            <span className="font-extrabold">
                                ESG & Social Value
                            </span>
                        </span>
                    }
                    para="We help organizations meet environmental, social, and governance goals through expert-led strategies in ESG reporting, decarbonization, and supplier risk management."
                />
                <Breadcrumb />
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                    ESG Social Value
                </h3>
                <p className="max-w-[738px] md:text-xl text-[#1B1B1B] mt-4 mb-4 md:mb-8">
                    Consultancy services to help your organisation achieve its environmental, social, and governance goals
                </p>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {esg_social_partner_types.map((type) => (
                        <ESGSocialType
                            key={type.id}
                            type={type}
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
                        <option value="">Industry</option>
                        {industries.map((industry) => (
                            <option key={industry.id} value={industry.id}>
                                {industry.value}
                            </option>
                        ))}
                    </select>

                    {/* Location */}
                    <select
                        id="location"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
                    >
                        <option value="">Location</option>
                        {locations.map((location) => (
                            <option key={location.id} value={location.id}>
                                {location.value}
                            </option>
                        ))}
                    </select>

                    {/* Specialism */}
                    <select
                        id="specialism"
                        value={selectedSpecialism}
                        onChange={(e) => setSelectedSpecialism(e.target.value)}
                        className="border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full"
                    >
                        <option value="">Specialism</option>
                        {specialisms.map((specialism) => (
                            <option key={specialism.id} value={specialism.id}>
                                {specialism.value}
                            </option>
                        ))}
                    </select>

                    {/* Clear Filters */}
                    <button
                        onClick={handleClearFilters}
                        className="text-center text-white bg-[#b08d57] cursor-pointer p-3 rounded-md w-full hover:shadow-lg transition hover:border-[#a07a4c] hover:text-white"
                    >
                        Clear Filters
                    </button>
                </div>

                {/* Consultant Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredConsultants.length > 0 ? (
                        filteredConsultants
                            .slice(0, visibleCount)
                            .map((consultant) => (
                                <ConsultantTile key={consultant.id} data={consultant} />
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
                            className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]"
                        >
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

export default ESGSocialPartnerCTR;
