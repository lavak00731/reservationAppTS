import mongoose from "mongoose";

export async function getDB(): Promise<void> {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.dcqhqnc.mongodb.net/${process.env.MONGO_DB}?appName=${process.env.MONGO_CLUSTER}`);
    console.log("You successfully connected to MongoDB!");
  } catch (err) {
    console.log(err);
  }
}

export default getDB;
