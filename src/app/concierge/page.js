import React from 'react'

import ConciergeCTR from '@/containers/concierge/ConciergeCTR'

export const metadata = {
  title: 'Concierge | The Procurement Plug',
  description: 'Welcome to The Procurement Plug Your Ultimate Ecosystem for Procurement Excellence.',
  openGraph: {
    title: 'Concierge | The Procurement Plug',
    description: 'Welcome to The Procurement Plug Your Ultimate Ecosystem for Procurement Excellence.',
    images: [
      {
        url: 'https://theprocurementplug.com/images/og/main.jpg',
        width: 1200,
        height: 630,
        alt: 'Concierge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Procurement Plug',
    description: 'Welcome to The Procurement Plug Your Ultimate Ecosystem for Procurement Excellence.',
    images: ['https://theprocurementplug.com/images/og/main.jpg'],
  },
};


const page = () => {
    return (
        <>
            <ConciergeCTR />
        </>
    )
}

export default page
