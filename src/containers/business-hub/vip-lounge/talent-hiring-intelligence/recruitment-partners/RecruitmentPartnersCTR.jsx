"use client"
import React, { useState } from "react";
import RecruitmentPartnerComp from "@/components/business-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/RecruitmentPartnersTile";
import IconComponent from "@/components/icon/Icon";


const RecruitmentPartnersCTR = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const newTech = [
        {
            id: 1,
            img: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/natquest.png",
            smallimg: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/member.png",
            heading: "Grace Robinson",
            text: "Procurement specialist",
            email: "ABC@gmail.com",
            urlText: "Link to Website",
            url: "",
        },
        {
            id: 2,
            img: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/natquest.png",
            smallimg: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/member.png",
            heading: "Grace Robinson",
            text: "Procurement specialist",
            email: "ABC@gmail.com",
            urlText: "Link to Website",
            url: "",
        },
        {
            id: 3,
            img: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/natquest.png",
            smallimg: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/member.png",
            heading: "Grace Robinson",
            text: "Procurement specialist",
            email: "ABC@gmail.com",
            urlText: "Link to Website",
            url: "",
        },
        {
            id: 4,
            img: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/natquest.png",
            smallimg: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/member.png",
            heading: "Grace Robinson",
            text: "Procurement specialist",
            email: "ABC@gmail.com",
            urlText: "Link to Website",
            url: "",
        },
        {
            id: 5,
            img: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/natquest.png",
            smallimg: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/member.png",
            heading: "Grace Robinson",
            text: "Procurement specialist",
            email: "ABC@gmail.com",
            urlText: "Link to Website",
            url: "",
        },
        {
            id: 6,
            img: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/natquest.png",
            smallimg: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/member.png",
            heading: "Grace Robinson",
            text: "Procurement specialist",
            email: "ABC@gmail.com",
            urlText: "Link to Website",
            url: "",
        },
        {
            id: 7,
            img: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/natquest.png",
            smallimg: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/member.png",
            heading: "Grace Robinson",
            text: "Procurement specialist",
            email: "ABC@gmail.com",
            urlText: "Link to Website",
            url: "",
        },
        {
            id: 8,
            img: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/natquest.png",
            smallimg: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/member.png",
            heading: "Grace Robinson",
            text: "Procurement specialist",
            email: "ABC@gmail.com",
            urlText: "Link to Website",
            url: "",
        },
        {
            id: 9,
            img: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/natquest.png",
            smallimg: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners/member.png",
            heading: "Grace Robinson",
            text: "Procurement specialist",
            email: "ABC@gmail.com",
            urlText: "Link to Website",
            url: "",
        },
    ];

    const filteredPartners = newTech.filter((item) =>
        item.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle search input change
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
                            <RecruitmentPartnerComp key={item.id} data={item} />
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
