// import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import RequestIntroForm from "@/containers/business-hub/vip-lounge/talent-hiring-intelligence/RequestIntroForm";

function ConsultingPartnerTile({ heading, para, btntext, bigimg, post, location }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showFullPara, setShowFullPara] = useState(false);

    const truncateLimit = 100;
    const isLongPara = para && para.length > truncateLimit;
    const displayedPara = showFullPara ? para : para?.substring(0, truncateLimit) + (isLongPara ? "..." : "");

    return (
        <div
            className="w-full rounded-[6px] border border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-5 flex flex-col text-center md:text-start justify-between gap-6 text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
        >
            {/* Image container */}
            {bigimg && (
                <div className="flex justify-center md:justify-center items-center w-full md:w-auto">
                    <Image
                        src={bigimg || "/images/default-circle.png"}
                        alt={heading || "member"}
                        width={227}
                        height={227}
                        className="w-[227px] h-[227px] border border-[#B08D57] rounded-full object-cover"
                    />
                </div>
            )}

            {/* Text content */}
            <div className="flex flex-col items-center md:items-start gap-4 flex-1">
                <h2 className="text-xl md:text-2xl font-semibold">{heading}</h2>
                {post && <p className="text-[#1B1B1B] font-semibold text-base group-hover:text-[#ffff]">{post}</p>}
                {location && <p className="text-[#B08D57] text-base group-hover:text-[#ffff]">{location}</p>}

                {para && (
                    <p className="text-[#1B1B1B] text-base group-hover:text-[#ffff]">
                        {displayedPara}
                        {isLongPara && (
                            <span
                                onClick={() => setShowFullPara(!showFullPara)}
                                className="ml-1 cursor-pointer text-[#b08d57] hover:underline font-semibold"
                            >
                                {showFullPara ? "...View less" : "View more"}
                            </span>
                        )}
                    </p>
                )}

                <span
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-center md:justify-start self-center md:self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto mt-auto"
                >
                    {btntext}
                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                </span>
            </div>

            {/* Form */}
            <RequestIntroForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>

    );
}

export default ConsultingPartnerTile;
