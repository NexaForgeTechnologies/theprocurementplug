"use client"
import React from "react";
import Image from "next/image";

function FutureProofingCTR() {
 
    return (
        <div>
            <div className="flex justify-between items-center text-start flex-col-reverse md:flex-row mb-6 md:mb-8">
                <div>
                    <h3 className="font-semibold text-[24px] md:text-[52px] mb-4 text-[#85009D]">
                        Future-Proofing <span className="font-normal">Procurement</span>
                    </h3>
                    <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-2 font-semibold">Name: <span className="font-normal">Maria</span></p>
                    {/* <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-2 font-semibold">Time: <span className="font-normal">12:00am to 6:00pm Local time</span></p> */}
                    <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 font-semibold">Access level: <span className="font-normal">Request to join</span></p>
                    <h3 className="font-normal text-[24px] md:text-[42px] text-[#B08D57]">
                        Sponsored by <span className="font-semibold">Logo</span>
                    </h3>
                </div>
                <div className="mb-4 md:mb-0">
                    <Image
                        src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/member.png"}
                        alt={`memeber`}
                        width={300}
                        height={300}
                        className="w-full md:w-[300px] md:h-[300px] object-contain"
                    />
                </div>
            </div>
            <div className="bg-[#85009D] rounded-[6px] p-5 text-[#ffff] mb-6 md:mb-8">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4">
                    Welcome <span className="font-normal">Note👋</span>
                </h3>
                <p className="text-[16px] md:text-[24px] mb-4">Welcome! This roundtable explores emerging models for resilient supply chains. Share
                    your insights, case studies, and frameworks.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button className="cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">Request Access</button>
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Submit a Question
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-4">
                <div>
                    <h3 className="text-[#1B1B1B] font-semibold text-[24px] md:text-[32px] mb-4">Live Discussion Thread</h3>
                    <div className="bg-[#FFFBF5] border-2 border-[#DBBB89] p-5 rounded-[6px]">
                        <div className="mb-4 md:mb-8">
                            <div className="flex flex-wrap gap-2 md:gap-4 items-center mb-4">
                                <Image
                                    src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/reply2.png"}
                                    alt={`reply`}
                                    width={44}
                                    height={44}
                                    className="w-[44px] h-[44px] object-cover"
                                />
                                <p className="text-[#1B1B1B] font-medium">John Mathew</p>
                                <p className="text-[#ffff] bg-[#E2AD5C] rounded-[6px] p-1 text-[8px]">Top Contributor</p>
                                <p className="text-[#919191] font-medium text-[12px]">2 minutes ago</p>
                            </div>
                            <p className="text-[#000000] text-[16px] md:text-[20px] mb-4">Procurement teams are the unsung heroes—so much work goes on behind the
                                scenes to keep everything running smoothly!</p>
                            <p className="text-[#505050]">Reply</p>
                        </div>
                        <div className="mb-4 md:mb-8">
                            <div className="flex gap-4 items-center mb-4">
                                <Image
                                    src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/reply3.png"}
                                    alt={`reply`}
                                    width={44}
                                    height={44}
                                    className="w-[44px] h-[44px] object-cover"
                                />
                                <p className="text-[#1B1B1B] font-medium">Alexa White</p>
                                <p className="text-[#919191] font-medium text-[12px]">2 minutes ago</p>
                            </div>
                            <p className="text-[#000000] text-[16px] md:text-[20px] mb-4">It’s interesting how procurement has shifted from just buying stuff to actually
                                shaping company strategy.</p>
                            <p className="text-[#505050]">Reply</p>
                        </div>
                        <div className="mb-4 md:mb-8">
                            <div className="flex gap-4 items-center mb-4">
                                <Image
                                    src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/reply1.png"}
                                    alt={`reply`}
                                    width={44}
                                    height={44}
                                    className="w-[44px] h-[44px] object-cover"
                                />
                                <p className="text-[#1B1B1B] font-medium">Jason Mamoa</p>
                                <p className="text-[#919191] font-medium text-[12px]">2 minutes ago</p>
                            </div>
                            <p className="text-[#000000] text-[16px] md:text-[20px] mb-4">Been learning a lot about how important supplier relationships are—procurement
                                really is about people as much as process.</p>
                            <p className="text-[#505050]">Reply</p>
                        </div>
                        <div className="mb-4 md:mb-8">
                            <div className="flex gap-4 items-center mb-4">
                                <Image
                                    src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/reply3.png"}
                                    alt={`reply`}
                                    width={44}
                                    height={44}
                                    className="w-[44px] h-[44px] object-cover"
                                />
                                <p className="text-[#1B1B1B] font-medium">Alexa White</p>
                                <p className="text-[#919191] font-medium text-[12px]">2 minutes ago</p>
                            </div>
                            <p className="text-[#000000] text-[16px] md:text-[20px] mb-4">It’s interesting how procurement has shifted from just buying stuff to actually
                                shaping company strategy.</p>
                            <p className="text-[#505050]">Reply</p>
                        </div>
                        <div>
                            <div className="flex gap-4 items-center mb-4">
                                <Image
                                    src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/reply1.png"}
                                    alt={`reply`}
                                    width={44}
                                    height={44}
                                    className="w-[44px] h-[44px] object-cover"
                                />
                                <p className="text-[#1B1B1B] font-medium">Jason Mamoa</p>
                                <p className="text-[#919191] font-medium text-[12px]">2 minutes ago</p>
                            </div>
                            <p className="text-[#000000] text-[16px] md:text-[20px] mb-4">Been learning a lot about how important supplier relationships are—procurement
                                really is about people as much as process.</p>
                            <p className="text-[#505050]">Reply</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-[#1B1B1B] font-semibold text-[24px] md:text-[32px] mb-4">Sponsorship</h3>
                    <div className="bg-[#FFFBF5] border-2 border-[#DBBB89] p-5 rounded-[6px]">
                        <Image
                            src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/logo.png"}
                            alt={`logo`}
                            width={162}
                            height={107}
                            className="w-[110px] h-[73px] md:w-[162px] md:h-[107px] object-cover mb-4"
                        />
                        <p className="text-[#000000] mb-4">This Roundtable is
                            Sponsored by [logo]</p>
                        <button className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
                            Sponsor Profile
                            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FutureProofingCTR;
