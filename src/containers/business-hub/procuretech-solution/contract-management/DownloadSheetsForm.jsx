"use client";

import { useEffect, useRef, useState } from "react";
import IconComponent from "@/components/icon/Icon";
import toast from "react-hot-toast";

export default function DownloadSheetsForm({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        description: "",
    });

    const [isLoading, setIsLoading] = useState(false); 
    const modalRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

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
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // ✅ Start loading

        try {
            const res = await fetch("/api/business-hub/procuretech-solution/contract-management", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to submit form");

            toast.success("Form submitted successfully!");
        } catch (error) {
            toast.error("Form submission unsuccessful!");
            console.error("Submission error:", error.message);
        } finally {
            setIsLoading(false); // ✅ Stop loading
            setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                description: "",
            });
            onClose();
        }
    };

    if (!isOpen) return null;

    const inputFields = [
        { name: "name", type: "text", placeholder: "Full Name*" },
        { name: "email", type: "email", placeholder: "Email Address*" },
        { name: "company", type: "text", placeholder: "Company*" },
        { name: "phone", type: "tel", placeholder: "Phone Number*" },
    ];

    return (
        <div
            className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6"
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className="bg-[#FFFBF5] rounded-md border border-[#DBBB89] p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                    onClick={onClose}
                >
                    <IconComponent name="close" color="#7C7C7C" size={16} />
                </button>

                <h3 className="text-2xl font-semibold text-[#1B1B1B] mb-4">
                    Request a Demo
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {inputFields.map((field) => (
                            <input
                                key={field.name}
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                                className={`w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
                            />
                        ))}
                    </label>

                    <textarea
                        name="description"
                        placeholder="Description*"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className={`w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
                    ></textarea>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-[#b08d57] text-white px-4 py-2 rounded-md w-full transition-all flex items-center justify-center ${isLoading ? "opacity-60 cursor-not-allowed" : "hover:bg-[#96723f]"}`}
                    >
                        {isLoading ? (
                            <>
                                <span className="mr-2 animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
                                Submitting...
                            </>
                        ) : (
                            "Submit Request"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
