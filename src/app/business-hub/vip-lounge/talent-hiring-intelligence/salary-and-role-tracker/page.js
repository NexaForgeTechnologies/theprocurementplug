import Link from 'next/link'
import React from 'react'

import HeroCTR from '@/components/business-hub/vip-lounge/VipHeroSection'
import PartnerWithUsComp from '@/components/business-hub/vip-lounge/PartnerWithUs'
import SalaryRoleTrackerCTR from '@/containers/business-hub/vip-lounge/talent-hiring-intelligence/salary-and-role-tracker/SalaryRoleTrackerCTR'
import Breadcrumb from '@/components/BreadCrumbs'

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
                    img="/images/bussiness-hub/vip-lounge/talent-hiring-intelligence/salary-and-role-tracker/herosection.png"
                    heading={
                        <span className='flex flex-col gap-0 leading-none'>
                            <span className="font-extrabold">Salary and Role Tracker</span>
                        </span>
                    }
                    para="Track salary trends, role shifts, and career
                    progression to make smarter hiring and
                    workforce planning decisions.."
                />
                <Breadcrumb />
                <SalaryRoleTrackerCTR />
            </div>
            <PartnerWithUsComp data={partnerWithUs} />
        </>
    )
}

export default page
