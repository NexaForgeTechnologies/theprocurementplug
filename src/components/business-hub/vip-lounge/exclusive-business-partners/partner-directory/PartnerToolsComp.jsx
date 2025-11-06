import { useState } from "react";
import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
import Link from "next/link";

export default function PartnerToolsComp({
    src,
    title,
    tagline,
    category,
    description,
    btnName,
    SiteLink
}) {
    const [showFull, setShowFull] = useState(false);
    const CHAR_LIMIT = 120;

    const toggleViewMore = () => setShowFull((prev) => !prev);

    // Helper to truncate text
    const truncateText = (text, limit) => {
        if (!text) return "";
        return text.length > limit ? text.slice(0, limit) + "..." : text;
    };

    const displayedDescription =
        showFull || !description
            ? description
            : truncateText(description, CHAR_LIMIT);

    return (
        <div className="bg-[#FFFBF5] border border-[#D09B48] p-4 rounded flex flex-col gap-3">
            {/* Logo / Image */}
            <div className="min-h-40 rounded overflow-hidden w-full">
                <img src={src} alt={title} className="object-cover w-full" />
            </div>

            {/* Title + Category */}
            <div className="flex flex-wrap justify-between">
                <h1 className="text-sm md:text-xl text-[#85009D] font-semibold">
                    {title}
                </h1>
            </div>

            <p className="text-sm md:text-base">Tagline: {tagline}</p>
            <p className="text-sm md:text-base">Category: {category}</p>

            {/* Description with View More toggle */}
            <p className="text-sm md:text-base">
                Description: {displayedDescription}
                {description && description.length > CHAR_LIMIT && (
                    <button
                        onClick={toggleViewMore}
                        className="ml-2 text-[#B08D57] font-medium hover:underline"
                    >
                        {showFull ? "View less" : "View more"}
                    </button>
                )}
            </p>

            {/* Button (always pinned to bottom) */}
            <Link href={SiteLink} className="mt-auto self-start">
                <ArrowButtonCom
                    text={btnName}
                    textColor="text-[white] mt-auto self-start"
                    bgColor="bg-[#B08D57]"
                    hoverBgColor="hover:bg-transparent"
                    borderColor="border-[#B08D57]"
                    hoverTextColor="hover:text-[#B08D57]"
                />
            </Link>
        </div>
    );
}
