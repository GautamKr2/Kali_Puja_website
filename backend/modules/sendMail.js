import nodemailer from 'nodemailer';
import 'dotenv/config';
import express from 'express';

app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "kalipujasamiti21199@gmail.com",
        pass: process.env.EMAIL_APP_PASS
    }
})

function SendMail(req, resp) {
    const collData = req.body;
    let msg = `Thank you for contributing of ${collData.amount}. May Maa Kali always bless you. You live long. Have a nice day`;
    const mailOption = {
        from: "kalipujasamiti21199@gmail.com",
        to: collData.email,
        subject: "Kali Puja Samiti, Khushahalpur",
        text: msg
    }
    transporter.sendMail(mailOption, (error, info) => {
        if(error) {
            resp.json({success: false, message: "Mail not sent"});
        }
        else {
            resp.json({success: true, message: "Mail sent"});
        }
    })
}

export default SendMail;