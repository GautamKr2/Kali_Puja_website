import express from 'express';
import { connection } from './connection.js';
import cors from 'cors';

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }))

app.get("/members", async (req, resp) => {
    const collectionName = "members";
    const db = await connection();
    const collection = db.collection(collectionName);
    const result = await collection.find().toArray();
    if(result) {
        resp.send({success: true, message: "Data fetched", result});
    }
    else {
        resp.send({success: false, message: "Data not fetched"})
    }
})

app.listen(3200);