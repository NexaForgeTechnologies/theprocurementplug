"use client";
import { useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-md shadow-lg max-w-md p-6 text-center">
        <div className="flex items-center justify-center mb-3">
          <span className="text-3xl">🍪</span>
        </div>
        <h3 className="text-xl font-semibold text-[#85009D] mb-2">
          Cookies Consent
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
          This website uses cookies to help you have a superior and more
          admissible browsing experience on the website.{" "}
          {/* <a href="#" className="text-[#85009D] underline">
            Read more
          </a> */}
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setVisible(false)}
            className="bg-[#85009D] text-white px-4 py-2 rounded hover:bg-[#6a007f]"
          >
            Accept
          </button>
          <button
            onClick={() => setVisible(false)}
            className="border border-[#85009D] text-[#85009D] px-4 py-2 rounded hover:bg-gray-100"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
