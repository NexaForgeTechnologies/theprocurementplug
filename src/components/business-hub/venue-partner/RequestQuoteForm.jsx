"use client";

import { useState, useEffect, useRef } from "react";

import IconComponent from "@/components/icon/Icon";
import SuccessPopup from "@/components/SuccessMessageComp";

export default function RequestDemoForm({ isOpen, onClose }) {
    const initialFormData = {
        name: "",
        company: "",
        role: "",
        email: "",
        phone: "",
        capacity: "",
        date: "",
        timeframe: "",
        message: "",
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

    // Success Popup
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const modalRef = useRef(null);

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/business-hub/venu-partner", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // Clear form
                setFormData(initialFormData);

                // show success popup
                setShowSuccessPopup(true);

                // Close popup after timeout
                setTimeout(() => {
                    setShowSuccessPopup(false);  // hide popup
                    onClose();                   // close modal
                }, 3000);
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
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-200 flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-[964px] w-full max-h-[90vh]  overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border border-[#DBBB89] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                        Request a Quote
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
                            id="name"
                            name="name"
                            placeholder="Full Name*"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            id="role"
                            name="role"
                            placeholder="Role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Work email*"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="text"
                            id="capacity"
                            name="capacity"
                            placeholder="Capacity"
                            value={formData.capacity}
                            onChange={handleChange}
                            className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="date"
                            id="date"
                            name="date"
                            placeholder="Date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="text"
                            id="timeframe"
                            name="timeframe"
                            placeholder="Project Timeframe"
                            value={formData.timeframe}
                            onChange={handleChange}
                            className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
                        rows="4"
                    />
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="subscribe"
                            name="subscribe"
                            checked={formData.subscribe}
                            onChange={handleChange}
                            className="cursor-pointer p-2 border border-[#85009D] rounded focus:outline-none"
                        />
                        <label
                            htmlFor="subscribe"
                            className="cursor-pointer block text-[#1B1B1B] font-medium"
                        >
                            Subscribe for more updates
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-md w-full md:w-auto">
                        {isLoading ? "Submitting..." : "Submit"}
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </form>
            </div>

            {/* ✅ Success Popup */}
            <SuccessPopup
                isOpen={showSuccessPopup}
                title="Thank you!"
                message="Thank you for requesting a quote from The Procurement Plug. Our team will get back to you shortly."
            />
        </div>
    );
}