import MentorsCard from "@/components/personal-development-hub/welcome-to-the-mentors-coaches-directory/mentors-coaches-directory/category/MentorsCard";

export default function AllMentorsCTR({ title }) {
    return (
        <>
            <section aria-label="All Mentors">
                <h3 className="font-semibold text-lg md:text-xl text-[#1B1B1B] mb-5">
                    All {title} Mentors
                </h3>
                {/* Search Input */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-5 bg-white">
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

                    {/* Dropdowns */}
                    <select className="border border-[#85009D] rounded-md px-3 py-2 text-sm text-gray-700 bg-white flex-shrink-0">
                        <option>Location</option>
                        <option>Remote</option>
                    </select>

                    <select className="border border-[#85009D] rounded-md px-3 py-2 text-sm text-gray-700 bg-white flex-shrink-0">
                        <option>Rate</option>
                        <option>Hourly</option>
                    </select>

                    <select className="border border-[#85009D] rounded-md px-3 py-2 text-sm text-gray-700 bg-white flex-shrink-0">
                        <option>Availability</option>
                        <option>Next Week</option>
                    </select>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
                    <MentorsCard
                        src={"/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/category/anna.png"}
                        title={"Anna Stevens"} />
                    <MentorsCard
                        src={"/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/category/anna.png"}
                        title={"Anna Stevens"} />
                    <MentorsCard
                        src={"/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/category/anna.png"}
                        title={"Anna Stevens"} />
                    <MentorsCard
                        src={"/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/category/anna.png"}
                        title={"Anna Stevens"} />
                    <MentorsCard
                        src={"/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/category/anna.png"}
                        title={"Anna Stevens"} />
                    <MentorsCard
                        src={"/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/category/anna.png"}
                        title={"Anna Stevens"} />
                    <MentorsCard
                        src={"/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/category/anna.png"}
                        title={"Anna Stevens"} />
                    <MentorsCard
                        src={"/images/personaldevelopmenthub/welcome-mentors-directory/mentors-coaches-directory/category/anna.png"}
                        title={"Anna Stevens"} />
                </section>
            </section>
        </>
    );
}