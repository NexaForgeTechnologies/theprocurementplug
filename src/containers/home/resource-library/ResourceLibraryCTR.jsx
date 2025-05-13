import React from "react";
import Link from "next/link";

import Blog from "@/components/blogs/BlogComp";

function ResourceLibraryCTR() {
  return (
    <div>
      <h3 className="font-extrabold text-3xl md:text-5xl mb-4 text-[#010101] text-center">
        Amazing Resource Library
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 mb-6">
        <Blog
          href="/blog/2024-12-18/key-components-for-successful-procurement-transformation"
          img="/images/home/blogs/blog-1.png"
          heading="Key components for successful procurement transformation"
          text="Table Of Contents:Driving Efficiency: Key Procurement Transformation ComponentsAre you struggling to navigate the complexities of government procurement and supply chain."
        />
        <Blog
          href="/blog/2024-12-18/holistic-approach-to-procurement-and-supply-chain-governance"
          img="/images/home/blogs/blog-2.png"
          heading="Holistic approach to procurement and supply chain governance"
          text="Table Of Contents:Optimising Supply Chain Performance With Holistic GovernanceAre you struggling to meet the ever-changing demands of your customers while."
        />
        <Blog
          href="/blog/2024-12-18/strategic-procurement-kpis-how-to-implement-track-and-measure-for-success"
          img="/images/home/blogs/blog-3.png"
          heading="Strategic procurement KPI’s – how to implement, track and measure for success"
          text="Table Of Contents:Achieving Excellence With Strategic Procurement KPIsAre you struggling to align your procurement strategies with your business's overarching objectives?."
        />
      </div>
      <Link
        href="/resources"
        className="bg-[#212121] px-6 py-3 text-white rounded-xl text-sm md:text-lg leading-normal md:leading-relaxed cursor-pointer m-auto w-max block text-center"
      >
        View The Resource Library
      </Link>
    </div>
  );
}

export default ResourceLibraryCTR;
