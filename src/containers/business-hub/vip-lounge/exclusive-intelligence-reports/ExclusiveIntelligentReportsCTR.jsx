"use client"
import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/collaboration-influence/vip-forum/ConsultingPartnerTile";


function ExclusiveBusinessPartnersCTR() {

    const collaboration = [
        {
            id: 1,
            tag: "Report",
            heading: "Industry Insights",
            para: "Sponsor label",
            logo: "",
            sponsor: "",
            btntext: "View Summary",
            bigimg: "",
            url: "/business-hub/vip-lounge/exclusive-intelligence-reports/industry-insights",
        },
        {
            id: 2,
            tag: "Report",
            heading: "Market Research",
            para: "Sponsor label",
            logo: "",
            sponsor: "",
            btntext: "View Summary",
            bigimg: "",
            url: "/business-hub/vip-lounge/exclusive-intelligence-reports/market-research",
        },
        {
            id: 3,
            tag: "Benchmark",
            heading: "Expert Opinions",
            para: "Sponsor label",
            logo: "",
            sponsor: "",
            btntext: "View Summary",
            bigimg: "",
            url: "",
        },
        {
            id: 4,
            tag: "Forecast",
            heading: "Strategic Guidance",
            para: "Sponsor label",
            logo: "",
            sponsor: "",
            btntext: "View Summary",
            bigimg: "",
            url: "",
        },
    ];

    return (
        <div>
            <div className="mb-4 md:mb-8">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                    Exclusive Intelligence & Reports
                </h3>
                <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-8">Decision-grade insights to power your procurement strategy.</p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Download the Latest Report
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Request a Custom Briefing
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {collaboration.map((partner) => (
                    <ConsultingPartnerTile
                        key={partner.id}
                        tag={partner.tag}
                        heading={partner.heading}
                        para={partner.para}
                        vom={partner.vom}
                        pick={partner.pick}
                        logo={partner.logo}
                        sponsor={partner.sponsor}
                        btntext={partner.btntext}
                        bigimg={partner.bigimg}
                        url={partner.url}
                    />
                ))}
            </div>
        </div>
    );
}

export default ExclusiveBusinessPartnersCTR;
