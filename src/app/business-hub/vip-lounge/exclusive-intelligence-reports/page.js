import Link from 'next/link'
import React from 'react'

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import ExclusiveIntelligentReportsCTR from '@/containers/business-hub/vip-lounge/exclusive-intelligence-reports/ExclusiveIntelligentReportsCTR'

import Breadcrumb from '@/components/BreadCrumbs'

function Page() {
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
          img="/images/bussiness-hub/vip-lounge/exclusive-intelligence-reports/herosection.png"
          heading={<span className='flex flex-col gap-0 leading-none'>
            <span className="font-extrabold">Exclusive Intelligence & Reports
            </span>
          </span>}
          para="Access exclusive reports and insights that uncover
                    key trends, data, and strategies—designed to help
                    you make smarter, faster business decisions."
        />
        <Breadcrumb />
        <ExclusiveIntelligentReportsCTR />
      </div>
      <PartnerWithUsComp data={partnerWithUs} />
    </>
  )
}

export default Page;
