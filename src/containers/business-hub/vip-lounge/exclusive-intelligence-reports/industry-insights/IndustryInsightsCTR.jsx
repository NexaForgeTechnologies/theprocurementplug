"use client"
import React, { useState } from 'react';
import MonthHightlightTile from "@/components/business-hub/vip-lounge/exclusive-intelligence-reports/insight-research/MonthHightlightTile";
import ReportTile from "@/components/business-hub/vip-lounge/exclusive-intelligence-reports/insight-research/reportTile";
import CategoriesBar from "@/components/business-hub/vip-lounge/CategoriesBar";
import ArrowButtonCom from '@/components/buttons/ArrowButtonCom'
import Form from '@/components/business-hub/vip-lounge/exclusive-intelligence-reports/insight-research/Form'
import LatestReportForm from '@/components/business-hub/vip-lounge/exclusive-intelligence-reports/insight-research/LatestReportForm'
function IndustryInsightsCTR() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

    const collaboration = [
        {
            id: 1,
            heading: "Construction: Supplier Risk Trends",
            para: "Rising costs and labor shortages are increasing supplier risk, demanding better vetting and resilience planning.",
            btntext: "Read More",
            bigimg: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/industry-insights/construction.png",
            url: "/business-hub/vip-lounge/exclusive-intelligence-reports/industry-insights",
        },
        {
            id: 2,
            heading: "Retail: Digital Procurement Maturity",
            para: "Retail is rapidly adopting digital tools, yet many firms still lag in fully integrated, data-driven procurement systems.",
            btntext: "Read More",
            bigimg: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/industry-insights/shopping.png",
            url: "/business-hub/vip-lounge/exclusive-intelligence-reports/industry-insights",
        },
        {
            id: 3,
            heading: "Public Sector: Net Zero Procurement Challenges",
            para: "Public procurement faces hurdles in balancing sustainability goals with budget limits and regulatory complexity.",
            btntext: "Read More",
            bigimg: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/industry-insights/meeting.png",
            url: "/business-hub/vip-lounge/exclusive-intelligence-reports/industry-insights",
        },
        {
            id: 4,
            heading: "Public Sector: Net Zero Procurement Challenges",
            para: "Public procurement faces hurdles in balancing sustainability goals with budget limits and regulatory complexity.",
            btntext: "Read More",
            bigimg: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/industry-insights/meeting.png",
            url: "/business-hub/vip-lounge/exclusive-intelligence-reports/industry-insights",
        },
        {
            id: 5,
            heading: "Retail: Digital Procurement Maturity",
            para: "Retail is rapidly adopting digital tools, yet many firms still lag in fully integrated, data-driven procurement systems.",
            btntext: "Read More",
            bigimg: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/industry-insights/shopping.png",
            url: "/business-hub/vip-lounge/exclusive-intelligence-reports/industry-insights",
        },
        {
            id: 6,
            heading: "Construction: Supplier Risk Trends",
            para: "Rising costs and labor shortages are increasing supplier risk, demanding better vetting and resilience planning.",
            btntext: "Read More",
            bigimg: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/industry-insights/construction.png",
            url: "/business-hub/vip-lounge/exclusive-intelligence-reports/industry-insights",
        },
    ];

    const report = [
        {
            id: 1,
            heading: "Quarterly Procurement reports",
            para: "Sponsored",
            pdf: "/files/dummy.pdf",
            pdfIcon: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/industry-insights/pdf.png",
        },
        {
            id: 2,
            heading: "Whitepapers",
            para: "Premium",
            pdf: "/files/dummy.pdf",
            pdfIcon: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/industry-insights/pdf.png",
        },
        {
            id: 3,
            heading: "Benchmarks",
            para: "Member Exclusive",
            pdf: "/files/dummy.pdf",
            pdfIcon: "/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/industry-insights/pdf.png",
        },
    ];

    const categories = [
        "Energy & Utilities",
        "Construction",
        "Public Sector",
        "Healthcare",
        "Retail & Consumer Goods",
        "Transport & Logistics",
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const tilesPerSlide = 3;
    const totalSlides = Math.ceil(collaboration.length / tilesPerSlide);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    // Get the tiles for the current slide
    const startIndex = activeIndex * tilesPerSlide;
    const currentTiles = collaboration.slice(startIndex, startIndex + tilesPerSlide);

    return (
        <div>
            <div className="mb-4 md:mb-8">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                    Industry Insights
                </h3>
                <p className="max-w-[800px] text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-8">Procurement trends, sector spotlights, and forward-looking intelligence to guide your
                    strategy.</p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button
                        onClick={() => setIsDownloadModalOpen(true)}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Download the Latest Report
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Subscribe for Monthly Insights
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Request a Custom Brief
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
            </div>
            <div className="mb-4 md:mb-8">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1b1b1b]">
                    This Month’s Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
                    {currentTiles.map((partner) => (
                        <MonthHightlightTile
                            key={partner.id}
                            tag={partner.tag}
                            heading={partner.heading}
                            para={partner.para}
                            btntext={partner.btntext}
                            bigimg={partner.bigimg}
                            url={partner.url}
                        />
                    ))}
                </div>
                <div className="max-w-[112px] m-auto flex items-center gap-1">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            className={`h-[6px] rounded-[8px] cursor-pointer transition-all duration-300 ${index === activeIndex
                                ? 'w-[64px] bg-[#b08d57]'
                                : 'w-[20px] bg-[#B08D5766]'
                                }`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
            <CategoriesBar categories={categories} maxWidth="800px" />
            <div className="mb-20 md:mb-28">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                    Download Latest Report
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {report.map((partner) => (
                        <ReportTile
                            key={partner.id}
                            heading={partner.heading}
                            para={partner.para}
                            pdf={partner.pdf}
                            pdfIcon={partner.pdfIcon}
                        />
                    ))}
                </div>
            </div>
            <div
                className="bg-[#FBE3FF] py-6 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8"
                style={{
                    boxShadow: "0 0 0 100vmax #FBE3FF",
                    clipPath: "inset(0 -100vmax)",
                }}
            >
                <h2 className="font-medium max-w-[700px] text-3xl md:text-5xl text-[#85009D]">
                    Need insights tailored to your <strong>organisation?</strong>
                </h2>
                {/* <div className="min-w-[200px]">
                    <ArrowButtonCom text="Request a Custom Brief " />
                </div> */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                    Request a Custom Brief
                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                </button>
            </div>
            <LatestReportForm isOpen={isDownloadModalOpen} onClose={() => setIsDownloadModalOpen(false)} />
            <Form isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default IndustryInsightsCTR;
