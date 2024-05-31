import mongoose, { connect, mongo } from "mongoose";

const connectToMongoDB =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}

export default connectToMongoDB;