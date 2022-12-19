import { Response } from "express";
import { Group } from "../db";
import { ExtRequest } from "../types/common";

class GroupController {
	async create(req: ExtRequest, res: Response) {
		const group = await Group.create({ data: req.body });
		res.status(200).json(group);
	}

	async getSchoolGroups(req: ExtRequest, res: Response) {
		const group = await Group.findMany({
			where: { schoolId: +req.params.schoolId },
			include: { students: true },
		});
		res.status(200).json(group);
	}

	async getGroupById(req: ExtRequest, res: Response) {
		const group = await Group.findUnique({
			where: { id: +req.params.id },
			include: { students: true },
		});
		res.status(200).json(group);
	}
}

export const groupController = new GroupController();
