"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Icon from "@/components/icon/Icon";
import Image from "next/image";

const HeaderComp = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleLinkClick = (href) => {
    if (pathname == href) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`bg-white text-black fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""
          }`}
      >
        <div className="max-w-screen md:max-w-screen-lg lg:max-w-screen-xl mx-auto w-full px-6 sm:px-10 md:px-14 lg:px-20 2xl:px-0 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleLinkClick("/")}
          >
            <Image
              width={200}
              height={40}
              src="/images/header/headerlogo.png"
              className="lg:w-[220px] md:w-[220px] sm:w-[150px] w-[150px]"
              alt="Logo"
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden py-2 text-gray-500 hover:bg-gray-100 rounded-lg cursor-pointer"
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
          <ul className="hidden xl:flex gap-4 items-center">
            <li>
              <Link
                href="/resources"
                className="text-sm font-semibold hover:text-[#85009D]"
                onClick={() => handleLinkClick("/resources")}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/business-hub"
                className="text-sm font-semibold hover:text-[#85009D]"
                onClick={() => handleLinkClick("/business-hub")}
              >
                Business Hub
              </Link>
            </li>
            <li>
              <Link
                href="/business-hub/procurement-concierge"
                className="text-sm font-semibold hover:text-[#85009D]"
                onClick={() => handleLinkClick("/business-hub/procurement-concierge")}
              >
                The Plug Concierge
              </Link>
            </li>
            <li>
              <Link
                href="/business-hub/vip-lounge"
                className="text-sm font-semibold hover:text-[#85009D]"
                onClick={() => handleLinkClick("/business-hub/vip-lounge")}
              >
                VIP Business Lounge
              </Link>
            </li>
            <li className="flex items-center bounce-right">
              <p className="text-sm font-semibold pr-3 text-[#010101]">
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
          className={`fixed top-0 left-0 h-full w-[100vw] max-w-[412px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="p-4 flex justify-between items-center">
            <Link href="/" onClick={() => handleLinkClick("/")}>
              <Image
                width={150}
                height={40}
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
                className="text-sm font-semibold hover:text-[#85009D] w-full flex"
                onClick={() => handleLinkClick("/resources")}
              >
                Resources
              </Link>
            </li>
            <Link
              href="/business-hub"
              className="text-sm font-semibold hover:text-[#85009D]"
              onClick={() => handleLinkClick("/business-hub")}
            >
              Business Hub
            </Link>
            <li>
              <Link
                href="/business-hub/procurement-concierge"
                className="text-sm font-semibold hover:text-[#85009D]"
                onClick={() => handleLinkClick("/business-hub/procurement-concierge")}
              >
                The Plug Concierge
              </Link>
            </li>
            <li>
              <Link
                href="/business-hub/vip-lounge"
                className="text-sm font-semibold hover:text-[#85009D]"
                onClick={() => handleLinkClick("/business-hub/vip-lounge")}
              >
                VIP Business Lounge
              </Link>
            </li>
            <li className="flex gap-[4px] items-center bounce-right">
              <span className="text-sm font-semibold text-[#010101]">
                Reach Out To Our Team
              </span>
              <div className="rotate-90">
                <Icon name="arrow" color="black" size={20} />
              </div>
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
