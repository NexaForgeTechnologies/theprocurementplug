"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import Breadcrumb from '@/components/BreadCrumbs'

import { usePostStore } from "@/store/insightPostStore";

import CommentSection from '@/containers/business-hub/vip-lounge/comment-section/CommentSectionCTR';

function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // ?id=123

  const selectedPost = usePostStore((state) => state.selectedPost);
  const setSelectedPost = usePostStore((state) => state.setSelectedPost);

  useEffect(() => {
    // IF id exists → always fetch from DB
    if (id) {
      console.log("id");

      const fetchPost = async () => {
        try {
          const res = await fetch(`/api/insights-post/${id}`);
          if (!res.ok) throw new Error("Failed to fetch post");
          const data = await res.json();
          setSelectedPost(data); // overwrite store
        } catch (err) {
          console.error(err);
        }
      };

      fetchPost();
    }
    // IF id does NOT exist → do nothing (store already has data)
  }, [id, setSelectedPost]);


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

  const [showPopup, setShowPopup] = useState(false);
  const status = searchParams.get("status");
  const session_id = searchParams.get("session_id");
  const canShare = status === "true" && session_id !== null && session_id == selectedPost?.session_id;

  const [email, setEmail] = useState("");
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
          title: selectedPost?.title,
          date: selectedPost?.date,
          secret_url: selectedPost?.secret_url, // example
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
          img={selectedPost?.banner_img || "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/herosection.png"}
          heading={selectedPost?.title}
          para={selectedPost?.description}
        />
        <Breadcrumb />

        <div>
          {/* Roundtable Detail */}
          <div className="flex gap-8 justify-between md:items-center flex-col-reverse md:flex-row mb-6 md:mb-8">
            <div className='flex-2 space-y-4'>
              <h3 className="font-semibold text-3xl md:text-4xl text-[#85009D]">
                {selectedPost?.title || "N/A"}
              </h3>
              <div className='space-y-2'>
                <p className="text-[#1B1B1B]/90 font-semibold">
                  Company Name: <span className="font-normal text-[#1B1B1B]/60">{selectedPost?.companyName || "N/A"}</span>
                </p>
                <p className="text-[#1B1B1B]/90 font-semibold">
                  Full Name: <span className="font-normal text-[#1B1B1B]/60">{selectedPost?.name || "N/A"}</span>
                </p>
                <p className="text-[#1B1B1B]/90 font-semibold">
                  Work Email: <span className="font-normal text-[#1B1B1B]/60">{selectedPost?.email || "N/A"}</span>
                </p>
                <p className="text-[#1B1B1B]/90 font-semibold">
                  Company Website / Linkedin URL (URL): <span className="font-normal text-[#1B1B1B]/60">{selectedPost?.website || "N/A"}</span>
                </p>
                <p className="text-[#1B1B1B]/90 font-semibold">
                  Introduction / Description: <span className="font-normal text-[#1B1B1B]/60">{selectedPost?.description || "N/A"}</span>
                </p>
                <p className="text-[#1B1B1B]/90 font-semibold">
                  Date (yyyy-mm-dd) : <span className="font-normal text-[#1B1B1B]/60">{selectedPost?.date || "N/A"}</span>
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
                src={selectedPost?.logo_image || "/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/future-proofing-procurement/herosection.png"}
                alt={`company logo`}
                width={300}
                height={300}
                className="w-full md:w-[250px] h-[250px] object-cover rounded-md"
              />
            </div>
          </div>

          <CommentSection id={selectedPost?.id} isSecret={canShare} secretToken={selectedPost?.access_token} />
        </div>
      </div>

      <PartnerWithUsComp data={partnerWithUs} />
    </>
  )
}

export default Page;
