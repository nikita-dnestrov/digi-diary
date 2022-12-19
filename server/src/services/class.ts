import { Class } from '../db';

class ClassService {
	async create(data) {
		return Class.create({ data });
	}

	async delete(where) {
		return Class.delete({ where });
	}
}

export const classService = new ClassService();
