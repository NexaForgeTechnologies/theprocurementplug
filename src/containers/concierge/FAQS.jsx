import React, { useState } from "react";

export default function FAQS() {
    const faqs = [
        {
            question: "What tasks do you handle?",
            answer: "Submit your task through the dashboard. We’ll review it and assign the right expert. You’ll receive updates and a completed deliverable—fast and hassle-free.",
        },
        {
            question: "How long does it take to complete a task?",
            answer: "Most tasks are completed within 24-48 hours depending on complexity. You’ll receive real-time updates via your dashboard.",
        },
        {
            question: "Can I request revisions?",
            answer: "Absolutely. We offer unlimited revisions within a 7-day window after delivery to ensure you're fully satisfied.",
        },
        {
            question: "What if I'm not happy with the result?",
            answer: "We’ll work with you to make it right. Our team is committed to delivering high-quality results tailored to your needs.",
        },
        {
            question: "How do I get started?",
            answer: "Just sign up, log into your dashboard, and submit your first task. It’s simple and fast to get started.",
        },
    ];

    // ✅ Track open state of each FAQ (first one open by default)
    const [openStates, setOpenStates] = useState(
        faqs.map((_, index) => index === 0)
    );

    const toggleFAQ = (index) => {
        setOpenStates((prev) =>
            prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
        );
    };

    return (
        <section className="space-y-6">

            {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-4">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        <p className="text-[#1B1B1B] text-lg font-medium">
                            {faq.question}
                        </p>
                        <span className="shrink-0 rounded-full py-1 md:py-2 w-8 md:min-w-10 text-center text-[#85009D] border border-[#85009D]">
                            {openStates[index] ? "-" : "+"}
                        </span>
                    </div>

                    {openStates[index] && (
                        <p className="text-[#1B1B1B] text-base font-normal mt-2 max-w-3xl">
                            {faq.answer}
                        </p>
                    )}
                </div>
            ))}
        </section>
    );
}
