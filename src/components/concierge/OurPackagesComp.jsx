
export default function OurPackagesComp({
    textColor="text-[#85009D]",
    bgColor="bg-[#EAC6FF]",
    text="Plug lite",
    description="Infrequent support or project-based task overflow"
}) {
    return (
        <div className={`rounded py-3 px-4 bg-[#FFFBF5] border border-[#DBBB89] flex flex-col gap-y-3 min-h-40`}>
            <p className={`text-center md:text-lg font-medium py-1 ${textColor} ${bgColor}`}>
                {text}
            </p>
            <p className="text-sm md:text-base font-normal text-[#1B1B1B]">
                {description}
            </p>
        </div>
    );
}