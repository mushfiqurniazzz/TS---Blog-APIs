import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";

interface IfoundUser {
  _id: string;
  email: string;
}
const token = (foundUser: IfoundUser, res: Response, next: NextFunction) => {
  //if no secret in env
  const secret = process.env.JWT_SECRET as string;
  if (!secret) {
    return res.status(500).json({ msg: "No JWT secret stored in env." });
  }

  try {
    const jwtToken = jwt.sign(
      {
        id: foundUser._id,
        email: foundUser.email,
      },
      secret,
      { expiresIn: "30d" }
    );

    next();

    return res.status(200).json({
      msg: "Token recieved",
      id: foundUser._id,
      email: foundUser.email,
      jwtToken,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Something went wrong." });
  }
};

export default token;
