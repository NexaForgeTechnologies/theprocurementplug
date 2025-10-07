"use client"
import { useState } from "react";
import JoinTheWaitlistForm from "./JoinTheWaitlistForm";

function ExecutiveRoundtablesCTR() {
const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="max-w-[803px] mb-4 md:mb-8">
                <div>
                    <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                        XecXchange
                    </h3>
                    <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-0">Curated conversations designed exclusively for procurement leaders navigating
                        boardroom-level challenges.</p>
                </div>
            </div>
            <div className="w-full h-[2px] bg-[#85009D] mb-4 md:mb-8"></div>
            <h3 className="font-normal text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                Coming Soon: <span className="text-[#85009D] font-semibold">XecXchange</span>
            </h3>
            <h3 className="font-normal text-[24px] md:text-[32px] mb-4 text-[#808080]">
                What is XecXchange?
            </h3>
            <div className="flex gap-2 md:gap-4 items-start mb-4 md:mb-8">
                <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                <div>
                    <h3 className="font-normal text-[20px] md:text-[24px] mb-2 md:mb-4 text-[#1B1B1B]">
                        Leadership Simulation Rooms
                    </h3>
                    <p className="text-[16px] md:text-[20px] text-[#808080]">Live negotiation or crisis response models.</p>
                </div>
            </div>
            <div className="flex gap-2 md:gap-4 items-start mb-4 md:mb-8">
                <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                <div>
                    <h3 className="font-normal text-[20px] md:text-[24px] mb-2 md:mb-4 text-[#1B1B1B]">
                        Boardroom Readiness Index
                    </h3>
                    <p className="text-[16px] md:text-[20px] text-[#808080]">Proprietary scoring based on interaction + strategy insight</p>
                </div>
            </div>
            <div className="flex gap-2 md:gap-4 items-start mb-4 md:mb-8">
                <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                <div>
                    <h3 className="font-normal text-[20px] md:text-[24px] mb-2 md:mb-4 text-[#1B1B1B]">
                        C-Suite Matchmaking
                    </h3>
                    <p className="text-[16px] md:text-[20px] text-[#808080]">Align with execs by challenge, industry, or investment type</p>
                </div>
            </div>
            <div className="flex gap-2 md:gap-4 items-start mb-4 md:mb-8">
                <div className="w-[20px] h-[20px] bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                <div>
                    <h3 className="font-normal text-[20px] md:text-[24px] mb-2 md:mb-4 text-[#1B1B1B]">
                        Exclusive Content Library
                    </h3>
                    <p className="text-[16px] md:text-[20px] text-[#808080]">Books, whitepapers, roundtable transcrip</p>
                </div>
            </div>
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                Join the Waitlist for XecXchange Access
                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </button>
            <JoinTheWaitlistForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
}

export default ExecutiveRoundtablesCTR;
