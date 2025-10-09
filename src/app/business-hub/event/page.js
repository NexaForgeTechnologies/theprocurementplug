import React from 'react'
import EventsCTR from '@/containers/business-hub/events/EventsCTR'

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
            <EventsCTR />
        </>
    )
}

export default page;