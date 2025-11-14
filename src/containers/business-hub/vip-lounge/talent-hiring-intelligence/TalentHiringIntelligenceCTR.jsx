"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import FutureProcurementTile from "@/components/business-hub/vip-lounge/talent-hiring-intelligence/FutureProcurementTile";
import InsightsSection from "@/components/business-hub/vip-lounge/talent-hiring-intelligence/InsightSection";
import Image from "next/image";
import Link from "next/link";
import RequestCustomHiringForm from '@/components/forms/business-hub/RequestCustomHiringForm';

function ExclusiveBusinessPartnersCTR() {
    const [professionals, setProfessionals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tilesPerSlide, setTilesPerSlide] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchProfessionals = async () => {
            try {
                setLoading(true);
                const res = await fetch("/api/business-hub/vip-lounge/talent-hiring-intelligence/professionals");
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                const data = await res.json();
                setProfessionals(data.data || []);
                console.log("data from db : ", data.data);
            } catch (error) {
                console.error("❌ Error receiving data in API server:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProfessionals();
    }, []);

    const collaboration = [
        {
            id: 1,
            heading: "Grace Robinson",
            post: "Procurement specialist",
            location: "London, UK",
            para: "Cut product development time by 35% through smarter workflows and team collaboration.",
            btntext: "Request Intro",
            bigimg: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/procurementmember.png",
        },
        {
            id: 2,
            heading: "Liam Turner",
            post: "Supply Chain Manager",
            location: "Berlin, Germany",
            para: "Reduced logistics costs by 20% by streamlining vendor negotiations and delivery schedules.",
            btntext: "Request Intro",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/member2.png",
        },
        {
            id: 3,
            heading: "Ethan Patel",
            post: "Procurement Analyst",
            location: "Austin, USA",
            para: "Identified $500K in annual savings through category management and spend analysis.",
            btntext: "Request Intro",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/member3.png",
        },
        {
            id: 4,
            heading: "Adam Johansson",
            post: "Purchasing Coordinator",
            location: "Stockholm, Sweden",
            para: "Enhanced procurement processes with automated PO systems and compliance tracking.",
            btntext: "Request Intro",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/member4.png",
        },
        {
            id: 5,
            heading: "Noah Kim",
            post: "Global Procurement Advisor",
            location: "Seoul, South Korea",
            para: "Led international procurement projects resulting in 15% cost reduction globally.",
            btntext: "Request Intro",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/member2.png",
        },
        {
            id: 6,
            heading: "Sophia Bennett",
            post: "Strategic Sourcing Lead",
            location: "Toronto, Canada",
            para: "Improved vendor reliability by 40% through data-driven supplier performance tracking.",
            btntext: "Request Intro",
            bigimg: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/procurementmember.png",
        }
    ];

    const totalSlides = Math.ceil(collaboration.length / tilesPerSlide);

    const getTilesPerSlide = () => {
        if (typeof window === 'undefined') return 1;
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    useEffect(() => {
        setTilesPerSlide(getTilesPerSlide());
        const handleResize = () => setTilesPerSlide(getTilesPerSlide());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setActiveIndex(0);
    }, [tilesPerSlide]);

    const handleDotClick = (index) => setActiveIndex(index);
    const handlePrevClick = () => setActiveIndex(prev => prev === 0 ? totalSlides - 1 : prev - 1);
    const handleNextClick = () => setActiveIndex(prev => prev === totalSlides - 1 ? 0 : prev + 1);

    const minSwipeDistance = 50;
    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };
    const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > minSwipeDistance) handleNextClick();
        else if (distance < -minSwipeDistance) handlePrevClick();
    };

    const startIndex = activeIndex * tilesPerSlide;
    const currentTiles = collaboration.slice(startIndex, startIndex + tilesPerSlide);

    const insightsData = {
        title: ["Salary & Role Tracker", "Employer Insights"],
        items: [
            [
                { image: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/tracker1.png", alt: "member", title: "Top 5 in-demand roles this quarter" },
                { image: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/tracker2.png", alt: "member", title: "Average salary by category & location" },
                { image: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/tracker3.png", alt: "member", title: "Role movement trends", description: "(e.g. Supplier Manager → Category Lead)" },
            ],
            [
                { image: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/insight1.png", alt: "member", title: "Time to hire averages" },
                { image: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/insight2.png", alt: "member", title: "Preferred contract lengths" },
                { image: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/insight3.png", alt: "member", title: "Remote vs hybrid preference data" },
            ],
        ],
        buttonText: ["View Tracker Report", null],
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="mb-4 md:mb-8">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                    Talent & Hiring Intelligence
                </h3>
                <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-8">
                    Exclusive data, insights, and talent access to accelerate procurement recruitment and workforce planning.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        View Salary & Talent Tracker
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                    <button
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Request a Custom Hiring Brief
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                    <Link href={"/business-hub/vip-lounge/talent-hiring-intelligence/the-plug-job-board"}>
                        <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                            Post a Role
                            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Carousel Section */}
            <div className="mb-8">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                    Meet the Future of Procurement
                </h3>
                <div className="relative" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                    {/* Arrow Buttons */}
                    <button
                        onClick={handlePrevClick}
                        className="hidden lg:block absolute left-[-35px] md:left-[-55px] top-1/2 transform -translate-y-1/2 bg-[#b08d57] text-white p-2 rounded-[6px] hover:bg-[#8f7043] transition-colors duration-300"
                        aria-label="Previous slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNextClick}
                        className="hidden lg:block absolute right-[-55px] top-1/2 transform -translate-y-1/2 bg-[#b08d57] text-white p-2 rounded-[6px] hover:bg-[#8f7043] transition-colors duration-300"
                        aria-label="Next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-4 ${tilesPerSlide === 2 ? 'max-w-[calc(100%_-_32px)] mx-auto' : ''}`}>
                        {loading ? (
                            <div className="flex justify-center items-center py-8">
                                <div className="w-12 h-12 border-4 border-b-transparent border-[#85009D] rounded-full animate-spin"></div>
                            </div>
                        ) : professionals.length > 0 ? (
                            professionals.map((partner) => (
                                <FutureProcurementTile
                                    key={partner.id}
                                    heading={partner.name}
                                    post={partner.occupation}
                                    location={partner.address}
                                    para={partner.description}
                                    btntext={"Request Intro"}
                                    bigimg={partner.logo ?? "/images/default-circle.png"}
                                />
                            ))
                        ) : (
                            <p className="text-center text-gray-500 py-8">No professionals found at the moment.</p>
                        )}
                    </div>
                </div>

                {/* Carousel Dots */}
                <div className="max-w-[112px] m-auto flex items-center gap-1">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            className={`h-[6px] rounded-[8px] cursor-pointer transition-all duration-300 ${index === activeIndex ? 'w-[64px] bg-[#b08d57]' : 'w-[20px] bg-[#B08D5766]'}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Insights Section */}
            <InsightsSection
                title={insightsData.title}
                items={insightsData.items}
                buttonText={insightsData.buttonText}
            />

            {/* Recruitment & Beta Tools Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* VIP Recruitment Partners */}
                <div>
                    <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                        VIP recruitment partners
                    </h3>
                    <div className="bg-[#FFFBF5] rounded-[6px] border border-[#DBBB89] text-[#1B1B1B] p-5 flex flex-col gap-6">
                        <p className="text-[16px] md:text-2xl text-[#1B1B1B]">
                            Partner with experts to access top talent for critical roles.
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-6">
                            <Image src={"/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/logo1.png"} alt="member" width={205} height={65} />
                            <Image src={"/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/logo2.png"} alt="member" width={238} height={65} />
                            <Image src={"/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/logo3.png"} alt="member" width={238} height={38} />
                        </div>
                        <Link href={"/business-hub/vip-lounge/talent-hiring-intelligence/recruitment-partners"} className="flex justify-center md:justify-start">
                            <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                                view all Recruitment Partners
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Beta Tools */}
                <div>
                    <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                        Try Our Beta Tools
                    </h3>
                    <div className="bg-[#FFFBF5] rounded-[6px] border border-[#DBBB89] text-[#1B1B1B] p-5 flex flex-col gap-6">
                        <p className="text-[16px] md:text-2xl text-[#1B1B1B]">
                            Boost your team's performance and flexibility. Explore Project Talent Exchange Beta for agile talent matching and AchieveMeter Beta for smart goal tracking.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
                            <Link href={"/business-hub/vip-lounge/talent-hiring-intelligence/talent-xchange-beta"}>
                                <Image src={"/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/beta2.png"} alt="member" width={152} height={64} />
                            </Link>
                            <Link href={"/business-hub/vip-lounge/talent-hiring-intelligence/achieveMeter-beta"}>
                                <Image src={"/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/beta1.png"} alt="member" width={226} height={65} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Form */}
            <RequestCustomHiringForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default ExclusiveBusinessPartnersCTR;
