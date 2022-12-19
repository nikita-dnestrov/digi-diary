import { Router } from "express";
import { validate } from "../common";
import { debugFns } from "./fns";

export const debugRouter = Router();

const { getUsers, createUser, updateUser } = debugFns;

debugRouter.get("/users", getUsers);
debugRouter.post("/users", createUser);
debugRouter.put("/users", updateUser);
