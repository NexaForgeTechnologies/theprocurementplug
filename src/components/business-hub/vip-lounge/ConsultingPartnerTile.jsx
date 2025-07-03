import Link from "next/link";
import React from "react";
import Image from "next/image";

// function ConsultingPartnerTile({ heading, para, sponsor, btntext, smallimg, url = "" }) {
//   return (
//     <Link
//       href={url}
//       className="w-full rounded-[6px] border border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-5 flex flex-col justify-between gap-6  text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group "
//     >
//       <h2 className="max-w-full sm:max-w-[300px] text-xl md:text-2xl font-semibold">{heading}</h2>
//       {para && <p className="text-[#1B1B1B] text-base group-hover:text-[#ffff]">{para}</p>}
//       {sponsor && <p className="text-[#B08D57] text-base">{sponsor}</p>}
//       {smallimg && smallimg.length > 0 && (
//         <span className="flex flex-wrap">
//           {smallimg.map((img, index) => (
//             // {smallimg && smallimg.map((img, index) => (
//             <Image
//               key={index}
//               src={img}
//               alt={`${heading} image ${index + 1}`}
//               width={44}
//               height={44}
//               className="object-cover"
//             />
//           ))}
//         </span>
//       )}
//       {btntext && (
//         <span className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
//           {btntext}
//           <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
//         </span>
//       )}
//     </Link>
//   );
// }
function ConsultingPartnerTile({
  heading,
  para,
  sponsor,
  btntext,
  smallimg,
  url = "",
  isFeatured = false,
}) {
  return (
    <Link
      href={url}
      className={`w-full rounded-[6px] border border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-5 flex flex-col justify-between gap-6 text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group
        ${isFeatured ? "md:row-span-2 md:col-span-1" : ""}
      `}
    >
      <h2 className="max-w-full sm:max-w-[300px] text-xl md:text-2xl font-semibold">{heading}</h2>
      {para && <p className="max-w-[435px] text-[#1B1B1B] text-base group-hover:text-[#ffff]">{para}</p>}
      {sponsor && <p className="text-[#B08D57] text-base">{sponsor}</p>}
      {smallimg && smallimg.length > 0 && (
        <span className="flex flex-wrap gap-1 md:pb-[40px]">
          {smallimg.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${heading} image ${index + 1}`}
              width={70}
              height={70}
              className="w-[44px] md:w-[70px] h-[44px] md:h-[70px] object-cover -mr-[15px] md:-mr-[20px] last:mr-0"
            />
          ))}
        </span>
      )}
      {btntext && (
        <span className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
          {btntext}
          <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
        </span>
      )}
    </Link>
  );
}


export default ConsultingPartnerTile;
