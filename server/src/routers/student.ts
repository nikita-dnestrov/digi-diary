import { Router } from "express";
import { validate } from "../common";
import { withToken } from "../common/jwt.middleware";
import { studentController } from "../controllers";

export const studentRouter = Router();

studentRouter.post(
	"/by-school/:id",
	withToken,
	studentController.getStudentsBySchool
);
