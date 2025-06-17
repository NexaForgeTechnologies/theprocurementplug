"use client"
import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/collaboration-influence/vip-forum/ConsultingPartnerTile";
import React, { useState } from "react";

function VipForumCTR() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Show 8 items per page
    const collaboration = [
        {
            id: 1,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
        {
            id: 2,
            heading: "Strategic Supplier Pertnership",
            para: "Name: Timothy",
            sponsor: "Sponsored by Globex",
            btntext: "RSVP",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member2.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/strategic-supplier-pertnership",
        },
        {
            id: 3,
            heading: "Emerging Technologies in Procurement",
            para: "Name: Martha",
            sponsor: "Sponsored by Initech",
            btntext: "Request to join",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member3.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/emerging-technologies-in-procurement",
        },
        {
            id: 4,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
        {
            id: 5,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
        {
            id: 6,
            heading: "Strategic Supplier Pertnership",
            para: "Name: Timothy",
            sponsor: "Sponsored by Globex",
            btntext: "RSVP",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member2.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/strategic-supplier-pertnership",
        },
        {
            id: 7,
            heading: "Emerging Technologies in Procurement",
            para: "Name: Martha",
            sponsor: "Sponsored by Initech",
            btntext: "Request to join",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member3.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/emerging-technologies-in-procurement",
        },
        {
            id: 8,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
        {
            id: 9,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
        {
            id: 10,
            heading: "Strategic Supplier Pertnership",
            para: "Name: Timothy",
            sponsor: "Sponsored by Globex",
            btntext: "RSVP",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member2.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/strategic-supplier-pertnership",
        },
        {
            id: 11,
            heading: "Emerging Technologies in Procurement",
            para: "Name: Martha",
            sponsor: "Sponsored by Initech",
            btntext: "Request to join",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member3.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/emerging-technologies-in-procurement",
        },
        {
            id: 12,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
        {
            id: 13,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
        {
            id: 14,
            heading: "Strategic Supplier Pertnership",
            para: "Name: Timothy",
            sponsor: "Sponsored by Globex",
            btntext: "RSVP",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member2.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/strategic-supplier-pertnership",
        },
        {
            id: 15,
            heading: "Emerging Technologies in Procurement",
            para: "Name: Martha",
            sponsor: "Sponsored by Initech",
            btntext: "Request to join",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member3.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/emerging-technologies-in-procurement",
        },
        {
            id: 16,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
    ];

    // Calculate total pages
    const totalPages = Math.ceil(collaboration.length / itemsPerPage);

    // Get items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = collaboration.slice(startIndex, startIndex + itemsPerPage);

    // Handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div>
            <div className="flex justify-between align-top flex-col md:flex-row mb-6 md:mb-8">
                <div>
                    <h3 className="font-semibold text-[32px] md:text-5xl mb-4 text-[#1B1B1B]">
                        VIP Forum
                    </h3>
                    <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-0">Host or join exclusive conversations shaping procurement leadership.</p>
                </div>
                <div>
                    <span className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
                        Host a Roundtable
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </span>
                </div>
            </div>

            {/* Pages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {currentItems.map((partner) => (
                    // {collaboration.map((partner) => (
                    <ConsultingPartnerTile
                        key={partner.id}
                        heading={partner.heading}
                        para={partner.para}
                        sponsor={partner.sponsor}
                        btntext={partner.btntext}
                        bigimg={partner.bigimg}
                        url={partner.url}
                    />
                ))}
            </div>
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                    {/* Previous Button */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`text-[#1B1B1B] px-4  py-2 rounded-[10px] bg-[#ffff] border-1 border-[#EDEDED] text-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:text-[#1B1B1B]"
                            }`}
                    >
                        &lt;
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`text-lg ${currentPage === page
                                ? "text-[#1B1B1B] font-semibold px-4  py-2 rounded-[10px] bg-[#EFEFEF]"
                                : "text-[#7D7D7D] hover:text-[#1B1B1B]  px-4  py-2 rounded-[10px]"
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    {/* Next Button */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`text-[#1B1B1B] px-4  py-2 rounded-[10px] border-1 border-[#EDEDED] bg-[#ffff] text-lg ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:text-[#1B1B1B]"
                            }`}
                    >
                        &gt;
                    </button>
                </div>
            )}
        </div>
    );
}

export default VipForumCTR;
