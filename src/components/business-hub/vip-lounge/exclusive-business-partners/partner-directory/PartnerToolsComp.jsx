import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";

export default function PartnerToolsComp({ src, title, tagline, category, btnName }) {
    return (
        <>
            <div className="bg-[#FFFBF5] border border-[#D09B48] p-4 rounded flex flex-col gap-3">
                <div className="min-h-40 rounded overflow-hidden w-full">
                    <img src={src} alt="" className="object-cover w-full" />
                </div>
                <div className="flex flex-wrap justify-between">
                    <h1 className="text-sm md:text-xl text-[#85009D] font-semibold">{title}</h1>
                    {/* <span>⭐⭐⭐⭐⭐</span> */}
                </div>
                <p className="text-sm md:text-base">{tagline}</p>
                <p className="text-sm md:text-base">{category}</p>

                <ArrowButtonCom text={btnName} textColor={"text-[white] mt-auto self-start"} bgColor={"bg-[#B08D57]"} hoverBgColor={"hover:bg-transparent"} borderColor={"border-[#B08D57]"} hoverTextColor={"hover:text-[#B08D57]"} />
            </div>
        </>
    )
}