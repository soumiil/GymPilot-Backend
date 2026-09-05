import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(connectionInstance);
    } catch(err) {
        console.log(`ERROR CONNECTION DB: `, err)
    }
}

export default connectDB