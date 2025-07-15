"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";
import Image from "next/image";

export default function NominationForm({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        nomineeFullName: "",
        nomineeEmail: "",
        nomineeOrganisation: "",
        nomineeRole: "",
        nominationCategory: "",
        nomineeBio: "",
        keyContribution: "",
        linksToWork: "",
        reasonForNomination: "",
        nominatorFullName: "",
        nominatorEmail: "",
        nominatorOrganisation: "",
        nominatorRole: "",
        relationshipToNominee: "",
        permissionConsent: false,
        updatesConsent: false,
        documents: null,
    });

    const modalRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";

            const preventTouch = (e) => {
                if (!modalRef.current) return;
                const isInsideModal = modalRef.current.contains(e.target);
                if (!isInsideModal) {
                    e.preventDefault();
                    return;
                }
                const { scrollTop, scrollHeight, clientHeight } = modalRef.current;
                const atTop = scrollTop === 0;
                const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
                const scrollingUp = e.touches[0].clientY > e.targetTouches[0].clientY;
                const scrollingDown = e.touches[0].clientY < e.targetTouches[0].clientY;

                if ((atTop && scrollingUp) || (atBottom && scrollingDown)) {
                    e.preventDefault();
                }
            };
            document.addEventListener("touchmove", preventTouch, { passive: false });

            return () => {
                const top = parseInt(document.body.style.top || "0", 10);
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                window.scrollTo(0, -top);
                document.removeEventListener("touchmove", preventTouch);
            };
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({
            nomineeFullName: "",
            nomineeEmail: "",
            nomineeOrganisation: "",
            nomineeRole: "",
            nominationCategory: "",
            nomineeBio: "",
            keyContribution: "",
            linksToWork: "",
            reasonForNomination: "",
            nominatorFullName: "",
            nominatorEmail: "",
            nominatorOrganisation: "",
            nominatorRole: "",
            relationshipToNominee: "",
            permissionConsent: false,
            updatesConsent: false,
            documents: null,
        });
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
        onClose();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert("File size exceeds 5MB limit");
                e.target.value = "";
                return;
            }
            if (!["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
                alert("Only PDF and DOC files are allowed");
                e.target.value = "";
                return;
            }
            setFormData((prev) => ({
                ...prev,
                documents: file,
            }));
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-[964px] w-full max-h-[90vh] overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border-1 border-[#DBBB89] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
                        Submit a Nomination
                    </h3>
                    <button
                        className="absolute top-4 right-4 text-2xl text-[#85009D]"
                        onClick={onClose}
                    >
                        <IconComponent name="close" color='#7C7C7C' size={16} />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <h4 className="font-semibold text-xl text-[#1B1B1B]">Nominee Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            id="nomineeFullName"
                            name="nomineeFullName"
                            placeholder="Full Name*"
                            value={formData.nomineeFullName}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="email"
                            id="nomineeEmail"
                            name="nomineeEmail"
                            placeholder="Email Address*"
                            value={formData.nomineeEmail}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            id="nomineeOrganisation"
                            name="nomineeOrganisation"
                            placeholder="Organisation"
                            value={formData.nomineeOrganisation}
                            onChange={handleChange}
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="text"
                            id="nomineeRole"
                            name="nomineeRole"
                            placeholder="Role"
                            value={formData.nomineeRole}
                            onChange={handleChange}
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>

                    <h4 className="font-semibold text-xl text-[#1B1B1B]">Contribution Details</h4>
                    <div className="relative w-full">
                        <select
                            id="nominationCategory"
                            name="nominationCategory"
                            value={formData.nominationCategory}
                            onChange={handleChange}
                            required
                            className="appearance-none border-1 border-[#85009D] text-[#363636] w-full p-4 bg-white cursor-pointer rounded-[2px] focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        >
                            <option value="">Select Nomination Category*</option>
                            <option value="Thought Leader">Thought Leader</option>
                            <option value="Case Study">Case Study</option>
                            <option value="Technical Expert">Technical Expert</option>
                            <option value="Community Builder">Community Builder</option>
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-[#85009D]">
                            <IconComponent name="drop-down" color="#808080" size={16} />
                        </div>
                    </div>
                    <textarea
                        id="nomineeBio"
                        name="nomineeBio"
                        placeholder="In 2–3 sentences, describe the nominee’s background.*"
                        value={formData.nomineeBio}
                        onChange={handleChange}
                        required
                        className="resize-none w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        rows="4"
                    />
                    <textarea
                        id="keyContribution"
                        name="keyContribution"
                        placeholder="What specific insight, project or work are you nominating them for?*"
                        value={formData.keyContribution}
                        onChange={handleChange}
                        required
                        className="resize-none w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        rows="4"
                    />
                    <input
                        type="text"
                        id="linksToWork"
                        name="linksToWork"
                        placeholder="Links to Work or Profile (e.g., LinkedIn, GitHub)"
                        value={formData.linksToWork}
                        onChange={handleChange}
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                    />

                    <h4 className="font-semibold text-xl text-[#1B1B1B]">Why You’re Nominating Them</h4>
                    <textarea
                        id="reasonForNomination"
                        name="reasonForNomination"
                        placeholder="Tell us why this person’s contribution matters to our community.*"
                        value={formData.reasonForNomination}
                        onChange={handleChange}
                        required
                        className="resize-none w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        rows="4"
                    />

                    <h4 className="font-semibold text-xl text-[#1B1B1B]">Your (Nominator) Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            id="nominatorFullName"
                            name="nominatorFullName"
                            placeholder="Your Full Name*"
                            value={formData.nominatorFullName}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="email"
                            id="nominatorEmail"
                            name="nominatorEmail"
                            placeholder="Your Email Address*"
                            value={formData.nominatorEmail}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            id="nominatorOrganisation"
                            name="nominatorOrganisation"
                            placeholder="Organisation"
                            value={formData.nominatorOrganisation}
                            onChange={handleChange}
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="text"
                            id="nominatorRole"
                            name="nominatorRole"
                            placeholder="Role"
                            value={formData.nominatorRole}
                            onChange={handleChange}
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
                    <input
                        type="text"
                        id="relationshipToNominee"
                        name="relationshipToNominee"
                        placeholder="Relationship to Nominee"
                        value={formData.relationshipToNominee}
                        onChange={handleChange}
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                    />

                    <h4 className="font-semibold text-xl text-[#1B1B1B]">Permissions & Consent</h4>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="permissionConsent"
                            name="permissionConsent"
                            checked={formData.permissionConsent}
                            onChange={handleChange}
                            required
                            className="p-2 border border-[#85009D] rounded focus:outline-none"
                        />
                        <label htmlFor="permissionConsent" className="block text-[#1B1B1B] font-medium">
                            I confirm I have the nominee’s permission to share their information.*
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="updatesConsent"
                            name="updatesConsent"
                            checked={formData.updatesConsent}
                            onChange={handleChange}
                            className="p-2 border border-[#85009D] rounded focus:outline-none"
                        />
                        <label htmlFor="updatesConsent" className="block text-[#1B1B1B] font-medium">
                            I agree to receive updates about the nomination.
                        </label>
                    </div>

                    <h4 className="font-semibold text-xl text-[#1B1B1B]">Attachments (Optional)</h4>
                    <div
                        className="flex flex-col items-center bg-white border-1 border-[#85009D] p-5 rounded-[2px] cursor-pointer mb-4"
                        onClick={() => fileInputRef.current.click()}
                    >
                        <Image
                            src="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/download.png"
                            alt="upload documents"
                            width={128}
                            height={128}
                            className="w-[128px] h-[128px] object-cover mb-4"
                        />
                        <p className="text-[#1B1B1B] text-center">
                            <span className="font-semibold">Attach Supporting Documents</span> (PDF, DOC, Max 5MB)
                        </p>
                    </div>
                    <input
                        type="file"
                        id="documents"
                        name="documents"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        className="hidden"
                    />

                    <button
                        type="submit"
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto"
                    >
                        Submit Nomination
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </form>
            </div>
        </div>
    );
}