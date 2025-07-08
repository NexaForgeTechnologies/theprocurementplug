"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

function EventReviewComp({ rating, comment, nameicon, name, category }) {
    const [showPopup, setShowPopup] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const commentRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        // Check if comment exceeds 10 lines
        const lineHeight = parseFloat(getComputedStyle(commentRef.current).lineHeight);
        const commentHeight = commentRef.current.scrollHeight;
        const lines = Math.floor(commentHeight / lineHeight);
        setShowButton(lines > 10);
    }, [comment]);

    useEffect(() => {
        if (showPopup) {
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
    }, [showPopup]);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <>
            <div className="relative z-10 text-[#1B1B1B] bg-[#FFFBF5] border border-[#DBBB89] p-6 rounded-xl w-full flex flex-col justify-between gap-2 min-h-[300px] md:min-h-[350px]">
                <Image
                    className="absolute z-0 bottom-0 right-0"
                    src="/images/events/manchester/review.png"
                    alt="comment"
                    width={218}
                    height={141}
                />
                <div className="text-center md:text-start">
                    <h2 className="text-[10px] text-[#808080] mb-2">
                        <span className="text-[#F89800] text-2xl mr-[4px]">★★★★</span>{rating}
                    </h2>
                    <div className="relative">
                        <p
                            ref={commentRef}
                            className="text-[12px] leading-[20px] line-clamp-10 overflow-hidden"
                        >
                            {comment}
                        </p>
                        {showButton && (
                            <button
                                onClick={togglePopup}
                                className="text-[#F89800] text-[12px] mt-2 hover:underline focus:outline-none"
                            >
                                Show More
                            </button>
                        )}
                    </div>
                </div>
                <div>
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="flex-shrink-0 bg-[#85009D] w-16 h-16 flex items-center justify-center rounded-full">                            <p className="text-white text-2xl">{nameicon}</p>
                        </div>
                        <div>
                            <h2 className="text-[16px] text-center md:text-start">{name}</h2>
                            <p className="text-[#808080] text-[10px] text-center md:text-start">{category}</p>
                        </div>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="fixed inset-0 backdrop-blur-xs bg-opacity-30 z-[200] flex items-center justify-center px-6">
                    <div
                        ref={modalRef}
                        className="max-w-[964px] w-full max-h-[90vh] text-[#1B1B1B] overflow-y-auto p-6 bg-[#FFFBF5] relative rounded-xl border border-[#DBBB89] custom-scrollbar"
                    >
                        <Image
                            className="absolute z-0 bottom-0 right-0"
                            src="/images/events/manchester/review.png"
                            alt="comment"
                            width={218}
                            height={141}
                        />
                        <button
                            onClick={togglePopup}
                            className="absolute top-4 right-4 text-[#F89800] text-lg hover:text-[#DBBB89] focus:outline-none"
                        >
                            ✕
                        </button>
                        <h2 className="text-[10px] text-[#808080] mb-2">
                            <span className="text-[#F89800] text-2xl mr-[4px]">★★★★</span>{rating}
                        </h2>
                        <p className="text-[12px] leading-[20px] text-[#1B1B1B]">{comment}</p>
                        <div className="mt-4 flex flex-col md:flex-row gap-4 items-center">
                            <div className="bg-[#85009D] w-12 h-12 flex items-center justify-center rounded-full">
                                <p className="text-white text-xl">{nameicon}</p>
                            </div>
                            <div>
                                <h2 className="text-[14px] text-center md:text-start">{name}</h2>
                                <p className="text-[#808080] text-[10px] text-center md:text-start">{category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default EventReviewComp