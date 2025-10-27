import PaymentCheckoutHero from "@/containers/personal-development-hub/membership-plans/payment-checkout/PaymentCheckoutHero";
import PlansSummaryCont from "@/containers/personal-development-hub/membership-plans/payment-checkout/PlansSummaryCont";

export default function PaymentCheckout() {
    return (
        <>
            <section className="bg-[url('/images/personaldevelopmenthub/index/index-bg.png')] bg-cover bg-center
            w-screen ml-[calc(50%-50vw)] px-6 sm:px-10 md:px-14 lg:px-30">
                <PaymentCheckoutHero />
                <PlansSummaryCont />
            </section>
        </>
    );
}