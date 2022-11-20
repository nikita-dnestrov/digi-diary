import { BadRequestError, NotFoundError } from "../common";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { managerService } from "./service";
import { ExtRequest } from "../types/common";

class ManagerController {
	async signup(req: Request, res: Response) {
		const { phone, password, type } = req.body;

		if (await managerService.findByPhone(phone)) {
			throw new BadRequestError("Phone taken");
		}

		const manager = await managerService.create({
			phone,
			type,
			password: await managerService.createHash(password),
		});

		const token = managerService.jwtSign(manager);

		res.status(200).json({ manager, token });
	}

	async signin(req: Request, res: Response) {
		const { phone, password } = req.body;
		const manager: any = await managerService.findByPhone(phone);

		if (!manager) throw new NotFoundError();

		if (!managerService.compareHash(password, manager.password))
			throw new BadRequestError("Wrong Password");

		const token = managerService.jwtSign(manager);

		res.status(200).json({ manager, token });
	}

	async getProfile(req: ExtRequest, res: Response) {
		const manager = await managerService.findById(req.user);

		if (!manager) throw new NotFoundError();

		res.status(200).json({ manager });
	}

	async updateProfile(req: ExtRequest, res: Response) {
		await managerService.updateProfile(req.user, req.body);

		res.send(200).json({ message: "Success" });
	}
}

export const managerController = new ManagerController();
