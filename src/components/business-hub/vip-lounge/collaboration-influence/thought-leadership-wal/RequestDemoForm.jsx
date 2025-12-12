"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function RequestDemoForm({ isOpen, onClose }) {
  const [bannerPreview, setBannerPreview] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(bannerPreview, logoPreview);

  const [formData, setFormData] = useState({
    heading: "",
    categoryType: "",
    description: "",
    contentType: "",
    bannerImage: null,
    logoImage: null,
    sponsorship: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    const validTypes =
      field === "bannerImage"
        ? ["image/jpeg", "image/png"]
        : ["image/png", "image/svg+xml"];
    if (!validTypes.includes(file.type)) {
      alert(
        `Please select a valid ${field === "bannerImage" ? "JPG or PNG" : "PNG or SVG"
        } image file.`
      );
      return;
    }

    // Update formData and preview URL
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));
    const newPreview = URL.createObjectURL(file);
    if (field === "bannerImage") {
      setBannerPreview((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return newPreview;
      });
    } else {
      setLogoPreview((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return newPreview;
      });
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/thought-leadership/create-checkout",
        formData,
        {
          headers: {
            "Content-Type": "form-data",
          },
        }
      );

      if (response.data.url) {
        window.location.href = response.data.url;
      } else {
        throw new Error("No checkout URL returned from server.");
      }

    } catch (error) {
      console.error("Frontend error:", error);

      const resData = error.response?.data;

      if (Array.isArray(resData?.details)) {
        // Validation errors → only messages
        setError(resData.details.map((err) => err.message));
      } else {
        // General error → single string
        setError(
          resData?.details ||
          resData?.error ||
          "Failed to initiate checkout. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-200 flex items-center justify-center px-6">
      <div
        ref={modalRef}
        className="max-w-[964px] w-full max-h-[90vh]  overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border border-[#DBBB89] custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-4">
          <div className="cursor-pointer bg-red-300 rounded-full w-10 h-10 flex items-center justify-center"
            onClick={onClose}>
            X
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid grid-cols-2 gap-4">
            {/* Heading & Category */}
            <input
              type="text"
              id="heading"
              name="heading"
              placeholder="Heading"
              value={formData.heading}
              onChange={handleChange}
              required
              className="col-span-2 sm:col-span-1 p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
            />
            <select
              id="categoryType"
              name="categoryType"
              value={formData.categoryType}
              onChange={handleChange}
              required
              className="col-span-2 sm:col-span-1 p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
            >
              <option value="">Select Category Type</option>
              <option value="Strategic Sourcing">Strategic Sourcing</option>
              <option value="Automation & AI">Automation & AI</option>
              <option value="ESG & Social Value">ESG & Social Value</option>
              <option value="Cross-Industry Insights">Cross-Industry Insights</option>
              <option value="Career & Personal Growth">Career & Personal Growth</option>
              <option value="Boardroom Readiness">Boardroom Readiness</option>
            </select>

            {/* Description */}
            <textarea
              id="message"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="col-span-2 w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
              rows="4"
            />

            {/* Content Type */}
            <select
              id="contentType"
              name="contentType"
              value={formData.contentType}
              onChange={handleChange}
              required
              className="col-span-2 w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
            >
              <option value="">Select Content Type</option>
              <option value="Article">Article</option>
              <option value="Video">Video</option>
              <option value="Infographic">Infographic</option>
            </select>

            {/* Banner & Logo */}
            <div
              className="col-span-2 sm:col-span-1 flex flex-col items-center bg-white border border-[#85009D] p-5 rounded-xs cursor-pointer"
              onClick={() => document.getElementById("bannerInput").click()}
            >
              <Image
                src="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/download.png"
                alt="upload banner"
                width={128}
                height={128}
                className="w-32 h-32 object-cover mb-4"
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
              className="col-span-2 sm:col-span-1 flex flex-col items-center bg-white border border-[#85009D] p-5 rounded-xs cursor-pointer"
              onClick={() => document.getElementById("logoInput").click()}
            >
              <Image
                src="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/download.png"
                alt="upload logo"
                width={128}
                height={128}
                className="w-32 h-32 object-cover mb-4"
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

            {/* Sponsorship */}
            <div className="flex items-center gap-2 col-span-2 text-[#010101]">
              <label className="font-bold text-xl cursor-pointer" htmlFor="sponsorship">Sponsership</label>
              <input
                type="checkbox"
                id="sponsorship"
                name="sponsorship"
                value={formData.sponsorship}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center md:justify-start cursor-pointer text-[14px] md:text-[16px] bg-[#b08d57] text-white px-4 py-2 rounded-md w-full md:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
