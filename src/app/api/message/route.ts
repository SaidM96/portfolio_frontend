import { NextResponse } from 'next/server';
import nodemailer, { Transporter } from 'nodemailer';

type Data = {
  success: boolean;
  message: string;
};

const generateHtml = (
  email: string,
  subject: string,
  message: string
) => `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Template</title>
        <style>
            /* Your CSS styles go here */
            body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                padding: 20px;
            }
            .container {
                background-color: #ffffff;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333;
            }
            p {
                color: #555;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>email :  ${email}</h1>
            <p>subject : ${subject}</p>
            <p>message : ${message}</p>
        </div>
    </body>
    </html>`;

export async function POST(req: Request) {
  if (req.method === 'POST') {
    const { email, subject, message } = await req.json();
    if (!email || !subject || !message)  return NextResponse.json({ message: 'subject , meessage and email are required' });
    try {
      const transporter: Transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(`${process.env.SMTP_PORT}`),
        service: process.env.SMTP_SERVICE,
        auth: {
          user: process.env.SMTP_MAIL,
          pass: process.env.SMTP_PASSWORD
        }
      });
      const html = generateHtml(email, subject, message);
      const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: process.env.SMTP_MAIL,
        subject,
        html
      };
      await transporter.sendMail(mailOptions);
      return NextResponse.json({message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email: ', error);
      return NextResponse.json({message: 'Email not sent' });
    }
  } else {
    return NextResponse.json({message: 'Only POST method is allowed' });
  }
}
