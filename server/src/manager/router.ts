import { Router } from "express";
import { validate } from "../common";
import { withToken } from "../common/jwt.middleware";
import { managerController } from "./controller";
import { signInSchema, signUpSchema } from "./validation";

export const managerRouter = Router();

const { signup, signin, getProfile, updateProfile } = managerController;

managerRouter.post("/signup", validate(signUpSchema), signup);
managerRouter.post("/signin", validate(signInSchema), signin);
managerRouter.get("/profile", withToken, getProfile);
managerRouter.put("/profile", withToken, updateProfile);
