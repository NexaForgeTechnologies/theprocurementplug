import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
import Link from "next/link";

export default function JobTileComp({ jobTitle, Employer, JobType, Posted, Description, BtnName, url = "/", BtnOnClick }) {
    return (
        <>
            <div>
                <div className="border border-[#DBBB89] bg-[#FFFBF5] rounded px-4 md:px-6 py-6 md:min-h-90 h-full flex flex-col gap-y-5">
                    <div>
                        <h3 className="font-semibold text-base md:text-2xl mb-2 text-[#85009D]">
                            Job Title: <br /> {jobTitle}</h3>
                        <p className="text-sm md:text-base text-[#1B1B1B] mb-2">Employer: {Employer}</p>
                        <p className="text-sm md:text-base text-[#1B1B1B] mb-2">Job Type: {JobType}</p>
                        <p className="text-sm md:text-base text-[#1B1B1B] mb-2">Posted: {Posted}</p>
                        <p className="text-sm md:text-base text-[#1B1B1B] mb-2">Description: {Description}</p>
                    </div>
                    <div className="mt-auto flex justify-start gap-x-2">
                        {BtnOnClick ? (
                            <button
                                type="button"
                                onClick={BtnOnClick}
                                className="self-start"
                            >
                                <ArrowButtonCom
                                    text={BtnName}
                                    textColor={"text-[white] mt-auto self-start"}
                                    bgColor={"bg-[#B08D57]"}
                                    hoverBgColor={"hover:bg-transparent"}
                                    borderColor={"border-[#B08D57]"}
                                    hoverTextColor={"hover:text-[#B08D57]"}
                                />
                            </button>
                        ) : (
                            <Link href={url} className="self-start">
                                <ArrowButtonCom
                                    text={BtnName}
                                    textColor={"text-[white] mt-auto self-start"}
                                    bgColor={"bg-[#B08D57]"}
                                    hoverBgColor={"hover:bg-transparent"}
                                    borderColor={"border-[#B08D57]"}
                                    hoverTextColor={"hover:text-[#B08D57]"}
                                />
                            </Link>
                        )}

                        <span className="px-3 py-2 border border-[#B08D57] rounded-md cursor-pointer">
                            <img
                                src="/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/the-plug-job-board/job-listing/bookmark.png"
                                alt="icon"
                                className="object-contain"
                            />
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
}