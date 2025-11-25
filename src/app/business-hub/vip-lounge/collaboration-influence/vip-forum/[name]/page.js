"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react";
import { useSearchParams } from "next/navigation";


import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import Breadcrumb from '@/components/BreadCrumbs'

import { useRoundtableStore } from "@/store/roundTableStore";

function page() {
  const selected = useRoundtableStore((state) => state.selectedRoundtable);
  console.log(selected);

  const partnerWithUs = {
    Partnerheader: {
      h3: "Partner With Us",
      p: (
        <>
          <a
            href="mailto:partnerships@theprocurementplug.com"
            className="font-semibold text-white hover:underline"
          >
            partnerships@theprocurementplug.com
          </a> -{' '}
          <Link className="font-light" href="/partnerships">
            Visit our partnership page
          </Link>
        </>
      )
    },
    items: [
      {
        id: 1,
        heading: "Partners hub",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: ""
      },
      {
        id: 2,
        heading: "Events hub",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: ""
      },
      {
        id: 3,
        heading: "Business hub",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: ""
      }
    ]
  }

  const searchParams = useSearchParams();
  const [showPopup, setShowPopup] = useState(false);
  const status = searchParams.get("status");
  const sessionId = searchParams.get("session_id");
  const canShare = status === "true" && sessionId !== null;

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSendEmail = async () => {
    setError("");
    setSuccess("");

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/round-table/secret-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          title: selected.title,
          date: selected.date,
          secret_url: selected.secret_url, // example
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to send email.");
      } else {
        setSuccess("Email sent successfully!");
        setEmail("");
      }
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <HeroCTR
          img={selected.banner_image || "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/herosection.png"}
          heading={selected?.title}
          para={selected?.description}
        />
        <Breadcrumb />

        <div>
          {/* Roundtable Detail */}
          <div className="flex gap-8 justify-between md:items-center flex-col-reverse md:flex-row mb-6 md:mb-8">
            <div className='flex-2 space-y-4'>
              <h3 className="font-semibold text-3xl md:text-4xl text-[#85009D]">
                {selected?.title || "N/A"}
              </h3>
              <div className='space-y-2'>
                <p className="text-[#1B1B1B]/90 font-semibold">
                  Company Name: <span className="font-normal text-[#1B1B1B]/60">{selected?.companyName || "N/A"}</span>
                </p>
                <p className="text-[#1B1B1B]/90 font-semibold">
                  Full Name: <span className="font-normal text-[#1B1B1B]/60">{selected?.name || "N/A"}</span>
                </p>
                <p className="text-[#1B1B1B]/90 font-semibold">
                  Work Email: <span className="font-normal text-[#1B1B1B]/60">{selected?.email || "N/A"}</span>
                </p>
                <p className="text-[#1B1B1B]/90 font-semibold">
                  Company Website / Linkedin URL (URL): <span className="font-normal text-[#1B1B1B]/60">{selected?.website || "N/A"}</span>
                </p>
                <p className="text-[#1B1B1B]/90 font-semibold">
                  Introduction / Description: <span className="font-normal text-[#1B1B1B]/60">{selected?.description || "N/A"}</span>
                </p>
                <p className="text-[#1B1B1B]/90 font-semibold">
                  Date (dd-mm-yyyy) : <span className="font-normal text-[#1B1B1B]/60">{selected?.date || "N/A"}</span>
                </p>
              </div>
              {/* Buttons */}
              <div className="flex gap-4 items-center flex-wrap">
                {canShare ? (
                  <button
                    onClick={() => setShowPopup(true)}
                    className="cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-md"
                  >
                    Share Profile Link
                  </button>
                ) : (
                  <button className="cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-md">
                    Submit a Question?
                  </button>
                )}
              </div>

              {/* Popup */}
              {showPopup && (
                <div
                  className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                  onClick={() => setShowPopup(false)}
                >
                  <div
                    className="bg-white p-6 rounded-lg shadow-xl flex gap-2 w-[90%] max-w-md flex-col"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-black">Send Roundtable Secret Link</h3>

                    {/* Email Input */}
                    <input
                      type="email"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-black border p-2 w-full rounded-md"
                    />

                    {/* Error or Success Message */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {success && <p className="text-green-600 text-sm">{success}</p>}

                    {/* Send Button */}
                    <button
                      onClick={handleSendEmail}
                      className="bg-[#b08d57] text-white px-4 py-2 rounded-md w-full flex items-center justify-center"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send"}
                    </button>
                  </div>
                </div>
              )}

            </div>

            <div className='rounded-md px-4 md:px-10 py-4 md:py-20 flex-1 h-full flex justify-center items-center border border-[#D09B48] bg-[#FFFBF5]'>
              <Image
                src={selected.logo_image || "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/herosection.png"}
                alt={`company logo`}
                width={300}
                height={300}
                className="w-full md:w-[250px] h-[250px] object-cover rounded-md"
              />
            </div>
          </div>

          {/* Discussion */}
          <div className="flex flex-col md:flex-row  gap-4">
            <div>
              <h3 className="text-[#1B1B1B] font-semibold text-[24px] md:text-[32px] mb-4">Live Discussion Thread</h3>
              <div className="bg-[#FFFBF5] border-2 border-[#DBBB89] p-5 rounded-[6px]">
                <div className="mb-4 md:mb-8">
                  <div className="flex flex-wrap gap-2 md:gap-4 items-center mb-4">
                    <Image
                      src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/reply2.png"}
                      alt={`reply`}
                      width={44}
                      height={44}
                      className="w-[44px] h-[44px] object-cover"
                    />
                    <p className="text-[#1B1B1B] font-medium">John Mathew</p>
                    <p className="text-[#ffff] bg-[#E2AD5C] rounded-[6px] p-1 text-[8px]">Top Contributor</p>
                    <p className="text-[#919191] font-medium text-[12px]">2 minutes ago</p>
                  </div>
                  <p className="text-[#000000] text-[16px] md:text-[20px] mb-4">Procurement teams are the unsung heroes—so much work goes on behind the
                    scenes to keep everything running smoothly!</p>
                  <p className="text-[#505050]">Reply</p>
                </div>
                <div className="mb-4 md:mb-8">
                  <div className="flex gap-4 items-center mb-4">
                    <Image
                      src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/reply3.png"}
                      alt={`reply`}
                      width={44}
                      height={44}
                      className="w-[44px] h-[44px] object-cover"
                    />
                    <p className="text-[#1B1B1B] font-medium">Alexa White</p>
                    <p className="text-[#919191] font-medium text-[12px]">2 minutes ago</p>
                  </div>
                  <p className="text-[#000000] text-[16px] md:text-[20px] mb-4">It’s interesting how procurement has shifted from just buying stuff to actually
                    shaping company strategy.</p>
                  <p className="text-[#505050]">Reply</p>
                </div>
                <div className="mb-4 md:mb-8">
                  <div className="flex gap-4 items-center mb-4">
                    <Image
                      src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/reply1.png"}
                      alt={`reply`}
                      width={44}
                      height={44}
                      className="w-[44px] h-[44px] object-cover"
                    />
                    <p className="text-[#1B1B1B] font-medium">Jason Mamoa</p>
                    <p className="text-[#919191] font-medium text-[12px]">2 minutes ago</p>
                  </div>
                  <p className="text-[#000000] text-[16px] md:text-[20px] mb-4">Been learning a lot about how important supplier relationships are—procurement
                    really is about people as much as process.</p>
                  <p className="text-[#505050]">Reply</p>
                </div>
                <div className="mb-4 md:mb-8">
                  <div className="flex gap-4 items-center mb-4">
                    <Image
                      src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/reply3.png"}
                      alt={`reply`}
                      width={44}
                      height={44}
                      className="w-[44px] h-[44px] object-cover"
                    />
                    <p className="text-[#1B1B1B] font-medium">Alexa White</p>
                    <p className="text-[#919191] font-medium text-[12px]">2 minutes ago</p>
                  </div>
                  <p className="text-[#000000] text-[16px] md:text-[20px] mb-4">It’s interesting how procurement has shifted from just buying stuff to actually
                    shaping company strategy.</p>
                  <p className="text-[#505050]">Reply</p>
                </div>
                <div>
                  <div className="flex gap-4 items-center mb-4">
                    <Image
                      src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/reply1.png"}
                      alt={`reply`}
                      width={44}
                      height={44}
                      className="w-[44px] h-[44px] object-cover"
                    />
                    <p className="text-[#1B1B1B] font-medium">Jason Mamoa</p>
                    <p className="text-[#919191] font-medium text-[12px]">2 minutes ago</p>
                  </div>
                  <p className="text-[#000000] text-[16px] md:text-[20px] mb-4">Been learning a lot about how important supplier relationships are—procurement
                    really is about people as much as process.</p>
                  <p className="text-[#505050]">Reply</p>
                </div>
              </div>
            </div>
            {/* <div>
              <h3 className="text-[#1B1B1B] font-semibold text-[24px] md:text-[32px] mb-4">Sponsorship</h3>
              <div className="bg-[#FFFBF5] border-2 border-[#DBBB89] p-5 rounded-[6px]">
                <Image
                  src={"/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/logo.png"}
                  alt={`logo`}
                  width={162}
                  height={107}
                  className="w-[110px] h-[73px] md:w-[162px] md:h-[107px] object-cover mb-4"
                />
                <p className="text-[#000000] mb-4">This Roundtable is
                  Sponsored by [logo]</p>
                <button
                  className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto"
                >
                  Sponsor Profile
                  <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <PartnerWithUsComp data={partnerWithUs} />
    </>
  )
}

export default page;



{/* Welcome Note */ }
{/* <div className="bg-[#85009D] rounded-[6px] p-5 text-[#ffff] mb-6 md:mb-8">
            <h3 className="font-semibold text-[24px] md:text-[32px] mb-4">
              Welcome <span className="font-normal">Note👋</span>
            </h3>
            <p className="text-[16px] md:text-[24px] mb-4">Welcome! This roundtable explores emerging models for resilient supply chains. Share
              your insights, case studies, and frameworks.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <button className="cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">Request Access</button>
              <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                Submit a Question
                <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
              </button>
            </div>
          </div> */}