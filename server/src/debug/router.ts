import { Router } from "express";
import { validate } from "../common";
import { debugFns } from "./fns";

export const debugRouter = Router();

const { getUsers } = debugFns;

debugRouter.post("/users", getUsers);
