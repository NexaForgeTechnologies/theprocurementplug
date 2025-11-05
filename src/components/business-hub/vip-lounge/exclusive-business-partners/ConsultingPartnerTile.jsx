import Link from "next/link";
import React from "react";
import Image from "next/image";

function ConsultingPartnerTile({ heading, para, description, category, btntext, bigimg, url = "", BtnLink }) {
  const handleClick = (e) => {
    e.stopPropagation(); // prevent bubbling
    if (BtnLink && typeof BtnLink === "function") {
      BtnLink(); // handle popup toggle or any custom logic
    }
  };

  const content = (
    <div
      className="w-full rounded border border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-5 flex flex-col md:flex-row text-center md:text-start justify-between items-center gap-6 text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
    >
      {bigimg && (
        <div className="flex justify-center md:justify-end">
          <Image
            src={bigimg}
            alt="logo"
            width={250}
            height={153}
            className="w-full max-w-[250px] h-auto md:w-full"
            style={{ height: 'auto' }}
          />
        </div>
      )}

      <div className="flex-1 flex flex-col items-center md:items-start gap-4">
        <h2 className="text-xl md:text-2xl font-semibold">{heading}</h2>
        {para && <p className="text-[#1B1B1B] text-base group-hover:text-[#ffff]">{para}</p>}
        {description && <p className="text-[#1B1B1B] text-base group-hover:text-[#ffff]">{description}</p>}
        {category && (
          <p className="text-[#1B1B1B] text-base group-hover:text-[#ffff] mb-0 md:mb-8">
            {category}
          </p>
        )}
        {btntext && (
          BtnLink && typeof BtnLink === "string" ? (
            // If BtnLink is a URL string, render a link
            <a
              href={BtnLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex self-center md:self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] focus:outline-none"
            >
              {btntext}
              <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </a>
          ) : (
            // Otherwise, call the function (popup)
            <button
              type="button"
              onClick={handleClick}
              className="flex self-center md:self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] focus:outline-none"
            >
              {btntext}
              <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
            </button>
          )
        )}
      </div>
    </div>
  );

  // If url is provided and BtnLink is not, wrap in Next.js Link
  return url && !BtnLink ? <Link href={url}>{content}</Link> : content;
}

export default ConsultingPartnerTile;
