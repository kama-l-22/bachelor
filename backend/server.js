import express from "express";
import { config } from "dotenv";
import cors from "cors";

import dbConnect from "./db.connect.js";

import userRouter from "./router/user.router.js";
import taskRouter from "./router/task.router.js";
import accountRouter from "./router/account.router.js";
import categoryRouter from "./router/category.router.js";
import photoRouter from "./router/photo.router.js";

config();

const PORT = 4000;
const app = express();

dbConnect();
app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);
app.use("/api/account", accountRouter);
app.use("/api/category", categoryRouter);
app.use("/api/photo", photoRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
