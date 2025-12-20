import React from "react";
import Image from "next/image";


const LeaderboardTile = ({ rank, name, metric, image, medalImage, isLast }) => {
    return (
        <div>
            <div className="flex items-center justify-between bg-[#FFFBF5]">
                {/* <div className="flex items-center justify-between bg-[#FFFBF5] pb-2 mb-2 border-b-2 border-[#DBBB89] last:border-b-0 last:mb-0"> */}
                <div className="flex items-center gap-4">
                    <span className="text-[16px] md:text-2xl font-semibold text-[#1B1B1B]">{rank}.</span>
                    <Image
                        src={image}
                        alt={`${name} image`}
                        width={70}
                        height={70}
                        className="w-[70px] h-[70px] object-cover border border-[#B08D57] rounded-full"
                    />
                    <div className="flex flex-col">
                        <span className="text-[#1B1B1B] font-medium">{name}</span>
                        <span className="text-[#808080] font-normal">{metric}</span>
                    </div>
                </div>
                {medalImage && (
                    <Image
                        src={medalImage}
                        alt="medal"
                        width={44}
                        height={70}
                        className="w-11 h-[70px]"
                    />
                )}
            </div>
            {!isLast && (
                <div className="w-full h-0.5 bg-[#DBBB89] my-4"></div>
            )}
        </div>

    );
};
export default LeaderboardTile;
