import ArrowButtonCom from "../buttons/ArrowButtonCom";

export default function CommunityCardsComp({ src, title, para, btnName }) {
    return (
        <div className="border border-[#DBBB89] bg-[#FFFBF5] rounded p-4 flex flex-col justify-start gap-3">

            {/* Render icon only if src exists */}
            {src && (
                <div className="w-16 h-16 border border-[#85009D] bg-white rounded-full overflow-hidden flex items-center justify-center p-3">
                    <img
                        src={src}
                        alt="icon"
                        className="w-full h-full object-contain"
                    />
                </div>
            )}

            {/* Render title only if title exists */}
            {title && (
                <h1 className="text-[#85009D] font-semibold text-base lg:text-xl mt-1 break-words">
                    {title}
                </h1>
            )}

            {/* Render paragraph only if para exists */}
            {para && (
                <p className="text-black text-sm md:text-base break-words -mt-1">
                    {para}
                </p>
            )}

            {/* Render button only if btnName exists */}
            {btnName && (
                <div className="self-start mt-auto">
                    <ArrowButtonCom
                        text={btnName}
                        bgColor="bg-[#B08D57]"
                        textColor="text-white self-start mt-auto"
                        hoverBgColor="hover:bg-[white]"
                        hoverTextColor="hover:text-[#B08D57]"
                        borderColor="border-[#B08D57]"
                    />
                </div>
            )}

        </div>
    );
}
