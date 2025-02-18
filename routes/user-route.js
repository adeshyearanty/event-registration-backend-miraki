import { Router } from "express";
const userRouter = Router();
import {
  handleUserRegistration,
  handleUserRetreival,
} from "../controller/user-controller.js";

userRouter
  .post("/register", handleUserRegistration)
  .get("/users", handleUserRetreival);

export default userRouter;
