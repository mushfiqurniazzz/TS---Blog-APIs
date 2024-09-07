import express, { Request, Response } from "express";
const app = express();
import "dotenv/config";
import cookieparser from "cookie-parser";
import DBConn from "./lib/DBConn";
import compression from "compression";
import cors from "cors"

const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cookieparser());
app.use(compression());
app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.send("TS - Blog APIs are running.");
});

app.listen(port, async () => {
  await DBConn();
  console.log(`TS - Blog APIs are running on http://localhost:${port}`);
});
