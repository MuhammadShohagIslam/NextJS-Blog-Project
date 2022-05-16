import { MongoClient } from "mongodb";

export async function databaseConnection() {
    const url = process.env.MONGO_DB;
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log("Database Connection Successfully!");
    return client;
}

export async function insertDataToDatabase(client, collection, insertData) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(insertData);
    return result;
}
