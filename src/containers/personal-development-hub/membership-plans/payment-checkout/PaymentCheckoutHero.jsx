import Breadcrumb from "@/components/BreadCrumbs";

export default function PaymentCheckoutHero() {
    return (
        <>
            <section className="flex flex-col gap-y-4 text-white py-10 items-start">
                <h1 className="text-lg md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">
                    PAYMENT / CHECKOUT PAGE
                </h1>
                <p className="max-w-lg">
                    The Payment page lets you review your plan, enter payment
                    details securely, and confirm your subscription in one click.
                </p>
                <Breadcrumb />
            </section>
        </>
    );
}