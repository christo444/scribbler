import mongoose from "mongoose";

const connectDB = async () => {
    try {

        await mongoose.connect("mongodb+srv://scribbler_db_user:aYU4rPXFIicnovLr@cluster0.butm3im.mongodb.net/?appName=Cluster0");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to mongoDB",error);
    }
}