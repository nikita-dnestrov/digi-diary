import { Group } from '../db/db';
import { NotFoundError } from '../common';

class GroupService {
	async findMany(where) {
		return await Group.findMany({ where });
	}

	async findOne(id) {
		return await Group.findUnique({
			where: { id },
		});
	}

	async update(where, data) {
		return await Group.update({ where, data });
	}

	async create(data) {
		return await Group.create({ data });
	}

	async delete(where) {
		await this.check(where);
		return await Group.delete({ where });
	}

	async check(where) {
		const found = await Group.findUnique({ where });
		if (!found) {
			throw new NotFoundError();
		}
	}
}

export const groupService = new GroupService();
