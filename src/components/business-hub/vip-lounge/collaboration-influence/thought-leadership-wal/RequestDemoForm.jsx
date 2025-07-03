"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";
import Image from "next/image";

export default function RequestDemoForm({ isOpen, onClose }) {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChangedropdown = (e) => {
        setSelectedValue(e.target.value);
    };

    const [formData, setFormData] = useState({
        headline: "",
        summary: "",
        contentType: "",
        sponsor: false,
    });

    const modalRef = useRef(null);

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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({
            headline: "",
            summary: "",
            contentType: "",
            sponsor: false,
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-[964px] w-full max-h-[90vh]  overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border-1 border-[#DBBB89] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <form onSubmit={handleSubmit}>

                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                            Contributor Leaderboard
                        </h3>
                        <button
                            className="absolute top-4 right-4 text-2xl text-[#85009D]"
                            onClick={onClose}
                        >
                            <IconComponent name="close" color='#7C7C7C' size={16} />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <div className="flex flex-col items-center bg-white border-1 border-[#85009D] p-5 rounded-[2px] cursor-pointer mb-4"
                                onClick={() => document.getElementById('fileInput').click()}
                            >
                                <Image
                                    src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/download.png"}
                                    alt={`download`}
                                    width={128}
                                    height={128}
                                    className="w-[128px] h-[128px] object-cover mb-4"
                                />
                                <p className="text-[#1B1B1B] text-center"><span className="font-semibold">Upload content</span> (PDF, video link, text, visual)</p>
                                {/* Hidden file input */}
                                <input
                                    id="fileInput"
                                    type="file"
                                    accept=".pdf,.txt,image/*,.mp4,.mov"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            console.log("Selected file:", file.name); // Replace with your file upload logic
                                        }
                                    }}
                                />
                            </div>
                            <div className="flex flex-col gap-4 mb-4 md:mb-0">
                                <input
                                    required
                                    type="text"
                                    name="headline"
                                    value={formData.headline}
                                    onChange={handleChange}
                                    placeholder="Enter Headline"
                                    className="w-full border-1 text-[#363636] border-[#85009D] bg-[#ffff] py-3  px-4 rounded-[2px] focus:outline-none focus:border-[#85009D]"
                                />
                                <div className="relative w-full">
                                    <select
                                        id="content-type"
                                        value={selectedValue}
                                        onChange={handleChangedropdown}
                                        className="appearance-none border border-[#85009D] text-[#363636] py-3 px-4 bg-white cursor-pointer rounded-[2px] w-full focus:outline-none focus:border-[#85009D]"
                                    >
                                        <option value="" disabled>
                                            Category tag
                                        </option>
                                        <option value="Technology">Technology</option>
                                        <option value="Business">Business</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Design">Design</option>
                                    </select>
                                    <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-[#85009D]">
                                        <IconComponent name="drop-down" color="#808080" size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className="flex flex-col items-center bg-white border-1 border-[#85009D] p-5 rounded-[2px] cursor-pointer mb-4"
                                onClick={() => document.getElementById('fileInput').click()}
                            >
                                <Image
                                    src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/download.png"}
                                    alt="upload banner"
                                    width={128}
                                    height={128}
                                    className="w-[128px] h-[128px] object-cover mb-4"
                                />
                                <p className="text-[#1B1B1B] text-center">
                                    <span className="font-semibold">Banner Image</span> (Image Size 1440px × 440px)
                                </p>
                                <input
                                    id="fileInput"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            if (!file.type.startsWith('image/')) {
                                                alert('Please select a valid image file.');
                                                return;
                                            }

                                            const img = new Image();
                                            img.src = URL.createObjectURL(file);
                                            img.onload = () => {
                                                if (img.width !== 1440 || img.height !== 440) {
                                                    alert('Please upload an image with dimensions 1440px × 440px.');
                                                    return;
                                                }

                                                console.log('Uploading image:', {
                                                    name: file.name,
                                                    size: file.size,
                                                    type: file.type,
                                                    dimensions: `${img.width}×${img.height}`
                                                });

                                                const formData = new FormData();
                                                formData.append('bannerImage', file);
                                                URL.revokeObjectURL(img.src);
                                            };
                                        }
                                    }}
                                />
                            </div>
                            <div className="flex flex-col gap-4 mb-4 md:mb-0">
                                <input
                                    required
                                    type="text"
                                    name="summary"
                                    value={formData.summary}
                                    onChange={handleChange}
                                    placeholder="Enter Summary"
                                    className="w-full border-1 text-[#363636] border-[#85009D] bg-[#ffff] py-3  px-4 rounded-[2px] focus:outline-none focus:border-[#85009D]"
                                />
                                <input
                                    required
                                    type="text"
                                    name="contentType"
                                    value={formData.contentType}
                                    onChange={handleChange}
                                    placeholder="Content Type"
                                    className="w-full border-1 text-[#363636] border-[#85009D] bg-[#ffff] py-3  px-4 rounded-[2px] focus:outline-none focus:border-[#85009D]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-2 mb-4">
                        <input
                            required
                            type="checkbox"
                            name="sponsor"
                            checked={formData.sponsor}
                            onChange={handleChange}
                            className="border text-[#363636] border-[#e0e0e0] bg-[#ffff] p-2 rounded-md mt-[7px]"
                        />
                        <p className="text-[#1B1B1B] text-[16px] md:text-[20px]">Sponsor your submission for greater visibility</p>
                    </div>
                    <button
                        type="submit"
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        Submit
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </form>
                {/* </div> */}
            </div>
        </div>
    );
}