// "use client"
// import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/collaboration-influence/vip-forum/ConsultingPartnerTile";
// import React, { useState } from "react";
// import axios from 'axios';

// function VipForumCTR() {

//     const [formData] = useState({
//         subscriptionType: 'one_time',
//         duration: 'monthly',
//         quantity: 1,
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null);

//         const priceIds = {
//             one_time: {
//                 monthly: 'insert your onetime monthly package priceid here',
//             },
//         };

//         const priceId = priceIds[formData.subscriptionType][formData.duration];

//         try {
//             const response = await axios.post('/api/create-checkout-session', {
//                 subscriptionType: formData.subscriptionType,
//                 quantity: formData.quantity,
//                 priceId,
//                 metadata: {
//                     duration: formData.duration,
//                     subscriptionType: formData.subscriptionType,
//                     quantity: String(formData.quantity),
//                 },
//             });

//             if (response.data.url) {
//                 window.open(response.data.url, '_blank');
//             } else {
//                 throw new Error('No checkout URL returned');
//             }
//         } catch (error) {
//             console.error('Frontend error:', error);
//             setError(
//                 error.response?.data?.details ||
//                 error.response?.data?.error ||
//                 'Failed to initiate checkout. Please try again.'
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 8; // Show 8 items per page
//     const collaboration = [
//         {
//             id: 1,
//             heading: "Future Proofing Procurement",
//             para: "Name: Maria",
//             sponsor: "Sponsored by Logo",
//             btntext: "Invite Members",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
//         },
//         {
//             id: 2,
//             heading: "Strategic Supplier Partnership",
//             para: "Name: Timothy",
//             sponsor: "Sponsored by Globex",
//             btntext: "RSVP",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member2.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/strategic-supplier-partnership",
//         },
//         {
//             id: 3,
//             heading: "Emerging Technologies in Procurement",
//             para: "Name: Martha",
//             sponsor: "Sponsored by Initech",
//             btntext: "Request to join",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member3.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/emerging-technologies-in-procurement",
//         },
//         {
//             id: 4,
//             heading: "Future Proofing Procurement",
//             para: "Name: Maria",
//             sponsor: "Sponsored by Logo",
//             btntext: "Invite Members",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
//         },
//         {
//             id: 5,
//             heading: "Future Proofing Procurement",
//             para: "Name: Maria",
//             sponsor: "Sponsored by Logo",
//             btntext: "Invite Members",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
//         },
//         {
//             id: 6,
//             heading: "Strategic Supplier Partnership",
//             para: "Name: Timothy",
//             sponsor: "Sponsored by Globex",
//             btntext: "RSVP",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member2.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/strategic-supplier-partnership",
//         },
//         {
//             id: 7,
//             heading: "Emerging Technologies in Procurement",
//             para: "Name: Martha",
//             sponsor: "Sponsored by Initech",
//             btntext: "Request to join",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member3.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/emerging-technologies-in-procurement",
//         },
//         {
//             id: 8,
//             heading: "Future Proofing Procurement",
//             para: "Name: Maria",
//             sponsor: "Sponsored by Logo",
//             btntext: "Invite Members",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
//         },
//         {
//             id: 9,
//             heading: "Future Proofing Procurement",
//             para: "Name: Maria",
//             sponsor: "Sponsored by Logo",
//             btntext: "Invite Members",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
//         },
//         {
//             id: 10,
//             heading: "Strategic Supplier Partnership",
//             para: "Name: Timothy",
//             sponsor: "Sponsored by Globex",
//             btntext: "RSVP",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member2.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/strategic-supplier-partnership",
//         },
//         {
//             id: 11,
//             heading: "Emerging Technologies in Procurement",
//             para: "Name: Martha",
//             sponsor: "Sponsored by Initech",
//             btntext: "Request to join",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member3.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/emerging-technologies-in-procurement",
//         },
//         {
//             id: 12,
//             heading: "Future Proofing Procurement",
//             para: "Name: Maria",
//             sponsor: "Sponsored by Logo",
//             btntext: "Invite Members",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
//         },
//         {
//             id: 13,
//             heading: "Future Proofing Procurement",
//             para: "Name: Maria",
//             sponsor: "Sponsored by Logo",
//             btntext: "Invite Members",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
//         },
//         {
//             id: 14,
//             heading: "Strategic Supplier Partnership",
//             para: "Name: Timothy",
//             sponsor: "Sponsored by Globex",
//             btntext: "RSVP",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member2.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/strategic-supplier-partnership",
//         },
//         {
//             id: 15,
//             heading: "Emerging Technologies in Procurement",
//             para: "Name: Martha",
//             sponsor: "Sponsored by Initech",
//             btntext: "Request to join",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member3.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/emerging-technologies-in-procurement",
//         },
//         {
//             id: 16,
//             heading: "Future Proofing Procurement",
//             para: "Name: Maria",
//             sponsor: "Sponsored by Logo",
//             btntext: "Invite Members",
//             bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
//             url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
//         },
//     ];

//     // Calculate total pages
//     const totalPages = Math.ceil(collaboration.length / itemsPerPage);

//     // Get items for the current page
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const currentItems = collaboration.slice(startIndex, startIndex + itemsPerPage);

//     // Handle page change
//     const handlePageChange = (page) => {
//         if (page >= 1 && page <= totalPages) {
//             setCurrentPage(page);
//         }
//     };

//     return (
//         <div>
//             <div className="flex justify-between align-top flex-col md:flex-row mb-6 md:mb-8">
//                 <div>
//                     <h3 className="font-semibold text-[24px] md:text-[32px] md:text-5xl mb-4 text-[#1B1B1B]">
//                         VIP Forum
//                     </h3>
//                     <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-0">Host or join exclusive conversations shaping procurement leadership.</p>
//                 </div>
//                 <button
//                     onClick={handleSubmit}
//                     disabled={loading}
//                     className={`flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto ${loading ? 'opacity-50 cursor-not-allowed' : ''
//                         }`}
//                 >
//                     {loading ? 'Processing...' : ' Host a Roundtable'}
//                     {!loading && (
//                         <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
//                     )}
//                 </button>
//             </div>

//             {/* Pages */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//                 {currentItems.map((partner) => (
//                     // {collaboration.map((partner) => (
//                     <ConsultingPartnerTile
//                         key={partner.id}
//                         heading={partner.heading}
//                         para={partner.para}
//                         sponsor={partner.sponsor}
//                         btntext={partner.btntext}
//                         bigimg={partner.bigimg}
//                         url={partner.url}
//                     />
//                 ))}
//             </div>
//             {totalPages > 1 && (
//                 <div className="flex justify-center items-center gap-4 mt-8">
//                     {/* Previous Button */}
//                     <button
//                         onClick={() => handlePageChange(currentPage - 1)}
//                         disabled={currentPage === 1}
//                         className={`text-[#1B1B1B] px-4  py-2 rounded-[10px] bg-[#ffff] border-1 border-[#EDEDED] text-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:text-[#1B1B1B]"
//                             }`}
//                     >
//                         &lt;
//                     </button>

//                     {/* Page Numbers */}
//                     {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
//                         <button
//                             key={page}
//                             onClick={() => handlePageChange(page)}
//                             className={`text-lg ${currentPage === page
//                                 ? "text-[#1B1B1B] font-semibold px-4  py-2 rounded-[10px] bg-[#EFEFEF]"
//                                 : "text-[#7D7D7D] hover:text-[#1B1B1B]  px-4  py-2 rounded-[10px]"
//                                 }`}
//                         >
//                             {page}
//                         </button>
//                     ))}

//                     {/* Next Button */}
//                     <button
//                         onClick={() => handlePageChange(currentPage + 1)}
//                         disabled={currentPage === totalPages}
//                         className={`text-[#1B1B1B] px-4  py-2 rounded-[10px] border-1 border-[#EDEDED] bg-[#ffff] text-lg ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:text-[#1B1B1B]"
//                             }`}
//                     >
//                         &gt;
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default VipForumCTR;

"use client"
import ConsultingPartnerTile from "@/components/business-hub/vip-lounge/collaboration-influence/vip-forum/ConsultingPartnerTile";
import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';

function VipForumCTR() {

    const [formData, setFormData] = useState({
        quantity: 1,
        amount: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);


    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Validate amount
        const amount = parseFloat(formData.amount);
        if (!amount || amount <= 0) {
            setError("Please enter a valid amount");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post("/api/create-checkout-session", {
                quantity: formData.quantity,
                amount: amount * 100,
                metadata: {
                    quantity: String(formData.quantity),
                    amount: String(amount),
                    paymentType: "sponsor",
                },
            });

            if (response.data.url) {
                window.open(response.data.url, "_blank");
                setShowModal(false);
                setFormData({ ...formData, amount: "" });
            } else {
                throw new Error("No checkout URL returned");
            }
        } catch (error) {
            console.error("Frontend error:", error);
            setError(
                error.response?.data?.details ||
                error.response?.data?.error ||
                "Failed to initiate checkout. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const modalRef = useRef(null);

    useEffect(() => {
        if (showModal) {
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
    }, [showModal]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Show 8 items per page
    const collaboration = [
        {
            id: 1,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
        {
            id: 2,
            heading: "Strategic Supplier Partnership",
            para: "Name: Timothy",
            sponsor: "Sponsored by Globex",
            btntext: "RSVP",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member2.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/strategic-supplier-partnership",
        },
        {
            id: 3,
            heading: "Emerging Technologies in Procurement",
            para: "Name: Martha",
            sponsor: "Sponsored by Initech",
            btntext: "Request to join",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member3.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/emerging-technologies-in-procurement",
        },
        {
            id: 4,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
        {
            id: 5,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
        {
            id: 6,
            heading: "Strategic Supplier Partnership",
            para: "Name: Timothy",
            sponsor: "Sponsored by Globex",
            btntext: "RSVP",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member2.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/strategic-supplier-partnership",
        },
        {
            id: 7,
            heading: "Emerging Technologies in Procurement",
            para: "Name: Martha",
            sponsor: "Sponsored by Initech",
            btntext: "Request to join",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member3.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/emerging-technologies-in-procurement",
        },
        {
            id: 8,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
        {
            id: 9,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
        {
            id: 10,
            heading: "Strategic Supplier Partnership",
            para: "Name: Timothy",
            sponsor: "Sponsored by Globex",
            btntext: "RSVP",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member2.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/strategic-supplier-partnership",
        },
        {
            id: 11,
            heading: "Emerging Technologies in Procurement",
            para: "Name: Martha",
            sponsor: "Sponsored by Initech",
            btntext: "Request to join",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member3.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/emerging-technologies-in-procurement",
        },
        {
            id: 12,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
        {
            id: 13,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
        {
            id: 14,
            heading: "Strategic Supplier Partnership",
            para: "Name: Timothy",
            sponsor: "Sponsored by Globex",
            btntext: "RSVP",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member2.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/strategic-supplier-partnership",
        },
        {
            id: 15,
            heading: "Emerging Technologies in Procurement",
            para: "Name: Martha",
            sponsor: "Sponsored by Initech",
            btntext: "Request to join",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member3.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/emerging-technologies-in-procurement",
        },
        {
            id: 16,
            heading: "Future Proofing Procurement",
            para: "Name: Maria",
            sponsor: "Sponsored by Logo",
            btntext: "Invite Members",
            bigimg: "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/member1.png",
            url: "/business-hub/vip-lounge/collaboration-influence/vip-forum/future-proofing-procurement",
        },
    ];

    // Calculate total pages
    const totalPages = Math.ceil(collaboration.length / itemsPerPage);

    // Get items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = collaboration.slice(startIndex, startIndex + itemsPerPage);

    // Handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div>
            <div className="flex justify-between align-top flex-col md:flex-row mb-6 md:mb-8">
                <div>
                    <h3 className="font-semibold text-[24px] md:text-[32px] md:text-5xl mb-4 text-[#1B1B1B]">
                        VIP Forum
                    </h3>
                    <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-0">Host or join exclusive conversations shaping procurement leadership.</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className={`flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto ${loading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    disabled={loading}
                >
                    Host a Roundtable
                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                </button>
            </div>
            {showModal && (
                <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
                    <div
                        ref={modalRef}
                        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-semibold mb-4 text-[#1B1B1B]">
                            Enter Amount
                        </h3>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            placeholder="Enter amount (USD)"
                            className="border p-2 rounded mb-4 w-full text-[#1B1B1B]"
                            min="1"
                            step="0.01"
                        />
                        {error && (
                            <p className="text-red-500 text-sm mb-4">{error}</p>
                        )}
                        <div className="flex flex-col-reverse md:flex-row justify-end gap-2">
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setError(null);
                                    setFormData({ ...formData, amount: "" });
                                }}
                                className="px-4 py-2 rounded bg-gray-200 text-gray-800"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className={`px-4 py-2 rounded bg-[#b08d57] text-white ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {loading ? 'Processing...' : 'Proceed to Payment'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Pages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {currentItems.map((partner) => (
                    // {collaboration.map((partner) => (
                    <ConsultingPartnerTile
                        key={partner.id}
                        heading={partner.heading}
                        para={partner.para}
                        sponsor={partner.sponsor}
                        btntext={partner.btntext}
                        bigimg={partner.bigimg}
                        url={partner.url}
                    />
                ))}
            </div>
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                    {/* Previous Button */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`text-[#1B1B1B] px-4  py-2 rounded-[10px] bg-[#ffff] border-1 border-[#EDEDED] text-lg ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:text-[#1B1B1B]"
                            }`}
                    >
                        &lt;
                    </button>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`text-lg ${currentPage === page
                                ? "text-[#1B1B1B] font-semibold px-4  py-2 rounded-[10px] bg-[#EFEFEF]"
                                : "text-[#7D7D7D] hover:text-[#1B1B1B]  px-4  py-2 rounded-[10px]"
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    {/* Next Button */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`text-[#1B1B1B] px-4  py-2 rounded-[10px] border-1 border-[#EDEDED] bg-[#ffff] text-lg ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:text-[#1B1B1B]"
                            }`}
                    >
                        &gt;
                    </button>
                </div>
            )}
        </div>
    );
}

export default VipForumCTR;
