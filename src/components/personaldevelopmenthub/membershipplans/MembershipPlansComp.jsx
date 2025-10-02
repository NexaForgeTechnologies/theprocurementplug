"use client";

import { useRouter } from "next/navigation";
import useMembershipStore from "@/store/useMembershipstore";

export default function MembershipPlansComp({
    titletxtclr = "text-[#85009D]",
    titlebgclr = "bg-[#EAC6FF]",
    plugType,
    price,
    period,
    btnName = "Select",
    href = "/",
    btnHide,
    data = [{ title: "", para: "" }],
    id, // added to identify the plan uniquely
}) {
    const setSelectedPlan = useMembershipStore((state) => state.setSelectedPlan);
    const router = useRouter();

    const handleSelect = () => {
        // Set the selected plan in the store
        setSelectedPlan({ titletxtclr, titlebgclr, plugType, price, period, btnName, href, data, id });
        // Navigate to the href page (e.g. payment)
        router.push(href);
    };

    return (
        <div className="bg-[#85009D66] border border-[#F3B3FF]/50 text-white rounded p-4 mt-4 
            lg:mt-6 flex flex-col ">
            <div className="flex flex-col gap-y-4 border-b border-[#FFFB08D5] pb-4 mb-4">
                <p className={`text-xs md:text-base ${titletxtclr} ${titlebgclr} py-1 px-2 rounded w-fit`}>{plugType}</p>
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">{price}
                    <span className="text-sm text-[#D7D7D7] font-normal ml-2">{period}</span>
                </h1>
            </div>
            {data.map((item, index) => (
                <div key={index} className="flex flex-col items-start gap-y-2 ">
                    <p className="text-sm text-white">{item.title}</p>
                    <p className="text-xs text-[#D7D7D7] mb-3">{item.para}</p>
                </div>
            ))}
            <button
                onClick={handleSelect}
                className={`${btnHide} flex items-center justify-center cursor-pointer bg-transparent border border-[#D7D7D7] hover:border-none text-white hover:text-black hover:bg-gradient-to-r hover:from-[#FEF989] hover:via-[#DEAE1A] hover:to-[#FBF687] 
                px-4 py-2 rounded-[6px] w-full text-sm md:text-base mt-auto`}
            >
                {btnName}
            </button>
        </div>
    );
}
