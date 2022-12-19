import { randFirstName, randPhoneNumber } from '@ngneat/falso';
import { Group, Manager, Student, Teacher } from '../db/db';
import bcrypt from 'bcrypt';

class DebugFns {
	async getUsers(req, res) {
		const managers = await Manager.findMany();
		const students = await Student.findMany();
		const teachers = await Teacher.findMany();
		res.status(200).json({ managers, students, teachers });
	}

	async updateUser(req, res) {
		const { type, id, data } = req.body;
		let returnData = null;
		switch (type) {
			case 'teacher':
				returnData = await Teacher.update({ where: { id }, data });
				break;
			case 'student':
				returnData = await Student.update({ where: { id }, data });
				break;
		}
		res.status(200).json(returnData);
	}

	async createUser(req, res) {
		const { type } = req.body;
		const salt = bcrypt.genSaltSync(10);
		const testData = {
			fullname: `${randFirstName()}_test`,
			password: bcrypt.hashSync('1', salt),
			phone: randPhoneNumber(),
		};
		let data = null;
		switch (type) {
			case 'teacher':
				data = await Teacher.create({
					data: testData,
				});
				break;
			case 'student':
				data = await Student.create({ data: testData });
				break;
		}
		res.status(200).json(data);
	}
}

export const debugFns = new DebugFns();
