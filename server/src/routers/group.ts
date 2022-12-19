import { Router } from "express";
import { validate } from "../common";
import { withToken } from "../common/jwt.middleware";
import { groupController } from "../controllers";

export const groupRouter = Router();

groupRouter.post("/", withToken, groupController.create);
groupRouter.get(
	"/by-school/:schoolId",
	withToken,
	groupController.getSchoolGroups
);
groupRouter.get("/:id", withToken, groupController.getGroupById);
