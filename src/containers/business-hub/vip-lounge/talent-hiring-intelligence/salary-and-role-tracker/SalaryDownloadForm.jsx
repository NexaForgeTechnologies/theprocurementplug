"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";
import toast from "react-hot-toast";

export default function SalaryDownloadForm({ isOpen, onClose, tile }) {

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        role: "",
        SelectedTile: tile,
    });

    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            SelectedTile: tile
        }));
    }, [tile]);


    const [isSubmitting, setIsSubmitting] = useState(false); // <-- submitting state

    const modalRef = useRef(null);

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
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ Clone and clean tile just before submit
        const cleanedTile = { ...formData.SelectedTile };
        delete cleanedTile.para;

        const dataToSend = {
            ...formData,
            SelectedTile: cleanedTile,
        };
        console.log("FormData DataTosend : ", dataToSend );

        try {
            setIsSubmitting(true);

            const res = await fetch(
                "/api/business-hub/vip-lounge/talent-hiring-intelligence/salary-download-form",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dataToSend),
                }
            );

            if (!res.ok) {
                const errorData = await res.json();
                toast.error(errorData.message || "Failed to submit form.");
                return;
            }

            toast.success("Form Submitted Successfully");

            setFormData({
                name: "",
                company: "",
                email: "",
                phone: "",
                role: "",
                SelectedTile: {},
            });

            onClose();
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An error occurred while submitting the form.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    const fields = [
        { name: "name", placeholder: "Full Name*", type: "text", group: 1 },
        { name: "company", placeholder: "Company", type: "text", group: 1 },
        { name: "role", placeholder: "Role", type: "text", group: 2 },
        { name: "email", placeholder: "Work email*", type: "email", group: 2 },
        { name: "phone", placeholder: "Phone", type: "tel", group: 3 },
    ];

    const groupedFields = fields.reduce((acc, field) => {
        acc[field.group] = acc[field.group] || [];
        acc[field.group].push(field);
        return acc;
    }, {});

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-[964px] w-full max-h-[90vh]  overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border-1 border-[#DBBB89] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                        Download Form
                    </h3>
                    <button
                        className="absolute top-4 right-4 text-2xl text-[#85009D]"
                        onClick={onClose}
                        disabled={isSubmitting} // optional disable close during submit
                    >
                        <IconComponent name="close" color="#7C7C7C" size={16} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {Object.values(groupedFields).map((group, idx) => (
                        <div
                            key={idx}
                            className={`grid grid-cols-1 md:grid-cols-${group.length} gap-4`}
                        >
                            {group.map(({ name, placeholder, type }) => (
                                <input
                                    key={name}
                                    type={type}
                                    id={name}
                                    name={name}
                                    placeholder={placeholder}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                                    disabled={isSubmitting} // disable input during submit
                                />
                            ))}
                        </div>
                    ))}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                        {!isSubmitting && (
                            <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
