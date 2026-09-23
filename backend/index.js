import express from 'express';
import { connection } from './connection.js';
import cors from 'cors';

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get("/members", async (req, resp) => {
    const collectionName = "members";
    const db = await connection();
    const collection = db.collection(collectionName);
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
    const collectionName = "collaborators";
    const db = await connection();
    const collection = db.collection(collectionName);
    const response = await collection.insertOne(collData);
    if(response.acknowledged) {
        resp.send({success: true, message: "Data inserted", response})
        console.log("Data stored")
    }
    else {
        resp.send({success: true, message: "Data inserted"})
        console.log("Data not stored")
    }
})

app.listen(3200);