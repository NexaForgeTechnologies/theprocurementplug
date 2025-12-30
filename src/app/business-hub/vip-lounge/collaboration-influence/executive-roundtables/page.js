import Link from 'next/link'
import React from 'react'

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import Breadcrumb from '@/components/BreadCrumbs'

import ExecutiveRoundtablesCTR from '@/containers/business-hub/vip-lounge/collaboration-influence/executive-roundtables/ExecutiveRoundtablesCTR'

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
      <div>
        <HeroCTR
          img="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/executive-roundtables/herosection.png"
          heading="Executive Roundtables"
          para="Executive Roundtables are exclusive sessions
                    where senior leaders connect to share insights, 
                    solve challenges, and drive strategic thinking
                    together."
        />
        <Breadcrumb />
        <ExecutiveRoundtablesCTR />
      </div>
      <PartnerWithUsComp data={partnerWithUs} />
    </>
  )
}

export default page
