"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";
import Image from "next/image";
import toast from "react-hot-toast";

export default function JobApplicationForm({ isOpen, onClose, JobData }) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        companyRole: "",
        cv: null,
    });

    const modalRef = useRef(null);
    const fileInputRef = useRef(null);

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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

        // Check required fields
        if (!formData.fullName || !formData.email || !formData.phone) {
            alert("Please fill out all required fields.");
            return;
        }

        setIsLoading(true);
        try {
            const formDataObj = new FormData();
            for (const key in formData) {
                if (formData[key]) formDataObj.append(key, formData[key]);
            }

            // Example POST (uncomment when API ready)
            // const res = await fetch("/api/apply", {
            //     method: "POST",
            //     body: formDataObj,
            // });
            // if (!res.ok) throw new Error("Failed to submit");

            toast.success("Form submitted successfully!");
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                companyRole: "",
                cv: null,
            });
            if (fileInputRef.current) fileInputRef.current.value = "";
            onClose();
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while submitting.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-[964px] w-full max-h-[90vh] overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border-1 border-[#DBBB89] hide-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="flex flex-col gap-y-3 mb-4">
                    <h3 className="font-semibold text-xl md:text-2xl lg:text-2xl text-[#1B1B1B]">
                        Job Title:  {JobData.jobTitle}</h3>
                    <h2>
                        <span className="font-medium ">Employer : </span>
                        {JobData.Employer}
                    </h2>
                    <h2>
                        <span className="font-medium ">JobType : </span>
                        {JobData.JobType}
                    </h2>
                    <h2>
                        <span className="font-medium ">Description : </span>
                        {JobData.Description}
                    </h2>
                    <hr className="mt-2" />
                    <button className="absolute top-4 right-4" onClick={onClose}>
                        <IconComponent name="close" color="#7C7C7C" size={16} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="font-semibold text-xl md:text-2xl lg:text-2xl text-[#1B1B1B]">
                        Application Form
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { label: "Full Name", name: "fullName", type: "text", placeholder: "Full Name*", required: true },
                            { label: "Email Address", name: "email", type: "email", placeholder: "Email Address*", required: true },
                            { label: "Phone", name: "phone", type: "tel", placeholder: "Phone*", required: true },
                            { label: "Current/Last Role & Company (optional)", name: "companyRole", type: "text", placeholder: "Current/Last Role & Company (optional)", required: false },
                        ].map(({ label, name, type, placeholder, required }) => (
                            <label key={name} className="flex flex-col gap-2">
                                <h2 className="font-medium ">{label}</h2>
                                <input
                                    type={type}
                                    name={name}
                                    placeholder={placeholder}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    required={required}
                                    className="w-full p-4 border border-[#85009D] rounded-[2px] bg-white"
                                />
                            </label>
                        ))}
                    </div>

                    <div>
                        <h2 className="font-medium mb-2">Upload file Resume(optional) </h2>
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

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`flex items-center justify-center bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {isLoading ? "Submitting..." : "Submit Application"}
                        {!isLoading && (
                            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                        )}
                    </button>
                </form>

            </div>
        </div>
    );
}
