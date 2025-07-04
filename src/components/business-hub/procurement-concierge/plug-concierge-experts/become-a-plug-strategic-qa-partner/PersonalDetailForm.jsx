"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";

export default function PersonalDetailForm({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        linkedIn: "",
        location: "",
        currentCompany: "",
        role: "",
        experience: "",
        industries: "",
        advisoryYes: false,
        advisoryNo: false,
        boardProject: "",
        strategicRisk: "",
        hoursPerMonth: "",
        interestReason: "",
    });

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
    // 

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({
            name: "",
            email: "",
            phone: "",
            linkedIn: "",
            location: "",
            currentCompany: "",
            role: "",
            experience: "",
            industries: "",
            advisoryYes: false,
            advisoryNo: false,
            boardProject: "",
            strategicRisk: "",
            hoursPerMonth: "",
            interestReason: "",
        });
        onClose();
    };

    if (!isOpen) return null;

    const experienceOptions = [
        { value: "", label: "Years of Procurement Experience" },
        { value: "consulting", label: "Consulting Services" },
        { value: "procurement", label: "Procurement Solutions" },
        { value: "training", label: "Training Programs" },
        { value: "other", label: "Other" },
    ];

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
                            name="linkedIn"
                            placeholder="LinkedIn Profile URL (Optional)"
                            value={formData.linkedIn}
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
                            id="currentCompany"
                            name="currentCompany"
                            placeholder="Current Company"
                            value={formData.currentCompany}
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
                            id="industries"
                            name="industries"
                            placeholder="What is your current or most recent role & company?"
                            value={formData.industries}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <input
                        type="text"
                        id="industriesExpertise"
                        name="industries"
                        placeholder="What industries do you have the strongest expertise in?"
                        value={formData.industries}
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
                                    type="checkbox"
                                    name="advisoryYes"
                                    checked={formData.advisoryYes}
                                    onChange={handleChange}
                                    className="p-2 border border-[#85009D] rounded focus:outline-none"
                                />
                                Yes
                            </label>

                            <label className="flex items-center gap-2 text-[#1B1B1B]">
                                <input
                                    type="checkbox"
                                    name="advisoryNo"
                                    checked={formData.advisoryNo}
                                    onChange={handleChange}
                                    className="p-2 border border-[#85009D] rounded focus:outline-none"
                                />
                                No
                            </label>
                        </div>
                    </div>
                    <textarea
                        id="boardProject"
                        name="boardProject"
                        placeholder="Please give a brief example of a board-level or enterprise project you’ve overseen"
                        value={formData.boardProject}
                        onChange={handleChange}
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
                        rows="4"
                    />

                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D] mb-4">
                        Quality & Risk Mindset
                    </h3>
                    <textarea
                        id="strategicRisk"
                        name="strategicRisk"
                        placeholder="What’s one example of how you’ve identified or mitigated a strategic risk in a procurement or sourcing project?"
                        value={formData.strategicRisk}
                        onChange={handleChange}
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
                        rows="4"
                    />

                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D] mb-4">
                        Availability & Interest
                    </h3>
                    <input
                        type="text"
                        id="hoursPerMonth"
                        name="hoursPerMonth"
                        placeholder="How many hours per month would you ideally dedicate to Plug QA reviews?"
                        value={formData.hoursPerMonth}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                    />
                    <input
                        type="text"
                        id="interestReason"
                        name="interestReason"
                        placeholder="Why are you interested in becoming a Plug Strategic QA Partner?"
                        value={formData.interestReason}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                    />

                    <button
                        type="submit"
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Submit
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </form>
            </div>
        </div >
    );
}
