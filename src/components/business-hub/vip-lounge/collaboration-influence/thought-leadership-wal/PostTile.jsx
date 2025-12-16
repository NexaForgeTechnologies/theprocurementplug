"use client";

import Link from "next/link";
import React from "react";

import { usePostStore } from "@/store/insightPostStore"; // <-- import zustand

function PostTile({ data }) {
  const setSelectedPost = usePostStore((state) => state.setSelectedPost);
  return (
    <Link
      onClick={() => setSelectedPost(data)} // <-- set zustand on click
      href={data.public_url || ""}
      className="w-full rounded-md border border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-4 text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group space-y-3"
    >
      <div className="w-full h-40 p-1 bg-white rounded-md">
        <img
          src={data.banner_img ?? ""}
          alt={`logo`}
          className="w-full h-full object-cover rounded-sm"
        />
      </div>

      {data.category && (
        <p className="max-w-max text-sm px-2 py-0.5 border border-[#85009D] group-hover:border-white group-hover:text-white text-black rounded-sm">
          {data.category}
        </p>
      )}

      <h2 className="text-xl md:text-2xl font-semibold">{data.heading}</h2>

      <p
        title={data.description}
        className="text-[#1B1B1B] group-hover:text-white line-clamp-5 sm:line-clamp-3"
      >
        {data.description}
      </p>

      <span
        className="flex justify-center items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 
        rounded-md"
      >
        Read More
        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
      </span>
    </Link>
  );
}

export default PostTile;
