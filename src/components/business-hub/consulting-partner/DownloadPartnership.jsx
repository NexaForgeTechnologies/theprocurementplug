"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";
import toast from "react-hot-toast";

export default function DownloadPartnership({ isOpen, onClose, title }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        industryInterests: "",
        description: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";

            const preventTouch = (e) => {
                if (!modalRef.current) return;
                const isInsideModal = modalRef.current.contains(e.target);
                if (!isInsideModal) {
                    e.preventDefault();
                    return;
                }

                const { scrollTop, scrollHeight, clientHeight } = modalRef.current;
                const atTop = scrollTop === 0;
                const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
                const scrollingUp = e.touches[0].clientY > e.targetTouches[0].clientY;
                const scrollingDown = e.touches[0].clientY < e.targetTouches[0].clientY;

                if ((atTop && scrollingUp) || (atBottom && scrollingDown)) {
                    e.preventDefault();
                }
            };

            document.addEventListener("touchmove", preventTouch, { passive: false });

            return () => {
                const top = parseInt(document.body.style.top || "0", 10);
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                window.scrollTo(0, -top);
                document.removeEventListener("touchmove", preventTouch);
            };
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch("/api/partnerships/DownloadPartnership", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to submit form");

            toast.success("Form submitted successfully!");

            // ✅ Trigger PDF download from public folder
            const link = document.createElement("a");
            link.href = "/files/download/Partnership Prospectus.pdf"; // ✅ Do NOT include "public"
            link.download = "PartnershipDetails.pdf";
            document.body.appendChild(link);
            link.click();
            link.remove();

            console.log("Form submitted:", formData);
            setFormData({
                name: "",
                email: "",
                phone: "",
                industryInterests: "",
                description: "",
            });

            onClose();
        } catch (error) {
            console.error("Submission error:", error.message);
            toast.error("Form submission unsuccessfull!");

        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    const inputFields = [
        {
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Full Name*",
        },
        {
            id: "email",
            name: "email",
            type: "email",
            placeholder: "Email*",
        },
        {
            id: "phone",
            name: "phone",
            type: "tel",
            placeholder: "Phone",
        },
        {
            id: "industryInterests",
            name: "industryInterests",
            type: "text",
            placeholder: "Industry Interests",
        },
    ];

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-[964px] w-full max-h-[90vh] overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border-1 border-[#DBBB89] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                        {title || "Download Partnership & Sponsorship Pack"}
                    </h3>
                    <button
                        className="absolute top-4 right-4 text-2xl text-[#85009D] cursor-pointer"
                        onClick={onClose}
                    >
                        <IconComponent name="close" color="#7C7C7C" size={16} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {inputFields.map((field) => (
                            <input
                                key={field.id}
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={handleChange}
                                required
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        ))}
                    </div>

                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
                        rows="4"
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`flex items-center justify-center md:justify-start cursor-pointer px-4 py-2 rounded-[6px] w-full md:w-auto transition-all duration-200 ${isLoading
                            ? "bg-[#b08d57]/70 cursor-not-allowed"
                            : "bg-[#b08d57] hover:bg-[#a07b45]"
                            } text-white`}
                    >
                        {isLoading ? (
                            <>
                                Downloading...
                                <div className="ml-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            </>
                        ) : (
                            <>
                                Download
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
