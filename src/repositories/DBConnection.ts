import mongoose from "mongoose";
import 'dotenv/config';

export async function getDB() {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.dcqhqnc.mongodb.net/?appName=${process.env.MONGO_CLUSTER}`);
    console.log("You successfully connected to MongoDB!");
    return mongoose;
  } catch (err) {
    console.dir(err);
  }
}
export default getDB;