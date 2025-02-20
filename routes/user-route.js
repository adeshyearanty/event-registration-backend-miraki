import { Router } from "express";
const userRouter = Router();
import {
  handleUserRegistration,
  handleUserRetreival,
} from "../controller/user-controller.js";
import {
  validateUserInput,
  handleValidationErrors,
} from "../middleware/validation-middleware.js";

userRouter
  .post("/register", validateUserInput, handleValidationErrors, handleUserRegistration)
  .get("/users", handleUserRetreival);

export default userRouter;
