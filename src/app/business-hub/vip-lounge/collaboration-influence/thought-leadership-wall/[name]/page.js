"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import Breadcrumb from '@/components/BreadCrumbs'

import { usePostStore } from "@/store/insightPostStore";

import CommentSection from '@/containers/business-hub/vip-lounge/collaboration-influence/thought-leadership-wall/comment-section/CommentSectionCTR';

function Page() {
  // Query Params
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const selectedPost = usePostStore((state) => state.selectedPost);
  const setSelectedPost = usePostStore((state) => state.setSelectedPost);

  useEffect(() => {
    // If selectedPost then return not call api
    if (selectedPost) return;

    // if selectedPost is null then fetch post from database
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/thought-leadership/get-post-by-id?post_id=${id}`);
        if (!res.ok) throw new Error("Failed to fetch post");
        const data = await res.json();
        setSelectedPost(data); // overwrite store
      } catch (err) {
        console.error(err);
      }
    };
    fetchPost();
    // IF id does NOT exist → do nothing (store already has data)
  }, []);

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

  // Create Url for Content
  const getValidUrl = (url) => {
    if (!url) return "#";
    return url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`;
  };

  return (
    <>
      <div>
        <HeroCTR
          img={selectedPost?.banner_img || "/images/default-rectangle.webp"}
          heading={selectedPost?.heading}
          para={selectedPost?.description}
        />
        <Breadcrumb />

        <div>
          {/* Insight Post Detail */}
          <div className="flex gap-8 justify-between md:items-center flex-col-reverse md:flex-row mb-6 md:mb-8">
            <div className='flex-2 space-y-4'>
              <p className="max-w-max px-2 py-1 border border-[#85009D] text-black rounded-sm">
                {selectedPost?.category || "N/A"}
              </p>

              <h3 className="font-semibold text-3xl md:text-4xl text-[#85009D]">
                {selectedPost?.heading || "N/A"}
              </h3>

              <p
                className="text-[#1B1B1B]/80"
                title={selectedPost?.description}
              >{selectedPost?.description || "N/A"}</p>

              {selectedPost?.content && (
                <a
                  href={getValidUrl(selectedPost.content)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-md"
                >
                  {selectedPost.content_type}
                </a>
              )}

            </div>

            <div className='rounded-md px-4 md:px-10 py-4 md:py-20 flex-1 h-full flex justify-center items-center border border-[#D09B48] bg-[#FFFBF5]'>
              <Image
                src={selectedPost?.profile_logo || "/images/default-rectangle.webp"}
                alt={`company logo`}
                width={300}
                height={300}
                className="w-full md:w-[250px] h-[250px] object-cover rounded-md"
              />
            </div>
          </div>

          <CommentSection id={selectedPost?.id} secretToken={selectedPost?.access_token} />
        </div>
      </div>

      <PartnerWithUsComp data={partnerWithUs} />
    </>
  )
}

export default Page;
