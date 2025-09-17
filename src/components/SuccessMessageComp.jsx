"use client";

export default function SuccessPopup({ isOpen, title, message }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/40">
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center animate-fadeIn">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-xl font-semibold text-[#85009D] mb-2">
                    {title || "Thank you!"}
                </h3>
                <p className="text-gray-700 max-w-sm">
                    {message || "Your form has been submitted successfully."}
                </p>
            </div>
        </div>
    );
}
