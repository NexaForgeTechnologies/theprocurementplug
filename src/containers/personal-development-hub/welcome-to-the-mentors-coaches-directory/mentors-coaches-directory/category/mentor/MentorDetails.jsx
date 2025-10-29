"use client"
import Link from "next/link";
import InfoTile from "./InfoTitle";
import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
import BookIntroCall from "@/components/forms/personal-development-hub/BookIntroCallForm";
import { useState } from "react";
import RequestMentoringSession from "@/components/forms/personal-development-hub/RequestMentoringSession";
export default function MentorDetails() {
    const [isBookIntroCall, setisBookIntroCall] = useState(false)
    const [isMentoringSession, setisMentoringSession] = useState(false)
    return (
        <>
            <InfoTile
                src={"/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/category/anna-2.jpg"}
                title={"Robin Scherbatsky"}
                para={`Lean Six Sigma Black Belt | Process Optimization Specialist`}
                address={"Toronto, Canada"}
            />

            <section aria-label="Mentor Info" className="mb-20">
                <h3 className="font-semibold text-lg md:text-xl text-[#1B1B1B] mt-2 mb-3">ABOUT</h3>
                <p className="text-[#1B1B1B] md:text-base mb-10">I'm Lean Six Sigma Black Belt. With over 10 years of experience in manufacturing and healthcare. | help organizations improving Six Sigma methodologies by using Six Sigma automatics.</p>

                <h3 className="font-semibold text-lg md:text-xl text-[#1B1B1B] mt-2 mb-3">EXPERTISES</h3>
                <p className="text-[#1B1B1B] md:text-base mb-5">Lean Six Sigma Black Belth, PMP, CMI Level 5</p>
                <div className="flex gap-3 flex-wrap mb-8">
                    {["Process Mapping", "Cost Reduction", "Root Cause Analysis", "Coaching for Green Beits"].map((item, index) => (
                        <span key={index} className="text-sm md:text-base text-[#85009D] border border-[#D09B48] px-3 py-3 rounded">
                            <strong>{item}</strong>
                        </span>
                    ))}
                </div>

                <h3 className="font-semibold text-lg md:text-xl text-[#1B1B1B] mt-2 mb-3">AVAILABILITY</h3>
                <p className="text-[#1B1B1B] md:text-base mb-5">Accepting mentees <br />Download CV <br />Watch webinar</p>

                <div className="flex gap-3 flex-wrap">
                    <div onClick={() => setisBookIntroCall(!isBookIntroCall)}>
                        <ArrowButtonCom
                            text="Book Intro Call"
                            bgColor="bg-[#B08D57]"
                            textColor="text-white"
                            hoverBgColor="hover:bg-[white]"
                            hoverTextColor="hover:text-[#B08D57]"
                            borderColor="border-[#B08D57]"
                        />
                    </div>
                    <div onClick={() => setisMentoringSession(!isMentoringSession)}>
                        <ArrowButtonCom
                            text="Request Mentoring Session"
                            bgColor="bg-white"
                            textColor="text-[#B08D57]"
                            hoverBgColor="hover:bg-[#B08D57]"
                            hoverTextColor="hover:text-[white]"
                            borderColor="border-[#B08D57]"
                        />
                    </div>
                </div>
                <BookIntroCall isOpen={isBookIntroCall} onClose={() => setisBookIntroCall(false)} />
                <RequestMentoringSession isOpen={isMentoringSession} onClose={() => setisMentoringSession(false)} />
            </section>
        </>
    )
}