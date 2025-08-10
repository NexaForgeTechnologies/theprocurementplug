'use client';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
export default function ToastHandler({ status }) {
  useEffect(() => {
    if (status==="true") {
      toast.success("Payment Proceed");
    }
     
    else if(status==="false"){
      toast.error("Payment Declined")
    }
    else{
       toast.loading(status)
    }
  }, [status]);

  return null;
}
export function ToasterProvider() {
  return <Toaster position="top-right" />;
}