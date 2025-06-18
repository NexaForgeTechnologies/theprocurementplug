"use client"

import Image from "next/image";

function ExclusiveBusinessPartnersCTR() {

    return (
        <div>
            <div className="mb-4 md:mb-8">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                    Exclusive Business Partners
                </h3>
                <p className="max-w-[800px] text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-8">Your gateway to elite tools, insights, and procurement support from our vetted partner
                    ecosystem.</p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        View Partner Directory
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Request an Introduction
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Apply to Partner with Us
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
            </div>
            {/* <div className="bg-[#85009D] rounded-[6px] flex gap-4 items-center p-5">
                <div className="basis-[263px] bg-white">
                    <Image
                        src={"/images/bussiness-hub/vip-lounge/exclusive-business-partners/aqualogo.png"}
                        alt={`aqualogo`}
                        width={109}
                        height={165}
                        className="w-[109px] h-[165px] object-cover"
                    />
                </div>
                <div>
                    <h3 className="font-semibold text-[24px] mb-4">Client: <span className="font-normal">AquaPure Bottles</span></h3>
                    <p className="text-[16px] md:text-[20px] mb-4">AquaPure partnered with us through our Exclusive Business Partner
                        program to expand retail presence. With access to our network and
                        co-branded campaigns, they achieved a 40% sales boost and entered
                        25 new stores within 3 months. The partnership drove rapid growth
                        and increased brand visibility.</p>
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        View Profile
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
            </div> */}
        </div>
    );
}

export default ExclusiveBusinessPartnersCTR;
