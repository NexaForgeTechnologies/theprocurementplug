import Link from 'next/link'
import React from 'react'

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection';
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs';
import Breadcrumb from '@/components/BreadCrumbs';

import ThoughtLeadershipWallCTR from '@/containers/business-hub/vip-lounge/collaboration-influence/thought-leadership-wall/ThoughtLeadershipWallCTR';

import PaymentSuccessHandler from './PaymentSuccessHandler';

function page() {
  const partnerWithUs = {
    Partnerheader: {
      h3: "Partner With Us",
      p: (
        <>
          <a
            href="mailto:partnerships@theprocurementplug.com"
            className="font-semibold text-white hover:underline"
          >
            partnerships@theprocurementplug.com
          </a> -{' '}
          <Link className="font-light" href="/partnerships">
            Visit our partnership page
          </Link>
        </>
      )
    },
    items: [
      {
        id: 1,
        heading: "Partners hub",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: ""
      },
      {
        id: 2,
        heading: "Events hub",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: ""
      },
      {
        id: 3,
        heading: "Business hub",
        text: "",
        link: "",
        linkText: "View Details",
        bgColor: ""
      }
    ]
  }

  return (
    <>
      <PaymentSuccessHandler />
      <div>
        <HeroCTR
          img="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/thought-leadership-wall/herosection.png"
          heading={<span className='flex flex-col gap-0 leading-none'>
            <span className="font-extrabold">Thought Leadership</span>Wall
          </span>}
          para="The Thought Leadership Wall highlights bold ideas, expert
                    insights, and visionary voices—sparking inspiration and
                    showcasing innovation within the organization."
        />
        <Breadcrumb />
        <ThoughtLeadershipWallCTR />
      </div>
      <PartnerWithUsComp data={partnerWithUs} />
    </>
  )
}

export default page
