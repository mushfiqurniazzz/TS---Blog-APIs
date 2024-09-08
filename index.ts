import express, { NextFunction, Request, Response } from "express";
const app = express();
import "dotenv/config";
import cookieparser from "cookie-parser";
import DBConn from "./lib/DBConn";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/userRoutes";
import postsRoutes from "./routes/postRoutes"

const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cookieparser());
app.use(compression());
app.use(cors());
app.use(helmet());

app.use("/user", userRoutes);
app.use("/post", postsRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("TS - Blog APIs are running.");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(port, async () => {
  await DBConn();
  console.log(`TS - Blog APIs are running on http://localhost:${port}`);
});
