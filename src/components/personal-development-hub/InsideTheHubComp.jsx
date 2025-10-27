import Link from "next/link";

export default function InsideTheHubComp({ CardUrl, src, title, description, alt = "icon" }) {
    const CardContent = (
        <div className={`bg-[#85009D66] border border-[#F3B3FF]/50 text-white p-4 rounded 
        flex flex-col gap-y-3 md:gap-y-4 items-start lg:min-h-65 ${CardUrl && "cursor-pointer"}`}>
            <span className="bg-[#85009D] p-5 shrink-0 rounded-full inline-block">
                <img src={src} alt={alt} className="w-5 h-5 md:w-7 md:h-7" />
            </span>
            <h1 className="text-base md:text-lg lg:text-xl font-semibold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">
                {title}
            </h1>
            <p className="max-w-lg text-sm">
                {description}
            </p>
        </div>
    );

    return (
        <>
            {CardUrl ? (
                <Link href={CardUrl}>
                    {CardContent}
                </Link>
            ) : (
                CardContent
            )}
        </>
    );
}
