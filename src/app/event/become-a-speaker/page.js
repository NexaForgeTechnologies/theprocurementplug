"use client";
import { useState } from "react";

import ConsultingPartnerCTR from '@/containers/events/become-a-speaker/ConsultingPartnerCTR'

function Page() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        company: "",
        proposedtopic: "",
        proposal: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({
            name: "",
            email: "",
            role: "",
            company: "",
            proposedtopic: "",
            proposal: "",
        });
        // onClose(); 
    };

    return (
        <>
            <ConsultingPartnerCTR />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 ">
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#010101] mb-4">
                        Speaker Benefits
                    </h2>
                    <ul className="text-[#010101] marker:text-[#85009D] list-disc pl-5">
                        <li className="mb-2">Gain visibility among procurement professionals</li>
                        <li className="mb-2">Enhance your professional reputation and credibility</li>
                        <li className="mb-2">Access exclusive networking opportunities</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 text-[#010101] ">
                    <div className='flex items-center gap-1 mb-2'>
                        <p>
                            <span className="text-4xl text-[#85009D] leading-none">“</span>
                            Speaking at The Procurement Plud was game changer for my career.
                            <span className="text-4xl text-[#85009D] leading-none">”</span>
                        </p>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <div className='w-6 h-[2px] bg-[#85009D]'></div>
                        <p>
                           Arthur Taylor, Procurement Specialist
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-[#010101] ">
                    <div className='flex items-center gap-1 mb-2'>
                        <p>
                            <span className="text-4xl text-[#85009D] leading-none">“</span>
                            A fantastic opportunity to engage with a vibrant community.
                            <span className="text-4xl text-[#85009D] leading-none">”</span>
                        </p>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <div className='w-6 h-[2px] bg-[#85009D]'></div>
                        <p>
                            Sarah Johnson, Supply Chain Manager
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 ">
                <div>
                    <div className='mb-4 md:mb-8'>
                        <h2 className="text-xl md:text-2xl font-bold text-[#010101] mb-4">
                            The Process
                        </h2>
                        <ul className="list-style flex flex-col gap-4 text-[#010101]">

                            <li>Apply Submit your proposal.</li>
                            <li>Review Our team will evaluate your submission.</li>
                            <li>Confirm Confirm Receive confirmation and event details.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#010101] mb-4">
                            The Process
                        </h2>
                        <ul className="list-style-arrow flex flex-col gap-2 text-[#010101]">

                            <li className="mb-2"><strong>Apply</strong> Submit your speaker proposal.</li>
                            <li className="mb-2"><strong>Review</strong> Our team will evaluate your submission.</li>
                        </ul>
                    </div>
                </div>
                <div className="border-1 border-[#85009D] p-4 md:p-6 rounded-lg bg-white">
                    <h2 className="text-center text-xl md:text-2xl font-bold text-[#010101] mb-4">
                        Submit Speaker Proposal
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-[#010101] font-medium"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-[#010101] border-1 border-[#85009D] rounded focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-[#010101] font-medium"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-[#010101] border-1 border-[#85009D] rounded focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="role"
                                className="block text-[#010101] font-medium"
                            >
                                Role
                            </label>
                            <input
                                type="text"
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-[#010101] border-1 border-[#85009D] rounded focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="company"
                                className="block text-[#010101] font-medium"
                            >
                                Company
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-[#010101] border-1 border-[#85009D] rounded focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="proposedtopic"
                                className="block text-[#010101] font-medium"
                            >
                                Proposed Topic
                            </label>
                            <input
                                type="text"
                                id="proposedtopic"
                                name="proposedtopic"
                                value={formData.proposedtopic}
                                onChange={handleChange}
                                required
                                className="w-full p-2 text-[#010101] border-1 border-[#85009D] rounded focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="proposal"
                                className="block text-[#010101] font-medium"
                            >
                                Proposal
                            </label>
                            <textarea
                                id="proposal"
                                name="proposal"
                                value={formData.proposal}
                                onChange={handleChange}
                                className="w-full p-2 text-[#010101] border-1 border-[#85009D] rounded focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
                                rows="4"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-[#b58c4a] text-white rounded hover:bg-[#a07b3a]"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className="bg-[#b58c4a] p-6 rounded flex flex-col md:flex-row item-center justify-around text-center md:text-left text-white gap-4">
                <p>Upskill your capabilities</p>
                <span className="text-2xl">&rarr;</span>
                <p>The Procurement Plug Academy</p>
            </div>

        </>
    )
}

export default Page
