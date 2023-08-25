import { Router } from "express";

const userRoute = Router();

userRoute.get("/", (req, res) => {
  res.send("Hello");
});

export default userRoute;
