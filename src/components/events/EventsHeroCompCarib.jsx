"use client";

import React, { useState, useEffect } from "react";

function EventsHeroComp({ heading, name, date, comment, img }) {
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "", show: false });

  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert({ message: "", type: "", show: false });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alert.show]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert({ message: "", type: "", show: false });

    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      // userEmail: formData.get("email"),
      fullName: formData.get("fullName"),
      // name: formData.get("fullName"),
      jobTitle: formData.get("jobTitle"),
      company: formData.get("company"),
      phoneNumber: formData.get("phoneNumber"),
      linkedInUrl: formData.get("linkedInUrl"),
      consent: formData.get("consent") === "on",
      type: "event_registration",
      eventName: "Elevate 2025: Caribbean Edition",
      eventLocation: "Trinidad & Tobago",
      eventDate: "November 2025"
    };

    try {
      const response = await fetch("/api/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to submit registration");
      }

      setAlert({
        message:
          "Thank you for registering! You'll receive a confirmation email soon.",
        type: "success",
        show: true,
      });
      e.target.reset(); // Reset form after successful submission
    } catch (err) {
      setAlert({
        message: err.message || "An error occurred. Please try again later.",
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

  return (
    <div className="relative min-h-screen pb-10">
      <div
        style={{
          backgroundImage: `url(/images/blogs/blog-1/governance.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          boxShadow: "#00000036 0px 0px 0px 100vmax",
          clipPath: "inset(0 -100vmax)",
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
        }}
        className="w-screen ml-[calc(50%-50vw)] h-full absolute"
      >
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(33, 33, 33, 0.86), rgba(33, 33, 33, 0.86))",
          }}
        ></div>
      </div>
      <div className="relative z-10 py-20">
        <div className="block lg:flex gap-6 md:gap-8">
          <div className="flex-2">
            <div className="flex gap-4 md:gap-8">
              <div className="border-l-[10px] border-[#b08d57]"></div>
              <h3 className="leading-10 md:leading-20 font-extrabold text-3xl md:text-7xl text-white">
                <span className="block">
                  ELEVATE Digital Global Edition
                </span>
                <span className="text-[#b08d57]">November 2025</span>
              </h3>
            </div>
            <div className="flex flex-col gap-6 text-white my-6 md:my-8">
              <h2 className="font-extrabold text-xl">
                Transforming Procurement Excellence & Leadership{" "}
              </h2>
              <p className="text-sm md:text-lg leading-normal md:leading-relaxed">
                Welcome to Elevate 2025: Caribbean Edition, a premier two-day
                procurement conference hosted in trinidad & Tobago, specifically
                tailored to empower procurement professionals at every stage of
                their career. Elevate your knowledge, expand your network, and
                enhance your procurement skills with expert-led sessions
                uniquely designed for the Caribbean context.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 mt-6 md:mt-0 flex flex-col gap-6 md:gap-8">
            <h2 className="text-[#9c27b0] font-extrabold text-xl md:text-3xl">
              Event Details
            </h2>
            <div className="text-[#363636] flex flex-col gap-2">
              <p className="text-sm md:text-lg leading-normal md:leading-relaxed">
                <strong className="font-extrabold">Event Date & Time: </strong>
                November 17 & 18th, 2025 - Online
              </p>
              <p className="text-sm md:text-lg leading-normal md:leading-relaxed">
                <strong className="font-extrabold">Format: </strong>Chief
                Procurement Officers (CPO), Vice Presidents & Directors of
                Procurement, Senior Managers in Supply Chain & Procurement.
              </p>
              <p className="text-sm md:text-lg leading-normal md:leading-relaxed">
                <strong className="font-extrabold">Key Focus Areas: </strong>Future-Proofing Careers with multi-disciplinary skills, Boardroom Startegy and enterprise value, Crisis Room Simulation for decision-making under pressure, Global Growth Action Plan to translate experience into value.
              </p>
              <p className="text-sm md:text-lg leading-normal md:leading-relaxed">
                <strong className="font-extrabold">Global reach: </strong>Perfectly timed for professionals in the US, Europe, and the Middle East to attend live.
              </p>
            </div>
            <p className="text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed">
              <strong className="font-extrabold">Early Bird Tickets:</strong>
              <li className="text-[#9c27b0] list-none">Limited Spaces</li>
            </p>
            {alert.show && (
              <div
                className={`p-4 rounded-md flex justify-between items-center ${alert.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
                  }`}
              >
                <p className="text-sm md:text-lg">{alert.message}</p>
                <button
                  onClick={handleCloseAlert}
                  className="text-sm font-bold"
                  aria-label="Close alert"
                >
                  ✕
                </button>
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 md:gap-4"
            >
              <input
                required
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full border text-[#363636] border-[#e0e0e0] bg-[#ffff] p-2 rounded-md"
              />
              <input
                required
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                className="w-full border text-[#363636] border-[#e0e0e0] bg-[#ffff] p-2 rounded-md"
              />
              <input
                required
                type="text"
                name="company"
                placeholder="Company"
                className="w-full border text-[#363636] border-[#e0e0e0] bg-[#ffff] p-2 rounded-md"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full border text-[#363636] border-[#e0e0e0] bg-[#ffff] p-2 rounded-md"
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number (Optional)"
                className="w-full border text-[#363636] border-[#e0e0e0] bg-[#ffff] p-2 rounded-md"
              />
              <input
                type="url"
                name="linkedInUrl"
                placeholder="LinkedIn URL (Optional)"
                className="w-full border text-[#363636] border-[#e0e0e0] bg-[#ffff] p-2 rounded-md"
              />
              <div className="flex items-start gap-2">
                <input
                  className="mt-1"
                  required
                  type="checkbox"
                  name="consent"
                />
                <p className="text-[#363636] text-sm leading-normal md:leading-relaxed">
                  I consent to receiving event updates and future communications
                </p>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="text-[#ffff] text-sm md:text-lg bg-[#85009D] rounded-md px-4 py-3 w-full cursor-pointer disabled:opacity-50"
              >
                {isLoading ? "Submitting..." : "Register Your Interest"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsHeroComp;