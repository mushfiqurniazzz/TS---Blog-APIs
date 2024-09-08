import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postControllers";
import express from "express";
const router = express.Router();

router.get("/getpost:id", getPost);
router.get("/getposts", getPosts);
router.post("/createpost", createPost);
router.put("/updatepost:id", updatePost);
router.delete("/deletepost:id", deletePost);

export default router;
