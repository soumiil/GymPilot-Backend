import connectDB from "./src/db/index.js"
import app from "./app.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();
        console.log('DATABASE CONNECTED!')
        app.listen(PORT, () => {
            console.log(`SERVER IS LISTENING AT PORT: http://localhost:${PORT}`);
        })
    } catch(err) {
        console.log(`DATABASE CONNECTION FAILED: ${err}`);
    }
}

startServer();