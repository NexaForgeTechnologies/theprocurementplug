"use client";

import { useState, useRef } from "react";

import IconComponent from "@/components/icon/Icon";
import SuccessPopup from "@/components/SuccessMessageComp";

export default function TaskListForm({ isOpen, onClose }) {
    const modalRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    // Form data
    const initialFormData = {
        name: "",
        company: "",
        email: "",
        interest: [],
    };
    const [formData, setFormData] = useState(initialFormData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Success Popup
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    // Submit Form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!formData.name || !formData.company || !formData.email || formData.interest.length === 0) {
            alert("Please fill out all required fields.");
            setIsLoading(false);
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            alert("Please enter a valid email address.");
            setIsLoading(false);
            return;
        }

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, Array.isArray(value) ? value.join(", ") : value);
            });

            const response = await fetch("/api/concierge/task-list-request", {
                method: "POST",
                body: formDataToSend,
            });

            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Server returned non-JSON response");
            }

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
                alert(result.error || "Failed to submit form.");
            }
        } catch (error) {
            console.error("Client error:", error);
            alert("An error occurred while submitting your form.");
        } finally {
            setIsLoading(false);
        }
    };

    // Interest Options
    const interestOptions = [
        { value: "Concierge + Services", label: "Concierge + Services" },
        { value: "Fractional Experts", label: "Fractional Experts" },
        { value: "Fractional CPO", label: "Fractional CPO" },
        { value: "Advisory Services", label: "Advisory Services" },
    ];
    const [open, setOpen] = useState(false);
    const toggleOption = (value) => {
        setFormData((prev) => ({
            ...prev,
            interest: prev.interest.includes(value)
                ? prev.interest.filter((v) => v !== value)
                : [...prev.interest, value],
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-[964px] w-full max-h-[90vh] overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border border-[#DBBB89] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D]">
                        Download Full Task List
                    </h3>
                    <button
                        className="absolute top-4 right-4 text-2xl text-[#85009D]"
                        onClick={onClose}
                    >
                        <IconComponent name="close" color="#7C7C7C" size={16} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border border-[#85009D] rounded-[2px] bg-white"
                    />

                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border border-[#85009D] rounded-[2px] bg-white"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Work email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border border-[#85009D] rounded-[2px] bg-white"
                    />

                    <div className="relative w-full">
                        <div
                            className="w-full p-4 text-[#010101] border border-[#85009D] rounded-[2px] bg-white cursor-pointer flex justify-between items-center"
                            onClick={() => setOpen((o) => !o)}
                        >
                            <span className="truncate">
                                {formData.interest.length > 0
                                    ? formData.interest.join(", ")
                                    : "Main interest in The Procurement Plug Concierge"}
                            </span>
                            <IconComponent name="drop-down" color="black" size={16} />
                        </div>

                        {open && (
                            <div className="absolute mt-1 w-full bg-white border border-[#85009D] rounded-[2px] shadow-lg z-10 max-h-60 overflow-auto text-[#010101]">
                                {interestOptions.map((option) => (
                                    <label
                                        key={option.value}
                                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={formData.interest.includes(option.value)}
                                            onChange={() => toggleOption(option.value)}
                                        />
                                        <span>{option.label}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center justify-center bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto cursor-pointer"
                    >
                        {isLoading ? "Downloading..." : "Download Now"}
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </form>

                {/* ✅ Success Popup */}
                <SuccessPopup
                    isOpen={showSuccessPopup}
                    title="Thank you!"
                    message="Your download is ready! Thanks for requesting our Task List. Check your inbox in a moment for the download link."
                />
            </div>
        </div>
    );
}
