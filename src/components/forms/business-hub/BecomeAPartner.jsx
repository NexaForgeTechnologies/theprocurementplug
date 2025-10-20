"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";
import toast from "react-hot-toast";

export default function BecomeAPartner({ isOpen, onClose, title }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        description: "",
        partnerTypes: [],
    });

    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const modalRef = useRef(null);
    const [otherSelected, setOtherSelected] = useState(false);
    const [otherValue, setOtherValue] = useState("");


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
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };


    if (!isOpen) return null;

    const inputFields = [
        {
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Full Name*",
        },
        {
            id: "email",
            name: "email",
            type: "email",
            placeholder: "Company Email",
        },
        {
            id: "phone",
            name: "phone",
            type: "tel",
            placeholder: "Phone",
        },
        {
            id: "company",
            name: "company",
            type: "text",
            placeholder: "Company Name",
        },
    ];

    const partnerTypes = [
        { value: "Events", label: "Events" },
        { value: "Consulting", label: "Consulting" },
        { value: "Venue", label: "Venue" },
        { value: "Protech", label: "Protech" },
        { value: "Legal Compliance", label: "Legal Compliance" },
        { value: "Social", label: "Social" },
        { value: "Other", label: "Other" },
    ];


    const toggleOption = (value) => {
        if (value === "Other") {
            setOtherSelected((prev) => {
                const newState = !prev;
                if (!newState) {
                    // If unchecking "Other", remove previous otherValue
                    setFormData((prevData) => ({
                        ...prevData,
                        partnerTypes: prevData.partnerTypes.filter(
                            (v) => v !== otherValue
                        ),
                    }));
                    setOtherValue("");
                }
                return newState;
            });
            return;
        }

        setFormData((prev) => {
            const isSelected = prev.partnerTypes.includes(value);
            return {
                ...prev,
                partnerTypes: isSelected
                    ? prev.partnerTypes.filter((v) => v !== value)
                    : [...prev.partnerTypes, value],
            };
        });
    };

    const handleOtherChange = (e) => {
        const newVal = e.target.value;
        setOtherValue(newVal);

        setFormData((prev) => {
            // Remove any existing "Other" value first
            const updated = prev.partnerTypes.filter(
                (v) => v !== otherValue
            );
            return {
                ...prev,
                partnerTypes: newVal ? [...updated, newVal] : updated,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("Form submitted:", formData);

        try {
            const res = await fetch("/api/partnerships/BecomeAPartner", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to submit form");

            toast.success("Form submitted successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                comapny: "",
                description: "",
                partnerTypes: [],
            });
            setOtherValue("");
            onClose();
        } catch (error) {
            console.error("Submission error:", error.message);
            toast.error("Submission failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-[964px] w-full max-h-[90vh] overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border-1 border-[#DBBB89] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                        {title || "Explore Partnership Opportunities"}
                    </h3>
                    <button
                        className="absolute top-4 right-4 text-2xl text-[#85009D] cursor-pointer"
                        onClick={onClose}
                    >
                        <IconComponent name="close" color="#7C7C7C" size={16} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {inputFields.map((field) => (
                            <input
                                key={field.id}
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={handleChange}
                                required
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        ))}
                    </div>
                    <div className="relative w-full">
                        <div
                            className="w-full p-4 text-[#010101] border border-[#85009D] rounded-[2px] bg-white cursor-pointer flex justify-between items-center"
                            onClick={() => setOpen((o) => !o)}
                        >
                            <span className="truncate">
                                {formData.partnerTypes.length > 0
                                    ? formData.partnerTypes.join(", ")
                                    : "Partnership types"}
                            </span>
                            <IconComponent name="drop-down" color="black" size={16} />
                        </div>

                        {open && (
                            <div className="absolute mt-1 w-full bg-white border border-[#85009D] rounded-[2px] shadow-lg z-10 max-h-60 overflow-auto text-[#010101]">
                                {partnerTypes.map((option) => (
                                    <div key={option.value}>
                                        {option.value === "Other" ? (
                                            <div
                                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => toggleOption(option.value)}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={otherSelected}
                                                    readOnly // prevent double toggle
                                                />
                                                <span>{option.label}</span>

                                                {otherSelected && (
                                                    <input
                                                        type="text"
                                                        value={otherValue}
                                                        onClick={(e) => e.stopPropagation()} // prevent toggling when typing
                                                        onChange={handleOtherChange}
                                                        placeholder="Please specify"
                                                        className="flex-1 p-2 border border-gray-300 rounded"
                                                    />
                                                )}
                                            </div>
                                        ) : (
                                            <label className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.partnerTypes.includes(option.value)}
                                                    onChange={() => toggleOption(option.value)}
                                                />
                                                <span>{option.label}</span>
                                            </label>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>

                    <textarea
                        id="description"
                        name="description"
                        placeholder="Description"
                        required
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
                        rows="4"
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`flex items-center justify-center md:justify-start cursor-pointer px-4 py-2 rounded-[6px] w-full md:w-auto transition-all duration-200 ${isLoading
                            ? "bg-[#b08d57]/70 cursor-not-allowed"
                            : "bg-[#b08d57] hover:bg-[#a07b45]"
                            } text-white`}
                    >
                        {isLoading ? (
                            <>
                                Submitting...
                                <div className="ml-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            </>
                        ) : (
                            <>
                                Submit
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
