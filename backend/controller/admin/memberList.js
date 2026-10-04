import { connection } from "../../connection.js";

export const memberList = async (req, resp) => {
    const db = await connection();
    const collection = db.collection(process.env.memberColl);
    const members = await collection.find().toArray();
    if(members) {
        resp.send({success: true, message: "Data fetched", list: members});
    }
    else {
        resp.send({success: false, message: "No members found"});
    }
}