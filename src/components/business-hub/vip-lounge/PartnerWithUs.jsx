"use client";

import Link from "next/link";
import React, { useState } from "react";

function BusinesFeatureComp({ data, key }) {
    const [isHovered, setIsHovered] = useState(false);
    const handleClick = (e) => {
        if (!data.link) {
            e.preventDefault();
            alert("Available soon!");
        }
    };

    const bgColor = data.bgColor || "#FFFBF5";

    return (
        <Link
            href={data.link || "#"}
            onClick={handleClick}
            key={key}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: "24px",
                padding: '20px',
                borderRadius: '6px',
                border: `1.5px solid ${isHovered ? "#ffffff" : "#D09B48"}`,
                backgroundColor: isHovered ? '#b58c4a' : bgColor,
                color: 'white',
                transition: 'all 0.2s ease-in-out'
            }}
        >
            <h2
                className="font-semibold text-[24px]"
                style={{ color: isHovered ? "#ffffff" : "#85009D" }}
            >
                {data.heading}
            </h2>
            <span
                className="flex w-[132px] items-center cursor-pointer text-white px-4 py-2 rounded-[6px]"
                style={{ backgroundColor: isHovered ? "#85009D" : "#b08d57" }}
            >
                {data.linkText}
                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </span>
        </Link>
    );
}

export default BusinesFeatureComp;
