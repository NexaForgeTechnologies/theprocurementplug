import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
import Link from "next/link";

export default function ThePlugJobBoardCTR() {
    return (
        <> <section className="">
            <div className="mb-4 md:mb-8">
                <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                    Welcome to The Plug Job Board
                </h3>
                <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-2">Your Gateway to Procurement Career Growth & Talent Discovery</p>
                <p className="text-[16px] md:text-[20px] text-[#1B1B1B] mb-4 md:mb-8">Whether you're climbing the ladder or hiring your next top performer, you're in the right place.</p>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                    {
                        image: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/the-plug-job-board/professionals.png", title: "For Professionals:", description1: `The Plug Job Board is designed to support your career elevation. `, description2: `Explore curated roles across procurement, supply chain, and commercial functions — from entry-level to executive.`,
                        list: [
                            "Save roles you're interested in",
                            "Apply directly through the platform",
                            "Access jobs aligned to your development goals",],
                        btnText: "View all Jobs",
                        Url: "/business-hub/vip-lounge/talent-hiring-intelligence/the-plug-job-board/job-listing"
                    },
                    {
                        image: "/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/the-plug-job-board/employers.png", title: "For Employers & Recruiters", description1: `Tap into our diverse and verified talent pool of procurement professionals.`, description2: `Whether you're hiring for a permanent post or a short-term contract, The Plug is where smart sourcing begins.`,
                        list: [
                            "Post your procurement roles to our network",
                            "Get visibility with engaged professionals actively developing their careers",
                            "Join our  full ecosystem with access to events, roundtables and more",],
                        btnText: "View Partnerships",
                        Url: "/"
                    },

                ].map((job, index) => (
                    <div key={index} className="border border-[#DBBB89] bg-[#FFFBF5] rounded px-4 md:px-6 py-6 min-h-90 flex flex-col ">
                        <div className="bg-white rounded-full border border-[#85009D] self-start p-4 mb-5 ">
                            <img src={job.image} alt="icon" className="w-7 lg:w-13 h-7 lg:h-13 object-contain" />
                        </div>
                        <h3 className="font-semibold text-base md:text-2xl mb-4 text-[#85009D]">
                            {job.title}
                        </h3>
                        <p className="text-sm md:text-base text-[#1B1B1B] mb-3">{job.description1}</p>
                        <p className="text-sm md:text-base text-[#1B1B1B] mb-4">{job.description2}</p>
                        <ul className="mb-4">
                            {job.list.map((item, index) => (
                                <li key={index} className=" text-sm md:text-base text-[#1B1B1B] mb-2">
                                    <span className="mr-1">✔</span>
                                    {item}</li>))}
                        </ul>
                        <Link href={job.Url} className="mt-auto self-start">
                            <ArrowButtonCom text={job.btnText} textColor={"text-[white] mt-auto self-start"} bgColor={"bg-[#B08D57]"} hoverBgColor={"hover:bg-transparent"} borderColor={"border-[#B08D57]"} hoverTextColor={"hover:text-[#B08D57]"} />
                        </Link>
                    </div>
                ))}

            </section>
        </section>
        </>
    );
}