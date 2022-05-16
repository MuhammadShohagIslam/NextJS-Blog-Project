import { databaseConnection, insertDataToDatabase } from "../../../lib/db_util";

async function handler(req, res) {
    if (req.method !== "POST") {
        return;
    }
    const { email, name, message } = req.body;

    if (
        !name ||
        name.trim() === "" ||
        !email ||
        !email.includes("@") ||
        !message ||
        message.trim() === ""
    ) {
        res.status(422).json({ message: "Invalid Input Data..." });
        client.close();
        return;
    }

    const newMessage = {
        email,
        name,
        message,
    };
    let client;
    try {
        client = await databaseConnection();
    } catch (error) {
        res.status(500).json({ message: "Database Connection Is Failed" });
    }

    try {
        await insertDataToDatabase(client, "blogContact", newMessage);
    } catch (error) {
        res.status(500).json({ message: "Failed to Message" });
        client.close;
    }
    res.status(201).json({ message: "Successfully Send Message" });
    client.close();
}

export default handler;
