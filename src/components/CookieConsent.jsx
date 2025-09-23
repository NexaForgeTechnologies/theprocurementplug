"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (choice) => {
    localStorage.setItem("cookie_consent", choice);
    setVisible(false);
  };

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
          admissible browsing experience.
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => handleConsent("accepted")}
            className="bg-[#85009D] text-white px-4 py-2 rounded hover:bg-[#6a007f]"
          >
            Accept
          </button>
          <button
            onClick={() => handleConsent("declined")}
            className="border border-[#85009D] text-[#85009D] px-4 py-2 rounded hover:bg-gray-100"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
