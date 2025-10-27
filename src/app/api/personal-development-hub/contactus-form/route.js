import { insertContactForm } from '@/repository/personaldevelopmenthub/ContactusFormRepo';
import { NextResponse } from 'next/server';
export async function POST(request) {
    try {
        const body = await request.json();
        console.log("Form successfully recieved by Api server :", body);
        await insertContactForm(body);
        console.log("Form successfully sent to database :", body);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error in POST /contact-us-form:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}