"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";
import SuccessPopup from "@/components/SuccessMessageComp";
import Image from "next/image";

export default function BookIntroCall({ isOpen, onClose }) {
    const modalRef = useRef(null);
    const fileInputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        topic: "",
        message: "",
        date: "",
        timeFrom: "",
        timeTo: "",
        cv: null,
    });
    const [selectedFileName, setSelectedFileName] = useState("");
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    // Prevent background scroll when modal open
    useEffect(() => {
        if (!isOpen) return;
        const scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";

        return () => {
            const top = parseInt(document.body.style.top || "0", 10);
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            window.scrollTo(0, -top);
        };
    }, [isOpen]);

    const topicOptions = [
        { value: "", label: "Select a topic" },
        { value: "procurement", label: "Procurement" },
        { value: "finance", label: "Finance" },
        { value: "strategy", label: "Strategy" },
        { value: "other", label: "Other" },
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "cv") {
            setFormData((prev) => ({ ...prev, cv: files[0] }));
            setSelectedFileName(files[0]?.name || "");
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            alert("File size exceeds 5MB limit");
            e.target.value = "";
            return;
        }

        if (!["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
            alert("Only PDF and DOCX files are allowed");
            e.target.value = "";
            return;
        }

        setFormData((prev) => ({ ...prev, cv: file }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(formData);

        const data = new FormData();
        data.append("topic", formData.topic);
        data.append("message", formData.message);
        data.append("date", formData.date);
        data.append("timeFrom", formData.timeFrom);
        data.append("timeTo", formData.timeTo);

        if (formData.cv) {
            data.append("cv", formData.cv); // append the file
        }

        try {
            const res = await fetch("/api/personal-development-hub/mentors-and-coaches/book-intro-call-form", {
                method: "POST",
                body: data, // send FormData
            });

            const result = await res.json();
            if (res.ok) {
                console.log("Success:", result);
                if (res.ok) {
                    console.log("Success:", result);

                    setFormData({
                        topic: "",
                        message: "",
                        date: "",
                        timeFrom: "",
                        timeTo: "",
                        cv: null,
                    });

                    setShowSuccessPopup(true);

                    setTimeout(() => {
                        setShowSuccessPopup(false);
                        onClose();
                    }, 5000);
                }

            } else {
                console.error("Error:", result);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-[1134px] w-full max-h-[90vh] overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border-1 border-[#DBBB89] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h1 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                        Get in touch with Jennifer to schedule an initial consultation call</h1>
                    <button className="absolute top-4 right-4 text-2xl text-[#85009D]" onClick={onClose}>
                        <IconComponent name="close" color="#7C7C7C" size={16} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Topic Dropdown */}
                    <h2 className="font-semibold text-base md:text-lg text-[#1B1B1B] mt-2 mb-3">Topic of support </h2>
                    <select
                        name="topic"
                        value={formData.topic}
                        required
                        onChange={handleChange}
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] appearance-none"
                    >
                        {topicOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>

                    {/* Message */}
                    <h2 className="font-semibold text-base md:text-lg text-[#1B1B1B] mt-2 mb-3">Message </h2>
                    <textarea
                        name="message"
                        value={formData.message}
                        required
                        onChange={handleChange}
                        placeholder="Briefly describe your support request"
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        rows={4}
                    />

                    {/* Availability */}
                    <h2 className="font-semibold text-base md:text-lg text-[#1B1B1B] mt-2 mb-3">Availability</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Date */}
                        <div className="flex flex-col">
                            <label htmlFor="date" className="mb-1 text-gray-600">Select Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                required
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>

                        {/* Time From */}
                        <div className="flex flex-col">
                            <label htmlFor="timeFrom" className="mb-1 text-gray-600">From</label>
                            <input
                                type="time"
                                id="timeFrom"
                                name="timeFrom"
                                required
                                value={formData.timeFrom}
                                onChange={handleChange}
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>

                        {/* Time To */}
                        <div className="flex flex-col">
                            <label htmlFor="timeTo" className="mb-1 text-gray-600">To</label>
                            <input
                                type="time"
                                id="timeTo"
                                name="timeTo"
                                required
                                value={formData.timeTo}
                                onChange={handleChange}
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>
                    </div>

                    {/* Upload CV */}
                    <div>
                        <h2 className="font-semibold text-base md:text-lg text-[#1B1B1B] mt-2 mb-3">Upload file Resume(optional) </h2>
                        <label
                            className="flex flex-col items-center bg-white border border-[#85009D] p-5 rounded-[2px] cursor-pointer mb-2"
                            onClick={() => fileInputRef.current.click()}
                        >

                            <Image
                                src="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/download.png"
                                alt="upload resume"
                                width={128}
                                height={128}
                                className="w-[128px] h-[128px] object-cover mb-4"
                            />
                            <p className="text-[#1B1B1B] text-center">
                                <span className="font-semibold">Upload Resume</span> (PDF, DOCX, Max 5MB)
                            </p>
                        </label>

                        {formData.cv && (
                            <p className="text-green-600 text-sm mb-4 text-center">
                                ✔ File selected: {formData.cv.name}
                            </p>
                        )}

                        <input
                            type="file"
                            name="cv"
                            accept=".pdf,.docx"
                            onChange={handleFileChange}
                            ref={fileInputRef}
                            className="hidden"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto"
                    >
                        {isLoading ? "Submitting..." : "Submit Request"}
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </form>
            </div>

            <SuccessPopup
                isOpen={showSuccessPopup}
                title="Thank you!"
                message="Your support request has been submitted successfully. We'll get back to you soon."
            />
        </div>
    );
}
