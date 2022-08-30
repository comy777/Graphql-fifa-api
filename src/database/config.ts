import mongoose from "mongoose";

export const conectDatabase = async () => {
  try {
    const uri = process.env.MONGO_URI;
    await mongoose.connect(uri);
    console.log("Database conected");
  } catch (error) {
    console.log(error);
  }
};
