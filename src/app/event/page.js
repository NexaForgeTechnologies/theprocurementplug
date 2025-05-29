import EventsCTR from '@/containers/events/EventsCTR'
import Link from 'next/link';
import React from 'react'

export const metadata = {
    title: 'Events',
    description: 'Discover our range of engaging events including seminars, webinars, workshops, and networking opportunities—designed to educate, connect, and empower professionals.',
    openGraph: {
        title: 'Blogs',
        description: 'Join our seminars, webinars, workshops, and networking events tailored to enhance your knowledge, skills, and professional connections.',
        images: [
            {
                url: 'https://theprocurementplug.com/images/og/events.jpg',
                width: 1200,
                height: 630,
                alt: 'Events',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Events',
        description: 'Join our seminars, webinars, workshops, and networking events tailored to enhance your knowledge, skills, and professional connections.',
        images: ['https://theprocurementplug.com/images/og/blogs.png'],
    },
};

function page() {
    return (
        <>
            {/* <div className="flex flex-col gap-6 md:gap-8">
                <div className='max-w-[780px] m-auto text-center'>
                    <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]'>Become a Media Partner</h3>
                    <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'><strong>marketing@theprocurement.com</strong> - <Link href="/partnerships">Visit our partnership page</Link>
                    </p>
                </div>

            </div > */}

            <div className='mt-10'>
                <h2 className='font-semibold text-xl md:text-2xl text-[#010101] mb-2'>Explore Our Dynamic Event Offerings</h2>
                <p className='text-sm md:text-lg text-[#363636] leading-normal md:leading-relaxed'>Whether you&#39;re looking to deepen your knowledge, build practical skills, or expand your professional network, our diverse event lineup has something for everyone. Join us for seminars that dive into expert insights, webinars you can attend from anywhere, workshops designed for hands-on learning, and networking opportunities that connect you with like-minded professionals and industry leaders.</p>
                <br></br>
                {/* <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]'>Become a Media Partner</h3> */}
                <p className='text-[#363636] hover:text-[#85009D] text-sm md:text-lg leading-normal md:leading-relaxed'><Link href="/partnerships">Visit our partnership page to become a media partner with <strong>The Procurement Plug</strong>.</Link>
                </p>
            </div>
            <EventsCTR />
        </>
    )
}

export default page;