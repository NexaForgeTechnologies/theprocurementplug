
export default function EventHighlightDigitalGlobalComp({
    panelTitle = "Panel 1",
    topic = "Beyond Procurement – Building Multi-Disciplinary Skills for Global Relevance",
    speakerType = "Mix of senior managers from procurement, IT, sustainability, and finance.",
    definition = "A forward-looking overview of how technology, geopolitics, and globalization are reshaping procurement roles. Sets the tone by showing attendees the bigger picture of career evolution."
    ,
    colSpan
}) {
    return (
        <div className={`bg-gradient-to-r from-[#AF8B59] to-[#902B8D] rounded-xl p-4 md:p-6 ${colSpan}`}>
            <h3 className="font-extrabold text-lg md:text-xl leading-6 text-white mb-4">{panelTitle}</h3>
            {/* Inner box */}
            <div className="bg-gradient-to-r from-[#9E7759] to-[#8D4078] backdrop-blur-sm rounded-xl p-4 md:p-6 text-white">


                <p className="text-sm md:text-base mb-3">
                    <span className="font-semibold">Topic:</span> {topic}
                </p>

                <p className="text-sm md:text-base mb-3 flex gap-x-2 ">
                    <span className="w-3 h-3 inline-block rounded-full bg-white mt-1 shrink-0"></span>
                    {speakerType}
                </p>

                <p className="text-sm md:text-base mb-3 flex gap-x-2 ">
                    <span className="w-3 h-3 inline-block rounded-full bg-white mt-1 shrink-0"></span>
                    {definition}
                </p>
            </div>
        </div>
    );
}
