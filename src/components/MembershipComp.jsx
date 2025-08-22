"use client";
import useFormStore from "../store/useFormStore";
import BtnOne from "./BtnOne";

export default function MembershipComp({ title, subtitle, subHead, includes = [], buttonText }) 
{
    const { isOpen, setIsOpen } = useFormStore();
    return (
        <div className="flex flex-col bg-[#151515] text-white p-6 rounded-lg shadow-lg border border-[#f2b85933] ">
            {/* Title */}
            <h2 className="text-lg font-semibold text-[#B08D57]">{title}</h2>

            {/* Subtitle */}
            <p className="text-sm text-[#C2C2C2] mt-2">{subtitle}</p>

            {/* Divider */}
            <div className="border-t border-[#B08D57] my-4"></div>

            {/* Includes */}
            <h3 className="font-medium text-sm">{subHead}</h3>
            <ul className="space-y-2 text-sm my-5">
                {includes.map((item, index) => (
                    <li key={index} className="flex gap-2 items-start">
                        <span className="text-[#B08D57] mt-1 flex-shrink-0">✔</span>
                        <span className="text-[#C2C2C2]">{item}</span>
                    </li>
                ))}
            </ul>

            {/* Button */}
            <div className="mt-auto " onClick={() => setIsOpen(!isOpen)}>
                <BtnOne name={buttonText} />
            </div>
        </div>
    );
}
