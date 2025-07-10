import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function EventOppertunityCTR() {

    return (
        <div className="flex flex-col gap-6 md:gap-8">
            <div className='max-w-[780px] m-auto text-center'>
                <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]'>Event Highlights</h3>
                <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'>The Procurement Plug Elevate 2025 is your gateway to high-impact opportunities and powerful
                    networking. Engage with industry leaders, expand your professional connections, and gain insights
                    that elevate your procurement career.</p>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-6 md:gap-8'>
                <div className='flex-1 w-full'>
                    {/* <img className='w-full' src="/images/events/manchester/highlight.png" alt="" /> */}
                    <Image
                        className='w-full  md:h-[578px]'
                        src={"/images/events/oppertunity.png"}
                        alt={"member"}
                        width={578}
                        height={578}
                    />
                </div>
                <div className='flex-1 flex flex-col gap-4 md:gap-6 text-[#363636]'>
                    <h2 className='font-extrabold text-2xl leading-6 md:leading-6'>Attendees will gain access to:</h2>
                    <div>
                        <h2 className='font-extrabold text-lg leading-6 mb-1 md:leading-6'>Special Event Only Opportunities To Elevate Your Career</h2>
                        <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'>The Procurement Plug Elevate 2025 is your gateway to career
                            advancement in procurement. This premier event offers
                            exclusive networking opportunities, expert-led sessions, and
                            strategic insights designed to boost your skills and position
                            you as a leader in the industry. Join us to connect with top
                            professionals, discover emerging trends, and unlock
                            transformative opportunities for your career</p>
                    </div>
                    <div>
                        <h2 className='font-extrabold text-lg leading-6 mb-1 md:leading-6'>Exclusive networking opportunities to meet industry leaders</h2>
                        <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'>Seize exclusive opportunity to access inside industry insights by top
                            CPOs and network with top professionals to propel your career
                            forward.</p>
                    </div>
                </div>
            </div>
            <div className='relative bg-[#7E0095] rounded-[10px] p-6 flex flex-col-reverse lg:flex-row justify-between gap-6 md:gap-8 items-center text-center lg:text-start'>
                <div>
                    <h2 className='text-[#ffff] font-extrabold text-lg leading-6 md:leading-6 mb-4'>Missed the live session?</h2>
                    <p className='text-[#ffff] text-sm md:text-lg leading-normal md:leading-relaxed mb-4'>
                        Catch up on all our past Webinars-now available on Youtube.
                    </p>
                    <Link
                        href={"/"}
                        className="inline-flex justify-center items-center cursor-pointer bg-[#b08d57] text-white px-4 py-3 rounded-[6px] w-full lg:w-auto">
                        Watch on Youtube
                        <div className="ml-1 w-2 h-2 border-t-2 border-r-2 border-white transform rotate-45"></div>
                    </Link>
                </div>
                <Image
                    className="hidden lg:block absolute z-0 left-[240px] top-[50px] w-[60%] h-[100px]"
                    src={"/images/events/manchester/dashedline.png"}
                    alt={"youtube"}
                    width={559}
                    height={113}
                />
                <div className='relative z-10'>
                    <Image
                        className=' md:h-[149px]'
                        src={"/images/events/manchester/youtube.png"}
                        alt={"youtube"}
                        width={211}
                        height={149}
                    />
                </div>
            </div>


        </div>
    )
}

export default EventOppertunityCTR