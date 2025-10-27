"use client";
import toast from 'react-hot-toast';
import { useEffect, useState } from "react";
import { useContactUsFormStore } from "@/store/ContactusFormStore";
import { set } from 'zod';

export default function ContactusForm() {
    const { isOpen, setIsOpen } = useContactUsFormStore();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const priorities = [
        { title: "Team retention", name: "Team retention" },
        { title: "Performance improvement", name: "Performance improvement" },
        { title: "Career development", name: "Career development" },
        { title: "Internal mobility", name: "Internal mobility" },
        { title: "Leadership pipeline", name: "Leadership pipeline" },
        { title: "Other", name: "Other" },
    ];

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        job: "",
        email: "",
        phone: "",
        teamsize: "",
        priorities: [],
        contactMethod: [],
        additionalNotes: "",
    });

    const [otherInput, setOtherInput] = useState('');
    const [isOtherChecked, setIsOtherChecked] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRadioChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            contactMethod: e.target.value,
        }));
    };

    const isSelected = (item) => {
        if (item.name === 'Other') {
            return isOtherChecked;
        }
        return formData.priorities.includes(item.name);
    };

    const handleCheckboxChange = (name) => {
        if (name === "Other") {
            setIsOtherChecked(prev => {
                const newChecked = !prev;

                setFormData(prevData => {
                    let updatedPriorities = [...prevData.priorities];

                    // Remove old other input (always do this first)
                    updatedPriorities = updatedPriorities.filter(p => p !== otherInput.trim());

                    // If checked, add the new otherInput (if not empty)
                    if (newChecked && otherInput.trim() !== "") {
                        updatedPriorities.push(otherInput.trim());
                    }

                    return {
                        ...prevData,
                        priorities: updatedPriorities,
                    };
                });

                // If being unchecked, clear the input
                if (!newChecked) {
                    setOtherInput('');
                }

                return newChecked;
            });
        } else {
            setFormData(prevData => {
                let updatedPriorities = [...prevData.priorities];
                if (updatedPriorities.includes(name)) {
                    updatedPriorities = updatedPriorities.filter(p => p !== name);
                } else {
                    updatedPriorities.push(name);
                }
                return {
                    ...prevData,
                    priorities: updatedPriorities,
                };
            });
        }
    };
    const handleOtherInputChange = (e) => {
        const value = e.target.value;
        const trimmed = value.trim();

        setOtherInput(value);

        setFormData(prevData => {
            let updatedPriorities = [...prevData.priorities];

            // Remove old value (if exists)
            updatedPriorities = updatedPriorities.filter(p => p !== otherInput.trim());

            // Add new value (if not empty and checkbox is checked)
            if (isOtherChecked && trimmed !== "") {
                updatedPriorities.push(trimmed);
            }

            return {
                ...prevData,
                priorities: updatedPriorities,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.priorities.length === 0) {
            alert("Please select at least one priority.");
            return;
        }
        console.log("Form submitted:", formData);
        setIsLoading(true); // start loading

        try {
            const response = await fetch("/api/personal-development-hub/contactus-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Form submitted successfully:", result);
                toast.success("Form submitted successfully!");

                // ✅ Reset form
                setFormData({
                    name: "",
                    company: "",
                    job: "",
                    email: "",
                    phone: "",
                    teamsize: "",
                    priorities: [],
                    contactMethod: [],
                    additionalNotes: "",
                });
                setOtherInput('');
                setIsOtherChecked(false);

                // Optionally: close modal or show success message here
            } else {
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("An error occurred while submitting the form.");
        } finally {
            setIsLoading(false); // stop loading
            setIsOpen(false);
        }
    };


    return (
        <>
            {isOpen && (
                <section className="text-white fixed top-0 left-0 right-0 bottom-0 bg-black/40 z-[100] flex justify-center px-6 sm:px-10 md:px-14 lg:px-30">
                    <form onSubmit={handleSubmit} className="rounded shadow-md max-w-5xl bg-[#85009D] border border-[#F3B3FF]/80 w-screen px-6 sm:px-10 md:px-14 py-5 relative top-5 flex flex-col max-h-[95vh] overflow-y-auto hide-scrollbar gap-y-5 z-[100]">
                        {/* Heading */}
                        <section className="flex flex-col gap-y-3">
                            <div className="flex justify-between items-center">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent text-center">
                                    Contact Us Form
                                </h1>
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="text-[#B08D57] text-2xl font-bold cursor-pointer rounded"
                                >
                                    x
                                </button>
                            </div>
                            <p className="text-sm md:text-base">Start Your Team’s Journey with Plug Enterprise</p>
                            <p className="text-xs md:text-sm">Tell us a little about your team and we’ll be in touch within 1 business day.</p>
                        </section>

                        {/* Inputs */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { type: "text", name: "name", placeholder: "Full Name*" },
                                { type: "text", name: "company", placeholder: "Company*" },
                                { type: "text", name: "job", placeholder: "Your Job Title*" },
                                { type: "email", name: "email", placeholder: "Email Address*" },
                                { type: "tel", name: "phone", placeholder: "Phone Number" },
                                { type: "text", name: "teamsize", placeholder: "Team Size You’re Upskilling*" },
                            ].map((item, index) => (
                                <input
                                    key={index}
                                    type={item.type}
                                    name={item.name}
                                    placeholder={item.placeholder}
                                    value={formData[item.name]}
                                    onChange={handleChange}
                                    required
                                    className="border border-gray-300 p-2 md:p-3 text-[#808080] bg-white  text-xs md:text-sm lg:text-base"
                                />
                            ))}
                        </section>

                        {/* Priorities */}
                        <section className="flex flex-col md:flex-row justify-between gap-4 mt-2">
                            <p>What Are Your Main Priorities?</p>
                            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                                {priorities.map((item, index) => (
                                    <label key={index} className="flex items-start md:items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className={`appearance-none border border-gray-300 p-1 md:p-2 focus:outline-none ${isSelected(item) ? 'bg-white' : ''}`}
                                            checked={isSelected(item)}
                                            onChange={() => handleCheckboxChange(item.name)}
                                        />
                                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                                            <span className="text-white text-xs md:text-sm lg:text-base">{item.title}</span>
                                            {item.name === "Other" && isSelected(item) && (
                                                <input
                                                    type="text"
                                                    placeholder="Please specify"
                                                    className="bg-transparent border-b border-white text-white  text-xs md:text-sm lg:text-base focus:outline-none max-w-[50%]"
                                                    value={otherInput}
                                                    onChange={handleOtherInputChange}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                            )}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </section>

                        {/* Contact Method */}
                        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-2">
                            <p>Preferred Contact Method</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-15">
                                {["Email", "Phone", "Teams Call"].map((option, index) => (
                                    <label key={index} className="flex gap-2 items-center">
                                        <input
                                            type="radio"
                                            name="contactMethod"
                                            required
                                            value={option}
                                            checked={formData.contactMethod === option}
                                            onChange={handleRadioChange}
                                        />
                                        <span className="text-white text-xs md:text-base">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </section>

                        <textarea
                            placeholder="Additional Notes or Question"
                            className="p-2 md:p-3 text-[#808080] bg-white text-xs md:text-base min-h-15 md:min-h-30"
                            required
                            value={formData.additionalNotes}
                            onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                        ></textarea>

                        <button
                            type="submit"
                            className="mt-auto flex items-center justify-center cursor-pointer border border-transparent text-black bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] px-4 py-2 rounded-[6px] text-xs md:text-base self-start"
                        >
                            {isLoading ? "Submitting..." : "Request a Call or Demo"}

                        </button>

                        <div className="text-center flex flex-col justify-center items-center gap-3 mt-4">
                            <p className="text-xs md:text-base font-semibold max-w-lg">Your details are safe with us. We’ll never share your data and will only contact you regarding Plug Enterprise.</p>
                            <p className="text-xs md:text-sm  max-w-lg">Cancel anytime  |  No hidden fees  |  Encrypted payments</p>
                        </div>
                    </form>
                </section>
            )}
        </>
    );
}
