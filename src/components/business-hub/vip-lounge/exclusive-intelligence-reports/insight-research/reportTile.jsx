import Image from "next/image";

export default function ConsultingPartnerTile({
  heading,
  para,
  sponsor,
  btntext,
  smallimg,
  pdf,
  pdfIcon,
  allowed = true,
  onTileClick, // parent handler
}) {
  return (
    <div
      onClick={() => onTileClick({ heading, para, sponsor, btntext, smallimg, pdf, pdfIcon, allowed })}
      className="w-full rounded-[6px] border border-[#DBBB89] hover:border-[#85009D] bg-[#FFFBF5] hover:bg-[#85009D] p-5 flex flex-col justify-between gap-6 text-[#85009D] hover:text-white transition-all duration-200 ease-in-out group cursor-pointer"
    >
      <h2 className="text-xl md:text-2xl font-semibold">{heading}</h2>
      {para && <p className="text-[#1B1B1B] text-base group-hover:text-[#ffff]">{para}</p>}
      {pdfIcon && (
        <Image src={pdfIcon} alt="pdf icon" width={31} height={32} className="mt-2" />
      )}
      {sponsor && <p className="text-[#B08D57] text-base">{sponsor}</p>}
      {smallimg && smallimg.length > 0 && (
        <span className="flex flex-wrap">
          {smallimg.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${heading} image ${index + 1}`}
              width={44}
              height={44}
              className="object-cover"
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
    </div>
  );
}
