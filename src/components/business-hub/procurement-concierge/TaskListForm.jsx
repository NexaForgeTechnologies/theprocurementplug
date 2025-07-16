"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";

export default function TaskListForm({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        interest: "",
    });

    const modalRef = useRef(null);
    const [alert, setAlert] = useState({ message: "", type: "", show: false });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";

            // Prevent touchmove on background, allow in modal
            const preventTouch = (e) => {
                if (!modalRef.current) return;
                const isInsideModal = modalRef.current.contains(e.target);
                if (!isInsideModal) {
                    e.preventDefault();
                    return;
                }
                // Allow scrolling within modal if it has scrollable content
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
                // Restore scroll position and remove styles
                const top = parseInt(document.body.style.top || "0", 10);
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                window.scrollTo(0, -top);
                document.removeEventListener("touchmove", preventTouch);
            };
        }
    }, [isOpen]);
    // 
    useEffect(() => {
        if (alert.show) {
            const timer = setTimeout(() => {
                setAlert({ message: "", type: "", show: false });
                if (alert.type === "success") {
                    onClose();
                }
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [alert.show, onClose]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setAlert({ message: "", type: "", show: false });

        // Client-side validation
        if (!formData.name || !formData.company || !formData.email || !formData.interest) {
            setAlert({
                message: "Please fill out all required fields (Name, Company, Email, Interest).",
                type: "error",
                show: true,
            });
            setIsLoading(false);
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setAlert({
                message: "Please enter a valid email address.",
                type: "error",
                show: true,
            });
            setIsLoading(false);
            return;
        }

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            const response = await fetch("/api/task-list-download", {
                method: "POST",
                body: formDataToSend,
            });

            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Server returned non-JSON response");
            }

            const result = await response.json();

            if (response.ok && result.success) {
                console.log("Server returned:", result.data);
                setAlert({
                    message:
                        'Your download is ready! Thanks for requesting our Task List. Check your inbox in a moment for the download link—and feel free to explore our Resource Center for more guides.',
                    type: "success",
                    show: true,
                });
                setFormData({ name: "", company: "", email: "", interest: "" });
            } else {
                setAlert({
                    message: result.error || "Failed to submit form. Please try again.",
                    type: "error",
                    show: true,
                });
            }
        } catch (error) {
            console.error("Client error:", error);
            setAlert({
                message: "An error occurred while submitting your form. Please try again later.",
                type: "error",
                show: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleCloseAlert = () => {
        setAlert({ message: "", type: "", show: false });
    };

    if (!isOpen) return null;

    const interestOptions = [
        { value: "", label: "Main interest in The Procurement Plug Concierge" },
        { value: "consulting", label: "Consulting Services" },
        { value: "procurement", label: "Procurement Solutions" },
        { value: "training", label: "Training Programs" },
        { value: "other", label: "Other" },
    ];

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-[964px] w-full max-h-[90vh]  overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border-1 border-[#DBBB89] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D]">
                        Task List Download Form
                    </h3>
                    <button
                        className="absolute top-4 right-4 text-2xl text-[#85009D]"
                        onClick={onClose}
                    >
                        <IconComponent name="close" color='#7C7C7C' size={16} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Work email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                    />
                    <div className="relative">
                        <select
                            id="interest"
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] appearance-none"
                        >
                            {interestOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
                            <IconComponent name="drop-down" color="#808080" size={16} />
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        {isLoading ? "Submitting..." : "Download"}
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                    {alert.show && (
                        <div
                            className={`w-full p-3 rounded-md flex justify-between items-center ${alert.type === "success" ? "bg-[#85009D] text-white" : "bg-red-900/50 text-red-400"
                                } mt-4`}
                            role="alert"
                            aria-live="polite"
                        >
                            <span dangerouslySetInnerHTML={{ __html: alert.message }} />
                            <button
                                onClick={handleCloseAlert}
                                className="text-white hover:text-gray-300 focus:outline-none"
                            >
                                ✕
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}