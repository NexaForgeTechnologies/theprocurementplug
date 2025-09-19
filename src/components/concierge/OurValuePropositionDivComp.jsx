export default function OurValuePropositionDivComp({
    text,
    src,
    heading,
    colspan
}) {
    return (
        <div className={`flex flex-col gap-y-1 items-start border border-[#DBBB89] rounded p-4 bg-[#FFFBF5] lg:min-h-55 ${colspan}`}>
            <img src={src} className="w-auto h-5 md:h-7 mb-2" />

            <p className="md:text-xl text-[#85009D] font-medium mb-1">
                {heading}
            </p>
            <p className="md:text-base text-[#1B1B1B] font-normal"
            >
                {text}
            </p>
        </div>
    );
}
