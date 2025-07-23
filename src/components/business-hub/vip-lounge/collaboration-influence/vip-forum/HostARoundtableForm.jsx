// "use client";

// import React, { useState, useEffect, useRef } from "react";
// // import IconComponent from "@/components/icon/Icon";

// export default function RequestDemoForm({ isOpen, onClose }) {
//     const [formData, setFormData] = useState({
//         name: "",
//         company: "",
//         role: "",
//         email: "",
//         phone: "",
//         implementationtimeframe: "",
//         message: "",
//         Subscribe: false,
//         package: "",
//         payment: "",
//     });
//     const [step, setStep] = useState(1);
//     const modalRef = useRef(null);

//     useEffect(() => {
//         if (isOpen) {
//             const scrollY = window.scrollY;
//             document.body.style.position = "fixed";
//             document.body.style.top = `-${scrollY}px`;
//             document.body.style.width = "100%";
//             const preventTouch = (e) => {
//                 if (!modalRef.current) return;
//                 const isInsideModal = modalRef.current.contains(e.target);
//                 if (!isInsideModal) {
//                     e.preventDefault();
//                     return;
//                 }
//                 const { scrollTop, scrollHeight, clientHeight } = modalRef.current;
//                 const atTop = scrollTop === 0;
//                 const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
//                 const scrollingUp = e.touches[0].clientY > e.targetTouches[0].clientY;
//                 const scrollingDown = e.touches[0].clientY < e.targetTouches[0].clientY;
//                 if ((atTop && scrollingUp) || (atBottom && scrollingDown)) {
//                     e.preventDefault();
//                 }
//             };
//             document.addEventListener("touchmove", preventTouch, { passive: false });
//             return () => {
//                 const top = parseInt(document.body.style.top || "0", 10);
//                 document.body.style.position = "";
//                 document.body.style.top = "";
//                 document.body.style.width = "";
//                 window.scrollTo(0, -top);
//                 document.removeEventListener("touchmove", preventTouch);
//             };
//         }
//     }, [isOpen]);

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: type === "checkbox" ? checked : value,
//         }));
//     };

//     const nextStep = () => setStep(step + 1);
//     const prevStep = () => setStep(step - 1);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (step === 5) {
//             console.log("Form submitted:", formData);
//             setFormData({
//                 name: "",
//                 company: "",
//                 role: "",
//                 email: "",
//                 phone: "",
//                 implementationtimeframe: "",
//                 message: "",
//                 Subscribe: false,
//                 package: "",
//                 payment: "",
//             });
//             onClose();
//         } else {
//             nextStep();
//         }
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
//             <div
//                 ref={modalRef}
//                 className="max-w-[964px] w-full max-h-[90vh] overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-md border-1 border-[#DBBB89] custom-scrollbar"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 {/* <div className="flex justify-between items-center mb-4">
//                     <h3 className="font-semibold text-2xl md:text-3xl text-[#1B1B1B]">
//                         Request a Consultation
//                     </h3>
//                     <button
//                         className="absolute top-4 right-4 text-2xl text-[#85009D]"
//                         onClick={onClose}
//                     >
//                         <IconComponent name="close" color='#7C7C7C' size={16} />
//                     </button>
//                 </div> */}
//                 <div className="flex flex-col justify-center mb-6">
//                     <div className="flex justify-between items-center w-full">
//                         {[1, 2, 3, 4, 5].map((s) => (
//                             <React.Fragment key={s}>
//                                 <div className="flex items-center">
//                                     <div
//                                         className={`w-[100px] h-[100px] text-[50px] font-bold flex items-center justify-center rounded-full ${step === s
//                                                 ? "bg-[#85009D] text-white"
//                                                 : "bg-white text-[#B08D57] border border-[#85009D]"
//                                             }`}
//                                     >
//                                         {s}
//                                     </div>
//                                 </div>

//                                 {/* Connector Line */}
//                                 {s < 5 && (
//                                     <div
//                                         className={`h-1 flex-1 mx-2 ${step > s
//                                                 ? "bg-[#85009D]" // solid line for completed
//                                                 : step === s
//                                                     ? "bg-[#85009D]" // solid for current
//                                                     : "border-t-2 border-dashed border-[#B08D57]" // dashed for upcoming
//                                             }`}
//                                     />
//                                 )}
//                             </React.Fragment>
//                         ))}
//                     </div>


//                     <div className="my-4 text-2xl md:text-[32px] font-semibold text-[#85009D]">
//                         {step === 1 && "Company Registration"}
//                         {step === 2 && "Select Package"}
//                         {step === 3 && "Uploadable Details & Assets"}
//                         {step === 4 && "Review & Payment"}
//                         {step === 5 && "Confirmation"}
//                     </div>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     {step === 1 && (
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 placeholder="Full Name*"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 required
//                                 className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
//                             />
//                             <input
//                                 type="text"
//                                 id="company"
//                                 name="company"
//                                 placeholder="Company*"
//                                 value={formData.company}
//                                 onChange={handleChange}
//                                 required
//                                 className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
//                             />
//                             <input
//                                 type="text"
//                                 id="role"
//                                 name="role"
//                                 placeholder="Role"
//                                 value={formData.role}
//                                 onChange={handleChange}
//                                 className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
//                             />
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 placeholder="Work email*"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 required
//                                 className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
//                             />
//                         </div>
//                     )}
//                     {step === 2 && (
//                         <div className="space-y-4">
//                             <label className="block text-[#1B1B1B] font-medium">Select Package</label>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div className="p-4 border-1 border-[#85009D] rounded-[2px] bg-white">
//                                     <input
//                                         type="radio"
//                                         id="package1"
//                                         name="package"
//                                         value="1 Week"
//                                         checked={formData.package === "1 Week"}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                     <label htmlFor="package1" className="ml-2">1 Week - £150</label>
//                                 </div>
//                                 <div className="p-4 border-1 border-[#85009D] rounded-[2px] bg-white">
//                                     <input
//                                         type="radio"
//                                         id="package2"
//                                         name="package"
//                                         value="2 Weeks"
//                                         checked={formData.package === "2 Weeks"}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                     <label htmlFor="package2" className="ml-2">2 Weeks - £225</label>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     {step === 3 && (
//                         <div className="space-y-4">
//                             <input
//                                 type="text"
//                                 id="phone"
//                                 name="phone"
//                                 placeholder="Phone"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
//                             />
//                             <input
//                                 type="text"
//                                 id="implementationtimeframe"
//                                 name="implementationtimeframe"
//                                 placeholder="Project Timeframe"
//                                 value={formData.implementationtimeframe}
//                                 onChange={handleChange}
//                                 className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
//                             />
//                             <textarea
//                                 id="message"
//                                 name="message"
//                                 placeholder="Message"
//                                 value={formData.message}
//                                 onChange={handleChange}
//                                 className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
//                                 rows="4"
//                             />
//                         </div>
//                     )}
//                     {step === 4 && (
//                         <div className="space-y-4">
//                             <div className="flex items-center gap-2">
//                                 <input
//                                     type="checkbox"
//                                     id="Subscribe"
//                                     name="Subscribe"
//                                     checked={formData.Subscribe}
//                                     onChange={handleChange}
//                                     className="p-2 border border-[#85009D] rounded focus:outline-none"
//                                 />
//                                 <label htmlFor="Subscribe" className="block text-[#1B1B1B] font-medium">
//                                     Subscribe for more updates
//                                 </label>
//                             </div>
//                             <input
//                                 type="text"
//                                 id="payment"
//                                 name="payment"
//                                 placeholder="Payment Details"
//                                 value={formData.payment}
//                                 onChange={handleChange}
//                                 className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
//                             />
//                         </div>
//                     )}
//                     {step === 5 && (
//                         <div className="text-center">
//                             <p className="text-[#1B1B1B] font-medium">Thank you for your submission!</p>
//                             <p>Confirmation details will be sent to {formData.email}.</p>
//                         </div>
//                     )}
//                     <div className="flex justify-between mt-6">
//                         {step > 1 && (
//                             <button
//                                 type="button"
//                                 onClick={prevStep}
//                                 className="bg-gray-300 text-[#1B1B1B] px-4 py-2 rounded-[6px]"
//                             >
//                                 Back
//                             </button>
//                         )}
//                         <button
//                             type="submit"
//                             className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto"
//                         >
//                             {step === 5 ? "Close" : "Next"}
//                             {step !== 5 && (
//                                 <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
//                             )}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }
"use client";

import React, { useState, useEffect, useRef } from "react";
// import IconComponent from "@/components/icon/Icon";

export default function RequestDemoForm({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        role: "",
        email: "",
        companywebsiteorlinkedinurl: "",
        title: "",
        targetaudience: "",
        phone: "",
        implementationtimeframe: "",
        message: "",
        Subscribe: false,
        package: "",
        payment: "",
    });
    const [step, setStep] = useState(1);
    const modalRef = useRef(null);

    // Calculate completion percentage for a step's required fields
    const getCompletionPercentage = (step) => {
        switch (step) {
            case 1: {
                const requiredFields = [formData.name, formData.company, formData.email];
                const filledFields = requiredFields.filter(Boolean).length;
                return (filledFields / 3) * 100; // 3 required fields
            }
            case 2: {
                return formData.package ? 100 : 0; // 1 required field
            }
            case 3:
            case 4:
            case 5:
                return 100; // No required fields
            default:
                return 0;
        }
    };

    // Check if a step's required fields are fully completed
    const areRequiredFieldsFilled = (step) => {
        switch (step) {
            case 1:
                return formData.name && formData.company && formData.email;
            case 2:
                return formData.package;
            case 3:
            case 4:
            case 5:
                return true;
            default:
                return false;
        }
    };

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
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (step === 5) {
            console.log("Form submitted:", formData);
            setFormData({
                name: "",
                company: "",
                role: "",
                email: "",
                companywebsiteorlinkedinurl: "",
                title: "",
                targetaudience: "",
                date: "",
                phone: "",
                implementationtimeframe: "",
                message: "",
                Subscribe: false,
                package: "",
                payment: "",
            });
            onClose();
        } else {
            nextStep();
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
                <div className="flex flex-col justify-center mb-6">
                    <div className="flex justify-between items-center w-full">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <React.Fragment key={s}>
                                <div className="flex items-center">
                                    <div
                                        className={`w-[100px] h-[100px] text-[50px] font-bold flex items-center justify-center rounded-full ${step === s
                                            ? "bg-[#85009D] text-white"
                                            : "bg-white text-[#B08D57] border border-[#85009D]"
                                            }`}
                                    >
                                        {s}
                                    </div>
                                </div>

                                {/* Connector Line */}
                                {s < 5 && (
                                    <div className="h-1 flex-1 mx-2 relative">
                                        <div className="absolute inset-0 h-1 border-t-2 border-dashed border-[#B08D57]" />
                                        <div
                                            className="absolute inset-0 h-1 bg-[#85009D]"
                                            style={{
                                                width:
                                                    step > s || (step === s && areRequiredFieldsFilled(s))
                                                        ? "100%"
                                                        : step === s
                                                            ? `${getCompletionPercentage(s)}%`
                                                            : "0%",
                                            }}
                                        />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="my-4 text-2xl md:text-[32px] font-semibold text-[#85009D]">
                        {step === 1 && "Company Registration"}
                        {step === 2 && "Select Hosting Package"}
                        {step === 3 && "Roundtable Details & Assets"}
                        {step === 4 && "Review & Payment"}
                        {step === 5 && "Confirmation"}
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {step === 1 && (
                        <div>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder="Company*"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                className="w-full p-4 mb-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Full Name*"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                                />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Work email*"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                                />
                                <div className="grid grid-cols-1 gap-4">
                                    <input
                                        type="text"
                                        id="companywebsiteorlinkedinurl"
                                        name="companywebsiteorlinkedinurl"
                                        placeholder="Company Website / LinkedIn URL (URL)"
                                        value={formData.companywebsiteorlinkedinurl}
                                        onChange={handleChange}
                                        className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="space-y-4">
                            <label className="block text-[#1B1B1B] font-medium">How long would you like your digital Roundtable to run?</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <label htmlFor="package1" className="block cursor-pointer h-full">
                                    <div className="p-4 border-1 border-[#85009D] rounded-[2px] bg-white h-full flex flex-col justify-between">
                                        <input
                                            type="radio"
                                            id="package1"
                                            name="package"
                                            value="1 Week"
                                            checked={formData.package === "1 Week"}
                                            onChange={handleChange}
                                            required
                                            className="hidden"
                                        />
                                        <span className="text-[#B08D57] text-[42px] leading-none">1 Week</span>
                                        <p className="text-[#1B1B1B] text-[42px]">£150</p>
                                        <div className="w-full h-[2px] bg-[#B08D57] rounded-md mb-4"></div>
                                        <p className="text-[#7B7B7B] mb-4 md:mb-8">Note below: “First week is FREE for returning Business Hub
                                            partners – 2 free sessions per year</p>
                                        <button className="text-[#85009D] border border-[#85009D] w-full py-[5px] rounded-md">Select</button>
                                    </div>
                                </label>
                                <label htmlFor="package2" className="block cursor-pointer h-full">
                                    <div className="p-4 border-1 border-[#85009D] rounded-[2px] bg-white h-full flex flex-col justify-between">
                                        <input
                                            type="radio"
                                            id="package2"
                                            name="package"
                                            value="2 Weeks"
                                            checked={formData.package === "2 Weeks"}
                                            onChange={handleChange}
                                            required
                                            className="hidden"
                                        />
                                        <span className=" text-[#B08D57] text-[42px] leading-none">2 Weeks</span>
                                        <p className="text-[#1B1B1B] text-[42px] flex items-center gap-2">£275<span className="text-[#808080] text-[16px]">(Non-Partner)</span></p>
                                        <div className="w-full h-[2px] bg-[#B08D57] rounded-md mb-4"></div>
                                        <p className="text-[#1B1B1B] text-[42px] flex items-center gap-2 mb-4 md:mb-8 leading-none">£150<span className="text-[#808080] text-[16px]">(Existing Partner)</span></p>

                                        <button className="text-[#85009D] border border-[#85009D] w-full py-[5px] rounded-md">Select</button>
                                    </div>
                                </label>
                            </div>
                        </div>
                    )}
                    {step === 3 && (
                        <div className="space-y-4">
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Roundtable Title / Topic"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Introduction / Description"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D] resize-none"
                                rows="4"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    id="targetaudience"
                                    name="targetaudience"
                                    placeholder=" Target Audience / Key Participants"
                                    value={formData.targetaudience}
                                    onChange={handleChange}
                                    className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                                />
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    placeholder="Preferred Start Date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                                />
                            </div>
                        </div>
                    )}
                    {step === 4 && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="Subscribe"
                                    name="Subscribe"
                                    checked={formData.Subscribe}
                                    onChange={handleChange}
                                    className="p-2 border border-[#85009D] rounded focus:outline-none"
                                />
                                <label htmlFor="Subscribe" className="block text-[#1B1B1B] font-medium">
                                    Subscribe for more updates
                                </label>
                            </div>
                            <input
                                type="text"
                                id="payment"
                                name="payment"
                                placeholder="Payment Details"
                                value={formData.payment}
                                onChange={handleChange}
                                className="w-full p-4 text-[#010101] border-1 border-[#85009D] rounded-[2px] bg-white focus:outline-none focus:ring-1 focus:ring-[#85009D]"
                            />
                        </div>
                    )}
                    {step === 5 && (
                        <div className="text-center">
                            <p className="text-[#1B1B1B] font-medium">Thank you for your submission!</p>
                            <p>Confirmation details will be sent to {formData.email}.</p>
                        </div>
                    )}
                    <div className="flex justify-between mt-6">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="bg-gray-300 text-[#1B1B1B] px-4 py-2 rounded-[6px]"
                            >
                                Back
                            </button>
                        )}
                        <button
                            type="submit"
                            className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto"
                        >
                            {step === 5 ? "Close" : "Next"}
                            {step !== 5 && (
                                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}