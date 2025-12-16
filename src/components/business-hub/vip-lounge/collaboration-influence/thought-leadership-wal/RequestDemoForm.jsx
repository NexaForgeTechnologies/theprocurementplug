"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";

import RectangularImgUploader from "@/components/img-uploader/RectangularImgUploaderComp";
import SuccessPopup from "@/components/SuccessMessageComp";

export default function RequestDemoForm({ isOpen, onClose }) {
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [selectedLogo, setSelectedLogo] = useState(null);

  const [showSuccess, setShowSuccess] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    heading: "",
    categoryType: "",
    description: "",
    contentType: "",
    contentUrl: "",
    bannerImage: "",
    logoImage: "",
    sponsorship: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    let bannerUrl = formData.bannerImage;
    let logoUrl = formData.logoImage;

    try {
      // Upload banner
      if (selectedBanner) {
        const bannerFormData = new FormData();
        bannerFormData.append("file", selectedBanner);

        const res = await fetch("/api/img-uploads", {
          method: "POST",
          body: bannerFormData,
        });

        if (!res.ok) throw new Error("Banner upload failed");
        const data = await res.json();
        bannerUrl = data.url;
      }

      // Upload logo
      if (selectedLogo) {
        const logoFormData = new FormData();
        logoFormData.append("file", selectedLogo);

        const res = await fetch("/api/img-uploads", {
          method: "POST",
          body: logoFormData,
        });

        if (!res.ok) throw new Error("Logo upload failed");
        const data = await res.json();
        logoUrl = data.url;
      }

      const newFormData = {
        ...formData,
        bannerImage: bannerUrl,
        logoImage: logoUrl,
      };

      const response = await axios.post(
        "/api/thought-leadership/create-checkout",
        newFormData
      );

      // FLOW CONTROL
      if (response.data.url) {
        // Sponsored → Stripe
        window.location.href = response.data.url;
        return;
      }

      // Non-sponsored → success popup
      setShowSuccess(true);

    } catch (err) {
      console.error("Frontend error:", err);
      setError(
        err.response?.data?.error ||
        "Failed to submit. Please try again."
      );
    } finally {
      setLoading(false);
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

  useEffect(() => {
    if (showSuccess) {
      const t = setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [showSuccess]);

  if (!isOpen) return null;

  return (
    <>
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

            {/* Error Message */}
            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-md text-center mb-2">
                {error}
              </div>
            )}

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

              {/* Content Type & Content Url */}
              <select
                id="contentType"
                name="contentType"
                value={formData.contentType}
                onChange={handleChange}
                required
                className="p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
              >
                <option value="">Select Content Type</option>
                <option value="Article">Article</option>
                <option value="Video">Video</option>
                <option value="Infographic">Infographic</option>
              </select>
              <input
                type="text"
                id="contentUrl"
                name="contentUrl"
                placeholder="Content URL"
                value={formData.contentUrl}
                onChange={handleChange}
                className="col-span-2 sm:col-span-1 p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
              />

              {/* Banner & Logo */}
              <div className="col-span-2 sm:col-span-1">
                <RectangularImgUploader
                  label="Banner Image (file, 1440×440 px, JPG/PNG)"
                  value={formData.bannerImage}
                  onImageSelect={(file) => setSelectedBanner(file)}
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <RectangularImgUploader
                  label="Logo Upload (file, max 300×100 px, JPG/PNG)"
                  value={formData.logoImage}
                  onImageSelect={(file) => setSelectedLogo(file)}
                />
              </div>

              {/* Sponsorship */}
              <div className="flex items-center gap-2 col-span-2 text-[#010101]">
                <label className="font-bold text-xl cursor-pointer" htmlFor="sponsorship">Sponsor your submission for greater visibility (£15)</label>
                <input
                  type="checkbox"
                  id="sponsorship"
                  name="sponsorship"
                  checked={formData.sponsorship}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center md:justify-start cursor-pointer text-[14px] md:text-[16px] bg-[#b08d57] text-white px-4 py-2 rounded-md w-full md:w-auto"
            >
              {loading ? "Submiting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <SuccessPopup
        isOpen={showSuccess}
        title="Submission Successful!"
        message="Your thought leadership post has been submitted and is under review."
      />
    </>
  );
}