"use client";
import { useState } from "react";
import Link from "next/link";

import PricingPackageForm from "@/components/forms/concierge/PricingPackageForm";
import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";

export default function ReadyToWorkBannerComp({ title, description, link1, link2, btnText1, btnText2, Btnlink1, Btnlink2 }) {

    const [isPricingPackagingFormOpen, setIsPricingPackagingFormOpen] = useState(false);

    return (
        <>
            <section className="bg-[#85009D] w-screen ml-[calc(50%-50vw)] px-6 sm:px-10 md:px-14 lg:px-20 relative py-20 flex flex-col gap-y-5 justify-center items-center">
                <img src="/images/concierge/plug-l.png" alt="plug-icon-left"
                    className="absolute left-0 top-5 w-[8%]" />
                <img src="/images/concierge/plug-r.png" alt="plug-icon-right"
                    className="absolute right-0 top-5 w-[20%]" />

                <div className="flex flex-col gap-y-5 justify-center items-center">
                    <h2 className="font-semibold text-xl md:text-2xl text-white">{title}</h2>
                    <p className="max-w-[976px] md:text-lg text-white">{description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-center max-w-[976px] mx-auto w-full">
                    <div className="w-full bg-[#FFFBF5] text-[#85009D] rounded border border-[#D09B48] p-2 md:p-3 flex items-center gap-x-3">
                        <img src="/images/concierge/globe.png" className="w-5 md:w-7 h-5 md:h-7" alt="globe-icon" />
                        <p className="text-xs sm:text-sm md:text-lg text-[#85009D] font-medium break-all ">
                            {link1}
                        </p>
                    </div>
                    <div className="w-full bg-[#FFFBF5] text-[#85009D] rounded border border-[#D09B48] p-2 md:p-3 flex items-center gap-x-3">
                        <img src="/images/concierge/mail.png" className="h-4 md:h-5" alt="mail-icon" />
                        <p className="text-xs sm:text-sm md:text-lg text-[#85009D] font-medium break-all ">
                            {link2}
                        </p>
                    </div>

                    <div className="flex lg:justify-end">
                        {Btnlink1 ? (
                            <div
                                onClick={() => {
                                    setIsPricingPackagingFormOpen(true);
                                }}>
                                <ArrowButtonCom
                                    text={btnText1}
                                    bgColor="bg-[#b08d57]"
                                    textColor="text-white"
                                    hoverBgColor="hover:bg-white"
                                    hoverTextColor="hover:text-[#b08d57]"
                                    borderColor='border-[#b08d57]'
                                    arrowColor="hover:border-[#b08d57]" />
                            </div>
                        ) : null}
                    </div>

                    <div className="flex justify-start">
                        {Btnlink2 ? (
                            <Link href={Btnlink2}>
                                <ArrowButtonCom
                                    text={btnText2}
                                    bgColor="bg-[#b08d57]"
                                    textColor="text-white"
                                    hoverBgColor="hover:bg-white"
                                    hoverTextColor="hover:text-[#b08d57]"
                                    borderColor='border-[#b08d57]'
                                    arrowColor="hover:border-[#b08d57]" />
                            </Link>
                        ) : null}
                    </div>
                </div>
            </section>

            {/* Pricing & Packaging Form */}
            <PricingPackageForm isOpen={isPricingPackagingFormOpen} onClose={() => setIsPricingPackagingFormOpen(false)} />
        </>
    );
}
