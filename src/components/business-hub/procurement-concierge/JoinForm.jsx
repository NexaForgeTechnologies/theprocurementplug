"use client";

import { useState, useEffect, useRef } from "react";
import IconComponent from "@/components/icon/Icon";
import Image from "next/image";
import Checkbox from "@/components/business-hub/procurement-concierge/Checkbox";

export default function JoinForm({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        linkedIn: "",
        location: "",
        experience: "",
        message: "",
        mcipsCips: false,
        projectmanagement: false,
        sixsigma: false,
        other: false,
        contractdrafting: false,
        categorystrategy: false,
        commercialstrategies: false,
        interviewseat: false,
        tendersupport: false,
        sourcingsupplier: false,
        marketinsight: false,
        evaluationseat: false,
        p2pSrmESourcing: false,
        immediately: false,
        withinonemonth: false,
        withintwomonth: false,
        laterdiscuss: false,
        occasionaltasks: false,
        opentolargecomplex: false,
        regulartasks: false,
        Subscribe: false,
    });

    const modalRef = useRef(null);
    const [alert, setAlert] = useState({ message: "", type: "", show: false });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";

            // Prevent touchmove on background, allow in modal
            const preventTouch = (e) => {
                if (!modalRef.current) return;
                const isInsideModal = modalRef.current.contains(e.target);
                if (!isInsideModal) {
                    e.preventDefault();
                    return;
                }
                // Allow scrolling within modal if it has scrollable content
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
                // Restore scroll position and remove styles
                const top = parseInt(document.body.style.top || "0", 10);
                document.body.style.position = "";
                document.body.style.top = "";
                document.body.style.width = "";
                window.scrollTo(0, -top);
                document.removeEventListener("touchmove", preventTouch);
            };
        }
    }, [isOpen]);
    // 

    useEffect(() => {
        if (alert.show) {
            const timer = setTimeout(() => {
                setAlert({ message: "", type: "", show: false });
                if (alert.type === "success") {
                    onClose(); // Close modal after alert disappears
                }
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [alert.show, onClose]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setAlert({ message: "", type: "", show: false });

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            const fileInput = document.getElementById('fileInput');
            if (fileInput.files[0]) {
                formDataToSend.append('cv', fileInput.files[0]);
            }

            const response = await fetch('/api/become-a-plug-concierge-expert', {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.json();

            if (response.ok && result.success) {
                console.log('Server returned:', result.data);
                setAlert({
                    message: "Thank you for applying! We’ve received your application to join our Plug Concierge Expert Network. Look out for an email from us within the next 48 hours with next steps—meanwhile, feel free to review our Concierge Handbook or explore our Community Forum",
                    type: "success",
                    show: true,
                });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    linkedIn: "",
                    location: "",
                    experience: "",
                    message: "",
                    mcipsCips: false,
                    projectmanagement: false,
                    sixsigma: false,
                    other: false,
                    contractdrafting: false,
                    categorystrategy: false,
                    commercialstrategies: false,
                    interviewseat: false,
                    tendersupport: false,
                    sourcingsupplier: false,
                    marketinsight: false,
                    evaluationseat: false,
                    p2pSrmESourcing: false,
                    immediately: false,
                    withinonemonth: false,
                    withintwomonth: false,
                    laterdiscuss: false,
                    occasionaltasks: false,
                    opentolargecomplex: false,
                    regulartasks: false,
                    Subscribe: false,
                });
                onClose();
            } else {
                setAlert({
                    message: result.error || "Failed to submit application. Please try again.",
                    type: "error",
                    show: true,
                });
            }
        } catch (error) {
            console.error("Client error:", error);
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

    if (!isOpen) return null;

    const experienceOptions = [
        { value: "", label: "Years of Procurement Experience" },
        { value: "consulting", label: "Consulting Services" },
        { value: "procurement", label: "Procurement Solutions" },
        { value: "training", label: "Training Programs" },
        { value: "other", label: "Other" },
    ];

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
            <div
                ref={modalRef}
                className="max-w-[1134px] w-full max-h-[90vh]  overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border-1 border-[#DBBB89] custom-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                {alert.show && (
                    <div
                        className={`w-full p-3 rounded-md flex justify-between items-center ${alert.type === "success" ? "bg-green-900/50 text-green-400" : "bg-red-900/50 text-red-400"
                            }`}
                        role="alert"
                        aria-live="polite"
                        dangerouslySetInnerHTML={{ __html: alert.message }}
                    >
                        <span></span>
                        <button
                            onClick={handleCloseAlert}
                            className="text-white hover:text-gray-300 focus:outline-none"
                        >
                            ✕
                        </button>
                    </div>
                )}
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
                            placeholder="Email Address (Email)"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number (Optional)"
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
                            placeholder="LinkedIn Profile URL (Optional)"
                            value={formData.linkedIn}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                        <input
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Location / Time Zone (Short text)"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                        />
                    </div>
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
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="flex-1">
                            <p className="text-[#1B1B1B] mb-4">
                                Do you hold any of these?
                            </p>
                        </div>
                        <div className="space-y-2">
                            <Checkbox
                                id="mcipsCips"
                                name="mcipsCips"
                                checked={formData.mcipsCips}
                                onChange={handleChange}
                                label="MCIPS / CIPS qualified"
                            />
                            <Checkbox
                                id="sixsigma"
                                name="sixsigma"
                                checked={formData.sixsigma}
                                onChange={handleChange}
                                label="Six Sigma / Lean"
                            />
                            <Checkbox
                                id="other"
                                name="other"
                                checked={formData.other}
                                onChange={handleChange}
                                label="Other"
                            />
                        </div>
                        <div className="space-y-2">
                            <Checkbox
                                id="projectmanagement"
                                name="projectmanagement"
                                checked={formData.projectmanagement}
                                onChange={handleChange}
                                label="Project Management (PRINCE2 / PMP)"
                            />
                            <Checkbox
                                id="other"
                                name="other"
                                checked={formData.other}
                                onChange={handleChange}
                                label="Other"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1  lg:grid-cols-3">
                        <div className="flex-1">
                            <p className="text-[#1B1B1B] mb-4">
                                Key procurement areas you can support:
                            </p>
                        </div>
                        <div className="space-y-2">
                            <Checkbox
                                id="contractdrafting"
                                name="contractdrafting"
                                checked={formData.contractdrafting}
                                onChange={handleChange}
                                label="Contract drafting & reviews"
                            />
                            <Checkbox
                                id="categorystrategy"
                                name="categorystrategy"
                                checked={formData.categorystrategy}
                                onChange={handleChange}
                                label="Category strategy & analysis"
                            />
                            <Checkbox
                                id="commercialstrategies"
                                name="commercialstrategies"
                                checked={formData.commercialstrategies}
                                onChange={handleChange}
                                label="Commercial strategies development "
                            />
                            <Checkbox
                                id="interviewseat"
                                name="interviewseat"
                                checked={formData.interviewseat}
                                onChange={handleChange}
                                label="Interview seat"
                            />
                            <Checkbox
                                id="tendersupport"
                                name="tendersupport"
                                checked={formData.tendersupport}
                                onChange={handleChange}
                                label="Tender support"
                            />
                        </div>
                        <div className="space-y-2">
                            <Checkbox
                                id="sourcingsupplier"
                                name="sourcingsupplier"
                                checked={formData.sourcingsupplier}
                                onChange={handleChange}
                                label="Sourcing & supplier discovery"
                            />
                            <Checkbox
                                id="marketinsight"
                                name="marketinsight"
                                checked={formData.marketinsight}
                                onChange={handleChange}
                                label="Market insight reports"
                            />
                            <Checkbox
                                id="evaluationseat"
                                name="evaluationseat"
                                checked={formData.evaluationseat}
                                onChange={handleChange}
                                label="Evaluation seat"
                            />
                            <Checkbox
                                id="p2pSrmESourcing"
                                name="p2pSrmESourcing"
                                checked={formData.p2pSrmESourcing}
                                onChange={handleChange}
                                label="P2P / SRM / eSourcing systems"
                            />
                            <Checkbox
                                id="other"
                                name="other"
                                checked={formData.other}
                                onChange={handleChange}
                                label="Other (please specify)"
                            />
                        </div>
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Briefly tell us about your procurement expertise"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
                        rows="4"
                    />
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D] mb-4">
                        Availability & Preferences
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="flex-1">
                            <p className="text-[#1B1B1B] mb-4">
                                How soon could you start taking tasks?
                            </p>
                        </div>
                        <div className="space-y-2">
                            <Checkbox
                                id="immediately"
                                name="immediately"
                                checked={formData.immediately}
                                onChange={handleChange}
                                label="Immediately"
                            />
                            <Checkbox
                                id="withinonemonth"
                                name="withinonemonth"
                                checked={formData.withinonemonth}
                                onChange={handleChange}
                                label="Within 1 month"
                            />
                        </div>
                        <div className="space-y-2">
                            <Checkbox
                                id="withintwomonth"
                                name="withintwomonth"
                                checked={formData.withintwomonth}
                                onChange={handleChange}
                                label="Within 2 weeks"
                            />
                            <Checkbox
                                id="laterdiscuss"
                                name="laterdiscuss"
                                checked={formData.laterdiscuss}
                                onChange={handleChange}
                                label="Later / let's discuss"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="flex-1">
                            <p className="text-[#1B1B1B] mb-4">
                                Preferred workload
                            </p>
                        </div>
                        <div className="space-y-2">
                            <Checkbox
                                id="occasionaltasks"
                                name="occasionaltasks"
                                checked={formData.occasionaltasks}
                                onChange={handleChange}
                                label="Occasional tasks"
                            />
                            <Checkbox
                                id="opentolargecomplex"
                                name="opentolargecomplex"
                                checked={formData.opentolargecomplex}
                                onChange={handleChange}
                                label="Open to large / complex assignments"
                            />
                        </div>
                        <div className="space-y-2">
                            <Checkbox
                                id="regulartasks"
                                name="regulartasks"
                                checked={formData.regulartasks}
                                onChange={handleChange}
                                label="Regular tasks each month"
                            />
                        </div>
                    </div>
                    <h3 className="font-semibold text-2xl md:text-3xl text-[#85009D] mb-4">
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
                                    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

                                    if (!validTypes.includes(file.type)) {
                                        alert('Please upload a valid PDF or Word document (.pdf, .doc, .docx).');
                                        return;
                                    }

                                    console.log('Uploading document:', {
                                        name: file.name,
                                        size: file.size,
                                        type: file.type
                                    });

                                    const formData = new FormData();
                                    formData.append('cv', file);

                                    // TODO: Upload logic here (e.g., fetch or axios call)
                                    // Example:
                                    // fetch('/upload-endpoint', {
                                    //     method: 'POST',
                                    //     body: formData
                                    // }).then(res => res.json()).then(data => {
                                    //     console.log('Upload success:', data);
                                    // }).catch(err => {
                                    //     console.error('Upload error:', err);
                                    // });
                                }
                            }}
                        />
                    </div>
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
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                        {isLoading ? "Submitting..." : "Join the Expert Network"}
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </button>
                </form>
            </div>
        </div >
    );
}
