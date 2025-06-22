// "use client";
// import Image from "next/image";

// const InsightsSection = ({ title, items, buttonText }) => {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch mb-8">
//             {title.map((sectionTitle, index) => (
//                 <div key={index}>
//                     <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
//                         {sectionTitle}
//                     </h3>
//                     <div className="bg-[#FFFBF5] rounded-[6px] border border-[#DBBB89] text-[#1B1B1B] p-5 flex flex-col gap-6">
//                         {items[index].map((item, idx) => (
//                             <div key={idx} className="flex flex-col md:flex-row text-center md:text-start items-center gap-6">
//                                 <Image
//                                     src={item.image}
//                                     alt={item.alt}
//                                     width={100}
//                                     height={100}
//                                     className="w-[100px] h-[100px]"
//                                 />
//                                 <div>
//                                     <h3 className="text-[20px] md:text-2xl font-semibold">{item.title}</h3>
//                                     {item.description && <p>{item.description}</p>}
//                                 </div>
//                             </div>
//                         ))}
//                         <div className="flex justify-center md:justify-start mt-auto">
//                             {buttonText && buttonText[index] ? (
//                                 <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
//                                     {buttonText[index]}
//                                     <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
//                                 </button>
//                             ) : (
//                                 <div className="h-[0px] md:h-[40px] w-full md:w-auto"></div> 
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             ))
//             }
//         </div >
//     );
// };

// export default InsightsSection;
"use client";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

const InsightsSection = ({ title, items, buttonText }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch mb-8">
            {title.map((sectionTitle, index) => (
                <div key={index}>
                    <h3 className="font-semibold text-[24px] md:text-[32px] mb-4 text-[#1B1B1B]">
                        {sectionTitle}
                    </h3>
                    <div className="bg-[#FFFBF5] rounded-[6px] border border-[#DBBB89] text-[#1B1B1B] p-5 flex flex-col gap-6">
                        {items[index].map((item, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row text-center md:text-start items-center gap-6">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={100}
                                    height={100}
                                    className="w-[100px] h-[100px]"
                                />
                                <div>
                                    <h3 className="text-[20px] md:text-2xl font-semibold">{item.title}</h3>
                                    {item.description && <p>{item.description}</p>}
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-center md:justify-start mt-auto">
                            {buttonText && buttonText[index] ? (
                                <Link href="/business-hub/vip-lounge/talent-hiring-intelligence/salary-and-role-tracker">                                    <button className="flex items-center justify-center md:justify-start cursor-pointer bg-[#b08d57] text-white px-4 py-2 rounded-[6px] w-full md:w-auto">
                                    {buttonText[index]}
                                    <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                                </button>
                                </Link>
                            ) : (
                                <div className="h-[0px] md:h-[40px] w-full md:w-auto"></div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InsightsSection;