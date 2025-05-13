"use client";
import React, { useState } from "react";
import Link from 'next/link';

import Icon from '@/components/icon/Icon'

import PartnerCTR from "@/containers/home/partners/PartnerCTR";


const contactus = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [alert, setAlert] = useState({ message: "", type: "", show: false });
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setAlert({ message: "", type: "", show: false });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setAlert({
                    message: "Message sent successfully! Check your email for confirmation.",
                    type: "success",
                    show: true,
                });
                setFormData({ name: "", email: "", message: "" });
            } else {
                setAlert({
                    message: data.error || "Failed to send message. Please try again.",
                    type: "error",
                    show: true,
                });
            }
        } catch (error) {
            setAlert({
                message: "An error occurred. Please try again later.",
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
        <>
            <div className="mt-10 flex flex-col md:flex-row gap-6 md:gap-8">
                <div className='flex-1'>
                    <h2 className='font-extrabold text-3xl md:text-5xl text-[#010101] mb-4 md:mb-8'>
                        Contact Us
                    </h2>
                    <strong className='text-[#363636] text-sm md:text-lg'>Have questions or need assistance?
                    </strong>
                    <p className='text-[#363636] text-sm md:text-lg'>Our friendly team is here to help! Whether you’re looking for more information about our services, need support, or just want to share feedback, we’d love to hear from you. Simply fill out the form below, and a member of our team will get back to you as soon as possible. Let’s connect and make great things happen together!</p>
                </div>
                <div className="flex flex-col gap-4 md:gap-8 flex-1 lg:p-8 p-6 shadow-[0_0_25px_5px_rgba(33,33,33,0.15)] rounded-2xl text-[#363636]">
                    <div>
                        <div className='flex items-center gap-2'>
                            <Icon name="email" color="black" size={20} />
                            <h4 className='font-extrabold  text-xl md:text-2xl'>Email</h4>
                        </div>
                        <div className='ml-7 mt-1'>
                            <p className='text-sm'>request@theprocurementplug.com</p>
                            <Link href="mailto:request@theprocurementplug.com" className='text-[#ffff] bg-[#212121] mt-3 text-sm md:text-lg cursor-pointer flex items-center gap-2 p-3 rounded-lg w-full md:max-w-max'>
                                <Icon name="email" color="white" size={20} />
                                Click To Email Us
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            <Icon name="phone" color="black" size={20} />
                            <h4 className='font-extrabold text-xl md:text-2xl'>Phone</h4>
                        </div>
                        <p className=' text-sm ml-7'>Coming Soon</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            <Icon name="address" color="black" size={20} />
                            <h4 className='font-extrabold text-xl md:text-2xl'>Address</h4>
                        </div>
                        <p className='text-sm ml-7'>Coming Soon</p>
                    </div>
                </div>
            </div>
            <img src="/images/contactus/contactus.png" alt="" className='w-full md:h-[600px] rounded-2xl object-cover' />
            <div className='flex flex-col md:flex-row gap-6 md:gap-8'>
                <div className='flex-1'>
                    <h2 className='font-extrabold text-3xl md:text-5xl text-[#010101] mb-2 md:mb-4'>Drop Us A Message</h2>
                    <p className='text-sm md:text-lg text-[#363636] w-full'>We love to hear from our clients and userbase. Drop us a message and our team will respond as soon as we can.</p>
                </div>
                {/* <form className='flex-1 flex flex-col gap-2 md:gap-4'>
                    <input required type="text" placeholder='Your Name' className="w-full border text-[#363636] border-[#e0e0e0] bg-[#ffff] p-2 rounded-md" />
                    <input required type="email" name="" placeholder=' Your email' className="w-full border text-[#363636] border-[#e0e0e0] bg-[#ffff] p-2 rounded-md" />
                    <textarea required name="email" placeholder='Type your message..' rows="3" className="w-full border text-[#363636] border-[#e0e0e0] bg-[#ffff] p-2 rounded-md resize-none"></textarea>
                    <button className='text-[#ffff] text-sm md:text-lg bg-[#85009D] rounded-md px-4 py-3 w-full cursor-pointer'>Submit Message</button>
                </form> */}
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-2 md:gap-4">
                    {alert.show && (
                        <div
                            className={`w-full p-3 rounded-md flex justify-between items-center ${alert.type === "success"
                                    ? "bg-green-900/50 text-green-400"
                                    : "bg-red-900/50 text-red-400"
                                }`}
                            role="alert"
                            aria-live="polite"
                        >
                            <span>{alert.message}</span>
                            <button
                                onClick={handleCloseAlert}
                                className="text-white hover:text-gray-300 focus:outline-none"
                            >
                                ✕
                            </button>
                        </div>
                    )}
                    <input
                        required
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border text-[#363636] border-[#e0e0e0] bg-[#ffff] p-2 rounded-md"
                    />
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border text-[#363636] border-[#e0e0e0] bg-[#ffff] p-2 rounded-md"
                    />
                    <textarea
                        required
                        name="message"
                        placeholder="Type your message.."
                        rows="3"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full border text-[#363636] border-[#e0e0e0] bg-[#ffff] p-2 rounded-md resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="text-[#ffff] text-sm md:text-lg bg-[#85009D] rounded-md px-4 py-3 w-full cursor-pointer disabled:opacity-50"
                    >
                        {isLoading ? "Submitting..." : "Submit Message"}
                    </button>
                </form>
            </div>
            <PartnerCTR />
        </ >
    )
}

export default contactus
