import mongoose, { Schema, Document } from "mongoose";

interface IPost extends Document {
  author: mongoose.Schema.Types.ObjectId;
  title: string;
  body: string;
  postedOn: Date;
}

const postSchema: Schema<IPost> = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  postedOn: { type: Date, required: true, default: Date.now() },
});

const postModel = mongoose.model<IPost>("posts", postSchema);

export default postModel