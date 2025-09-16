"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";

export default function ExpertForm({ isOpen, onClose }) {
    const [isLoading, setIsLoading] = useState(false); // ✅ FIX added

    // Form Data
    const initialFormData = {
        name: "",
        company: "",
        email: "",
        interest: "",
        subscribe: false,
    };
    const [formData, setFormData] = useState(initialFormData);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";

            // Prevent touchmove on background, allow in modal
            const preventTouch = (e) => {
                if (!modalRef.current) return;
                const isInsideModal = modalRef.current.contains(e.target);
                if (!isInsideModal) {
                    e.preventDefault();
                    return;
                }
                // Allow scrolling within modal if it has scrollable content
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
                // Restore scroll position and remove styles
                const top = parseInt(document.body.style.top || "0", 10);
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                window.scrollTo(0, -top);
                document.removeEventListener("touchmove", preventTouch);
            };
        }
    }, [isOpen]);

    // ✅ Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/business-hub/concierge/register-interest", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setFormData(initialFormData);
                onClose();
            } else {
                console.error(result.error || "Failed to submit application.");
            }
        } catch (error) {
            console.error("Client error:", error);
        } finally {
            setIsLoading(false);
        }
    };


    if (!isOpen) return null;

    const interestOptions = [
        { value: "", label: "What procurement support are you most interested in?" },
        { value: "consulting", label: "Consulting Services" },
        { value: "procurement", label: "Procurement Solutions" },
        { value: "training", label: "Training Programs" },
        { value: "other", label: "Other" },
    ];

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-[1140px] w-full max-h-[90vh]  overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border-1 border-[#DBBB89] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D]">
                        We’re Deploying Our Experts!
                    </h3>
                    <button
                        className="absolute top-4 right-4 text-2xl text-[#85009D]"
                        onClick={onClose}
                    >
                        <IconComponent name="close" color='#7C7C7C' size={16} />
                    </button>
                </div>
                <p className="md:max-w-[910px] md:text-xl text-[#1B1B1B] mb-4">
                    Thank you for your interest in The Procurement Plug Concierge. Our expert procurement
                    support team will be available very soon. Register your interest below to be the first to know
                    when we launch fully.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                    />
                    <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Work email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                    />
                    <div className="relative">
                        <select
                            id="interest"
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] appearance-none"
                        >
                            {interestOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
                            <IconComponent name="drop-down" color="#808080" size={16} />
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <input
                            type="checkbox"
                            id="subscribe"
                            name="subscribe"
                            checked={formData.subscribe}
                            onChange={handleChange}
                            required
                            className="p-2 border border-[#85009D] rounded focus:outline-none mt-[8px]"
                        />
                        <label
                            htmlFor="Subscribe"
                            className="block md:text-[20px] text-[#1B1B1B] font-medium"
                        >
                            I’d like to receive early access updates and pilot invitations
                        </label>
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}>
                        {isLoading ? "Submitting..." : "Register My Interest"}
                        {!isLoading && <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>}
                    </button>
                </form>
            </div>
        </div>
    );
}