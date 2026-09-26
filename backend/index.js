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
    const loginMemColl = process.env.loginMemColl;
    const db = await connection();
    const collection = db.collection(loginMemColl);
    const response = await collection.insertOne(mbrData);
    if(response.acknowledged) {
        resp.send({success: true, message: "SignIn successful", response})
    }
    else {
        resp.send({success: false, message: "SignIn failed"});
    }
})

app.post("/login", async (req, resp) => {
    const memData = req.body;
    const loginMemColl = process.env.loginMemColl;
    const db = await connection();
    const collection = db.collection(loginMemColl);
    const result = await collection.findOne({phone: memData.phone, username: memData.username})
    if(result) {
        console.log("result is ",result)
        resp.send({success: true, message: "Login successful"})
    }
    else {
        console.log("Not login")
        resp.send({success: false, message: "Login failed"})
    }
})

app.listen(3200);