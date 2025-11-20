import Link from 'next/link'
import React from 'react'

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import VipForumCTR from '@/containers/business-hub/vip-lounge/collaboration-influence/vip-forum/VipForumCTR'
import ToastHandler from '@/components/ToasterProvider'
import { VerifyStripe } from './VerifyStripe'
import Breadcrumb from '@/components/BreadCrumbs'


async function Page({ searchParams }) {
  const params = await searchParams; // no need for await

  // If session_id is present, only render verification page
  if (params?.session_id) {
    return <VerifyStripe session_id={params.session_id} />;
  }

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
          </a>{" "}
          -{" "}
          <Link className="font-light" href="/partnerships">
            Visit our partnership page
          </Link>
        </>
      )
    },
    items: [
      { id: 1, heading: "Partners hub", text: "", link: "", linkText: "View Details", bgColor: "" },
      { id: 2, heading: "Events hub", text: "", link: "", linkText: "View Details", bgColor: "" },
      { id: 3, heading: "Business hub", text: "", link: "", linkText: "View Details", bgColor: "" }
    ]
  };

  return (
    <>
      {/* Show toast only if status param exists */}
      {params?.status && <ToastHandler status={params.status} />}

      <div>
        <HeroCTR
          img="/images/bussiness-hub/vip-lounge/Collaboration-influence-zone/vip-forum/herosection.png"
          heading={
            <span className="flex flex-col gap-0 leading-none">
              <span className="font-extrabold">VIP Forum</span>
            </span>
          }
          para="The VIP Forum is an exclusive space for high-level discussions, idea exchange, and strategic insights among top members, fostering meaningful connections and impactful collaboration."
        />
        <Breadcrumb />
        <VipForumCTR />
      </div>

      <PartnerWithUsComp data={partnerWithUs} />
    </>
  );
}

export default Page
