"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";
import Image from "next/image";
import toast from "react-hot-toast";

export default function RequestDemoForm({ isOpen, onClose }) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        company: "",
        role: "",
        topic: "",
        objectives: "",
        desiredDeliveryDate: "",
        budgetRange: "",
        documents: null,
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setIsLoading(true);

        try {
            // 🚫 Basic client-side validation
            if (!formData.budgetRange) {
                toast.error("Please select a budget range.");
                return;
            }
            if (!formData.documents) {
                toast.error("Please attach a document (PDF, DOCX, or XLSX).");
                return;
            }
            // ✅ Convert state to FormData
            const FormDataObj = new FormData();
            for (const key in formData) {
                const value = formData[key];
                if (value !== null && value !== undefined && value !== "") {
                    FormDataObj.append(key, value);
                }
            }

            const res = await fetch("/api/business-hub/vip-lounge/exclusive-intelligence-reports/industry-insights/request-a-custom-brief", {
                method: "POST",
                body: FormDataObj,
            });

            if (!res.ok) {
                const errorData = await res.json();
                toast.error(errorData.message || "Failed to submit form.");
                return;
            }

            toast.success("Form submitted successfully!");

            // ✅ Reset form
            setFormData({
                fullName: "",
                email: "",
                company: "",
                role: "",
                topic: "",
                objectives: "",
                desiredDeliveryDate: "",
                budgetRange: "",
                // documents: null,
            });

            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

            // ✅ Close modal
            onClose();

        } catch (error) {
            console.error("Error submitting form to API server:", error);
            toast.error("An unexpected error occurred.");

        } finally {
            setIsLoading(false);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert("File size exceeds 5MB limit");
                e.target.value = "";
                return;
            }
            if (!["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(file.type)) {
                alert("Only PDF, DOCX, and XLSX files are allowed");
                e.target.value = "";
                return;
            }
            setFormData((prev) => ({
                ...prev,
                documents: file,
            }));
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
                        Request a Custom Briefing
                        {/* Request a Custom Briefing - partnerships@ */}
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
                            placeholder="Role / Title*"
                            value={formData.role}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            id="topic"
                            name="topic"
                            placeholder="Topic or Scope of Briefing*"
                            value={formData.topic}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="text"
                            id="objectives"
                            name="objectives"
                            placeholder="Key Questions or Objectives*"
                            value={formData.objectives}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="date"
                            id="desiredDeliveryDate"
                            name="desiredDeliveryDate"
                            placeholder="Desired Delivery Date*"
                            value={formData.desiredDeliveryDate}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <div className="relative w-full">
                            <select
                                id="budgetRange"
                                name="budgetRange"
                                value={formData.budgetRange}
                                onChange={handleChange}
                                className="appearance-none border-1 border-[#85009D] text-[#363636] w-full p-4 bg-white cursor-pointer rounded-[2px]  focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            >
                                <option value="">Select Budget Range</option>
                                <option value="£1,000–£5,000">£1,000–£5,000</option>
                                <option value="£5,000–£10,000">£5,000–£10,000</option>
                                <option value="£10,000">£10,000</option>
                            </select>
                            <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-[#85009D]">
                                <IconComponent name="drop-down" color="#808080" size={16} />
                            </div>
                        </div>

                    </div>
                    <div>
                        <div
                            className="flex flex-col items-center bg-white border-1 border-[#85009D] p-5 rounded-[2px] cursor-pointer mb-2"
                            onClick={() => fileInputRef.current.click()}
                        >
                            <Image
                                src="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/download.png"
                                alt="upload documents"
                                width={128}
                                height={128}
                                className="w-[128px] h-[128px] object-cover mb-4"
                            />
                            <p className="text-[#1B1B1B] text-center">
                                <span className="font-semibold">Attach Supporting Documents</span> (PDF, DOCX, XLSX, Max 5MB)
                            </p>
                        </div>

                        {/* ✔ Confirmation line when file is selected */}
                        {formData.documents && (
                            <p className="text-green-600 text-sm mb-4 text-center">✔ File selected: {formData.documents.name}</p>
                        )}

                        <input
                            type="file"
                            id="documents"
                            name="documents"
                            accept=".pdf,.docx,.xlsx"
                            onChange={handleFileChange}
                            ref={fileInputRef}
                            className="hidden"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? "Submitting..." : "Request My Briefing"}
                        {!isLoading && (
                            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                        )}
                    </button>

                </form>
            </div>
        </div>
    );
}