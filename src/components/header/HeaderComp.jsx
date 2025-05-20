"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Icon from "@/components/icon/Icon";

const HeaderComp = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [ismobiledropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Dropdown hover with delay
  let timeoutId = null;
  const handleDropdownEnter = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // 200ms delay before closing
  };

  const toggleDropdown = () => setIsMobileDropdownOpen(!ismobiledropdownOpen);

  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileDropdownOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const handleLinkClick = (href) => {
    if (pathname == href) {
      setIsMobileMenuOpen(false);
      setIsMobileDropdownOpen(false);
      setIsDropdownOpen(false);
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes bounceRight {
              0%, 100% {
                  transform: translateX(0) scale(1);
              }
              50% {
                  transform: translateX(8px) scale(1.05);
              }
          
          .bounce-right {
              animation: bounceRight 2s ease-in-out infinite;
              transform-origin: center;
          
          .bounce-right:hover {
              animation-play-state: paused;
          }
        `}
      </style>

      <nav
        className={`bg-white text-black fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-screen md:max-w-screen-lg lg:max-w-screen-xl mx-auto w-full px-6 sm:px-10 md:px-14 lg:px-20 2xl:px-0 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleLinkClick("/")}
          >
            <img
              src="/images/header/headerlogo.png"
              className="lg:w-[220px] md:w-[220px] sm:w-[150px] w-[150px]"
              alt="Logo"
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden py-2 text-gray-500 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-6">
            <li>
              <Link
                href="/resources"
                className="text-[15px] hover:text-[#85009D]"
                onClick={() => handleLinkClick("/resources")}
              >
                Resources
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="flex text-[15px] items-center hover:text-[#85009D] cursor-pointer">
                Events
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {isDropdownOpen && (
                <div
                  className="absolute bg-[#010101] p-5 mt-0 min-w-[406px] z-10 shadow-lg"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href="/event/elevate2025-manchester"
                    className="block pb-2 text-white hover:text-[#85009D]"
                    onClick={() =>
                      handleLinkClick("/event/elevate2025-manchester")
                    }
                  >
                    Elevate 2025 - Manchester (June)
                  </Link>
                  <Link
                    href="/event/elevate2025-scotland"
                    className="block py-2 text-white hover:text-[#85009D]"
                    onClick={() =>
                      handleLinkClick("/event/elevate2025-scotland")
                    }
                  >
                    Elevate 2025 - Scotland (August)
                  </Link>
                  <Link
                    href="/event/elevate2025-caribbean"
                    className="block py-2 text-white hover:text-[#85009D]"
                    onClick={() =>
                      handleLinkClick("/event/elevate2025-caribbean")
                    }
                  >
                    Elevate 2025 - Caribbean (Trinidad)
                  </Link>
                  {/* <Link
                    href="#"
                    className="block py-2 text-white hover:text-[#85009D]"
                    onClick={() => handleLinkClick("")}
                  >
                    Procure Tech Unplugged 2025
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-white hover:text-[#85009D]"
                    onClick={() => handleLinkClick("")}
                  >
                    Procurement Career Webinar
                  </Link> */}
                  <Link
                    href="/event/boardroom-preparedness-for-senior-procurement-professionals"
                    className="block pt-2 text-white hover:text-[#85009D]"
                    onClick={() =>
                      handleLinkClick(
                        "/event/boardroom-preparedness-for-senior-procurement-professionals"
                      )
                    }
                  >
                    Boardroom Preparedness for Senior Procurement Professionals
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/business-hub"
                className="text-[15px] hover:text-[#85009D]"
                onClick={() => handleLinkClick("/business-hub")}
              >
                Business Hub
              </Link>
            </li>
            <li className="flex items-center bounce-right">
              <p className="text-[15px] px-3 text-[#010101]">
                Reach Out To Our Team
              </p>
              <Icon name="arrow" color="black" size={24} />
            </li>
            <li>
              <Link
                href="/contact-us"
                className="cursor-pointer bg-[#85009D] text-white text-[20px] px-[20px] py-[10px] rounded-md"
                onClick={() => handleLinkClick("/contact-us")}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-[100vw] max-w-[412px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-between items-center">
            <Link href="/" onClick={() => handleLinkClick("/")}>
              <img
                src="/images/header/headerlogo.png"
                className="w-[180px]"
                alt="Logo"
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[28px] text-black text-xl"
            >
              ×
            </button>
          </div>
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <Link
                href="/resources"
                className="text-[15px] font-semibold hover:text-[#85009D] w-full flex"
                onClick={() => handleLinkClick("/resources")}
              >
                Resources
              </Link>
            </li>
            <li>
              <div
                className="text-[15px] font-semibold mb-1 flex items-center justify-between"
                onClick={toggleDropdown}
              >
                Events
                <button className="text-[#85009D]">
                  {/* <button onClick={toggleDropdown} className="text-[#85009D]"> */}
                  <Icon
                    name={
                      ismobiledropdownOpen ? "dropdownarrow" : "dropdownarrow"
                    }
                    color="#85009D"
                    size={20}
                  />
                </button>
              </div>
              {ismobiledropdownOpen && (
                <div className="text-sm space-y-1 bg-[#010101] p-5 mt-2 rounded-md">
                  <Link
                    href="/event/elevate2025-manchester"
                    className="block pb-2 text-white hover:text-[#85009D]"
                    onClick={() =>
                      handleLinkClick("/event/elevate2025-manchester")
                    }
                  >
                    Elevate 2025 - Manchester (June)
                  </Link>
                  <Link
                    href="/event/elevate2025-scotland"
                    className="block py-2 text-white hover:text-[#85009D]"
                    onClick={() =>
                      handleLinkClick("/event/elevate2025-scotland")
                    }
                  >
                    Elevate 2025 - Scotland (August)
                  </Link>
                  <Link
                    href="/event/elevate2025-caribbean"
                    className="block py-2 text-white hover:text-[#85009D]"
                    onClick={() =>
                      handleLinkClick("/event/elevate2025-caribbean")
                    }
                  >
                    Elevate 2025 - Caribbean (Trinidad)
                  </Link>
                  {/* <Link
                    href="#"
                    className="block py-2 text-white hover:text-[#85009D]"
                    onClick={() => handleLinkClick("")}
                  >
                    Procure Tech Unplugged 2025
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-white hover:text-[#85009D]"
                    onClick={() => handleLinkClick("")}
                  >
                    Procurement Career Webinar
                  </Link> */}
                  <Link
                    href="/event/boardroom-preparedness-for-senior-procurement-professionals"
                    className="block pt-2 text-white hover:text-[#85009D]"
                    onClick={() =>
                      handleLinkClick(
                        "/event/boardroom-preparedness-for-senior-procurement-professionals"
                      )
                    }
                  >
                    Boardroom Preparedness for Senior Procurement Professionals
                  </Link>
                </div>
              )}
            </li>
            <Link
              href="/business-hub"
              className="text-[15px] hover:text-[#85009D]"
              onClick={() => handleLinkClick("/business-hub")}
            >
              Business Hub
            </Link>
            <li className="flex gap-[4px] items-center bounce-right">
              <span className="text-[15px] text-[#010101]">
                Reach Out To Our Team
              </span>
              <Icon name="arrow" color="black" size={20} />
            </li>
            <li>
              <Link
                href="/contact-us"
                className="cursor-pointer block bg-[#85009D] text-white text-[18px] text-center px-[20px] py-[10px] rounded-md"
                onClick={() => handleLinkClick("/contact-us")}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Overlay with Blur Effect */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-opacity-40 backdrop-blur-md z-40 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </nav>
    </>
  );
};

export default HeaderComp;
