import Link from "next/link";
import React from "react";
import Image from "next/image";

function ConsultingPartnerTile({ heading, para, btntext, bigimg, post, location, url = "" }) {
    return (
        <Link
            href={url}
            className="w-full rounded-[6px] border border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-5 flex flex-col-reverse md:flex-row text-center md:text-start justify-center md:justify-between gap-6  text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
        >
            <div className="flex flex-col items-center md:items-start gap-4">
                {bigimg &&
                    <div className="flex justify-center items-center w-full">
                        <div className="flex flex-col text-center shrink-0 justify-center">
                            <Image
                                src={bigimg}
                                alt="member"
                                width={227}
                                height={227}
                                className="w-[227px] h-[227px] md:w-full mb-2 border border-[#B08D57] rounded-full"
                            />
                        </div>
                    </div>
                }
                <h2 className="text-xl md:text-2xl font-semibold">{heading}</h2>
                {post && <p className="text-[#1B1B1B] font-semibold text-base group-hover:text-[#ffff]">{post}</p>}
                {location && <p className="text-[#B08D57] text-base group-hover:text-[#ffff]">{location}</p>}
                {para && <p className="text-[#1B1B1B] text-base group-hover:text-[#ffff]">{para}</p>}
                <span className="flex justify-center md:justify-start self-center md:self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                    {btntext}
                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                </span>


            </div>
        </Link>
    );
}

export default ConsultingPartnerTile;
