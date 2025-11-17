import React from "react";
import Image from "next/image";
import Link from "next/link";

const NewTechComp = ({ data }) => {
    if (!data) return null; // safety

    return (
        <Link
            href={data.website_url || "#"}
            className="cursor-pointer flex gap-4 flex-col w-full rounded-[6px] border-2 border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-4 text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
        >
            {/* Company Logo */}
            {data.company_logo && (
                <Image
                    src={data.company_logo}
                    alt={data.company_name || "company-logo"}
                    width={316}
                    height={218}
                    className="w-full h-[218px]"
                />
            )}

            {/* Name + About */}
            {(data.company_name || data.company_about) && (
                <div className="flex flex-col md:flex-row text-center md:text-start justify-center md:justify-start gap-4 items-center">
                    <div>
                        {data.company_name && (
                            <h2 className="text-[#85009D] font-bold text-2xl group-hover:text-white">
                                {data.company_name}
                            </h2>
                        )}

                        {data.company_about && (
                            <p className="text-[#1B1B1B] group-hover:text-white text-sm">
                                {data.company_about}
                            </p>
                        )}
                    </div>
                </div>
            )}

            {/* Email */}
            {data.company_email && (
                <p className="text-[#1B1B1B] text-center md:text-start group-hover:text-white text-sm">
                    <span className="text-[#B08D57]">Email: </span>
                    {data.company_email}
                </p>
            )}

            {/* Website Button — only if website exists */}
            {data.website_url && (
                <span className="flex justify-center md:justify-start self-center md:self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                    Visit Website
                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                </span>
            )}
        </Link>
    );
};

export default NewTechComp;
