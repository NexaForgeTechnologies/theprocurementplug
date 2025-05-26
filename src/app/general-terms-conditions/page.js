import React from 'react'

import GeneralTermsCTR from '@/containers/terms-conditions/general-terms/GeneralTermsCTR'

export const metadata = {
    title: 'Terms & Conditions',
    description: 'Welcome to The Procurement Plug! We’re excited to have you as part of our platform dedicated to supporting procurement professionals on their career journeys.',
    openGraph: {
        title: 'Terms & Conditions',
        description: 'Welcome to The Procurement Plug! We’re excited to have you as part of our platform dedicated to supporting procurement professionals on their career journeys.',
        images: [
            {
                url: 'https://theprocurementplug.com/images/og/main.png',
                width: 1200,
                height: 630,
                alt: 'Home',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Terms & Conditions',
        description: 'Welcome to The Procurement Plug! We’re excited to have you as part of our platform dedicated to supporting procurement professionals on their career journeys.',
        images: ['https://theprocurementplug.com/images/og/main.png'],
    },
};

function page() {
    return (
        <GeneralTermsCTR />
    )
}

export default page