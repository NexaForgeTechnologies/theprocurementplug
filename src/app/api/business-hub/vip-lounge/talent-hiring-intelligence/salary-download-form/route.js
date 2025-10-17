import { AdminSalaryRoleDownloadEmail, UserSalaryRoleDownloadEmail } from "@/lib/emails/PartnerEmail";
import SalaryDownloadFormRepo from "@/repository/business-hub/vip-lounge/talent-hiring-intelligence/salary-role-tracker/SalaryDownloadFormRepo";
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("API server recieved : ", body);
        // const { SelectedTile } = body; 

        try {
            await UserSalaryRoleDownloadEmail(body);
            await AdminSalaryRoleDownloadEmail(body);
            console.log("Successfully Sent Emails : ")

        }
        catch (err) {
            console.log("Error Sending Emails : ", err)
        }

        const result = await SalaryDownloadFormRepo(body);
        return NextResponse.json({ success: true, result });

    } catch (error) {
        console.log("Error recieving Frontend data : ", error)
        return NextResponse.json({ success: false, message: "Error submitting form" }, { status: 500 });
    }
}