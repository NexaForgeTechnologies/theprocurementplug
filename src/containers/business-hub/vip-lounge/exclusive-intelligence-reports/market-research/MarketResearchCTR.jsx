"use client"
// import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/collaboration-influence/vip-forum/ConsultingPartnerTile";
import ImageSlider from "@/components/business-hub/vip-lounge/exclusive-intelligence-reports/market-research/ImageSlider"

function MarketResearchCTR() {

    // const collaboration = [
    //     {
    //         id: 1,
    //         tag: "Report",
    //         heading: "Industry Insights",
    //         para: "Sponsor label",
    //         logo: "",
    //         sponsor: "",
    //         btntext: "View Summary",
    //         bigimg: "",
    //         url: "",
    //     },
    //     {
    //         id: 2,
    //         tag: "Report",
    //         heading: "Market Research",
    //         para: "Sponsor label",
    //         logo: "",
    //         sponsor: "",
    //         btntext: "View Summary",
    //         bigimg: "",
    //         url: "",
    //     },
    //     {
    //         id: 3,
    //         tag: "Benchmark",
    //         heading: "Expert Opinions",
    //         para: "Sponsor label",
    //         logo: "",
    //         sponsor: "",
    //         btntext: "View Summary",
    //         bigimg: "",
    //         url: "",
    //     },
    //     {
    //         id: 4,
    //         tag: "Forecast",
    //         heading: "Strategic Guidance",
    //         para: "Sponsor label",
    //         logo: "",
    //         sponsor: "",
    //         btntext: "View Summary",
    //         bigimg: "",
    //         url: "",
    //     },
    // ];
    const images = [
        {
            src: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/slider1.png",
            alt: "Market Research Image 1",
            width: 92,
            height: 30,
        },
        {
            src: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/slider2.png",
            alt: "Market Research Image 2",
            width: 187,
            height: 30,
        },
        {
            src: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/slider3.png",
            alt: "Market Research Image 3",
            width: 131,
            height: 30,
        },
        {
            src: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/slider4.png",
            alt: "Market Research Image 4",
            width: 196,
            height: 30,
        },
        {
            src: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/slider5.png",
            alt: "Market Research Image 5",
            width: 108,
            height: 30,
        },
        {
            src: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/slider6.png",
            alt: "Market Research Image 6",
            width: 91,
            height: 30,
        },
        {
            src: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/slider7.png",
            alt: "Market Research Image 7",
            width: 106,
            height: 30,
        },
    ];

    return (
        <div>
            <div className="mb-4 md:mb-8">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                    Market Research
                </h3>
                <p className="max-w-[800px] text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-8">Explore trusted data and procurement forecasts to inform category strategies and
                    investment decisions.</p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Download the Latest Report
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Request a Custom Report
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
            </div>
            <div className="mb-4 md:mb-8">
                <h3 className="max-w-[800px] m-auto font-normal text-center text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                    Partner with <span className="font-semibold">The Procurement Plug</span> to co-brand and
                    distribute procurement intelligence to a
                    targeted, high-impact audience
                </h3>
                <div>
                    <div>
                        <ImageSlider
                            images={images}
                            className="max-w-[800px]"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Sponsor a Report
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
            </div> */}
        </div>
    );
}

export default MarketResearchCTR;
