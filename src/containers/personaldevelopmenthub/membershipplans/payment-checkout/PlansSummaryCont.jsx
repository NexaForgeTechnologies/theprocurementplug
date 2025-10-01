"use client";
import { useState } from "react";
import MembershipPlansComp from "@/components/personaldevelopmenthub/membershipplans/MembershipPlansComp";
import toast from "react-hot-toast";

export default function PlansSummaryCont() {
    const [isLoading, setisLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        phoneNumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const numericFields = ["phoneNumber"];
        const updatedValue = numericFields.includes(name)
            ? value.replace(/\D/g, "")
            : value;
        setFormData((prev) => ({ ...prev, [name]: updatedValue }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setisLoading(true);

        try {
            const response = await fetch("/api/personaldevelopmenthub/payment-checkout-form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result?.url) {
                window.location.href = result.url;
            } else {
                throw new Error("Failed to create checkout session.");
            }
        } catch (error) {
            console.error("Checkout error:", error);
            toast.error("There was an error redirecting to payment.");
        } finally {
            setisLoading(false);
        }
    };

    return (
        <>
            <section className="py-10">
                <h1 className="text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">
                    Summary of Your selected plan
                </h1>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <MembershipPlansComp
                        titletxtclr="text-[white]"
                        titlebgclr="bg-[#B08D57CC]"
                        plugType="Plug Ascend"
                        price="£377.89"
                        period="/ Annual"
                        btnHide="hidden"
                        data={[
                            {
                                title: `Reach the peak of procurement excellence and leadership`,
                                para: ``,
                            },
                            { title: `Everything in Grower`, para: `plus` },
                            { title: `Monthly Masterclasses (live & on-demand)`, para: `Learn from procurement leaders` },
                            { title: `Real-world challenges & 30-day career sprints`, para: `Sharpen your edge` },
                            { title: `Premium planners`, para: `SWOT analysis, inspiration boards, networking plans, decision tools` },
                            { title: `Advanced Salary Tracker filters & insights`, para: `Get strategic with your data` },
                            { title: `Unlock all Plug Badges`, para: `showcase your complete journey` },
                            { title: `Procurement Goody Bags & Expert Q&A sessions`, para: `` },
                            { title: `20% off Elevate Bloom events & VIP experiences`, para: `` },
                        ]}
                    />

                    <form
                        className="md:col-span-2 bg-[#85009D66] border border-[#F3B3FF]/50 text-white rounded text-xs md:text-base mt-4 lg:mt-6 p-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-y-4">
                            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">
                                Personal Info
                            </h1>
                            {[
                                { type: "text", placeholder: "First Name", name: "firstName" },
                                { type: "email", placeholder: "Email Address", name: "email" },
                                { type: "text", placeholder: "Phone Number", name: "phoneNumber" },
                            ].map((item, index) => (
                                <input
                                    key={index}
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    required
                                    value={formData[item.name]}
                                    onChange={handleChange}
                                    className="bg-[#FFFFFF4D] border border-[#B08D57] text-white text-xs md:text-base py-3 px-5 w-full"
                                />
                            ))}
                        </div>

                        <div className="flex flex-col gap-y-4 mt-8">
                            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">
                                Payment Details
                            </h1>
                            <p className="text-white text-sm">You’ll be redirected to Stripe Checkout to complete your payment securely.</p>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`flex items-center justify-center cursor-pointer px-4 py-2 rounded-[6px] text-sm md:text-base mt-4 ${
                                isLoading ? 'opacity-50 cursor-not-allowed' : ''
                            } bg-transparent border text-black bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687]`}
                        >
                            {isLoading ? "Redirecting..." : "Confirm & Pay"}
                        </button>
                    </form>
                </section>

                <div className="flex flex-col items-center justify-center gap-y-4 mt-2 py-5 text-center text-white w-full">
                    <p className="text-sm font-semibold">Secure Checkout</p>
                    <p className="text-sm text-center">Cancel anytime | No hidden fees | Encrypted payments</p>
                </div>
            </section>
        </>
    );
}
