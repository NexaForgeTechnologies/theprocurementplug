import Breadcrumb from "@/components/BreadCrumbs";

export default function PlugEnterpriseHero() {
    return (
        <>
            <section>
                <div className="flex flex-col gap-y-4 text-white py-10 items-start">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">Plug Enterprise </h1>
                    <p className="max-w-md">The Smartest Way to Upskill Your Procurement Team</p>
                    <p className="max-w-lg">Your team deserves more than a one-off course.
                        They need a structured, motivating, and measurable development ecosystem.</p>
                    <Breadcrumb textColor="text-[white]/80" ChildTxtClr="text-white" />

                </div>
            </section>
        </>
    );
}