"use client"
import Image from "next/image";
import Link from "next/link";

export default function WebPopUp({ isOpen, onClose, item }) {
    if (!isOpen || !item) return null;

    // Fallback image in case item.bigimg is missing
    const imageSrc = item.bigimg && item.bigimg.trim() !== "" 
        ? item.bigimg 
        : "/images/placeholder.png"; // make sure you have a placeholder image

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center p-6">
            <div className="bg-white rounded-lg p-6 max-w-md w-full relative shadow-lg border border-[#DBBB89]">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                >
                    ✕
                </button>

                <div className="flex flex-col items-center text-center space-y-4">
                    {/* Only render image if imageSrc exists */}
                    {imageSrc ? (
                        <Image
                            src={imageSrc}
                            alt={item.heading || "Partner image"}
                            width={200}
                            height={120}
                            className="rounded-md"
                        />
                    ) : null}

                    <h2 className="text-xl font-bold text-[#85009D]">{item.heading || "No Heading"}</h2>
                    <p className="text-gray-700">{item.tagline || "No tagline available"}</p>
                    <p className="text-gray-700">
                        Category: {item.category || "Not specified"}
                    </p>
                    {item.href ? (
                        <Link href={item.href}>
                            <button
                                className="mt-3 bg-[#b08d57] text-white px-4 py-2 rounded-md cursor-pointer"
                            >
                                Website Link
                            </button>
                        </Link>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
