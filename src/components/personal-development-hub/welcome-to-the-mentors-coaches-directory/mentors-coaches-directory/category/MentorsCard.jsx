import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";

export default function MentorsCard({ src, title, btnName = "View Details" }) {
    return (
        <>
            <div className="border border-[#DBBB89] bg-[#FFFBF5] p-4 flex flex-col gap-y-3 rounded-md">
                <div className="flex flex-wrap items-start gap-3">
                    {/* Profile Image */}
                    <div className="w-10 h-10 border border-[#DBBB89] bg-[#FFFBF5] rounded-full flex items-center justify-center shrink-0">
                        <img
                            src={src}
                            alt="mentor-pic"
                            className="object-contain w-full h-full"
                        />
                    </div>

                    {/* Text and badge container */}
                    <div className="flex flex-1 flex-wrap items-start gap-2 min-w-[200px]">
                        <div className="flex-1 min-w-[150px]">
                            <h3 className="font-semibold text-base md:text-xl text-[#85009D] leading-tight">
                                {title}
                            </h3>
                            <p className="text-[#808080] "
                                style={{ fontSize: "10px" }}>
                                Process Improvement Consultant
                            </p>
                        </div>

                        <span className="px-2 py-1 rounded-md text-black bg-gradient-to-r from-[#F0CE4D] via-[#FEF989] to-[#DEAE1A] text-[10px] text-xs font-medium whitespace-nowrap">
                            TPP VERIFIED
                        </span>
                    </div>
                </div>

                <p className="max-w-[954px] text-sm md:text-base text-[#808080]">
                    Seasoned Six Sigma expert wuyth a track rec-minizing manufacturing processes,
                </p>
                <ArrowButtonCom
                    text={btnName}
                    bgColor="bg-[#B08D57]"
                    textColor="text-white self-start mt-auto"
                    hoverBgColor="hover:bg-[white]"
                    hoverTextColor="hover:text-[#B08D57]"
                    borderColor="border-[#B08D57]"
                />
            </div>
        </>
    )
}