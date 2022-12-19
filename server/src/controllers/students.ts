import { Response } from "express";
import { Student } from "../db";
import { ExtRequest } from "../types/common";

class StudentController {
	async getStudentsBySchool(req: ExtRequest, res: Response) {
		const students = await Student.findMany({
			where: { schoolId: +req.params.id },
		});
		res.status(200).json(students);
	}
}

export const studentController = new StudentController();
