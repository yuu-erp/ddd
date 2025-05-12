import express from "express";
import userRouter from "./modules/user/infrastructure/http/user.router";
import postRouter from "./modules/user/infrastructure/http/user.router";

const app = express();

app.use(userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
