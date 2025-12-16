'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function PaymentSuccessHandler() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const status = searchParams.get('status');
        const sessionId = searchParams.get('session_id');

        if (!sessionId) return;

        // 🔐 Prevent re-verification on refresh
        const alreadyVerified = localStorage.getItem(`payment_verified_${sessionId}`);
        if (alreadyVerified) return;

        if (status !== 'true') {
            toast.error('Payment was cancelled or failed.');
            return;
        }

        const verifyPayment = async () => {
            try {
                toast.loading('Verifying payment...', { id: 'payment' });

                await axios.post('/api/thought-leadership/confirm-payment', {
                    sessionId,
                });

                localStorage.setItem(`payment_verified_${sessionId}`, 'true');

                // After verification
                toast.success('Payment successful! Your post has been submitted and is under review.', { id: 'payment' });

            } catch (error) {
                console.error(error);

                toast.error(
                    'Payment verification failed. Your post has been submitted and is under review. Please contact support.',
                    { id: 'payment' }
                );
            }
        };

        verifyPayment();
    }, [searchParams]);

    return null;
}
