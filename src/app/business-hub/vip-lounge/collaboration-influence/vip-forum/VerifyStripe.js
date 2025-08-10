"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const VerifyStripe = ({ session_id }) => {
    const router = useRouter();
    const [loader, setLoader] = useState(true);

    const apiCall = async (id) => {
        try {
            const response = await axios.post(
                "/api/round-table/verify-checkout-session",
                { id }
            );
             if (response.status==200) {
                toast.success(response.data.message);
                
            } else {
                toast.error(response.data.message);
                
            }
        } catch (e) {
            console.error(e);
            toast.error(e?.response?.data?.error?? "Something went wrong");
          
        } finally {
            router.replace("/business-hub/vip-lounge/collaboration-influence/vip-forum");
            setLoader(false);
        }
    };

    useEffect(() => {
        if (session_id) {
            apiCall(session_id);
        }
    }, [session_id]);

    if (loader) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-lg font-medium">Verifying your payment, please wait...</p>
                </div>
            </div>
        );
    }

    return null;
};
