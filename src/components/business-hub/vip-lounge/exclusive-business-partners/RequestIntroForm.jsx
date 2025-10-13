"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";
import toast from "react-hot-toast";

export default function RequestIntroductionForm({ isOpen, onClose, title }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        company: "",
        role: "",
        areaOfInterest: "",
        briefNote: "",
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
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // You can replace this with actual submission logic
            console.log("Form submitted:", formData);
            const res = await fetch("/api/business-hub/vip-lounge/exclusive-business-partners", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            if (!res.ok) throw new Error("Failed to submit form");

            toast.success("Form submitted successfully!");
            toast.success(`Thanks for requesting an introduction! \n
             We’ve received your inquiry and one of our Partner Managers will reach 
             out within 24 hours to connect you with the right expert. \n`,
                {
                    duration: 10000, // in milliseconds
                });
            // Reset the form
            setFormData({
                fullName: "",
                email: "",
                company: "",
                role: "",
                areaOfInterest: "",
                briefNote: "",
            });

            onClose();
        } catch (error) {
            console.error("Submission failed:", error);
            toast.error("Submission failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-[964px] w-full max-h-[90vh] overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border-1 border-[#DBBB89] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                        {title || "Request an Introduction"}
                    </h3>
                    <button
                        className="absolute top-4 right-4 text-2xl text-[#85009D]"
                        onClick={onClose}
                    >
                        <IconComponent name="close" color='#7C7C7C' size={16} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Full Name*"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address*"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Company*"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="text"
                            id="role"
                            name="role"
                            placeholder="Role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="relative w-full">
                            <select
                                id="areaOfInterest"
                                name="areaOfInterest"
                                value={formData.areaOfInterest}
                                onChange={handleChange}
                                required
                                className="appearance-none border-1 border-[#85009D] text-[#363636] w-full p-4 bg-white cursor-pointer rounded-[2px] focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            >
                                <option value="">Select Area of Interest*</option>
                                <option value="Strategic Sourcing">Strategic Sourcing</option>
                                <option value="Supplier Risk">Supplier Risk</option>
                                <option value="Automation Tools">Automation Tools</option>
                                <option value="Market Intelligence">Market Intelligence</option>
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-[#85009D]">
                                <IconComponent name="drop-down" color="#808080" size={16} />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <textarea
                            id="briefNote"
                            name="briefNote"
                            placeholder="Brief Note*"
                            value={formData.briefNote}
                            onChange={handleChange}
                            required
                            className="resize-none w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] min-h-[100px]"
                        />
                    </div>
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
                                Submitting...
                                <div className="ml-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            </>
                        ) : (
                            <>
                                Request My Introduction
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            </>
                        )}
                    </button>

                </form>
            </div>
        </div>
    );
}