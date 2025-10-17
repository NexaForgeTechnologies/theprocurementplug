import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
import Link from "next/link";

export default function GetStartedCont() {
    return (
        <>
            <section className="my-10">

                <h3 className="font-semibold text-[24px] md:text-[32px] mt-4 mb-4 text-[#1B1B1B]">
                    Get Started Today
                </h3>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                        {
                            title: "Post a One-Off Job",
                            description: `Share your vacancy instantly with our procurement audience— no long-term commitment required.`,
                            btnText: "Post Now",
                            Url: "/"
                        },
                        {
                            title: "Become a Recruitment Partner",
                            description: `Unlock a visibility in our
ecosystem, live dashboard tools, and
curated talent access.`,
                            btnText: "Partner With Us",
                            Url: "/partnerships"
                        },
                        {
                            title: "Already a Partner",
                            description: `in our ecosystem?`,
                            btnText: "Log In to Your Dashboard",
                            Url: "/"
                        },

                    ].map((job, index) => (
                        <div key={index} className="border border-[#DBBB89] bg-[#FFFBF5] rounded px-4 md:px-6 py-6 
                        flex flex-col ">
                            <h3 className="font-semibold text-base md:text-2xl mb-4 text-[#85009D]">
                                {job.title}
                            </h3>
                            <p className="text-sm md:text-base text-[#1B1B1B] mb-4">{job.description}</p>

                            <Link href={job.Url} className="self-start mt-auto">
                                <ArrowButtonCom text={job.btnText} textColor={"text-[white] self-start"} bgColor={"bg-[#B08D57]"} hoverBgColor={"hover:bg-transparent"} borderColor={"border-[#B08D57]"} hoverTextColor={"hover:text-[#B08D57]"} />
                            </Link>
                        </div>
                    ))}

                </section>
            </section >
        </>
    )
}