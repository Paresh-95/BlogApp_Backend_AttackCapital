import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("Something went wrong while connecting to DB");
    console.log(error).message;
    process.exit(1);
  }
};

export default dbConnect;
