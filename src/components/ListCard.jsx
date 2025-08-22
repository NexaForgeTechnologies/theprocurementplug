export default function ListCard({
    heading,
    description,
    description2,
    bullet,
    bullet2,
    bullet3,
    bullet4,
    bullet5,
    bullet6,
    bullet7,
    bullet8,
    bullet9,
    bullet10,
    bulletClr = "bg-[#B08D57]",
    hide, hide2, hide3, hide4, hide5, hide6, hide7, hide8, hide9, hide10
}) {
    return (
        <>
            <div className="flex flex-col gap-y-3.5 sm:gap-y-4">
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#B08D57]">
                        {heading}
                    </h1>
                    <p className="text-base text-[#C2C2C2] max-w-150">
                        {description}
                    </p>
                </div>

                <ul className="flex flex-col gap-y-2 text-[#C2C2C2]">
                    <li className={`flex items-start gap-x-3 ${hide}`}>
                        <span className={`${bulletClr} rounded-full w-3 h-3 flex-shrink-0`}></span>
                        <p className="text-xs">{bullet}</p>
                    </li>
                    <li className={`flex items-start gap-x-3 ${hide2}`}>
                        <span className={`${bulletClr} rounded-full w-3 h-3 flex-shrink-0`}></span>
                        <p className="text-xs">{bullet2}</p>
                    </li>
                    <li className={`flex items-start gap-x-3 ${hide3}`}>
                        <span className={`${bulletClr} rounded-full w-3 h-3 flex-shrink-0`}></span>
                        <p className="text-xs">{bullet3}</p>
                    </li>
                    <li className={`flex items-start gap-x-3 ${hide4}`}>
                        <span className={`${bulletClr} rounded-full w-3 h-3 flex-shrink-0`}></span>
                        <p className="text-xs">{bullet4}</p>
                    </li>
                    <li className={`flex items-start gap-x-3 ${hide5}`}>
                        <span className={`${bulletClr} rounded-full w-3 h-3 flex-shrink-0`}></span>
                        <p className="text-xs">{bullet5}</p>
                    </li>
                    <li className={`flex items-start gap-x-3 ${hide6}`}>
                        <span className={`${bulletClr} rounded-full w-3 h-3 flex-shrink-0`}></span>
                        <p className="text-xs">{bullet6}</p>
                    </li>
                    <li className={`flex items-start gap-x-3 ${hide7}`}>
                        <span className={`${bulletClr} rounded-full w-3 h-3 flex-shrink-0`}></span>
                        <p className="text-xs">{bullet7}</p>
                    </li>
                    <li className={`flex items-start gap-x-3 ${hide8}`}>
                        <span className={`${bulletClr} rounded-full w-3 h-3 flex-shrink-0`}></span>
                        <p className="text-xs">{bullet8}</p>
                    </li>
                    <li className={`flex items-start gap-x-3 ${hide9}`}>
                        <span className={`${bulletClr} rounded-full w-3 h-3 flex-shrink-0`}></span>
                        <p className="text-xs">{bullet9}</p>
                    </li>
                    <li className={`flex items-start gap-x-3 ${hide10}`}>
                        <span className={`${bulletClr} rounded-full w-3 h-3 flex-shrink-0`}></span>
                        <p className="text-xs">{bullet10}</p>
                    </li>
                </ul>


                <p className="text-base text-[#C2C2C2] max-w-150">
                    {description2}
                </p>
            </div>
        </>
    );
}
