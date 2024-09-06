import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  email: string;
  username: string;
  password: String;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  email: { type: String, requered: true, unique: true },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model<IUser>("users", userSchema);

export default userModel;
