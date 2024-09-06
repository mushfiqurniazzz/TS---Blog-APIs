import mongoose from "mongoose";

const DBConn = async (): Promise<void> => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017"
    );
    console.log("Connected to DB.");
  } catch (error) {
    return console.error(error);
  }
};

export default DBConn;
