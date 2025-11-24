// import Link from "next/link";
// import React from "react";
// import Image from "next/image";

// function ConsultingPartnerTile({ heading, para, sponsor, btntext, bigimg, smallimg, url = "", tag, logo, vom, pick }) {
//   return (
//     <Link
//       href={url}
//       className="w-full rounded-[6px] border border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-5 flex flex-col-reverse md:flex-row text-center md:text-start justify-center md:justify-between gap-6 items-center text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group"
//     >
//       <div className="flex flex-col items-center md:items-start gap-4">
//         {tag && <p className="text-[12px] border-1 border-[#85009D] rounded-[0.5px] px-1 bg-[#ffff] text-[#1B1B1B]">{tag}</p>}
//         <h2 className="text-xl md:text-2xl font-semibold">{heading}</h2>
//         <div className="flex items-center gap-4">
//           {para && <p className="text-[#1B1B1B] text-base group-hover:text-[#ffff]">{para}</p>}
//           {logo &&
//             <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] p-1 bg-white rounded-full">
//               <Image
//                 src={logo}
//                 alt={`logo`}
//                 width={24}
//                 height={24}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           }
//         </div>
//         {sponsor && <p className="text-[#B08D57] text-base group-hover:text-[#ffff]">{sponsor}</p>}
//         <span className="flex flex-wrap">
//           {smallimg && Array.isArray(smallimg) && smallimg.length > 0 ? (
//             smallimg.map((img, index) => (
//               <Image
//                 key={index}
//                 src={img}
//                 alt={`${heading} image ${index + 1}`}
//                 width={44}
//                 height={44}
//                 className="w-[44px] h-[44px] object-cover"
//               />
//             ))
//           ) : (
//             btntext && (
//               <span className="flex self-start items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px]">
//                 {btntext}
//                 <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
//               </span>
//             )
//           )}
//         </span>
//       </div>
//       {bigimg &&
//         <div className="flex justify-center md:justify-end">
//           <div className="flex flex-col text-center shrink-0 justify-center">
//             <Image
//               src={bigimg}
//               alt="member"
//               width={204}
//               height={204}
//               className="w-[204px] h-[204px] md:w-full mb-2 border border-[#B08D57] rounded-full"
//             />
//             {(vom || pick) && (
//               <div className="flex flex-col">
//                 {vom && <p className="text-[12px] text-[#85009D] group-hover:text-[#ffff]">{vom}</p>}
//                 {pick && <p className="text-[#808080] group-hover:text-[#ffff]">{pick}</p>}
//               </div>
//             )}
//           </div>
//         </div>
//       }
//     </Link>
//   );
// }

// export default ConsultingPartnerTile;





// -------------------
import Link from "next/link";
import React from "react";
import Image from "next/image";

import { useRoundtableStore } from "@/store/roundTableStore"; // <-- import zustand

function ConsultingPartnerTile({ data }) {

  const setSelectedRoundtable = useRoundtableStore((state) => state.setSelectedRoundtable);

  return (
    <Link
      onClick={() => setSelectedRoundtable(data)}   // <-- set zustand on click
      href={data.public_url || ""}
      className="w-full rounded-md border border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-4 text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group space-y-3"
    >

      <div className="w-full h-40 p-1 bg-white rounded-md">
        <Image
          src={data.banner_image ?? ""}
          alt={`logo`}
          width={24}
          height={24}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-xl md:text-2xl font-semibold">{data.title}</h2>

      <p title={data.description} className="text-[#1B1B1B] group-hover:text-white line-clamp-5 sm:line-clamp-3">
        {data.description}
      </p>

      <p className="text-[#1B1B1B] group-hover:text-[#ffff]">Name: {data.name}</p>

      <span className="flex justify-center items-center cursor-pointer bg-[#b08d57] text-white px-4 py-2 
        rounded-[6px]">
        View Details
        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
      </span>

    </Link>
  );
}

export default ConsultingPartnerTile;
