import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/db_nose")
}

