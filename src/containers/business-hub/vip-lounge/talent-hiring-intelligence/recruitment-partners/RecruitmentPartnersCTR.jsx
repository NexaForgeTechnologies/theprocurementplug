"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import RecruitmentPartnerComp from "@/components/business-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/RecruitmentPartnersTile";
import IconComponent from "@/components/icon/Icon";

const RecruitmentPartnersCTR = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const res = await fetch(
                    "/api/business-hub/vip-lounge/talent-hiring-intelligence/vip-recruitment-partners"
                );

                const data = await res.json();
                console.log("Fetched Partners:", data);
                setPartners(data);

            } catch (err) {
                console.error("Failed to fetch partners:", err);
            }
        };

        fetchPartners();
    }, []);


    const filteredPartners = partners.filter((item) =>
        (item.company_name || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.company_about || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.company_email || "").toLowerCase().includes(searchQuery.toLowerCase())
    );



    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <div className="mb-8 md:mb-12">
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                    Recruitment Partners
                </h3>
                <p className="max-w-[709px] md:text-xl text-[#1B1B1B] my-4">
                    Discover trusted recruitment partners with key contact details for quick
                    and easy connection.
                </p>
            </div>

            <div>
                <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                    Recruitment Partners Profile
                </h3>

                <div className="relative flex items-center mt-4 w-full md:w-[456px]">
                    <input
                        type="text"
                        placeholder="Search Profile"
                        className="w-full border border-[#85009D] rounded-[6px] py-2 pl-3 pr-10 text-[#1b1b1b] focus:outline-none focus:border-[#85009D]"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <IconComponent name="search" color="#85009D" size={16} />
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
                    {filteredPartners.length > 0 ? (
                        filteredPartners.map((item) => (
                            <RecruitmentPartnerComp
                                key={item.id}
                                data={item} // just pass the object as-is
                            />
                        ))
                    ) : (
                        <p className="text-[#1B1B1B] col-span-full">
                            No partners found matching your search.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default RecruitmentPartnersCTR;
