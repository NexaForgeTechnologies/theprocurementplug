import React from 'react'

function ImgTxtBg() {
    return (
        <div className='p-6 md:p-8 flex gap-6 md:gap-8 flex-col-reverse md:flex-row rounded-2xl items-center'
            style={{ background: "linear-gradient(140deg, #b08d57, #85009d)" }}>
            <div className='flex-1'>
                <h3 className='font-extrabold text-3xl md:text-5xl mb-4 text-white'>Extensive Resources</h3>
                <p className='text-sm md:text-lg text-white leading-normal md:leading-relaxed'>Unlock a wealth of resources designed to empower procurement professionals at every stage of their career. From whitepapers and industry reports to practical templates and insightful blogs, The Procurement Plug provides everything you need to succeed in the ever-evolving world of procurement. Whether you're advancing your skills with free courses, leveraging tools for career growth, or accessing tailored guides to tackle procurement challenges, our comprehensive library equips you with the knowledge and support to excel. Dive into a thriving community of expertise and take your procurement journey to the next level.</p>
            </div>
            <div className='flex-1 w-full'>
                <img className='rounded-lg w-full max-h-[500px] object-cover' src="/images/home/resource.png" alt="" />
            </div>
        </div>
    )
}

export default ImgTxtBg