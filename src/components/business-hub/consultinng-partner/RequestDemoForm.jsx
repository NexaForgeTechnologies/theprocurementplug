"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";

export default function RequestDemoForm({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        role: "",
        implementationtimeframe: "",
        message: "",
        Subscribe: false,
    });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({ ...prev, [name]: value }));
    // };
    // stop scrolling
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            // Store the current scroll position
            const scrollY = window.scrollY;
            // Apply styles to lock body
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";

            // Prevent touchmove on background, allow in modal
            const preventTouch = (e) => {
                if (!modalRef.current) return;
                // Check if the touch event target is within the modal
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
        setFormData({ name: "", company: "", email: "", phone: "", role: "", implementationtimeframe: "", message: "", Subscribe: false, });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-lg w-full max-h-[90vh]  overflow-y-auto p-6 bg-[#F7F9FB] relative rounded-2xl shadow-lg border-2 border-[#85009D] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-[#85009D] text-center">
                        Request a Quote
                    </h2>
                    <button
                        className="absolute top-4 right-4 text-2xl text-[#85009D]"
                        onClick={onClose}
                    >
                        <IconComponent name="close" color='#85009D' size={16} />
                        {/* × */}
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-[#85009D] font-medium"
                        >
                            Full Name*
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 text-[#010101] border-2 border-[#85009D] rounded focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="company"
                                className="block text-[#85009D] font-medium"
                            >
                                Company*
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-[#010101] border-2 border-[#85009D] rounded focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="role"
                                className="block text-[#85009D] font-medium"
                            >
                                Role
                            </label>
                            <input
                                type="text"
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-[#010101] border-2 border-[#85009D] rounded focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-[#85009D] font-medium"
                            >
                                Work email*
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-[#010101] border-2 border-[#85009D] rounded focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-[#85009D] font-medium"
                            >
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-[#010101] border-2 border-[#85009D] rounded focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="implementationtimeframe"
                            className="block text-[#85009D] font-medium"
                        >
                            Project Timeframe
                        </label>
                        <input
                            type="text"
                            id="implementationtimeframe"
                            name="implementationtimeframe"
                            value={formData.implementationtimeframe}
                            onChange={handleChange}
                            required
                            className="w-full p-2 text-[#010101] border-2 border-[#85009D] rounded focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-[#85009D] font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 text-[#010101] border-2 border-[#85009D] rounded focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
                            rows="4"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="Subscribe"
                            name="Subscribe"
                            checked={formData.Subscribe}
                            onChange={handleChange}
                            required
                            className="p-2 border border-[#85009D] rounded focus:outline-none"
                        />
                        <label
                            htmlFor="Subscribe"
                            className="block text-[#85009D] font-medium"
                        >
                            Subscribe to updates
                        </label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-[8px]">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border-2 border-[#85009D] text-[#85009D] rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#b58c4a] text-white rounded hover:bg-[#a07b3a]"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}