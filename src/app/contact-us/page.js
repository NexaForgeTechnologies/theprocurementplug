import React from 'react'

import ContactCTR from "@/containers/contact-us/ContactCTR"

export const metadata = {
    title: 'Get In Touch With Us',
    description: 'Our friendly team is here to help! Whether you’re looking for more information about our services, need support, or just want to share feedback, we’d love to hear from you.',
    openGraph: {
        title: 'Get In Touch With Us',
        description: 'Our friendly team is here to help! Whether you’re looking for more information about our services, need support, or just want to share feedback, we’d love to hear from you.',
        images: [
            {
                url: 'https://theprocurementplug.com/images/og/main.png',
                width: 1200,
                height: 630,
                alt: 'Contact Us',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Get In Touch With Us',
        description: 'Our friendly team is here to help! Whether you’re looking for more information about our services, need support, or just want to share feedback, we’d love to hear from you.',
        images: ['https://theprocurementplug.com/images/og/main.png'],
    },
};

function page() {
    return (
        <ContactCTR />
    )
}

export default page