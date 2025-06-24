import React from 'react'

import BussinessHubCTR from '@/containers/business-hub/BussinessHubCTR'

export const metadata = {
    title: 'Business Hub',
    description: 'Exclusive Business Hub',
    openGraph: {
        title: 'Business Hub',
        description: 'Exclusive Business Hub',
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
        title: 'Business Hub',
        description: 'Exclusive Business Hub',
        images: ['https://theprocurementplug.com/images/og/main.png'],
    },
};


function page() {
    return (
        <>
            <BussinessHubCTR />
        </>
    )
}

export default page
