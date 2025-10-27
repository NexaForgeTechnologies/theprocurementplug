import Breadcrumb from "@/components/BreadCrumbs";

export default function MembershipPlansHero() {
    return (
        <>
            <div className="flex flex-col gap-y-4 text-white py-10 items-start">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">Membership Plan </h1>
                <p className="max-w-md">Get full access to expert masterclasses, career tools,
                    mentorship, and exclusive resources — all in one
                    powerful subscription.</p>
                <Breadcrumb textColor="text-[white]/80" ChildTxtClr="text-white" />

            </div>
        </>
    );
}