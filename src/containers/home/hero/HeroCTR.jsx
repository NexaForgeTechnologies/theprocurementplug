import React from 'react'

function HeroCTR() {
    return (
        <div className='relative'>
            <video autoPlay loop muted playsInline className='w-full'>
                <source src="/images/header/headervedio.mp4" type="video/mp4" />
            </video>
            <div className='hidden md:flex flex-col w-[40%] absolute top-1/2 left-0 transform -translate-y-1/2  pl-[80px]'>
                <h3 className='text-[55px] max-[460px] leading-[1.2]  text-[#212121] text-left mt-[2px] self-start pt-0'>
                    Welcome To <br />
                    The Procurement Plug
                </h3>
                <p className="w-[120%] max-[400px] mt-[30px] text-left text-[#424242]">Your trusted interactive procurement knowledge platform to take your procurement journey to the next level</p>
                <a className="px-[12px] py-[18px] text-[22px] mt-[15px] uppercase bg-[#85009D] rounded-md text-[#ffff]  text-center  w-full min-w-[59%] max-w-full" href="">Plug into your potential today!</a>
                <a className="px-[12px] py-[18px] bg-[#B08D57] mt-[15px] text-white rounded-md w-full  text-center border-[#B08D57]" href="">Find Us On Linkedin</a>
            </div>
        </div>
    )
}

export default HeroCTR