import EventComp from '@/components/events/EventComp';
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

function Breadcrumb() {
    return (
        <nav className="text-sm breadcrumbs mb-4">
            <ol className="list-reset flex gap-2 text-gray-600">
                <li>
                    <Link href="/business-hub" className="hover:underline">Business Hub</Link>
                </li>
                <li>/</li>
                <li className="text-gray-900 font-semibold">
                    Events
                </li>
            </ol>
        </nav>
    )
}

function page() {

    const events = [
        {
            id: 1,
            type_id: 2,
            type_name: "seminars",
            heading: "Elevate Manchester – June 2025",
            time: "25th June 2025, 8:30am to 5pm",
            date: "2025-06-25",
            location: "4Th Floor, City Tower, New York Street, Manchester M1 4BT",
            designFor:
                "Manchester Edition is designed for procurement professionals, focusing on innovation, strategy, and leadership in procurement.",
            link: "/event/elevate2025-manchester",
        },
        {
            id: 2,
            type_id: 2,
            type_name: "seminars",
            heading: "Elevate Glasgow – August 2025",
            time: "26th August 2025, 8:30am to 5pm",
            date: "2025-08-26",
            location: "3rd Floor, Beacon Building 176 St Vincent St Glasgow G2 5SG",
            designFor: "Senior procurement leaders, CPOs, Procurement Directors.",
            link: "/event/elevate2025-scotland",
        },
        {
            id: 3,
            type_id: 1,
            type_name: "webinar",
            heading:
                "Boardroom Preparedness for Senior Procurement Professionals – July 2025",
            time: "17th July 2025, 11am to 12:15pm",
            date: "2025-07-17",
            location: "Virtual Webinar",
            designFor: "Keynote Speaker, Interactive Q&A.",
            link: "/event/boardroom-preparedness-for-senior-procurement-professionals",
        },
    ];

    return (
        <>
            <div>
                <div>
                    <Breadcrumb />
                </div>
                <h2 className='font-semibold text-xl md:text-2xl text-[#010101] mb-2'>Explore Our Dynamic Event Offerings</h2>
                <p className='text-sm md:text-lg text-[#363636] leading-normal md:leading-relaxed'>Whether you&#39;re looking to deepen your knowledge, build practical skills, or expand your professional network, our diverse event lineup has something for everyone. Join us for seminars that dive into expert insights, webinars you can attend from anywhere, workshops designed for hands-on learning, and networking opportunities that connect you with like-minded professionals and industry leaders.</p>
                <br></br>
                {/* <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]'>Become a Media Partner</h3> */}
                <p className='text-[#363636] hover:text-[#85009D] text-sm md:text-lg leading-normal md:leading-relaxed'>
                    {/* <Link href="/partnerships">Visit our partnership page to become a media partner with <strong>The Procurement Plug</strong>.</Link> */}

                </p>
                {/* <div className='flex flex-col items-center md:flex-row gap-4'> */}
                <div className="w-full md:w-[700px] text-center md:text-start grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    <Link
                        href={"/"}
                        className="bg-[#b58c4a] text-white px-6 py-3 rounded"
                    >
                        Get your Tickets &gt;
                    </Link>
                    <Link
                        href={"/"}
                        className="border-2 border-[#85009D] text-[#010101] px-6 py-3 rounded"
                    >
                        Become a Speaker &gt;
                    </Link>
                    <Link
                        href={"/"}
                        className="bg-[#b58c4a] text-white px-6 py-3 rounded w-full"
                    >
                        Become a Sponsor &gt;
                    </Link>
                </div>
            </div >
            <EventsCTR />

            <div>
                <div className="flex flex-col gap-6 md:gap-8">
                    <div className='max-w-[780px] m-auto text-center'>
                        <h3 className='font-extrabold text-3xl md:text-5xl mb-4 md:mb-8 text-[#010101]'>Upcoming Events</h3>
                        <p className='text-[#363636] text-sm md:text-lg leading-normal md:leading-relaxed'>We have a wide range of upcoming events planned, including seminars, webinars, workshops, and networking opportunities. Stay tuned for more details!</p>
                    </div>

                </div >

                {/* Events List */}
                <div className="mt-10 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {events.map((event) => (
                        <EventComp
                            key={event.id}
                            heading={event.heading}
                            time={event.time}
                            location={event.location}
                            designFor={event.designFor}
                            href={event.link}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default page;