import { MongoClient } from 'mongodb';
import "dotenv/config";

const dbName = "Database";
const url = process.env.db_url;
const client = new MongoClient(url);

export const connection = async () => {
    const connect = await client.connect();
    return connect.db(dbName);
}