"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function RequestDemoForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    website: "",
    package: "",
    title: "",
    description: "",
    targetAudience: "",
    date: "",
    bannerImage: null,
    logoImage: null,
    payment: "",
    already_partner: 0,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              id="heading"
              name="heading"
              placeholder="Heading"
              value={formData.heading}
              onChange={handleChange}
              required
              className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
            />

            <input
              type="text"
              id="heading"
              name="heading"
              placeholder="Heading"
              value={formData.heading}
              onChange={handleChange}
              required
              className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
            />

            <textarea
              id="message"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="col-span-2 w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
              rows="4"
            />

            <input
              type="text"
              id="company"
              name="companyName"
              placeholder="Company Name*"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
            />
            <input
              type="text"
              id="company"
              name="companyName"
              placeholder="Company Name*"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
            />

            <input
              type="text"
              id="company"
              name="companyName"
              placeholder="Company Name*"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
            />

            <div
              className="flex flex-col items-center bg-white border-1 border-[#85009D] p-5 rounded-[2px] cursor-pointer"
              onClick={() => document.getElementById("bannerInput").click()}
            >
              <Image
                src="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/download.png"
                alt="upload banner"
                width={128}
                height={128}
                className="w-[128px] h-[128px] object-cover mb-4"
              />
              <p className="text-[#1B1B1B] text-center">
                <span className="font-semibold">Banner Image</span> (file,
                1440×440 px, JPG/PNG)
              </p>
              {formData.bannerImage && (
                <p className="text-sm text-gray-600 mt-2">
                  {formData.bannerImage.name}
                </p>
              )}
              <input
                id="bannerInput"
                type="file"
                accept="image/jpeg,image/png"
                className="hidden"
                onChange={(e) => handleFileChange(e, "bannerImage")}
              />
            </div>
            <div
              className="flex flex-col items-center bg-white border-1 border-[#85009D] p-5 rounded-[2px] cursor-pointer"
              onClick={() => document.getElementById("logoInput").click()}
            >
              <Image
                src="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/download.png"
                alt="upload logo"
                width={128}
                height={128}
                className="w-[128px] h-[128px] object-cover mb-4"
              />
              <p className="text-[#1B1B1B] text-center">
                <span className="font-semibold">Logo Upload</span> (file, max
                300×100 px, PNG/SVG)
              </p>
              {formData.logoImage && (
                <p className="text-sm text-gray-600 mt-2">
                  {formData.logoImage.name}
                </p>
              )}
              <input
                id="logoInput"
                type="file"
                accept="image/png,image/svg+xml"
                className="hidden"
                onChange={(e) => handleFileChange(e, "logoImage")}
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center md:justify-start cursor-pointer text-[14px] md:text-[16px] bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
