import dotenv from "dotenv"
import connectDB from "./src/db/index.js"
import app from "./app.js";

dotenv.config();


const startServer = async () => {
    try {
        await connectDB();
        console.log('DATABASE CONNECTED!')
        app.listen(process.env.PORT, () => {
            console.log(`SERVER IS LISTENING AT PORT: http://localhost:${process.env.PORT}`);
        })
    } catch(err) {
        console.log(`DATABASE CONNECTION FAILED: ${err}`);
    }
}

startServer();