"use client"
import FutureProcurementTile from "@/components/business-hub/vip-lounge/talent-hiring-intelligence/FutureProcurementTile";
import InsightsSection from "@/components/business-hub/vip-lounge/talent-hiring-intelligence/InsightSection";
import Image from "next/image";
import Link from "next/link";


function ExclusiveBusinessPartnersCTR() {

    const collaboration = [
        {
            id: 1,
            heading: "Grace Robinson",
            post: "Procurement specialist",
            location: "London, UK",
            para: "Cut product development time by 35% through smarter workflows and team collaboration.",
            btntext: "Reuest Intro",
            bigimg: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/procurementmember.png",
            url: "",
        },
        {
            id: 2,
            heading: "Grace Robinson",
            post: "Procurement specialist",
            location: "London, UK",
            para: "Cut product development time by 35% through smarter workflows and team collaboration.",
            btntext: "Reuest Intro",
            bigimg: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/procurementmember.png",
            url: "",
        },
        {
            id: 3,
            heading: "Grace Robinson",
            post: "Procurement specialist",
            location: "London, UK",
            para: "Cut product development time by 35% through smarter workflows and team collaboration.",
            btntext: "Reuest Intro",
            bigimg: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/procurementmember.png",
            url: "",
        },

    ];

    const insightsData = {
        title: ["Salary & Role Tracker", "Employer Insights"],
        items: [
            [
                {
                    image: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/tracker1.png",
                    alt: "member",
                    title: "Top 5 in-demand roles this quarter",
                },
                {
                    image: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/tracker2.png",
                    alt: "member",
                    title: "Average salary by category & location",
                },
                {
                    image: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/tracker3.png",
                    alt: "member",
                    title: "Role movement trends",
                    description: "(e.g. Supplier Manager → Category Lead)",
                },
            ],
            [
                {
                    image: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/insight1.png",
                    alt: "member",
                    title: "Time to hire averages",
                },
                {
                    image: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/insight2.png",
                    alt: "member",
                    title: "Preferred contract lengths",
                },
                {
                    image: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/insight3.png",
                    alt: "member",
                    title: "Remote vs hybrid preference data",
                },
            ],
        ],
        buttonText: ["View Tracker Report", null],
    };

    return (
        <div>
            <div className="mb-4 md:mb-8">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                    Talent & Hiring Intelligence
                </h3>
                <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-8">Exclusive data, insights, and talent access to accelerate procurement
                    recruitment and workforce planning.</p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        View Salary & Talent Tracker
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Request a Custom Hiring Brief
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Post a Role
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
            </div>
            <div className="mb-8">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                    Meet the Future of Procurement
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {collaboration.map((partner) => (
                        <FutureProcurementTile
                            key={partner.id}
                            heading={partner.heading}
                            post={partner.post}
                            location={partner.location}
                            para={partner.para}
                            btntext={partner.btntext}
                            bigimg={partner.bigimg}
                            url={partner.url}
                        />
                    ))}
                </div>
            </div>
            <InsightsSection
                title={insightsData.title}
                items={insightsData.items}
                buttonText={insightsData.buttonText}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                    <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                        VIP recruitment partners
                    </h3>
                    <div className="bg-[#FFFBF5] rounded-[6px] border border-[#DBBB89] text-[#1B1B1B] p-5 flex flex-col gap-6">
                        <p className="text-[16px] md:text-2xl text-[#1B1B1B]">Partner with experts to access top talent
                            for critical roles.</p>
                        <div className="flex flex-wrap justify-center items-center gap-6">
                            <Image
                                src={"/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/logo1.png"}
                                alt="member"
                                width={205}
                                height={65}
                                className="w-[205px] h-[65px]"
                            />
                            <Image
                                src={"/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/logo2.png"}
                                alt="member"
                                width={238}
                                height={65}
                                className="w-[238px] h-[65px]"
                            />
                            <Image
                                src={"/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/logo3.png"}
                                alt="member"
                                width={238}
                                height={38}
                                className="w-[238px] h-[38px]"
                            />
                        </div>
                        <Link
                            href={"/business-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners"}
                            className="flex justify-center md:justify-start "
                        >
                            <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                                view all Recruitment Partners
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                        Try Our Beta Tools
                    </h3>
                    <div className="bg-[#FFFBF5] rounded-[6px] border border-[#DBBB89] text-[#1B1B1B] p-5 flex flex-col gap-6 md:gap-29">
                        <p className="text-[16px] md:text-2xl text-[#1B1B1B]">Boost your team's performance and
                            flexibility. Explore Project Talent Exchange
                            Beta for agile talent matching and
                            AchieveMeter Beta for smart goal tracking.</p>
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
                            <Link
                                href={"/business-hub/vip-lounge/talent-hiring-intelligence/talent-xchange-beta"}
                            >
                                <Image
                                    src={"/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/beta2.png"}
                                    alt="member"
                                    width={152}
                                    height={64}
                                    className="w-[152px] h-[64px]"
                                />
                            </Link>
                            <Link
                                href={"/business-hub/vip-lounge/talent-hiring-intelligence/achieveMeter-beta"}
                            >
                                <Image
                                    src={"/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/beta1.png"}
                                    alt="member"
                                    width={226}
                                    height={65}
                                    className="w-[226px] h-[65px]"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExclusiveBusinessPartnersCTR;
