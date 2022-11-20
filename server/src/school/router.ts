import { Router } from "express";
import { validate } from "../common";
import { schoolController } from "./controller";

export const schoolRouter = Router();

const { createSchool, getSchool } = schoolController;

schoolRouter.post("/", createSchool);
schoolRouter.post("/:id", getSchool);
