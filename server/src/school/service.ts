import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { School } from "../db";
import { CONFIG } from "../config";
import { School as SchoolType } from "@prisma/client";

class SchoolService {
	async findById(id) {
		return await School.findUnique({ where: { id } });
	}

	async create(data: SchoolType) {
		return await School.create({ data });
	}
}

export const schoolService = new SchoolService();
