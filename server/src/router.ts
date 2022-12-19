import { Router } from "express";
import { debugRouter } from "./debug/router";
import { managerRouter } from "./manager";
import { groupRouter } from "./routers";
import { classRouter } from "./routers/class";
import { studentRouter } from "./routers/student";
import { schoolRouter } from "./school";

export const globalRouter = Router();

globalRouter.use("/debug", debugRouter);
globalRouter.use("/manager", managerRouter);
globalRouter.use("/school", schoolRouter);
globalRouter.use("/class", classRouter);
globalRouter.use("/group", groupRouter);
globalRouter.use("/student", studentRouter);
