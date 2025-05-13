import React from 'react'

function ImgTxtCTR() {
    return (
        <>
            <div className='flex gap-6 md:gap-8 flex-col-reverse md:flex-row items-center'>
                <div className='flex-1'>
                    <h3 className='font-extrabold text-3xl md:text-5xl mb-4 text-[#010101]'>CPD Grants for Procurement Growth</h3>
                    <p className='text-sm md:text-lg text-[#363636] leading-normal md:leading-relaxed'>At The Procurement Plug, we believe in empowering professionals to achieve their full potential. Our CPD (Continuing Professional Development) grants are designed to support your growth by funding training, certifications, and skill development in procurement. Invest in your future with financial assistance that helps you stay competitive and advance in the ever-evolving procurement industry.
                    </p>
                </div>
                <div className='flex-1 w-full'>
                    <img className='rounded-lg w-full max-h-[500px] object-cover' src="/images/home/discussion.png" alt="" />
                </div>
            </div>
            <div className='flex gap-6 md:gap-8 flex-col md:flex-row items-center'>
                <div className='flex-1 w-full'>
                    <img className='rounded-lg w-full max-h-[500px] object-cover' src="/images/home/happy-client.png" alt="" />
                </div>
                <div className='flex-1'>
                    <h3 className='font-extrabold text-3xl md:text-5xl mb-4 text-[#010101]'>Mentoring & Coaching</h3>
                    <p className='text-sm md:text-lg text-[#363636] leading-normal md:leading-relaxed'>Unlock your potential with our tailored mentoring programs at The Procurement Plug. Connect with experienced procurement leaders who provide guidance, share industry insights, and support your professional growth. Whether you’re new to the field or looking to elevate your career, our mentoring programs are designed to help you achieve your goals and navigate the complexities of procurement with confidence.</p>
                </div>
            </div></>
    )
}

export default ImgTxtCTR