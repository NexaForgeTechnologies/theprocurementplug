// "use client"
// import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/collaboration-influence/vip-forum/ConsultingPartnerTile";
// import React from "react";

// function ThoughtLeadershipWallCTR() {

//     const collaboration = [
//         {
//             id: 1,
//             tag: "ARTICLE",
//             heading: "Category Strategy in a Volatile Market",
//             para: "Name: Maria",
//             logo: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/linkidin.png",
//             sponsor: "Sponsored by Logo",
//             btntext: "View Full Post",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
//         },
//         {
//             id: 2,
//             tag: "ARTICLE",
//             heading: "Navigating Procurement Roles in Times of change",
//             para: "",
//             sponsor: "",
//             vom: "Top Voices of the Month",
//             pick: "Editor’s Pick",
//             btntext: "Click for full profile",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/member1.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/strategic-supplier-pertnership",
//         },
//         {
//             id: 3,
//             tag: "VIDEO",
//             heading: "Hollister Supplier Relationship work",
//             para: "Name: Maverick",
//             logo: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/linkidin.png",
//             sponsor: "Sponsored by Innotech",
//             btntext: "View Full Post",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/member3.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/emerging-technologies-in-procurement",
//         },
//         {
//             id: 4,
//             tag: "VISUAL INSIGHT",
//             heading: "5 Procurement Macro trends for 2025",
//             para: "Name: Sam Bourne",
//             logo: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/linkidin.png",
//             sponsor: "Sponsored by Logo",
//             btntext: "View Full Post",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/member2.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
//         },
//     ];

//     return (
//         <div>
//             <div className=" mb-4 md:mb-8">
//                 <h3 className="font-semibold text-[32px] md:text-5xl mb-4 md:mb-8 text-[#1B1B1B]">
//                     Thought Leadership Wall
//                 </h3>
//                 <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-8">Your space to share, spotlight, and shape the future of procurement thinking.</p>
//                 <div className="flex flex-col md:flex-row items-center gap-4">
//                     <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
//                         Submit Your Insight
//                         <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
//                     </button>
//                     <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
//                         Nominate a Contributor
//                         <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
//                     </button>
//                 </div>
//             </div>
//             <div
//                 style={{
//                     boxShadow: "0 0 0 100vmax #85009D",
//                     clipPath: "inset(0 -100vmax)",
//                 }}
//                 className="bg-[#85009D] py-5 md:py-10 text-center mb-4 md:mb-8">
//                 <h3 className="font-semibold text-[32px] md:text-5xl mb-4 md:mb-8 text-[#ffff]">
//                     Categories Bar
//                 </h3>
//                 <div className="flex justify-center gap-4 flex-wrap">
//                     <p className="text-[16px] md:text-[24px] text-[#85009D] border-2 border-[#D09B48] rounded-[6px] bg-[#ffff] py-3 px-4">Strategic Sourcing</p>
//                     <p className="text-[16px] md:text-[24px] text-[#85009D] border-2 border-[#D09B48] rounded-[6px] bg-[#ffff] py-3 px-4">Automation & AI</p>
//                     <p className="text-[16px] md:text-[24px] text-[#85009D] border-2 border-[#D09B48] rounded-[6px] bg-[#ffff] py-3 px-4">ESG & Social Value</p>
//                     <p className="text-[16px] md:text-[24px] text-[#85009D] border-2 border-[#D09B48] rounded-[6px] bg-[#ffff] py-3 px-4">Cross-Industry Insights</p>
//                     <p className="text-[16px] md:text-[24px] text-[#85009D] border-2 border-[#D09B48] rounded-[6px] bg-[#ffff] py-3 px-4">Career & Personal Growth</p>
//                     <p className="text-[16px] md:text-[24px] text-[#85009D] border-2 border-[#D09B48] rounded-[6px] bg-[#ffff] py-3 px-4">Boardroom Readiness</p>
//                 </div>
//             </div>
//             {/* Pages */}
//             <div>
//                 <h3 className="font-semibold text-[32px] md:text-5xl mb-4 md:mb-8 text-[#1B1B1B]">
//                     Spotlight
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//                     {collaboration.map((partner) => (
//                         <ConsultingPartnerTile
//                             key={partner.id}
//                             tag={partner.tag}
//                             heading={partner.heading}
//                             para={partner.para}
//                             vom={partner.vom}
//                             pick={partner.pick}
//                             logo={partner.logo}
//                             sponsor={partner.sponsor}
//                             btntext={partner.btntext}
//                             bigimg={partner.bigimg}
//                             url={partner.url}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ThoughtLeadershipWallCTR;

"use client"
import { useState } from "react";
import IconComponent from "@/components/icon/Icon";
import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/collaboration-influence/thought-leadership-wal/ConsultingPartnerTile";
import LeaderboardTile from "@/components/business-hub/vip-lounge/collaboration-influence/thought-leadership-wal/LeaderboardTile";
import CategoriesBar from "@/components/business-hub/vip-lounge/CategoriesBar";
import Image from "next/image";

function ThoughtLeadershipWallCTR() {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const collaboration = [
        {
            id: 1,
            tag: "ARTICLE",
            heading: "Category Strategy in a Volatile Market",
            para: "Name: Maria",
            logo: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/linkidin.png",
            sponsor: "Sponsored by Logo",
            btntext: "View Full Post",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/thought-leadership-wall/category-strategy-in-a-volatile-market",
        },
        {
            id: 2,
            tag: "ARTICLE",
            heading: "Navigating Procurement Roles in Times of change",
            para: "",
            sponsor: "",
            vom: "Top Voices of the Month",
            pick: "Editor’s Pick",
            btntext: "Click for full profile",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/vom.png",
            url: "/business-hub/vip-lounge/collaboration-influence/thought-leadership-wall/navigating-procurement-roles-in-times-of-change",
        },
        {
            id: 3,
            tag: "VIDEO",
            heading: "Hollister Supplier Relationship work",
            para: "Name: Maverick",
            logo: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/linkidin.png",
            sponsor: "Sponsored by Innotech",
            btntext: "View Full Post",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/member3.png",
            url: "/business-hub/vip-lounge/collaboration-influence/thought-leadership-wall/hollister-supplier-relationship-work",
        },
        {
            id: 4,
            tag: "VISUAL INSIGHT",
            heading: "5 Procurement Macro trends for 2025",
            para: "Name: Sam Bourne",
            logo: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/linkidin.png",
            sponsor: "Sponsored by Logo",
            btntext: "View Full Post",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/member2.png",
            url: "/business-hub/vip-lounge/collaboration-influence/thought-leadership-wall/procurement-macro-trends",
        },
    ];

    const leaderboard = [
        {
            id: 1,
            rank: 1,
            name: "Savannah",
            metric: "Most Read",
            image: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/member1.png",
            medalImage: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/gold.png",
        },
        {
            id: 2,
            rank: 2,
            name: "Jonathon Brown",
            metric: "Most Endorsed",
            image: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/member3.png",
            medalImage: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/bronze.png",
        },
        {
            id: 3,
            rank: 3,
            name: "Ricky",
            metric: "Most Shared",
            image: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/member2.png",
            medalImage: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/silver.png",
        },
        {
            id: 4,
            rank: 4,
            name: "Raquel Ritz",
            metric: "Most Shared",
            image: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/member1.png",
        },
        {
            id: 5,
            rank: 5,
            name: "Natalia Reynolds",
            metric: "Most Shared",
            image: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/member3.png",
        },
    ];

    // Dynamic assignment based on desired layout
    const col1Items = collaboration.length >= 4 ? [collaboration[0], collaboration[2], collaboration[3]] : collaboration.slice(0, Math.floor(collaboration.length / 2));
    const col2Items = collaboration.length >= 4 ? [collaboration[1]] : collaboration.slice(Math.floor(collaboration.length / 2));

    const categories = [
        "Strategic Sourcing",
        "Automation & AI",
        "ESG & Social Value",
        "Cross-Industry Insights",
        "Career & Personal Growth",
        "Boardroom Readiness",
    ];

    return (
        <div>
            <div className="mb-4 md:mb-8">
                <h3 className="font-semibold text-[24px] md:text-[32px] md:text-5xl mb-4 md:mb-8 text-[#1B1B1B]">
                    Thought Leadership Wall
                </h3>
                <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-8">Your space to share, spotlight, and shape the future of procurement thinking.</p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Submit Your Insight
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Nominate a Contributor
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
            </div>
            <CategoriesBar categories={categories} />
            {/* Combined Spotlight and Leaderboard Section */}
            <div className="mb-4 md:mb-8">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 md:mb-8 text-[#1B1B1B]">
                    Spotlight
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 md:gap-8 min-h-[500px] items-stretch">
                    {/* First Column: Collaboration Items 1, 3, 4 */}
                    <div className="grid grid-cols-1 gap-6">
                        {col1Items.map((item) => (
                            <ConsultingPartnerTile
                                key={item.id}
                                tag={item.tag}
                                heading={item.heading}
                                para={item.para}
                                vom={item.vom}
                                pick={item.pick}
                                logo={item.logo}
                                sponsor={item.sponsor}
                                btntext={item.btntext}
                                bigimg={item.bigimg}
                                url={item.url}
                                isCol2={false}
                            />
                        ))}
                    </div>
                    {/* Second Column: Collaboration Item 2 and Contributor Leaderboard */}
                    <div className="grid grid-cols-1 gap-6 h-full">
                        {col2Items.map((item) => (
                            <ConsultingPartnerTile
                                key={item.id}
                                tag={item.tag}
                                heading={item.heading}
                                para={item.para}
                                vom={item.vom}
                                pick={item.pick}
                                logo={item.logo}
                                sponsor={item.sponsor}
                                btntext={item.btntext}
                                bigimg={item.bigimg}
                                url={item.url}
                                isCol2={true}
                            />
                        ))}
                        <div className="flex flex-col h-full rounded-[6px] bg-[#FFFBF5] border border-[#DBBB89] p-4 min-h-[500px]">
                            <h3 className="font-semibold text-[24px] md:text-3xl mb-4 text-[#1B1B1B]">
                                Contributor Leaderboard
                            </h3>
                            <div className="flex flex-col justify-between flex-1">
                                {leaderboard.map((item, index) => (
                                    <LeaderboardTile
                                        key={item.id}
                                        rank={item.rank}
                                        name={item.name}
                                        metric={item.metric}
                                        image={item.image}
                                        medalImage={item.medalImage}
                                        isLast={index === leaderboard.length - 1}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="w-full h-[2px] bg-[#85009D] mb-4 md:mb-8"></div>
            {/*  */}
            <div className=" rounded-[6px] bg-[#FFFBF5] border border-[#DBBB89] p-5 ">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                    Contributor Leaderboard
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-4">
                    <div>
                        <div className="flex flex-col items-center bg-white border-1 border-[#85009D] p-5 rounded-[2px] cursor-pointer mb-4"
                            onClick={() => document.getElementById('fileInput').click()}
                        >
                            <Image
                                src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/download.png"}
                                alt={`download`}
                                width={128}
                                height={128}
                                className="w-[128px] h-[128px] object-cover mb-4"
                            />
                            <p className="text-[#1B1B1B] text-center"><span className="font-semibold">Upload content</span> (PDF, video link, text, visual)</p>
                            {/* Hidden file input */}
                            <input
                                id="fileInput"
                                type="file"
                                accept=".pdf,.txt,image/*,.mp4,.mov"
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        console.log("Selected file:", file.name); // Replace with your file upload logic
                                    }
                                }}
                            />
                        </div>
                        <div className="flex flex-col gap-4 md:gap-7 mb-4 md:mb-0">
                            <input
                                required
                                type="text"
                                name="headline"
                                placeholder="Enter Headline"
                                className="w-full border-1 text-[#363636] border-[#85009D] bg-[#ffff] py-3  px-4 rounded-[2px] focus:outline-none focus:border-[#85009D]"
                            />
                            <div className="relative w-full">
                                <select
                                    id="content-type"
                                    value={selectedValue}
                                    onChange={handleChange}
                                    className="appearance-none border border-[#85009D] text-[#363636] py-3 px-4 bg-white cursor-pointer rounded-[2px] w-full focus:outline-none focus:border-[#85009D]"
                                >
                                    <option value="" disabled>
                                        Category tag
                                    </option>
                                    <option value="Technology">Technology</option>
                                    <option value="Business">Business</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Design">Design</option>
                                </select>
                                <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-[#85009D]">
                                    <IconComponent name="drop-down" color="#808080" size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className="flex flex-col items-center bg-white border-1 border-[#85009D] p-5 rounded-[2px] cursor-pointer mb-4"
                            onClick={() => document.getElementById('fileInput').click()}
                        >
                            <Image
                                src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/download.png"}
                                alt="upload banner"
                                width={128}
                                height={128}
                                className="w-[128px] h-[128px] object-cover mb-4"
                            />
                            <p className="text-[#1B1B1B] text-center">
                                <span className="font-semibold">Banner Image</span> (Image Size 1440px × 440px)
                            </p>
                            <input
                                id="fileInput"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        if (!file.type.startsWith('image/')) {
                                            alert('Please select a valid image file.');
                                            return;
                                        }

                                        const img = new Image();
                                        img.src = URL.createObjectURL(file);
                                        img.onload = () => {
                                            if (img.width !== 1440 || img.height !== 440) {
                                                alert('Please upload an image with dimensions 1440px × 440px.');
                                                return;
                                            }

                                            console.log('Uploading image:', {
                                                name: file.name,
                                                size: file.size,
                                                type: file.type,
                                                dimensions: `${img.width}×${img.height}`
                                            });

                                            const formData = new FormData();
                                            formData.append('bannerImage', file);
                                            URL.revokeObjectURL(img.src);
                                        };
                                    }
                                }}
                            />
                        </div>
                        <div className="flex flex-col gap-4 md:gap-7 mb-4 md:mb-0">
                            <input
                                required
                                type="text"
                                name="headline"
                                placeholder="Enter Summary"
                                className="w-full border-1 text-[#363636] border-[#85009D] bg-[#ffff] py-3  px-4 rounded-[2px] focus:outline-none focus:border-[#85009D]"
                            />
                            <input
                                required
                                type="text"
                                name="headline"
                                placeholder="Content Type"
                                className="w-full border-1 text-[#363636] border-[#85009D] bg-[#ffff] py-3  px-4 rounded-[2px] focus:outline-none focus:border-[#85009D]"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-start gap-2 mb-4">
                    <input
                        required
                        type="checkbox"
                        name="checkbox"
                        className="border text-[#363636] border-[#e0e0e0] bg-[#ffff] p-2 rounded-md mt-[7px]"
                    />
                    <p className="text-[#1B1B1B] text-[16px] md:text-[20px]">Sponsor your submission for greater visibility</p>
                </div>
                <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                    Submit
                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                </button>
            </div>
        </div>
    );
}

export default ThoughtLeadershipWallCTR;