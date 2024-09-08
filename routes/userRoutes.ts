import express from "express";
import {
  login,
  signup,
  logout,
  changeEmail,
  changePassword,
  deleteUser,
} from "../controllers/userControllers";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/changeemail", changeEmail);
router.put("/changepassword", changePassword);
router.delete("/deleteuser", deleteUser);

export default router;
