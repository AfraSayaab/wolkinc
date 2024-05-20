
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
const nodemailer = require('nodemailer');
export async function POST(request: NextRequest) {
    const secretKey = process.env.NEXT_RECAPTCHA_SECRET_KEY;
    const { gRecaptchaToken, name, email, phone, message } = await request.json();
    if (!gRecaptchaToken) {
        return NextResponse.json({
            message: 'Google captcha not found',
            status: 500
        });
    }
    let res: any;
    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;
    try {
        res = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        if (res.data.success && res.data.score >= 0.5) {
            const transporter = nodemailer.createTransport({
                host: process.env.NEXT_EMAIL_HOST,
                port: 587,
                secure: false,
                auth: {
                    user: process.env.NEXT_EMAL_NAME,
                    pass: process.env.NEXT_EMAL_PASS
                }
            });
            console.log("captcha execute success ")
            await sendemail(transporter, email, name, phone, message)
            await sendUserEmal(transporter, email)
            return NextResponse.json({
                message: 'Your message has been sent successfully!',
                status: 200
            });
        }
    }
    catch (error) {
        return NextResponse.json({
            message: 'Email failed to send!',
            error,
            status: 500
        });
    }
}
const sendemail = async (transporter: any, recipientEmail: any, name: any, phone: any, desc: any) => {
    const mailOptions = {
        from: `From Wolk Inc <${process.env.NEXT_EMAL_NAME}>`,
        to: process.env.NEXT_EMAL_RECEIVE,
        subject: 'From WolkInc',
        html: `<p>
        The user send an email  <br> Email : ${recipientEmail} <br> Name: ${name}  <br> Phone: ${phone}  <br> Message: ${desc} 
        </p>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error: ', error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

};
const sendUserEmal = async (transporter: any, recipientEmail: any) => {
    const mailOptions = {
        from: `From Wolk Inc <${process.env.NEXT_EMAL_NAME}>`,
        to: recipientEmail,
        subject: 'From WolkInc',
        html: `<p>
            Thankyou For Contacting us we will response You as soon as possible
            </p>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error: ', error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

};