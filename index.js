import dotenv from "dotenv"
import connectDB from "./src/db/index.js"
import app from "./app.js";

dotenv.config();


const startServer = async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port: http://localhost:${process.env.PORT}`);
        })
    } catch(err) {
        console.log(`MONGODB CONNECTION FAILED: ${err}`);
    }
}

startServer();