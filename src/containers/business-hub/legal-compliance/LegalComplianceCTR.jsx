"use client";

import React, { useState } from "react";

import { useLegalCompliance } from "@/hooks/GetLegalCompliance";
import { useGenericTable } from "@/hooks/GetGenericType";

import LegalTile from "@/components/business-hub/legal-compliance/LegalTileComp";
import ConsultantType from "@/components/business-hub/consulting-partner/ConsultantTypeComp";
import HeroCTR from '@/components/business-hub/BussinessHeroSection';
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import Breadcrumb from "@/components/BreadCrumbs";

function LegalComplianceCTR() {

    const { legals } = useLegalCompliance();

    const {
        data: industries
    } = useGenericTable("industries");
    const {
        data: regions
    } = useGenericTable("regions");
    const {
        data: legal_types
    } = useGenericTable("legal_compliance_types");

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
            p: ""
        },
        items: [
            {
                id: 1,
                heading: "The Procurement Plug Academy",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: "#85009D"
            },
            {
                id: 2,
                heading: "Resources Library",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: "#85009D"
            },
            {
                id: 3,
                heading: "The Personal Development Hub",
                text: "",
                link: "",
                linkText: "View Details",
                bgColor: "#85009D"
            }
        ]
    };

    return (
        <>
            <div>
                <HeroCTR
                    img="/images/bussiness-hub/legal-compliance/herosection.png"
                    heading="Legal & Compliance"
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
                    {legal_types.map((type) => (
                        <ConsultantType
                            key={type.id}
                            type={type}
                            url="/business-hub/legal-compliance/"
                        />
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B] mb-4 md:md-8">
                    Featured Practitioners & Firms
                </h3>

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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredLegalCompliance.length > 0 ? (
                        filteredLegalCompliance.slice(0, visibleCount).map((compliance) => (
                            <LegalTile
                                key={compliance.id}
                                data={compliance}
                                url={`/business-hub/legal-compliance/${compliance.id}`}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center text-gray-500">
                            No Practitioners & Firms found matching your criteria.
                        </div>
                    )}
                </div>

                <div className="mt-6 flex items-center justify-center w-full">
                    {visibleCount < filteredLegalCompliance.length && (
                        <button
                            onClick={handleShowMore}
                            className="flex md:self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
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

export default LegalComplianceCTR;
