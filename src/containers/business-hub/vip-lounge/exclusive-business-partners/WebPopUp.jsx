"use client"
import Image from "next/image";
import Link from "next/link";

export default function WebPopUp({ isOpen, onClose, item }) {
    if (!isOpen || !item) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center p-6">
            <div className="bg-white rounded-lg p-6 max-w-md w-full relative shadow-lg border-1 border-[#DBBB89]">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                >
                    ✕
                </button>

                <div className="flex flex-col items-start text-center space-y-4">
                    <Image
                        src={item.bigimg}
                        alt={item.heading}
                        width={200}
                        height={120}
                        className="rounded-md"
                    />
                    <h2 className="text-xl font-bold text-[#85009D]">{item.heading}</h2>
                    <p className="text-gray-700">{item.tagline}</p>
                    <p className="text-gray-700">Category: {item.category}</p>
                    <Link href={item.href}>
                        <button
                            className="mt-3 bg-[#b08d57] text-white px-4 py-2 rounded-md cursor-pointer"
                        >
                            Website Link
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
