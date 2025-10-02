"use client";
import { useState } from "react";
import MembershipPlansComp from "@/components/personaldevelopmenthub/membershipplans/MembershipPlansComp";
import useMembershipStore from "@/store/useMembershipstore";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import ArrowButtonCom from "@/components/buttons/ArrowButtonCom";

export default function ChooseMembershipPlans() {
  const [tab, setTab] = useState("Monthly"); // Monthly or Yearly
  const plans = useMembershipStore((state) => state.plans[tab.toLowerCase()]);
  const setSelectedPlan = useMembershipStore((state) => state.setSelectedPlan); // Zustand setter to update the selected plan
  const router = useRouter();

  // Function to handle the plan selection and navigate to the checkout page
  const handlePlanSelect = (plan) => {
    // Update global state with the selected plan
    setSelectedPlan(plan);
    // Navigate to the payment-checkout page
    router.push("/personaldevelopmenthub/membershipplans/payment-checkout");
  };

  return (
    <section className="flex flex-col text-white gap-y-4 mb-10 lg:mb-15">
      <div className="flex flex-col items-center justify-center gap-y-4">
        <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent text-center">
          Choose Your Membership
        </h1>
        <p className="max-w-2xl text-center text-sm lg:text-base">
          Save 10% on an annual subscription
        </p>

        {/* Tab Buttons */}
        <ul className="flex justify-center items-center bg-[#85009D66] border border-[#F3B3FF]/50 text-white rounded text-xs md:text-base overflow-hidden">
          {["Monthly", "Yearly"].map((label) => (
            <li
              key={label}
              className={`${
                tab === label
                  ? "bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] text-black"
                  : ""
              } cursor-pointer py-3 px-6`}
              onClick={() => setTab(label)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      {/* Membership Plans */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {plans?.map((plan) => (
          <MembershipPlansComp key={plan.id} {...plan} />
        ))}
      </section>

      {/* Select Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-x-4 md:gap-x-6 gap-y-3 mt-4">
        {/* Plug Ascend Plan Button */}
        <button
          onClick={() => handlePlanSelect(plans[2])} // Set selected plan to Plug Ascend and navigate
          className="flex flex-col items-center justify-center"
        >
          <ArrowButtonCom
            text="Select Plug Ascend"
            bgColor="bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687]"
            textColor="text-black font-bold"
            arrowColor="border-black"
          />
          <i className="text-sm text-center mt-1">(recommended for full access)</i>
        </button>
OR
        {/* Plug Grower Plan Button */}
        <button
          onClick={() => handlePlanSelect(plans[1])} // Set selected plan to Plug Grower and navigate
          className="flex flex-col items-center justify-center"
        >
          <ArrowButtonCom
            text="Explore Plug Grower"
            bgColor="bg-[#85009D]"
            textColor="text-[#F0CE4D] font-bold"
            arrowColor="border-[#FBF687]"
          />
        </button>
      </div>
    </section>
  );
}
