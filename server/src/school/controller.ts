import { BadRequestError, NotFoundError } from "../common";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { schoolService } from "./service";
import { ExtRequest } from "../types/common";

class SchoolController {
	async createSchool(req: ExtRequest, res: Response) {
		const school: any = await schoolService.create({ ...req.body, managerId: req.user });

		res.status(200).json({ school });
	}

	async getSchool(req: Request, res: Response) {
		const id = +req.params.id;
		const school: any = await schoolService.findById(id);

		if (!school) throw new NotFoundError();

		res.status(200).json({ school });
	}
}

export const schoolController = new SchoolController();
