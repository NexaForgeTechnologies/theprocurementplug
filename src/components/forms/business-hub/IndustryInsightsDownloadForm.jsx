"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";
import Image from "next/image";
import toast from "react-hot-toast";
import SuccessPopup from "@/components/SuccessMessageComp";

export default function IndustryInsightsDownloadForm({ isOpen, onClose, selectedTile }) {
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        if (selectedTile) {
            setSelectedFile(selectedTile); // or any file/data you want to associate
        }
    }, [selectedTile]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        phone: "",
        email: "",
        interest: "",
        description: "",
    });

    const modalRef = useRef(null);
    const fileInputRef = useRef(null);

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
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData, selectedTile);
    setIsLoading(true);

    try {
        if (!formData.username || !formData.email) {
            toast.error("Please fill in your name and email.");
            setIsLoading(false);
            return;
        }

        // Include the selected tile in the payload
        const payload = { ...formData, selectedTile };

        const res = await fetch("/api/business-hub/vip-lounge/exclusive-intelligence-reports/industry-insights/download-reports", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!res.ok) {
            toast.error(data.error || "Failed to submit form.");
            setIsLoading(false);
            return;
        }

        setShowSuccessPopup(true);

        setTimeout(() => {
            setShowSuccessPopup(false);
            onClose();
        }, 3000);

        setFormData({
            username: "",
            phone: "",
            email: "",
            interest: "",
            description: "",
        });

    } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An unexpected error occurred.");
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
                        Download file
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
                            id="username"
                            name="username"
                            placeholder="Username*"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <input
                            type="text"
                            id="interest"
                            name="interest"
                            placeholder="Interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <div>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? "Submitting..." : "Submit"}
                        {!isLoading && (
                            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                        )}
                    </button>
                    <SuccessPopup
                        isOpen={showSuccessPopup}
                        title="Thank you!"
                        message="Your form has been submitted successfully."
                    />
                </form>
            </div>
        </div>
    );
}
