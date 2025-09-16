"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";

export default function PersonalDetailForm({ isOpen, onClose }) {
    const experienceOptions = [
        { value: "Years of Procurement Experience", label: "Years of Procurement Experience" },
        { value: "Consulting Services", label: "Consulting Services" },
        { value: "Procurement Solutions", label: "Procurement Solutions" },
        { value: "Training Programs", label: "Training Programs" },
        { value: "Other", label: "Other" },
    ];

    const initialFormData = {
        // Personal & Professional Details
        name: "",
        email: "",
        linkedin: "",
        location: "",
        company: "",
        role: "",

        // Expertise
        experience: "",
        designation: "",
        industry: "",

        // Strategic & Leadership Exposure
        services: "",
        example: "",

        // Quality & Risk Mindset
        quality_risk_mindset: "",

        // Availability & Interest
        hours_per_month: "",
        interest_reason: "",

    }
    const [formData, setFormData] = useState(initialFormData);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const modalRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

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
            const response = await fetch("/api/concierge/become-qa-partner", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setFormData(initialFormData);
                onClose(); // ✅ just close modal on success
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

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-[1134px] w-full max-h-[90vh]  overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border-1 border-[#DBBB89] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D]">
                        Personal & Professional Details
                    </h3>
                    <button
                        className="absolute top-4 right-4 text-2xl text-[#85009D]"
                        onClick={onClose}
                    >
                        <IconComponent name="close" color='#7C7C7C' size={16} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address (Email)"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="url"
                            id="linkedIn"
                            name="linkedin"
                            placeholder="LinkedIn Profile URL (Optional)"
                            value={formData.linkedin}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Location / Time Zone (Short text)"
                            value={formData.location}
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
                            placeholder="Current Company"
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
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D] mb-4">
                        Expertise
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <select
                                id="experience"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                required
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] appearance-none"
                            >
                                {experienceOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
                                <IconComponent name="drop-down" color="#808080" size={16} />
                            </div>
                        </div>
                        <input
                            type="text"
                            id="designation"
                            name="designation"
                            placeholder="What is your current or most recent role & company?"
                            value={formData.designation}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <input
                        type="text"
                        id="industry"
                        name="industry"
                        placeholder="What industries do you have the strongest expertise in?"
                        value={formData.industry}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                    />
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D] mb-4">
                        Strategic & Leadership Exposure
                    </h3>

                    <div className="flex flex-col md:flex-row  gap-4 md:gap-10">
                        <label className="text-[#1B1B1B] font-medium">
                            Have you provided advisory services to boards or C-suite?
                        </label>

                        <div className="flex gap-10">
                            <label className="flex items-center gap-2 text-[#1B1B1B]">
                                <input
                                    type="radio"
                                    name="services"
                                    value="yes"
                                    checked={formData.services === "yes"}
                                    onChange={handleChange}
                                    className="p-2 border border-[#85009D] rounded focus:outline-none"
                                />
                                Yes
                            </label>

                            <label className="flex items-center gap-2 text-[#1B1B1B]">
                                <input
                                    type="radio"
                                    name="services"
                                    value="no"
                                    checked={formData.services === "no"}
                                    onChange={handleChange}
                                    className="p-2 border border-[#85009D] rounded focus:outline-none"
                                />
                                No
                            </label>
                        </div>

                    </div>
                    <textarea
                        id="example"
                        name="example"
                        placeholder="Please give a brief example of a board-level or enterprise project you’ve overseen"
                        value={formData.example}
                        onChange={handleChange}
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
                        rows="4"
                    />

                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D] mb-4">
                        Quality & Risk Mindset
                    </h3>
                    <textarea
                        id="quality_risk_mindset"
                        name="quality_risk_mindset"
                        placeholder="What’s one example of how you’ve identified or mitigated a strategic risk in a procurement or sourcing project?"
                        value={formData.quality_risk_mindset}
                        onChange={handleChange}
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
                        rows="4"
                    />

                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D] mb-4">
                        Availability & Interest
                    </h3>
                    <input
                        type="text"
                        id="hours_per_month"
                        name="hours_per_month"
                        placeholder="How many hours per month would you ideally dedicate to Plug QA reviews?"
                        value={formData.hours_per_month}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                    />
                    <input
                        type="text"
                        id="interest_reason"
                        name="interest_reason"
                        placeholder="Why are you interested in becoming a Plug Strategic QA Partner?"
                        value={formData.interest_reason}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        {isLoading ? "Submitting..." : "Submit"}
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                    {alert.show && (
                        <div
                            className={`w-full p-3 rounded-md flex justify-between items-center ${alert.type === "success" ? "bg-[#85009D] text-white" : "bg-red-900/50 text-red-400"
                                } mt-4`}
                            role="alert"
                            aria-live="polite"
                        >
                            <span dangerouslySetInnerHTML={{ __html: alert.message }} />
                            <button
                                onClick={handleCloseAlert}
                                className="text-white hover:text-gray-300 focus:outline-none"
                            >
                                ✕
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div >
    );
}
