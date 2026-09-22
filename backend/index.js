import express from 'express';
import { connection } from './connection.js';

const app = express();

app.get("/members", async (req, resp) => {
    const collectionName = "members";
    const db = await connection();
    const collection = db.collection(collectionName);
    const result = await collection.find().toArray();
    console.log(result)
    resp.send({success: true, message: "Data fetched", result});
})

app.listen(3200);