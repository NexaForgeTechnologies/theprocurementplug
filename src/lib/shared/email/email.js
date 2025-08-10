import nodemailer from "nodemailer";
export async function sendEmail(to,subject,html,from=""){
  try{
const transporter = nodemailer.createTransport({
   host: process.env.SMTP_HOST,
   port: process.env.SMTP_PORT,
   secure: false,
        auth: {
            user: process.env.SMTP_REQUEST_USER,
            pass: process.env.SMTP_REQUEST_PASS,
        },
});

await transporter.verify();
await transporter.sendMail({
  from: `"The Procurement Plug Contact Form" <${process.env.SMTP_REQUEST_USER}>`,
  to: to,
  subject:subject,
  html: html,
});

  }catch(e){
console.log(e,"gere")
  }
  
      
}