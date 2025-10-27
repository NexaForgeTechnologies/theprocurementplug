"use client";
import { useState } from "react";
import MembershipPlansComp from "@/components/personal-development-hub/membership-plans/MembershipPlansComp";
import useMembershipStore from "@/store/useMembershipStore";
import toast from "react-hot-toast";

export default function PlansSummaryCont() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        phoneNumber: "",
    });

    const selectedPlan = useMembershipStore((state) => state.selectedPlan);

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
        setIsLoading(true);

        if (!selectedPlan) {
            toast.error("No plan selected. Please select a plan to continue.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/personal-development-hub/payment-checkout-form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    selectedPlan,
                }),
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
            setIsLoading(false);
        }
    };

    return (
        <>
            <section className="py-10">
                <h1 className="text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">
                    Summary of Your selected plan
                </h1>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedPlan ? (
                        <MembershipPlansComp {...selectedPlan} btnHide="hidden" />
                    ) : (
                        <p className="text-white col-span-1">No plan selected.</p>
                    )}

                    <form
                        className="md:col-span-2 bg-[#85009D66] border border-[#F3B3FF]/50 text-white rounded text-xs md:text-base mt-4 lg:mt-6 p-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-y-4">
                            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687] bg-clip-text text-transparent">
                                Personal Info
                            </h1>
                            {[{ type: "text", placeholder: "First Name", name: "firstName" },
                              { type: "email", placeholder: "Email Address", name: "email" },
                              { type: "text", placeholder: "Phone Number", name: "phoneNumber" }]
                                .map((item, index) => (
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
                            className={`flex items-center justify-center cursor-pointer px-4 py-2 rounded-[6px] text-sm md:text-base mt-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''} bg-transparent border text-black bg-gradient-to-r from-[#FEF989] via-[#DEAE1A] to-[#FBF687]`}
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
