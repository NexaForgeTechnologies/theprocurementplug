export default function BtnOne({
    name,
    href,
    className = "",
    bgColor = "bg-[#B08D57]",
    hoverBgColor,
    textColor,
    hoverTextColor,
    targetLink = "_self",
    typeSubmit,
    onClick,
    loading = false,
}) {
    return (
        <a href={href} target={targetLink}>
            <button type={typeSubmit} className={` ${bgColor} ${hoverBgColor} ${textColor} ${hoverTextColor} ${className}
          font-normal text-xs sm:text-sm lg:text-base rounded-full flex items-center cursor-pointer duration-300 group
        `}
                onClick={onClick}
            >
                {/* Text section */}


                <span
                    className="rounded-full bg-[#0F0F0F] text-[#B08D57] mx-1 my-1 px-2.5 sm:px-4 py-2 "
                >
                    {loading ? (
                        <>
                            <span className="animate-pulse"> Submitting...</span>
                        </>

                    ) : (
                        <span className="group-hover:text-white group-hover:animate-pulse group-hover:delay-100 animate-pulse text-white md:animate-none md:text-[#B08D57]">
                            {name}
                        </span>
                    )}

                </span>

                {/* Arrow icon */}
                <span className="material-symbols-outlined text-[#B08D57] bg-[#0F0F0F] rounded-full py-1 md:py-2 px-1 md:px-2 mr-1 my-1 ">

                    {loading ? (
                        <span className="text-white animate-spin inline-block">
                            progress_activity

                        </span>)
                        :
                        (
                            <span className="group-hover:text-white group-hover:animate-pulse group-hover:delay-100
                    animate-pulse text-white md:animate-none md:text-[#B08D57]">
                                arrow_forward
                            </span>
                        )}
                </span>
            </button>
        </a >
    );
}
