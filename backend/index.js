import express from 'express';
import { connection } from './connection.js';
import "dotenv/config";

import cors from 'cors';

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

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

app.post("/add-collab", async (req, resp) => {
    const collData = req.body;
    const collaboratorColl = process.env.collaboratorColl;
    const db = await connection();
    const collection = db.collection(collaboratorColl);
    const response = await collection.insertOne(collData);
    if(response.acknowledged) {
        resp.send({success: true, message: "Data inserted", response})
    }
    else {
        resp.send({success: true, message: "Data inserted"})
    }
})

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
                const response = await collection.insertOne(mbrData);
                if(response.acknowledged) {
                    resp.send({success: true, message: "SignUp successful", response})
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
            console.log("result is ",result)
            resp.send({success: true, message: "Login successful"})
        }
        else {
            console.log("Not login")
            resp.send({success: false, message: "Login failed"})
        }
    }
    else {
        resp.send({message: "missing"});
    }
})

app.listen(3200);