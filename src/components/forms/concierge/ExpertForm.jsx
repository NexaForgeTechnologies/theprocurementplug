"use client";

import { useState, useRef } from "react";
import Image from "next/image";

import IconComponent from "@/components/icon/Icon";
import Checkbox from "@/components/concierge/Checkbox";
import SuccessPopup from "@/components/SuccessMessageComp";

export default function JoinForm({ isOpen, onClose }) {
    const modalRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    // checkbox and drop down data
    const experienceOptions = [
        { value: "", label: "Years of Procurement Experience" },
        { value: "consulting", label: "Consulting Services" },
        { value: "procurement", label: "Procurement Solutions" },
        { value: "training", label: "Training Programs" },
        { value: "other", label: "Other" },
    ];
    const expertiseOptions = [
        { key: "mcipsCips", label: "MCIPS / CIPS qualified" },
        { key: "projectManagement", label: "Project Management (PRINCE2 / PMP)" },
        { key: "sixSigma", label: "Six Sigma / Lean" },
        { key: "other", label: "Other" },
    ];
    const procurementAreasOptions = [
        { key: "contractDrafting", label: "Contract drafting & reviews" },
        { key: "sourcing", label: "Sourcing & supplier discovery" },
        { key: "categoryStrategy", label: "Category strategy & analysis" },
        { key: "marketInsight", label: "Market insight reports" },
        { key: "commercialStrategies", label: "Commercial strategies development" },
        { key: "evaluationSeat", label: "Evaluation seat" },
        { key: "interviewSeat", label: "Interview seat" },
        { key: "p2pSrm", label: "P2P / SRM / eSourcing systems" },
        { key: "tenderSupport", label: "Tender support" },
        { key: "other", label: "Other" },
    ];
    const availabilityOptions = [
        { key: "immediately", label: "Immediately" },
        { key: "withinTwoWeeks", label: "Within 2 weeks" },
        { key: "withinOneMonth", label: "Within 1 month" },
        { key: "laterDiscuss", label: "Later / let's discuss" },
    ];
    const workloadOptions = [
        { key: "occasionalTasks", label: "Occasional tasks" },
        { key: "regularTasks", label: "Regular tasks each month" },
        { key: "openToLargeComplex", label: "Open to large / complex assignments" },
    ];

    // Form Data
    const initialFormData = {
        // About You
        name: "",
        email: "",
        phone: "",
        linkedIn: "",
        location: "",

        // Experience
        experience: "",
        experties: [],
        procurementAreas: [],
        experience_details: "",

        // Availability & Preferences
        availability: [],
        workload: [],

        // cv upload
        cv: "",

        // Consent & Submit
        Subscribe: false,
    }
    const [formData, setFormData] = useState(initialFormData);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    const handleCheckboxArray = (field, value) => {
        setFormData((prev) => {
            const current = prev[field] || [];
            const exists = current.includes(value);

            return {
                ...prev,
                [field]: exists
                    ? current.filter((item) => item !== value) // remove
                    : [...current, value], // add
            };
        });
    };

    // Success Popup
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    // ✅ Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("/api/concierge/become-expert", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // Clear form
                setFormData(initialFormData);

                // show success popup
                setShowSuccessPopup(true);

                // Close popup after timeout
                setTimeout(() => {
                    setShowSuccessPopup(false);  // hide popup
                    onClose();                   // close modal
                }, 3000);
            } else {
                console.error(result.error || "Failed to submit application.");
            }
        } catch (error) {
            console.error("Client error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // ✅ State to hold selected file name
    const [selectedFileName, setSelectedFileName] = useState("");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-[1134px] w-full max-h-[90vh]  overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border-1 border-[#DBBB89] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D]">
                        Join The Plug Concierge Expert Network
                    </h3>
                    <button
                        className="absolute top-4 right-4 text-2xl text-[#85009D]"
                        onClick={onClose}
                    >
                        <IconComponent name="close" color='#7C7C7C' size={16} />
                    </button>
                </div>

                <p className="md:max-w-[978px] md:text-xl text-[#1B1B1B] mt-4 mb-4">
                    Join The Plug Concierge as a fractional expert and lend your specialized skills to high-impact
                    projects on a flexible schedule. Whether you're a procurement pro, data strategist, or industry
                    consultant, this is your chance to collaborate with leading organizations while maintaining control
                    over your time and focus.
                </p>

                <p className="font-semibold text-xl text-[#1B1B1B] mb-4">
                    Perks:
                </p>

                <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-8">
                    <div className="flex gap-2 items-center">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl">✓</div>
                        <div>
                            <p className="md:text-[20px] text-[#1B1B1B]">Work remotely</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl">✓</div>
                        <div>
                            <p className="md:text-[20px] text-[#1B1B1B]">Paid per task (£350–£1,100)</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="font-semibold text-[#B08D57] text-xl md:text-2xl">✓</div>
                        <div>
                            <p className="md:text-[20px] text-[#1B1B1B]">Choose projects that fit you</p>
                        </div>
                    </div>
                </div>

                <p className="font-semibold text-xl text-[#1B1B1B] mb-4">
                    Apply below and we’ll be in touch.
                </p>

                <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D] mb-4">
                    About You
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 mb-4">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="url"
                            id="linkedIn"
                            name="linkedIn"
                            placeholder="LinkedIn Profile URL"
                            value={formData.linkedIn}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Location / Time Zone"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>

                    {/* Experience */}
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D] mb-4">
                        Your Experience
                    </h3>
                    <div className="relative">
                        <select
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] appearance-none"
                        >
                            {experienceOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
                            <IconComponent name="drop-down" color="#808080" size={16} />
                        </div>
                    </div>

                    {/* Experties */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
                        {/* Label */}
                        <p className="lg:col-span-1 text-[#1B1B1B] mb-4 lg:mb-0">
                            Do you hold any of these?
                        </p>

                        {/* Checkboxes */}
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                            {expertiseOptions.map((opt) => (
                                <Checkbox
                                    key={opt.key}
                                    id={opt.key}
                                    name={opt.key}
                                    checked={formData.experties.includes(opt.key)}
                                    onChange={() => handleCheckboxArray("experties", opt.key)}
                                    label={opt.label}
                                />
                            ))}

                        </div>
                    </div>
                    {/* Procurement Areas */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
                        {/* Label */}
                        <p className="lg:col-span-1 text-[#1B1B1B] mb-4 lg:mb-0">
                            Key procurement areas you can support:
                        </p>

                        {/* Checkboxes */}
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                            {procurementAreasOptions.map((opt) => (
                                <Checkbox
                                    key={opt.key}
                                    id={opt.key}
                                    name={opt.key}
                                    checked={formData.procurementAreas.includes(opt.key)}
                                    onChange={() => handleCheckboxArray("procurementAreas", opt.key)}
                                    label={opt.label}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Brief Message */}
                    <textarea
                        id="experience_details"
                        name="experience_details"
                        placeholder="Briefly tell us about your procurement expertise"
                        value={formData.experience_details}
                        onChange={handleChange}
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
                        rows="4"
                    />

                    {/* Availability & Preferences */}
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D] mb-4">
                        Availability & Preferences
                    </h3>
                    {/* Availability */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
                        <p className="lg:col-span-1 text-[#1B1B1B] mb-4 lg:mb-0">
                            How soon could you start taking tasks?
                        </p>

                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                            {availabilityOptions.map((opt) => (
                                <Checkbox
                                    key={opt.key}
                                    id={opt.key}
                                    name={opt.key}
                                    checked={formData.availability.includes(opt.key)}
                                    onChange={() => handleCheckboxArray("availability", opt.key)}
                                    label={opt.label}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Work Load */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
                        <p className="lg:col-span-1 text-[#1B1B1B] mb-4 lg:mb-0">
                            Preferred workload
                        </p>

                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                            {workloadOptions.map((opt) => (
                                <Checkbox
                                    key={opt.key}
                                    id={opt.key}
                                    name={opt.key}
                                    checked={formData.workload.includes(opt.key)}
                                    onChange={() => handleCheckboxArray("workload", opt.key)}
                                    label={opt.label}
                                />
                            ))}
                        </div>
                    </div>

                    {/* CV Upload */}
                    {/* <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D] mb-4">
                        Optional Upload
                    </h3>
                    <div
                        className="flex flex-col items-center bg-white border border-[#85009D] p-5 rounded-[2px] cursor-pointer mb-4"
                        onClick={() => document.getElementById('fileInput').click()}
                    >
                        <Image
                            src="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/download.png"
                            alt="upload banner"
                            width={128}
                            height={128}
                            className="w-[128px] h-[128px] object-cover mb-4"
                        />
                        <p className="text-[#1B1B1B] text-center">
                            <span className="font-semibold">Upload your CV</span> (PDF or DOC) (File upload, optional)
                        </p>
                        <input
                            id="fileInput"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const validTypes = [
                                        "application/pdf",
                                        "application/msword",
                                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                    ];
                                    if (!validTypes.includes(file.type)) {
                                        alert("Please upload a valid PDF or Word document (.pdf, .doc, .docx).");
                                        return;
                                    }
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setFormData((prev) => ({ ...prev, cv: reader.result }));
                                    };
                                    reader.readAsDataURL(file); // convert to Base64
                                }
                            }}
                        />
                    </div> */}

                    {/* CV Upload */}
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D] mb-4">
                        Upload
                    </h3>
                    <div
                        className="flex flex-col items-center bg-white border border-[#85009D] p-5 rounded-[2px] cursor-pointer mb-4 relative"
                        onClick={() => {
                            if (!selectedFileName) {
                                document.getElementById("fileInput").click();
                            }
                        }}
                    >
                        <Image
                            src="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/download.png"
                            alt="upload banner"
                            width={128}
                            height={128}
                            className="w-[128px] h-[128px] object-cover mb-4"
                        />

                        {/* ✅ If file selected, show name + remove button */}
                        {selectedFileName ? (
                            <div className="flex items-center gap-2">
                                <p className="text-[#1B1B1B] text-center font-medium">{selectedFileName}</p>
                                <button
                                    type="button"
                                    className="text-red-500 text-sm font-bold"
                                    onClick={(e) => {
                                        e.stopPropagation(); // prevent triggering fileInput
                                        setSelectedFileName("");
                                        setFormData((prev) => ({ ...prev, cv: "" }));
                                        document.getElementById("fileInput").value = ""; // reset input
                                    }}
                                >
                                    ❌
                                </button>
                            </div>
                        ) : (
                            <p className="text-[#1B1B1B] text-center">
                                <span className="font-semibold">Upload your CV</span> (PDF or DOC)
                                <br />
                                <span className="text-sm text-gray-500">(File upload, optional)</span>
                            </p>
                        )}

                        <input
                            id="fileInput"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const validTypes = [
                                        "application/pdf",
                                        "application/msword",
                                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                    ];
                                    if (!validTypes.includes(file.type)) {
                                        alert("Please upload a valid PDF or Word document (.pdf, .doc, .docx).");
                                        return;
                                    }

                                    setSelectedFileName(file.name); // ✅ show file name

                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setFormData((prev) => ({ ...prev, cv: reader.result }));
                                    };
                                    reader.readAsDataURL(file); // convert to Base64
                                }
                            }}
                        />
                    </div>

                    {/* Consent & Submit */}
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D] mb-4">
                        Consent & Submit
                    </h3>
                    <div className="flex items-start gap-2">
                        <input
                            type="checkbox"
                            id="Subscribe"
                            name="Subscribe"
                            checked={formData.Subscribe}
                            onChange={handleChange}
                            required
                            className="p-2 border border-[#85009D] rounded focus:outline-none mt-[8px]"
                        />
                        <label
                            htmlFor="Subscribe"
                            className="max-w-[778px] block md:text-[20px] text-[#1B1B1B] font-medium"
                        >
                            I agree to be contacted by The Procurement Plug about freelance or contract
                            opportunities.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        {isLoading ? "Submitting..." : "Join the Expert Network"}
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </form>
            </div>

            {/* ✅ Success Popup */}
            <SuccessPopup
                isOpen={showSuccessPopup}
                title="Thank you!"
                message="Thanks for applying to join The Plug Concierge. Our team will review your profile and contact you soon with the next steps."
            />
        </div>
    );
}
