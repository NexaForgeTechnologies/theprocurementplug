'use client';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
export default function ToastHandler({ status }) {
  useEffect(() => {
    if (status==="true") {
      toast.success("Payment Proceed");
    }
    else{
        toast.error("Payment Declined")
    }
  }, [status]);

  return null;
}
export function ToasterProvider() {
  return <Toaster position="top-right" />;
}