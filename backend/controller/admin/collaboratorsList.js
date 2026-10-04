import {connection} from '../../connection.js';

export const collaboratorsList = async (req, resp) => {
    const db = await connection();
    const collection = db.collection(process.env.collaboratorColl);
    const result = await collection.find().toArray();
    if(result) {
        resp.send({success: true, message: "Data fetched", list: result});
    }
    else {
        resp.send({success: false, message: "No collaborators found"});
    }
}