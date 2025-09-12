"use client";

export default function EventDaysDigitalGlobalComp({
  dayTitle = "Day 1 – Future-Proofing Procurement Careers for Junior to Mid-Senior",
  theme = "Skills & Growth for a Global Procurement Future",
  keynoteTitle = "Opening Keynote (20 mins)",
  keynoteTopic = "Global Shifts in Talent: What the Next Decade Means for Procurement Careers",
  content = [
    { topic: "Topic A", para: "Future skills every procurement leader must learn" },
    { topic: "Topic B", para: "Adapting to digital-first procurement workflows" },
  ],
}) {
  return (
    <section className="">
      {/* Section Header */}
      <div className="text-center">
        <h3 className="font-extrabold text-2xl md:text-3xl mb-4 md:mb-8 text-[#010101]">
          {dayTitle}
        </h3>
        <p className="text-[black] text-sm md:text-lg leading-normal md:leading-relaxed">
          <span className="font-semibold mr-1">Theme:</span>
          {theme}
        </p>
      </div>

      {/* Keynote Card */}
      <div className="bg-[#FFFBF5] border border-[#DBBB89] rounded p-6 mt-8 ">
        <h3 className="font-extrabold text-lg md:text-xl leading-6 text-[#85009D]">
          {keynoteTitle}
        </h3>

        <p className="text-sm md:text-lg mt-3 md:mt-5 text-black">
          <span className="font-semibold mr-1">Topic:</span>
          {keynoteTopic}
        </p>

        {/* Bullet List */}
        <div className="mt-6 text-black">
          {content.map((items, idx) => (
            <div key={idx} className="flex gap-x-3 items-start mb-3">
              <span className="w-3 h-3 inline-block rounded-full bg-[#B08D57] mt-2 shrink-0"></span>
              <p className="text-sm md:text-lg">
                <span className="font-semibold mr-1">{items.topic}</span>
                {items.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
