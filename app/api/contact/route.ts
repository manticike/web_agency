import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json("method not allowed", { status: 405 });
  }

  try {
    const {
      first_name,
      last_name,
      email,
      company_name,
      help,
      info, // this is the textarea field
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "Contact Form Submission",
      html: `
        <h1>Contact Form</h1>
        <p><strong>First Name:</strong> ${first_name}</p>
        <p><strong>Last Name:</strong> ${last_name}</p>
        <p><strong>Work Email:</strong> ${email}</p>
        <p><strong>Company Name:</strong> ${company_name}</p>
        <p><strong>Help With:</strong> ${help}</p>
        <p><strong>Additional Info:</strong> ${info}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json("email has been sent");
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json("email has not been sent", { status: 500 });
  }
}
