import express from 'express';
import { connection } from './connection.js';
import "dotenv/config";
import jwt from "jsonwebtoken";
import cookieParser from 'cookie-parser';
import nodemailer from 'nodemailer';

import cors from 'cors';

import adminRoutes from './routes/adminRoutes.js';

const app = express();
app.use(express.json());

const allowOrigins = [
    'http://localhost:5173'
]
app.use(cors({
    origin: allowOrigins,
    credentials: true
}));

app.use(cookieParser());



app.get("/members", async (req, resp) => {
    const memberColl = process.env.memberColl;
    const db = await connection();
    const collection = db.collection(memberColl);
    const result = await collection.find().toArray();
    if(result) {
        resp.send({success: true, message: "Data fetched", list: result});
    }
    else {
        resp.send({success: false, message: "Data not fetched"})
    }
})

app.post("/add-collab", verifyJWTToken, async (req, resp) => {
    const collData = req.body;

    if(collData.name && collData.address && collData.amount) {
        const collaboratorColl = process.env.collaboratorColl;
        const db = await connection();
        const collection = db.collection(collaboratorColl);
        const response = await collection.insertOne(collData);

        if(response.acknowledged) {
            // Sending email
            let msg = `Thank you for contributing of ₹ ${collData.amount}. May Maa Kali always bless you. You live long. Have a nice day.`;
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "kalipujasamiti21199@gmail.com",
                    pass: process.env.EMAIL_APP_PASS
                }
            })
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
                    resp.json({success: true, message: "Mail sent, and data inserted"});
                }
            })
        }
        else {
            resp.send({success: false, message: "Data not inserted"});
        }
    }
    else {
        resp.send({success: false, message: "missing"});
    }
})


const jwt_secret = process.env.jwt_secret;
app.post("/signup", async (req, resp) => {
    const mbrData = req.body;
    if(mbrData.name && mbrData.phone && mbrData.username && mbrData.password && mbrData.cnf_password) {
        const db = await connection();
        const memberColl = process.env.memberColl;
        const coll = db.collection(memberColl);
        const result = await coll.findOne({phone: mbrData.phone});

        if(result) {
            if(mbrData.password === mbrData.cnf_password) {
                const loginMemColl = process.env.loginMemColl;
                const collection = db.collection(loginMemColl);
                const existingUser = await collection.findOne({phone: mbrData.phone});
                if(existingUser) {
                    resp.send({success: false, message: "already_signedup"});
                    return;
                }
                const response = await collection.insertOne(mbrData);
                if(response.acknowledged) {
                    const { password, cnf_password, ...userData } = mbrData;  // To remove password from memberdata before generating JWT
                    jwt.sign(userData, jwt_secret, {expiresIn: "3d"}, (error, token) => {
                        resp.cookie("authToken", token, {
                            httpOnly: true,
                            secure: true,
                            sameSite: 'none',
                            maxAge: 3*24*60*60*1000
                        })
                        resp.send({success: true, message: "SignUp successful", token})
                    })
                }
                else {
                    resp.send({success: false, message: "SignUnp failed"});
                }
            }
            else {
                resp.send({success: false, message: "cnf_pass_fld"});
            }
        }
        else {
            resp.send({success: false, message: "not_member"});
        }
    }
    else {
        resp.send({success: false, message: "missing"});
    }
})

app.post("/login", async (req, resp) => {
    const memData = req.body;
    if(memData.username && memData.password && memData.phone) {
        const loginMemColl = process.env.loginMemColl;
        const db = await connection();
        const collection = db.collection(loginMemColl);
        let result = await collection.findOne({username: memData.username, password: memData.password});
        if(result && result.phone == memData.phone) {
            const {password, ...userData } = memData;
            jwt.sign(userData, jwt_secret, {expiresIn: '3d'}, (error, token) => {
                if(error) {
                    resp.send("Token has not generated");
                    return;
                }
                else {
                    resp.cookie("authToken", token, {
                        httpOnly: true,
                        secure: false,
                        sameSite: 'lax',
                        maxAge: 3 * 24 * 60 * 60 * 1000
                    })
                    resp.send({success: true, message: "Login successful", name: result.name});
                }
            })
        }
        else {
            console.log("Not login")
            resp.send({success: false, message: "Login failed"})
        }
    }
    else {
        resp.send({success: false, message: "missing"});
    }
})

app.post("/logout", (req, resp) => {
    resp.clearCookie("authToken");
    resp.json({success: true, message: "Logout successful"})
})

// Admin Routes
app.use("/admin", adminRoutes);


// Function to verify JWT token
function verifyJWTToken(req, resp, next) {
    const token = req.cookies.authToken;
    jwt.verify(token, jwt_secret, (error, encoded) => {
        if(error) {
            resp.send({success: false, message: "Please Login first"});
        }
        else {
            next()
        }
    })
}

const PORT = process.env.PORT || 3200;

app.listen(PORT);