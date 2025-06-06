import React from 'react'

function EventOppertunityCTR() {

    return (
        <div className="flex flex-col gap-6 md:gap-8">
            <div className='max-w-[780px] m-auto text-center'>
                <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]'>Event Highlights</h3>
                <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'>The Procurement Plug Elevate 2025 is your gateway to high-impact opportunities and powerful networking. Engage with industry leaders, expand your professional connections, and gain insights that elevate your procurement career.</p>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-6 md:gap-8'>
                <div className='flex-1'>
                    <img className='w-full' src="/images/events/oppertunity.png" alt="" />
                </div>
                <div className='flex-1 flex flex-col gap-4 md:gap-6 text-[#363636]'>
                    <h2 className='font-extrabold text-2xl leading-6 md:leading-6'>Attendees will gain access to:</h2>
                    <div>
                        <h2 className='font-extrabold text-lg leading-6 mb-1 md:leading-6'>Special Event Only Opportunities To Elevate Your Career</h2>
                        <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'>Elevate your career at Elevate 2025, powered by The Procurement Plug. This premier event offers exclusive opportunities to prepare for the boardroom with strategic insights and networking with top industry leaders. Gain the expertise and connections you need to drive your career forward in a dynamic, results-focused environment.</p>
                    </div>
                    <div>
                        <h2 className='font-extrabold text-lg leading-6 mb-1 md:leading-6'>Exclusive networking opportunities to meet industry leaders</h2>
                        <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'>Gain exclusive access to top industry CPOs, CEOs, COOs, and MDs. Leverage these exclusive networking opportunities to build vital relationships, gain insider insights, and accelerate your career by connecting with the leaders shaping the future of our industry.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EventOppertunityCTR