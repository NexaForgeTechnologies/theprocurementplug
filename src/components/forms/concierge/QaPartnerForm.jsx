"use client";

import { useState, useRef } from "react";
import Image from "next/image";

import IconComponent from "@/components/icon/Icon";
import SuccessPopup from "@/components/SuccessMessageComp";

export default function PersonalDetailForm({ isOpen, onClose }) {
    const modalRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    // Experience dropdown data
    const experienceOptions = [
        { value: "Years of Procurement Experience", label: "Years of Procurement Experience" },
        { value: "12–15", label: "12–15" },
        { value: "15–20", label: "15–20" },
        { value: "20+", label: "20+" },
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

        // cv upload
        cv: "",

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

    // Success Popup
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

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

    // ✅ State to hold selected file name
    const [selectedFileName, setSelectedFileName] = useState("");

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
                            placeholder="Email Address"
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
                            placeholder="LinkedIn Profile URL"
                            value={formData.linkedin}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Location / Time Zone"
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

                    {/* CV Upload */}
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D] mb-4">
                        Upload
                    </h3>
                    <div
                        className="flex flex-col items-center bg-white border border-[#85009D] p-5 rounded-[2px] cursor-pointer mb-4 relative"
                        onClick={() => {
                            if (!selectedFileName) {
                                document.getElementById("fileInput").click();
                            }
                        }}
                    >
                        <Image
                            src="/images/concierge/upload-banner.png"
                            alt="upload banner"
                            width={128}
                            height={128}
                            className="w-[128px] h-[128px] object-cover mb-4"
                        />

                        {/* ✅ If file selected, show name + remove button */}
                        {selectedFileName ? (
                            <div className="flex items-center gap-2">
                                <p className="text-[#1B1B1B] text-center font-medium">{selectedFileName}</p>
                                <button
                                    type="button"
                                    className="text-red-500 text-sm font-bold"
                                    onClick={(e) => {
                                        e.stopPropagation(); // prevent triggering fileInput
                                        setSelectedFileName("");
                                        setFormData((prev) => ({ ...prev, cv: "" }));
                                        document.getElementById("fileInput").value = ""; // reset input
                                    }}
                                >
                                    ❌
                                </button>
                            </div>
                        ) : (
                            <p className="text-[#1B1B1B] text-center">
                                <span className="font-semibold">Upload your CV</span> (PDF or DOC)
                                <br />
                                <span className="text-sm text-gray-500">(File upload, optional)</span>
                            </p>
                        )}

                        <input
                            id="fileInput"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const validTypes = [
                                        "application/pdf",
                                        "application/msword",
                                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                    ];
                                    if (!validTypes.includes(file.type)) {
                                        alert("Please upload a valid PDF or Word document (.pdf, .doc, .docx).");
                                        return;
                                    }

                                    setSelectedFileName(file.name); // ✅ show file name

                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setFormData((prev) => ({ ...prev, cv: reader.result }));
                                    };
                                    reader.readAsDataURL(file); // convert to Base64
                                }
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        {isLoading ? "Submitting..." : "Submit"}
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </form>
            </div>

            {/* ✅ Success Popup */}
            <SuccessPopup
                isOpen={showSuccessPopup}
                title="Thank you!"
                message="Thanks for applying to join The Plug Concierge. Our team will review your profile and contact you soon with the next steps."
            />
        </div>
    );
}
