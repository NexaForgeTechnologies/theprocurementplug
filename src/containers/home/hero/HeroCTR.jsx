import IconComponent from '@/components/icon/Icon'
import Link from 'next/link'
import React from 'react'

function HeroCTR() {
    return (
        <div className='relative min-h-[90vh]'>
            <div className='w-screen ml-[calc(50%-50vw)] h-full absolute'>
                <video autoPlay loop muted playsInline className='w-full h-full object-cover'>
                    <source src="/images/header/headervedio.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="relative z-10 py-20 md:py-28 max-w-[600px] flex flex-col gap-4">
                <h2 className='text-[#212121] text-3xl md:text-7xl mb-8 font-semibold md:font-medium'>
                    Welcome To <br /> The Procurement Plug
                </h2>
                <p className="text-[#212121] text-lg md:leading-relaxed">Your trusted interactive procurement knowledge platform to take your procurement journey to the next level</p>
                <span className="bg-[#85009d] text-white text-md md:text-2xl p-4 rounded text-center">PLUG INTO YOUR POTENTIAL TODAY!</span>
                <Link className="bg-[#b08d57] text-white text-md md:text-2xl p-4 rounded text-center flex items-center gap-2 justify-center" href="https://www.linkedin.com/company/the-procurement-plug" target='_blank'>
                    <IconComponent name="linkedin" color="white" size={26} />
                    <span>Find Us On Linkedin</span>
                </Link>
            </div>
        </div>
    )
}

export default HeroCTR