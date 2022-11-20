import { Router } from "express";
import { debugRouter } from "./debug/router";
import { managerRouter } from "./manager";
import { schoolRouter } from "./school";

export const globalRouter = Router();

globalRouter.use("/debug", debugRouter);
globalRouter.use("/manager", managerRouter);
globalRouter.use("/school", schoolRouter);
