import { Router } from "express";
import { validate } from "../common";
import { managerController } from "./controller";
import { signInSchema, signUpSchema } from "./validation";

export const managerRouter = Router();

const { signup, signin, getProfile, updateProfile } = managerController;

managerRouter.post("/signup", validate(signUpSchema), signup);
managerRouter.post("/signin", validate(signInSchema), signin);
managerRouter.get("/profile", getProfile);
managerRouter.put("/profile", updateProfile);
