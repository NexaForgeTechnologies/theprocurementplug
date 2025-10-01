import { db } from "@/lib/db";

export async function PaymentCheckoutFormRepo(data) {
    console.log("PaymentCheckoutFormRepo received data: ", data);

    const { firstName, email, phoneNumber } = data;

    const sql = `
        INSERT INTO payment_checkout_form 
        (first_name, email, phone_number)
        VALUES (?, ?, ?)
    `;

    const values = [firstName, email, phoneNumber];

    try {
        await db.query(sql, values);
        console.log("✅ Non-sensitive form data inserted into DB successfully.");
    } catch (error) {
        console.error("❌ Error inserting non-sensitive form data:", error);
        throw error;
    }
}
