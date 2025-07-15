"use client"
import { useState } from "react";
// import IconComponent from "@/components/icon/Icon";
import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/collaboration-influence/thought-leadership-wal/ConsultingPartnerTile";
import LeaderboardTile from "@/components/business-hub/vip-lounge/collaboration-influence/thought-leadership-wal/LeaderboardTile";
import CategoriesBar from "@/components/business-hub/vip-lounge/CategoriesBar";
import SubmissionModalForm from "@/components/business-hub/vip-lounge/collaboration-influence/thought-leadership-wal/RequestDemoForm";
import NominationForm from "@/components/business-hub/vip-lounge/collaboration-influence/thought-leadership-wal/NominationForm"
// import Image from "next/image";

function ThoughtLeadershipWallCTR() {
    // const [selectedValue, setSelectedValue] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNominationOpen, setIsNominationOpen] = useState(false);

    // const handleChange = (e) => {
    //     setSelectedValue(e.target.value);
    // };

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
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Submit Your Insight
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                    <button
                        onClick={() => setIsNominationOpen(true)}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
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
            {/* <div className="w-full h-[2px] bg-[#85009D] mb-4 md:mb-8"></div> */}
            <SubmissionModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <NominationForm isOpen={isNominationOpen} onClose={() => setIsNominationOpen(false)} />
        </div>
    );
}

export default ThoughtLeadershipWallCTR;