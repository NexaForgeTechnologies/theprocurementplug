import Link from 'next/link'
import React from 'react'
import IconComponent from '../icon/Icon'

function EventSponserComp() {
    return (
        <div className='max-w-[780px] m-auto text-center bg-[#9c27b0] py-10 md:py-20'
            style={{
                boxShadow: "0 0 0 100vmax #9c27b0",
                clipPath: "inset(0 -100vmax)",
            }}
        >
            <h2 className='font-extrabold text-3xl md:text-5xl text-white'>Sponsorship Opportunities</h2>
            <p className='text-white text-sm md:text-lg leading-normal md:leading-relaxed my-4 md:my-8'>Are you a procurement solutions provider looking to showcase your solution to a highly engaged audience? <strong>Become a sponsor and get premium exposure.</strong></p>
            <div>
                <Link className='bg-[#b08d57] flex gap-2 items-center max-w-max p-4 m-auto text-bold text-xl' href="mailto:elevate2025@theprocurementplug.com">
                    <IconComponent name="email" color='white' size={20} />
                    <span>Email us about it</span>
                </Link>
            </div>
        </div>
    )
}

export default EventSponserComp