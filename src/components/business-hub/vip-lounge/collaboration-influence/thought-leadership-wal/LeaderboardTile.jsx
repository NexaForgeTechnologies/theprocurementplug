import React from "react";
import Image from "next/image";


const LeaderboardTile = ({ rank, name, metric, image }) => {
    return (
        <div className="flex items-center justify-between bg-[#FFFBF5] pb-2 mb-2 border-b-2 border-[#DBBB89] last:border-b-0 last:mb-0">
            <div className="flex items-center gap-4">
                <span className="text-[16px] md:text-2xl font-semibold text-[#1B1B1B]">{rank}.</span>
                <Image
                    src={image}
                    alt={`${name} image`}
                    width={44}
                    height={44}
                    className="w-[44px] h-[44px] object-cover border-1 border-[#B08D57] rounded-full"
                />
                <div className="flex flex-col">
                    <span className="text-[#1B1B1B] font-medium">{name}</span>
                    <span className="text-[#808080] font-normal">{metric}</span>
                </div>
            </div>
            <Image
                src="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/gold.png"
                alt="medal"
                width={44}
                height={70}
                className="w-[44px] h-[70px]"
            />
        </div>
    );
};
export default LeaderboardTile;
