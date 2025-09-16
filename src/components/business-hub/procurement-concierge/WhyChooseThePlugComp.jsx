
export default function WhyChooseThePlugComp({
    text = "Plug lite",
    description = "Infrequent support or project-based task overflow",
    colSpan }) {
    return (
        <div className={`rounded py-3 px-4 bg-gradient-to-b from-[#FBE3FF] to-[#FFFBF5] border border-[#DBBB89] flex flex-col gap-y-3 min-h-40 ${colSpan}`}>
            <p className={`md:text-md font-semibold py-1 text-[#85009D]`}>
                {text}
            </p>
            <p className="md:text-md font-normal text-[#1B1B1B]">
                {description}
            </p>
        </div>
    );
}