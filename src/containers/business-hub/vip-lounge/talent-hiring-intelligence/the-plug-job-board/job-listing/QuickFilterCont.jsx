"use client";

export default function QuickFilterCont() {
    const QuickFilter = [
        {
            title: "Security cleared",
            filters: [
                { id: 1, label: "Counter Terrorist Check (CTC)" },
                { id: 2, label: "Developed Vetting (DV)" },
                { id: 3, label: "Security Check (SC)" },
                { id: 4, label: "Enhanced Developed Vetting (eDV)" },
                { id: 5, label: "NIL" },
                { id: 6, label: "OTHER" },
            ],
        },
        {
            title: "Availability",
            filters: [
                { id: 7, label: "Immediately" },
                { id: 8, label: "1 to 3 weeks" },
                { id: 9, label: "3 - 6 weeks" },
                { id: 10, label: "9 weeks +" },
                { id: 11, label: "Not available" },
            ],
        },
    ];

    const ExtendedFilter = [
        {
            title: "Experience in years",
            filters: [
                { id: 12, label: "1-2 Y" },
                { id: 13, label: "3-5 Y" },
                { id: 14, label: "6-10 Y" },
                { id: 15, label: "10-15 Y" },
                { id: 16, label: "15+ Y" },
            ],
        },
        {
            title: "Resource type",
            filters: [
                { id: 17, label: "Part time" },
                { id: 18, label: "Temporary" },
                { id: 19, label: "Fulltime" },
                { id: 20, label: "Interim/contractor" },
            ],
        },
    ];

    const RegulatedSector = [
        {
            title: "Regulated sector experience",
            filters: [
                { id: 21, label: "Civil Aviation Authority (CAA)" },
                { id: 22, label: "Financial Conduct Authority (FCA)" },
                { id: 23, label: "Office of Communications (Ofcom)" },
                { id: 24, label: "Office of Gas and Electricity Markets(Ofgem)" },
                { id: 25, label: "Office of Water Regulation (Ofwat)" },
                { id: 26, label: "Office of Rail Regulation (ORR)" },
            ],
        },
        {
            title: "Willing to travel",
            filters: [
                { id: 27, label: "Up to 10 miles" },
                { id: 28, label: "Up to 20 miles" },
                { id: 29, label: "20 miles+" },
                { id: 30, label: "Interim/Remote only" },
                { id: 31, label: "Hybrid" },
            ],
        },
    ];

    const RadioFields = [
        {
            title: "Willing to relocate",
            filters: [
                { id: 32, label: "Yes" },
                { id: 33, label: "No" },
            ],
        },
        {
            title: "A full driving licence",
            filters: [
                { id: 34, label: "Yes" },
                { id: 35, label: "No" },
            ],
        },
    ];

    return (
        <>
            <section className="pr-4 pl-4 md:pl-0 pb-10 sm:border-r sm:border-[#B08D57] flex flex-col gap-y-3 bg-white h-[15vh] sm:h-[100vh] overflow-y-auto hide-scrollbar">

                {/* Search Filter */}
                <section>
                    <h1 className="font-semibold text-lg md:text-xl mb-2 pt-4 md:pt-0">Quick filter</h1>
                    <label className="flex items-center relative">
                        <input
                            type="text"
                            className="rounded-md border border-[#85009D] pl-2 w-full py-2 outline-none"
                            placeholder="City"
                        />
                        <img
                            src="/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/the-plug-job-board/job-listing/search.png"
                            alt="search"
                            className="w-6 h-6 absolute right-3 cursor-pointer"
                        />
                    </label>
                </section>

                {/* Quick Filter */}
                {QuickFilter.map((filter, i) => (
                    <section key={i} className="mb-3">
                        <h2 className="font-medium text-base md:text-base lg:text-lg mb-2">{filter.title}</h2>
                        <div className="flex flex-col gap-1">
                            {filter.filters.map((subItem) => (
                                <label key={subItem.id} className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        name={subItem.label}
                                        className="relative top-[2px]"
                                    />
                                    <p className="text-sm">{subItem.label}</p>
                                </label>
                            ))}
                        </div>
                    </section>
                ))}

                <h1 className="font-semibold text-lg md:text-xl">Extended Filter</h1>
                {/* Extended Filter */}
                {ExtendedFilter.map((filter, i) => (
                    <section key={i}>
                        <h2 className="font-medium text-base md:text-base lg:text-lg mb-2">{filter.title}</h2>
                        <div className="flex flex-col gap-1">
                            {filter.filters.map((subItem) => (
                                <label key={subItem.id} className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        name={subItem.label}
                                        className="relative top-[2px]"
                                    />
                                    <p className="text-sm">{subItem.label}</p>
                                </label>
                            ))}
                        </div>
                    </section>
                ))}

                {/* Select Dropdown */}
                <section className="flex flex-col gap-3">
                    <label className="flex flex-col relative w-full">
                        <select
                            className="rounded-md border border-[#85009D] pl-2 pr-8 w-full py-2 outline-none appearance-none"
                            defaultValue=""
                        >
                            <option value="">
                                Sector experience
                            </option>
                        </select>
                        <img
                            src="/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/the-plug-job-board/job-listing/dropdown.png"
                            alt="dropdown icon"
                            className="w-auto h-2 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        />
                    </label>
                    <label className="flex flex-col relative w-full">
                        <select
                            className="rounded-md border border-[#85009D] pl-2 pr-8 w-full py-2 outline-none appearance-none"
                            defaultValue=""
                        >
                            <option value="">
                                Category experience
                            </option>
                        </select>
                        <img
                            src="/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/the-plug-job-board/job-listing/dropdown.png"
                            alt="dropdown icon"
                            className="w-auto h-2 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        />
                    </label>
                </section>

                {RegulatedSector.map((filter, i) => (
                    <section key={i}>
                        <h2 className="font-medium text-base md:text-base lg:text-lg mb-2">{filter.title}</h2>
                        <div className="flex flex-col gap-1">
                            {filter.filters.map((subItem) => (
                                <label key={subItem.id} className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        name={subItem.label}
                                        className="relative top-[2px]"
                                    />
                                    <p className="text-sm">{subItem.label}</p>
                                </label>
                            ))}
                        </div>
                    </section>
                ))}

                {/* RadioFields Yes/No */}
                {RadioFields.map((item) => (
                    <section key={item.title} className="mb-2">
                        <h2 className="font-medium text-base md:text-base lg:text-lg mb-2">{item.title}</h2>
                        <div className="flex flex-row gap-2">
                            {item.filters.map((option) => (
                                <label key={option.id} className="flex items-start gap-2">
                                    <input
                                        type="radio"
                                        name={item.title}
                                        value={option.label}
                                        className="relative top-[2px]"
                                    />
                                    <p className="text-sm">{option.label}</p>
                                </label>
                            ))}
                        </div>
                    </section>
                ))}

            </section>
        </>
    );
}
