import React from 'react'

import PartnershipsCTR from '@/containers/partnerships/PartnershipsCTR'

export const metadata = {
    title: 'Partnerships',
    description: 'Partner Opportunities with The Procurement Plug',
    openGraph: {
        title: 'Partnerships',
        description: 'Partner Opportunities with The Procurement Plug',
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
        title: 'Partnerships',
        description: 'Partner Opportunities with The Procurement Plug',
        images: ['https://theprocurementplug.com/images/og/main.png'],
    },
};

function page() {
    return (
        <PartnershipsCTR />
    )
}

export default page