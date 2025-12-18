"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import RectangularImgUploader from "@/components/img-uploader/RectangularImgUploaderComp";

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
    bannerImage: "",
    logoImage: "",
    payment: "",
    already_partner: 0,
  });

  const [step, setStep] = useState(1);
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [selectedLogo, setSelectedLogo] = useState(null);

  // Calculate completion percentage for a step's required fields
  const getCompletionPercentage = (step) => {
    switch (step) {
      case 1: {
        const requiredFields = [
          formData.name,
          formData.company,
          formData.email,
        ];
        const filledFields = requiredFields.filter(Boolean).length;
        return (filledFields / 3) * 100; // 3 required fields
      }
      case 2: {
        return formData.package ? 100 : 0; // 1 required field
      }
      case 3:
      case 4:
        return 100; // No required fields
      default:
        return 0;
    }
  };

  // Check if a step's required fields are fully completed
  const areRequiredFieldsFilled = (step) => {
    switch (step) {
      case 1:
        return formData.name && formData.company && formData.email;
      case 2:
        return formData.package;
      case 3:
      case 4:
        return true;
      default:
        return false;
    }
  };

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

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // checking alread partner
  const [isPartner, setIsPartner] = useState(null);
  const [checkingEmail, setCheckingEmail] = useState(false);
  const checkEmail = async () => {
    if (!formData.email) return;

    setCheckingEmail(true);

    try {
      const res = await axios.get("/api/round-table/check-partner", {
        params: { email: formData.email },
      });

      if (res.data.exists) {
        setIsPartner(true);
        setFormData((prev) => ({
          ...prev,
          already_partner: 1,
        }));
      } else {
        setIsPartner(false);
        setFormData((prev) => ({
          ...prev,
          already_partner: 0, // reset
        }));
      }
    } catch (err) {
      console.error("Error checking email:", err);
    } finally {
      setCheckingEmail(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let bannerUrl = formData.bannerImage;
    let logoUrl = formData.logoImage;

    if (step === 4) {
      setLoading(true);
      setError(null);

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

        // Create FormData instance
        // const formDataToSend = new FormData();

        // // Append all form fields
        // for (const key in formData) {
        //   // Handle files (bannerImage, logoImage) separately if needed
        //   if (formData[key] instanceof File) {
        //     formDataToSend.append(key, formData[key], formData[key].name);
        //   } else {
        //     formDataToSend.append(key, formData[key]);
        //   }
        // }

        // Send as multipart/form-data
        const response = await axios.post(
          "/api/round-table/create-checkout-session",
          newFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
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
    } else {
      nextStep();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-200 flex items-center justify-center px-6">
      <div
        ref={modalRef}
        className="max-w-[964px] w-full max-h-[90vh] overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border border-[#DBBB89] custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col justify-center">
          <div className="flex justify-between items-center w-full mb-4">
            {[1, 2, 3, 4].map((s) => (
              <React.Fragment key={s}>
                <div className="flex items-center">
                  <div
                    className={`w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px] text-[20px] sm:text-[24px] md:text-[50px] font-bold flex items-center justify-center rounded-full ${step === s
                      ? "bg-[#85009D] text-white"
                      : "bg-white text-[#B08D57] border border-[#85009D]"
                      }`}
                  >
                    {s}
                  </div>
                </div>
                {s < 4 && (
                  <div className="h-1 flex-1 mx-2 relative">
                    <div className="absolute inset-0 h-1 border-t-2 border-dashed border-[#B08D57]" />
                    <div
                      className="absolute inset-0 h-1 bg-[#85009D]"
                      style={{
                        width:
                          step > s || (step === s && areRequiredFieldsFilled(s))
                            ? "100%"
                            : step === s
                              ? `${getCompletionPercentage(s)}%`
                              : "0%",
                      }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="my-4 text-2xl md:text-[32px] font-semibold text-[#85009D]">
            {step === 1 && "Company Registration"}
            {step === 2 && "Select Hosting Package"}
            {step === 3 && "Roundtable Details & Assets"}
            {step === 4 && "Review & Payment"}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <div>
              <input
                type="text"
                id="company"
                name="companyName"
                placeholder="Company Name*"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full p-4 mb-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                />
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Work email*"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={checkEmail}
                    required
                    className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                  />
                  {checkingEmail && (
                    <p className="absolute text-red-600 text-sm">Checking...</p>
                  )}

                  {isPartner && (
                    <p className="absolute text-green-600 text-sm">
                      Already a partner — special pricing applied.
                    </p>
                  )}
                  {isPartner === false && !checkingEmail && (
                    <p className="absolute text-gray-600 text-sm">
                      Not a partner yet.
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    id="companywebsiteorlinkedinurl"
                    name="website"
                    placeholder="Company Website / LinkedIn URL (URL)"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                  />
                </div>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <label className="block text-[#1B1B1B] font-medium">
                How long would you like your digital Roundtable to run?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label
                  htmlFor="package1"
                  className="block cursor-pointer h-full"
                >
                  <div
                    className={`p-4 border hover:bg-[#85009D] border-[#85009D] rounded-xs bg-white h-full flex flex-col justify-between transition-all duration-200 ease-in-out group`}
                    style={{
                      background:
                        formData.package === "1 Week" ? "#85009D" : "",
                    }}
                  >
                    <input
                      type="radio"
                      id="package1"
                      name="package"
                      value="1 Week"
                      checked={formData.package === "1 Week"}
                      onChange={handleChange}
                      required
                      className="hidden"
                    />
                    <span className="text-[#B08D57] text-[24px] md:text-[42px] leading-none">
                      1 Week
                    </span>
                    <p
                      className="text-[#1B1B1B] text-[24px] md:text-[42px] group-hover:text-white group-hover:transition-all duration-200 ease-in-out"
                      style={{
                        color: formData.package === "1 Week" ? "white" : "",
                      }}
                    >
                      £150
                    </p>
                    <div className="w-full h-0.5 bg-[#B08D57] rounded-md mb-4"></div>
                    <p
                      className="text-[#7B7B7B] mb-4 md:mb-8 group-hover:text-white group-hover:transition-all duration-200 ease-in-out"
                      style={{
                        color: formData.package === "1 Week" ? "white" : "",
                      }}
                    >
                      Note below: “First week is FREE for returning Business Hub
                      partners – 2 free sessions per year
                    </p>
                    <p
                      className="text-[#85009D] group-hover:text-white text-center border group-hover:border-white border-[#85009D] w-full py-[5px] rounded-md group-hover:transition-all duration-200 ease-in-out"
                      style={{
                        color: formData.package === "1 Week" ? "white" : "",
                        borderColor:
                          formData.package === "1 Week" ? "white" : "",
                      }}
                    >
                      Select
                    </p>
                  </div>
                </label>
                <label
                  htmlFor="package2"
                  className="block cursor-pointer h-full"
                >
                  <div
                    className={`p-4 border hover:bg-[#85009D] border-[#85009D] rounded-xs bg-white h-full flex flex-col justify-between transition-all duration-200 ease-in-out group `}
                    style={{
                      background:
                        formData.package === "2 Weeks" ? "#85009D" : "",
                    }}
                  >
                    <input
                      type="radio"
                      id="package2"
                      name="package"
                      value="2 Weeks"
                      checked={formData.package === "2 Weeks"}
                      onChange={handleChange}
                      required
                      className="hidden"
                    />
                    <span className="text-[#B08D57] text-[24px] md:text-[42px] leading-none">
                      2 Weeks
                    </span>
                    <p className="text-[#1B1B1B] text-[24px] md:text-[42px] flex items-center gap-2 group-hover:text-white group-hover:transition-all duration-200 ease-in-out">
                      £275
                      <span
                        className="text-[#808080] text-[16px] group-hover:text-white group-hover:transition-all duration-200 ease-in-out"
                        style={{
                          color: formData.package === "2 Weeks" ? "white" : "",
                        }}
                      >
                        (Non-Partner)
                      </span>
                    </p>
                    <div className="w-full h-0.5 bg-[#B08D57] rounded-md mb-4"></div>
                    <p className="text-[#1B1B1B] text-[24px] md:text-[42px] flex items-center gap-2 mb-4 md:mb-8 leading-none group-hover:text-white group-hover:transition-all duration-200 ease-in-out">
                      £150
                      <span
                        className="text-[#808080] text-[16px] group-hover:text-white group-hover:transition-all duration-200 ease-in-out"
                        style={{
                          color: formData.package === "2 Weeks" ? "white" : "",
                        }}
                      >
                        (Existing Partner)
                      </span>
                    </p>
                    <p
                      className="text-[#85009D] group-hover:text-white text-center border group-hover:border-white border-[#85009D] w-full py-[5px] rounded-md group-hover:transition-all duration-200 ease-in-out"
                      style={{
                        color: formData.package === "2 Weeks" ? "white" : "",
                        borderColor:
                          formData.package === "1 Week" ? "white" : "",
                      }}
                    >
                      Select
                    </p>
                  </div>
                </label>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Roundtable Title / Topic"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
              />
              <textarea
                id="message"
                name="description"
                placeholder="Introduction / Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
                rows="4"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  id="targetaudience"
                  name="targetAudience"
                  placeholder="Target Audience / Key Participants"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                />
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Preferred Start Date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full p-4 text-[#010101] border border-[#85009D] rounded-xs bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Banner & Logo */}
                <RectangularImgUploader
                  label="Banner Image (file, 1440×440 px, JPG/PNG)"
                  value={formData.bannerImage}
                  onImageSelect={(file) => setSelectedBanner(file)}
                />
                <RectangularImgUploader
                  label="Logo Image (file, max 300×100 px, JPG/PNG)"
                  value={formData.logoImage}
                  onImageSelect={(file) => setSelectedLogo(file)}
                />
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 border border-[#85009D] rounded-xs bg-white h-full space-y-4">
                  <p className="text-[#1b1b1b]">
                    Company Name:{" "}
                    <span className="text-[#505050]">
                      {formData.companyName}
                    </span>
                  </p>
                  <p className="text-[#1b1b1b]">
                    Host Full Name:{" "}
                    <span className="text-[#505050]">{formData.name}</span>
                  </p>
                  <p className="text-[#1b1b1b]">
                    Selected Package & Duration:{" "}
                    <span className="text-[#505050]">{formData.package}</span>
                  </p>
                  <p className="text-[#1b1b1b]">
                    Topic:{" "}
                    <span className="text-[#505050]">{formData.title}</span>
                  </p>
                  <p className="text-[#1b1b1b]">
                    Start Date:{" "}
                    <span className="text-[#505050]">{formData.date}</span>
                  </p>
                </div>
                <div className="p-4 border border-[#85009D] rounded-xs bg-white h-full space-y-4">
                  <p className="text-[#1b1b1b]">
                    Click on{" "}
                    <span className="font-semibold">
                      "Pay & Submit for Review"
                    </span>{" "}
                    to be redirected to the Stripe payment gateway.
                  </p>
                  {error &&
                    (Array.isArray(error) ? (
                      error.map((msg, i) => (
                        <p key={i} className="text-red-500 text-sm">
                          {msg}
                        </p>
                      ))
                    ) : (
                      <p className="text-red-500 text-sm">{error}</p>
                    ))}
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            {step === 1 ? (
              <button
                type="button"
                onClick={onClose}
                className="bg-[#6C6C6C] text-[#ffff] text-[14px] md:text-[16px] px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            ) : (
              <button
                type="button"
                onClick={prevStep}
                className="bg-[#6C6C6C] text-[#ffff] text-[14px] md:text-[16px] px-4 py-2 rounded-md"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              disabled={loading}
              className={`flex items-center justify-center md:justify-start cursor-pointer text-[14px] md:text-[16px] bg-[#b08d57] text-white px-4 py-2 rounded-md w-full md:w-auto ${loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              {loading ? (
                "Processing..."
              ) : (
                <>
                  {step === 1 && "Next: Choose Your Hosting Package"}
                  {step === 2 && "Next: Tell Us About Your Roundtable"}
                  {step === 3 && "Next: Review & Pay"}
                  {step === 4 && "Pay & Submit for Review"}
                  {step !== 4 && (
                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                  )}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
