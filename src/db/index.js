import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
    } catch(err) {
        console.log(`ERROR CONNECTION DB: `, err)
    }
}

export default connectDB