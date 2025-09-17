"use client";

import { useState, useRef } from "react";

import IconComponent from "@/components/icon/Icon";
import SuccessPopup from "@/components/SuccessMessageComp";

export default function ExpertForm({ isOpen, onClose }) {
    const modalRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    // Form data
    const initialFormData = {
        name: "",
        company: "",
        email: "",
        interest: [],
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

    // Success Popup
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    // submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/concierge/register-interest", {
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
                className="max-w-[1140px] w-full max-h-[90vh] overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border border-[#DBBB89] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D]">
                        We’re Deploying Our Experts!
                    </h3>
                    <button
                        className="absolute top-4 right-4 text-2xl text-[#85009D]"
                        onClick={onClose}
                    >
                        <IconComponent name="close" color="#7C7C7C" size={16} />
                    </button>
                </div>

                <p className="md:max-w-[910px] md:text-xl text-[#1B1B1B] mb-4">
                    Thank you for your interest in The Procurement Plug Concierge. Our expert procurement
                    support team will be available very soon. Register your interest below to be the first to know
                    when we launch fully.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                    />

                    <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                    />

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Work email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
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

                    <div className="flex items-start gap-2">
                        <input
                            type="checkbox"
                            id="subscribe"
                            name="subscribe"
                            checked={formData.subscribe}
                            onChange={handleChange}
                            required
                            className="p-2 border border-[#85009D] rounded focus:outline-none mt-[8px]"
                        />
                        <label
                            htmlFor="subscribe"
                            className="block md:text-[20px] text-[#1B1B1B] font-medium"
                        >
                            I’d like to receive early access updates and pilot invitations
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {isLoading ? "Submitting..." : "Register My Interest"}
                        {!isLoading && (
                            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                        )}
                    </button>
                </form>

                {/* ✅ Success Popup */}
                <SuccessPopup
                    isOpen={showSuccessPopup}
                    title="Thank you!"
                    message="We will be in touch shortly. In the meantime, feel free to connect with us."
                />
            </div>
        </div>
    );
}
