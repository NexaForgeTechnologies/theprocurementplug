import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";
import Link from "next/link";

export default function JobTileComp({jobTitle, Employer, JobType, Posted, Description, BtnName, url="/"}) {
    return (
        <>
            <div>
                <div className="border border-[#DBBB89] bg-[#FFFBF5] rounded px-4 md:px-6 py-6 min-h-90 flex flex-col ">
                    <h3 className="font-semibold text-base md:text-2xl mb-2 text-[#85009D]">
                        Job Title: <br /> {jobTitle}</h3>
                       
                  <p className="text-sm md:text-base text-[#1B1B1B] mb-2">Employer: {Employer}</p>
                    <p className="text-sm md:text-base text-[#1B1B1B] mb-2">Job Type: {JobType}</p>

                    <p className="text-sm md:text-base text-[#1B1B1B] mb-2">Posted: {Posted}</p>
                    
                    <p className="text-sm md:text-base text-[#1B1B1B] mb-2">Description: {Description}</p>
                    <div className="mt-auto">
                        <Link href={url} className="self-start">
                            <ArrowButtonCom text={BtnName} textColor={"text-[white] mt-auto self-start"} bgColor={"bg-[#B08D57]"} hoverBgColor={"hover:bg-transparent"} borderColor={"border-[#B08D57]"} hoverTextColor={"hover:text-[#B08D57]"} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}