"use client"

import { useEffect, useState } from 'react';
import Image from "next/image";
import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/exclusive-business-partners/ConsultingPartnerTile";
import IconComponent from "@/components/icon/Icon";
import RequestIntroForm from "@/components/business-hub/vip-lounge/exclusive-business-partners/RequestIntroForm"
import Link from 'next/link';
import WebPopUp from './WebPopUp';

function ExclusiveBusinessPartnersCTR() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [title, setTitle] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [partners, setPartners] = useState([]);

    const openPopup = (partner) => {
        setSelectedPartner(partner);
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
        setSelectedPartner(null);
    };

    const categories = [
        { id: 1, name: 'Business' },
        { id: 2, name: 'Retail' },
        { id: 3, name: 'Construction' },
        { id: 4, name: 'Public Sector' },
    ];

    useEffect(() => {
        const getAllPartners = async () => {
            try {
                const res = await fetch('/api/business-hub/vip-lounge/exclusive-business-partners', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const data = await res.json();
                console.log("Fetched partners:", data);

                setPartners(data.data); // ✅ only set the array of partners
            } catch (error) {
                console.error("❌ Error fetching partners:", error);
            }
        };

        getAllPartners();
    }, []);


    const slides = [
        {
            client: 'AquaPure Bottles',
            logoSrc: '/images/bussiness-hub/vip-lounge/exclusive-business-partners/aqualogo.png',
            offerSrc: '/images/bussiness-hub/vip-lounge/exclusive-business-partners/offer.png',
            description:
                'AquaPure partnered with us through our Exclusive Business Partner program to expand retail presence. With access to our network and co-branded campaigns, they achieved a 40% sales boost and entered 25 new stores within 3 months. The partnership drove rapid growth and increased brand visibility.',
        },
        {
            client: 'AquaFresh Innovations',
            logoSrc: '/images/bussiness-hub/vip-lounge/exclusive-business-partners/aqualogo.png',
            offerSrc: '/images/bussiness-hub/vip-lounge/exclusive-business-partners/offer.png',
            description:
                'AquaPure partnered with us through our Exclusive Business Partner program to expand retail presence. With access to our network and co-branded campaigns, they achieved a 40% sales boost and entered 25 new stores within 3 months. The partnership drove rapid growth and increased brand visibility.',
        },
        {
            client: 'PureWave Enterprises',
            logoSrc: '/images/bussiness-hub/vip-lounge/exclusive-business-partners/aqualogo.png',
            offerSrc: '/images/bussiness-hub/vip-lounge/exclusive-business-partners/offer.png',
            description:
                'AquaPure partnered with us through our Exclusive Business Partner program to expand retail presence. With access to our network and co-branded campaigns, they achieved a 40% sales boost and entered 25 new stores within 3 months. The partnership drove rapid growth and increased brand visibility.',
        },
    ];

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    const categoryLabels = {
        ecommerce: "E-commerce / Online Shopping Platform",
        cybersecurity: "Cybersecurity / Tech Services",
        sustainable: "Sustainable Products / Eco-Friendly Brand",
    };

    const collaboration = [
        {
            id: 1,
            bigimg: "/images/bussiness-hub/vip-lounge/exclusive-business-partners/categorylogo.png",
            heading: "GlowCart",
            tagline: "Tagline: Where Trends Light Up",
            category: "ecommerce",
            btntext: "View More",
            url: "",
            href: "/",
        },
        // {
        //     id: 2,
        //     bigimg: "/images/bussiness-hub/vip-lounge/exclusive-business-partners/categorylogo.png",
        //     heading: "NetSecurex",
        //     tagline: "Tagline: Guarding Your Digital World",
        //     category: "cybersecurity",
        //     btntext: "View More",
        //     url: "",
        //     href: "/",
        // },
        // {
        //     id: 3,
        //     bigimg: "/images/bussiness-hub/vip-lounge/exclusive-business-partners/categorylogo.png",
        //     heading: "Naturally Forever",
        //     tagline: "Tagline: Naturally Forever",
        //     category: "sustainable",
        //     btntext: "View More",
        //     url: "",
        //     href: "/",
        // },
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    // Filter collaboration array based on search query and selected category
    const filteredCollaboration = collaboration.filter((partner) => {
        const matchesSearch =
            partner.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
            partner.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
            partner.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory ? partner.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <div>
            <div className="mb-4 md:mb-8">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                    Exclusive Business Partners
                </h3>
                <p className="max-w-[800px] text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-8">Your gateway to elite tools, insights, and procurement support from our vetted partner ecosystem.</p>

                <div className="flex flex-col md:flex-row items-center gap-4">
                    <Link href={"/business-hub/vip-lounge/exclusive-business-partners/partner-directory"}>
                        <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded w-full md:w-auto">
                            View Partner Directory
                            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                        </button>
                    </Link>

                    <button
                        onClick={() => {
                            setIsModalOpen(true);
                            setTitle("Request an Introduction");
                        }}

                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded w-full md:w-auto">
                        Request an Introduction
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                    <Link href="/partnerships">
                        <button
                            // onClick={() => {
                            //     setIsModalOpen(true);
                            //     setTitle("Apply to partner with us");
                            // }}
                            className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded w-full md:w-auto">
                            Apply to Partner with Us
                            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="bg-[#85009D] rounded gap-6 md:gap-12 flex flex-col lg:flex-row items-center p-5 relative mb-4">
                <div className="mt-10 lg:mt-0">
                    <Image
                        src={slides[activeIndex].logoSrc}
                        alt={`${slides[activeIndex].client} logo`}
                        width={269}
                        height={269}
                        className="w-[269px] h-[269px] object-cover"
                    />
                </div>
                <div className="flex-2">
                    <h3 className="font-semibold text-[24px] mb-4">
                        Client: <span className="font-normal">{slides[activeIndex].client}</span>
                    </h3>
                    <p className="max-w-[850px] text-[16px] md:text-[20px] mb-4">
                        {slides[activeIndex].description}
                    </p>
                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded w-full md:w-auto">
                        View Profile
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </div>
                <Image
                    src={slides[activeIndex].offerSrc}
                    alt="offer"
                    width={241}
                    height={44}
                    className="w-[241px] h-[44px] object-cover absolute top-3 right-[-5px]"
                />
            </div>

            {/* Navigation Dots */}
            <div className="max-w-[112px] m-auto flex items-center gap-1 mb-4 md:mb-8">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-[6px] rounded-[8px] cursor-pointer ${activeIndex === index
                            ? 'w-[64px] bg-[#b08d57]'
                            : 'w-[20px] bg-[#B08D5766]'
                            }`}
                        onClick={() => handleDotClick(index)}
                    ></button>
                ))}

            </div>
            {/*  */}
            <div className="flex flex-col lg:flex-row  gap-4 mb-4 md:mb-8">
                <div className="flex flex-col gap-2 md:gap-4 flex-2">
                    <div className="flex flex-col lg:flex-row gap-4 mb-4 md:mb-8">
                        <div className="relative flex items-center flex-2">
                            <input
                                type="text"
                                placeholder="Search"
                                className="border border-[#85009D] rounded-[6px] py-2 px-3 pr-10 text-[#1b1b1b] flex-2 focus:outline-none focus:border-[#85009D]"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <IconComponent name="search" color='#85009D' size={16} />
                            </span>
                        </div>
                        <div className="relative w-full flex-1">
                            <select
                                className="appearance-none border border-[#85009D] rounded-[6px] py-2 px-3 pr-10 text-[#1b1b1b] w-full focus:outline-none focus:border-[#85009D]"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">Category</option>
                                <option value="ecommerce">{categoryLabels.ecommerce}</option>
                                <option value="cybersecurity">{categoryLabels.cybersecurity}</option>
                                <option value="sustainable">{categoryLabels.sustainable}</option>
                            </select>

                            <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
                                <IconComponent name="drop-down" color="#808080" size={16} />
                            </div>
                        </div>
                    </div>
                    {partners.length > 0 ? (
                        partners.map((partner) => (
                            <ConsultingPartnerTile
                                key={partner.id}
                                bigimg={partner.logo}       // logo from API
                                heading={partner.title}     // title from API
                                para={partner.tagline}      // tagline
                                category={`Category: ${categoryLabels[partner.category]}`} // if category exists
                                btntext="View More"
                                url="#"
                                BtnLink={() => openPopup(partner)}
                            />
                        ))
                    ) : (
                        <p className="text-[#9D9D9D]">No partners found.</p>
                    )}

                    {/* {filteredCollaboration.length > 0 ? (
                        filteredCollaboration.map((partner) => (
                            <ConsultingPartnerTile
                                key={partner.id}
                                bigimg={partner.bigimg}
                                heading={partner.heading}
                                para={partner.tagline}
                                category={`Category: ${categoryLabels[partner.category]}`}
                                btntext={partner.btntext}
                                url={partner.url}
                                BtnLink={() => openPopup(partner)}
                            />
                        ))
                    ) : (
                        <p className="text-[#9D9D9D]">No partners found.</p>
                    )} */}

                </div>
                <div className="rounded border border-[#DBBB89] bg-[#FFFBF5]  p-5 w-full lg:self-start hover:text-[#ffff] flex-1 mt-0 lg:mt-[89.5px]">
                    <h3 className="font-semibold text-[24px] md:text-2xl mb-4 text-[#85009D]">
                        Why Partner with
                        Procurement Plug?
                    </h3>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="w-3 h-3 bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                        <div>
                            <p className="text-base md:text-lg text-[#1B1B1B]">Dedicated feature in Business Lounge</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="w-3 h-3 bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                        <div>
                            <p className="text-base md:text-lg text-[#1B1B1B]">Monthly lead report (clicks + engagement)</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4">
                        <div className="w-3 h-3 bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                        <div>
                            <p className="text-base md:text-lg text-[#1B1B1B]">Sponsored content & co-hosting rights</p>
                        </div>
                    </div>
                    <div className="flex gap-2 md:gap-4 items-start mb-4 ">
                        <div className="w-3 h-3 bg-[#B08D57] rounded-full mt-[7px] shrink-0"></div>
                        <div>
                            <p className="text-base md:text-lg text-[#1B1B1B]">VIP event exposure & roundtable slots</p>
                        </div>
                    </div>
                </div>
            </div>
            <WebPopUp isOpen={isOpen} onClose={closePopup} item={selectedPartner} />
            <RequestIntroForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={title} />
        </div>
    );
}

export default ExclusiveBusinessPartnersCTR;
