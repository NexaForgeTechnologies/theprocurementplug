import React from "react";
import Link from "next/link";

// function BlogComp({ img, heading, text, href = "/" }) {
function BlogComp({ img, heading, text, href }) {
  return (
    <Link
      href={href}
      className="text-[#363636] w-full border border-[#dddedf] rounded-2xl cursor-pointer"
    >
      <img src={img} className="w-full h-[300px] object-cover rounded-t-2xl" />
      <div className="p-4">
        <h3 className="text-xl md:text-2xl font-extrabold mb-4">{heading}</h3>
        <p className="text-sm md:text-lg break-words overflow-hidden clamp-4 md:no-clamp">
          {text}
        </p>
      </div>
    </Link>
  );
}

export default BlogComp;
