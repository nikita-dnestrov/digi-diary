import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { School } from '../db/db';
import { CONFIG } from '../config';
import { School as SchoolType } from '@prisma/client';
import { NotFoundError } from '../common';

class SchoolService {
	async find(where) {
		return await School.findMany({ where });
	}

	async findOne(where) {
		return await School.findFirst({
			where,
			include: {
				classes: true,
				students: true,
				groups: { include: { students: true } },
			},
		});
	}

	async findById(id) {
		return await School.findUniqueOrThrow({
			where: { id },
			include: { classes: true, groups: { include: { students: true } } },
		});
	}

	async create(data: SchoolType) {
		return await School.create({ data });
	}

	async delete(where) {
		await this.check(where);
		return await School.delete({ where });
	}

	async check(where) {
		const found = await School.findUnique({ where });
		if (!found) {
			throw new NotFoundError();
		}
	}
}

export const schoolService = new SchoolService();
