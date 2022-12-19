import { classService } from '../services/class';

class ClassController {
	async createClass(req, res) {
		const classData = await classService.create(req.body);
		res.status(201).json({ classData });
	}
}

export const classController = new ClassController();
