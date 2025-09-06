import mongoose from "mongoose";
import { config } from "./config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      dbName: config.dbName,
      
    });
    console.log(`✅ Connected to MongoDB: ${config.dbName}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
