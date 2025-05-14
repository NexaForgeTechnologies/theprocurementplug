"use client";

import React, { useState } from 'react';

import BlogComp from '@/components/blogs/BlogComp';

function ResourceLibraryCTR() {
    const [selectedType, setSelectedType] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchText, setSearchText] = useState('');

    const blogs = [
        {
            id: 1,
            type_id: 2,
            type_name: "free",
            catgory_id: 3,
            catgory_name: "useful",
            img: "/images/home/blogs/blog-4.png",
            heading: "Key trends impacting the procurement industry",
            text: "Emerging Trends Shaping the Future of ProcurementAre you grappling with the complexities of supply chain management in your business.",
            link: "/blog/2024-12-18/key-trends-impacting-the-procurement-industry"
        },
        {
            id: 2,
            img: "/images/home/blogs/blog-1.png",
            heading: "Key components for successful procurement transformation",
            text: "Table Of Contents:Driving Efficiency: Key Procurement Transformation ComponentsAre you struggling to navigate the complexities of government procurement and supply chain.",
            link: "/blog/2024-12-18/key-components-for-successful-procurement-transformation"
        },
        {
            id: 3,
            img: "/images/home/blogs/blog-3.png",
            heading: "Strategic procurement KPI’s – how to implement, track and measure for success",
            text: "Table Of Contents:Achieving Excellence With Strategic Procurement KPIsAre you struggling to align your procurement strategies with your business's overarching objectives?",
            link: "/blog/2024-12-18/strategic-procurement-kpis-how-to-implement-track-and-measure-for-success"
        },
        {
            id: 4,
            img: "/images/home/blogs/blog-5.png",
            heading: "Procurement recruiters – who’s side are they on?",
            text: "Table Of Contents:Navigating the Role of Procurement Recruiters: Allies in Your Career JourneyAre you struggling to connect with the right.",
            link: "/blog/2024-12-18/procurement-recruiters-whos-side-are-they-on"
        },
        {
            id: 5,
            type_id: 1,
            type_name: "free-paid",
            img: "/images/home/blogs/blog-6.png",
            heading: "How to smash your procurement interviews",
            text: "Table Of Contents:Ace Your Next Procurement Interview: Strategies for SuccessAre you ready to impress at your next procurement interview?",
            link: "/blog/2024-12-18/how-to-smash-your-procurement-interviews"
        },
        {
            id: 6,
            type_id: 2,
            type_name: "free",
            img: "/images/home/blogs/blog-7.png",
            heading: "Fundamental CV writing skills to stand out in a tough procurement market",
            text: "Table Of Contents:Elevate Your Procurement Career With Expert CV TipsAre you struggling to stand out in the competitive procurement sector?",
            link: "/blog/2024-12-18/fundamental-cv-writing-skills-to-stand-out-in-a-tough-procurement-market"
        },
        {
            id: 7,
            img: "/images/home/blogs/blog-8.png",
            heading: "Journey to CPO – a strategic plan",
            text: "Table Of Contents:Strategic Planning: Your Path to Becoming a Chief Procurement OfficerAre you aiming to lead your organisation's procurement strategy",
            link: "/blog/2024-12-18/journey-to-cpo-a-strategic-plan"
        },
        {
            id: 8,
            type_id: 3,
            type_name: "paid",
            img: "/images/home/blogs/blog-2.png",
            heading: "Holistic approach to procurement and supply chain governance",
            text: "Table Of Contents:Optimising Supply Chain Performance With Holistic GovernanceAre you struggling to meet the ever-changing demands of your customers while…",
            link: "/blog/2024-12-18/holistic-approach-to-procurement-and-supply-chain-governance"
        },
        {
            id: 9,
            type_id: 2,
            type_name: "free",
            catgory_id: 3,
            catgory_name: "useful",
            img: "/images/home/blogs/blog-9.png",
            heading: "How to climb the procurement career ladder",
            text: "Table Of Contents:Essential Strategies for Advancing Your Procurement Career PathAre you striving to climb the procurement career ladder but find…",
            link: "/blog/2024-12-18/how-to-climb-the-procurement-career-ladder"
        }
    ]

    // Filtered blogs based on selected type, category and search
    const filteredBlogs = blogs.filter(blog => {
        const matchesType = selectedType ? blog.type_name === selectedType : true;
        const matchesCategory = selectedCategory ? blog.catgory_name?.toLowerCase() === selectedCategory.toLowerCase() : true;
        const matchesSearch = searchText
            ? blog.heading.toLowerCase().includes(searchText.toLowerCase()) || blog.text.toLowerCase().includes(searchText.toLowerCase())
            : true;
        return matchesType && matchesCategory && matchesSearch;
    });

    return (
        <div className='text-[#363636]'>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-2 mb-6 md:mb-8'>
                {/* Content Type */}
                <div className='flex flex-col gap-2'>
                    <label className='text-xl font-bold' htmlFor="content-type"><strong>Content Type</strong></label>
                    <select
                        id="content-type"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className='border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full'
                    >
                        <option value="">Select Type</option>
                        <option value="free-paid">Free & Paid</option>
                        <option value="free">Free Resource</option>
                        <option value="paid">Paid Resource</option>
                    </select>
                </div>

                {/* Category */}
                <div className='flex flex-col gap-2'>
                    <label className='text-xl font-bold' htmlFor="category"><strong>Category</strong></label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className='border-r-8 border-r-[white] pr-2 cursor-pointer outline outline-[#e0e0e0] p-3 rounded-md w-full'
                    >
                        <option value="">Select Category</option>
                        <option value="useful">Useful Articles</option>
                        {/* add more categories if needed */}
                    </select>
                </div>

                {/* Search */}
                <div className='flex flex-col gap-2'>
                    <label className='text-xl font-bold' htmlFor="search"><strong>Search</strong></label>
                    <input
                        id="search"
                        placeholder='search...'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className='outline outline-[#e0e0e0] px-2 py-[9px] rounded-md w-full'
                        type="text"
                    />
                </div>
            </div>

            {/* Blogs */}
            <div className='grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog, idx) => (
                        <BlogComp key={idx} img={blog.img} heading={blog.heading} text={blog.text} href={blog.link}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">No blogs found matching your criteria.</div>
                )}
            </div>
        </div>
    )
}

export default ResourceLibraryCTR;
