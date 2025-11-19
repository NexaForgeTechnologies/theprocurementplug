"use client"
import { useEffect, useState } from "react";
import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/exclusive-intelligence-reports/market-research/FeatureReportTile";
import SponsorReportForm from "@/containers/business-hub/vip-lounge/exclusive-intelligence-reports/market-research/SponsorReportForm"
import Image from "next/image";
import IconComponent from "@/components/icon/Icon";
import ImageSlider from "@/components/business-hub/vip-lounge/exclusive-intelligence-reports/market-research/ImageSlider";

function MarketResearchCTR() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        async function fetchReports() {
            try {
                const res = await fetch("/api/business-hub/vip-lounge");
                if (!res.ok) throw new Error("Failed to fetch reports");

                const data = await res.json();

                // Log the response to verify its structure
                console.log("Fetched data:", data);

                // Extract the 'data' field which contains the array of reports
                if (data && Array.isArray(data.data)) {
                    setReports(data.data);  // Set the reports to the array inside 'data'
                } else {
                    console.error("Expected 'data' to be an array, but got:", data);
                    setReports([]);  // Fallback to empty array if the data format is wrong
                }
            } catch (error) {
                console.error("Error fetching reports:", error);
                setReports([]); // Fallback to empty array on error
            }
        }

        fetchReports();
    }, []);

    const [visibleItems, setVisibleItems] = useState(4);

    const collaboration = [
        {
            id: 1,
            tag: "Sponsored",
            heading: "Procurement in the AI Era – 2025 Outlook",
            para: (
                <span className="flex items-center">
                    <span>Format: </span>
                    <Image
                        src="/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/pdf.png"
                        alt="PDF Icon"
                        width={23}
                        height={24}
                        className="ml-2"
                    />
                </span>
            ),
            btntext: "Download",
            bigimg: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/futuristic.png",
            url: "/files/dummy.pdf",
        },
        {
            id: 2,
            tag: "Updated",
            heading: "UK Salary Tracker (Q2 Edition)",
            para: (
                <span className="flex items-center">
                    <span>Format: </span>
                    <Image
                        src="/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/pdf.png"
                        alt="PDF Icon"
                        width={23}
                        height={24}
                        className="ml-2"
                    />
                </span>
            ),
            btntext: "Download",
            bigimg: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/market-research/modernonitior.png",
            url: "/files/dummy.pdf",
        },
    ];
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

    const handleShowMore = () => {
        setVisibleItems((prev) => prev + 4);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
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
            <div
                style={{
                    boxShadow: "0 0 0 100vmax #85009D",
                    clipPath: "inset(0 -100vmax)",
                }}
                className="bg-[#85009D] py-5 mb-20 md:mb-28">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#ffff] text-center">
                    Featured Reports
                </h3>
                <div className="max-w-[1100px] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4 md:mb-8">
                    <div className="relative w-full">
                        <select
                            required
                            name="reportType"
                            defaultValue=""
                            className="appearance-none w-full border text-[#1b1b1b] font-normal text-[16px] border-[#85009D] bg-white py-2 px-4  rounded-[6px] focus:outline-none focus:border-[#85009D]"
                        >
                            <option value="" disabled>Report Type</option>
                            <option value="Technology">Technology</option>
                            <option value="Business">Business</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Design">Design</option>
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
                            <IconComponent name="drop-down" color="#808080" size={16} />
                        </div>
                    </div>

                    <div className="relative w-full">
                        <select
                            required
                            name="sponsorFilter"
                            defaultValue=""
                            className="appearance-none w-full border text-[#1b1b1b] font-normal text-[16px] border-[#85009D] bg-white py-2 px-4 rounded-[6px] focus:outline-none focus:border-[#85009D]"
                        >
                            <option value="" disabled>Sponsor Filter</option>
                            <option value="Technology">Technology</option>
                            <option value="Business">Business</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Design">Design</option>
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
                            <IconComponent name="drop-down" color="#808080" size={16} />
                        </div>
                    </div>
                    <button
                        onClick={handleShowMore}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        View All Market Research
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-4 md:mb-8">
                    {Array.isArray(reports) && reports.slice(0, visibleItems).map((report) => (
                        <ConsultingPartnerTile
                            key={report.id}
                            tag={report.sponsor} // Directly access the sponsor string
                            heading={report.report_title} // API returns report_title, so use it for heading
                            bigimg={report.image_path || "/images/default-image.png"} // Fallback image if image_path is null
                            url={report.file_path || "#"} // Fallback URL if file_path is null
                            btntext={"Download"}
                        />
                    ))}
                </div>

            </div>
            <div>
                <h3 className="max-w-[800px] m-auto font-normal text-center text-[24px] md:text-[32px] mb-8 text-[#1B1B1B]">
                    Partner with <span className="font-semibold">The Procurement Plug</span> to co-brand and
                    distribute procurement intelligence to a
                    targeted, high-impact audience
                </h3>
                <ImageSlider
                    images={images}
                />
                <div className="flex justify-center flex-col md:flex-row items-center gap-4 mt-25">
                    <button
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Sponsor a Report
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
            </div>
            <SponsorReportForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default MarketResearchCTR;
