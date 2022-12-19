import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Manager } from "../db/db";
import { CONFIG } from "../config";

class ManagerService {
	jwtSign(data: Object) {
		return jwt.sign(JSON.stringify(data), CONFIG.JWT_SECRET);
	}

	createHash(data: string) {
		const salt = bcrypt.genSaltSync(10);
		return bcrypt.hashSync(data, salt);
	}

	compareHash(password: string, hash: string) {
		return bcrypt.compareSync(password, hash);
	}

	async create(data) {
		const { phone, password } = data;
		const manager = await Manager.create({ data: { phone, password } });

		return manager;
	}

	async findByPhone(phone: string) {
		return await Manager.findFirst({ where: { phone } });
	}

	async findById(id: number) {
		return await Manager.findUnique({
			where: { id },
			include: { school: { include: { students: true } } },
		});
	}

	async updateProfile(id: number, data: Partial<typeof Manager>) {
		return await Manager.update({ where: { id }, data });
	}
}

export const managerService = new ManagerService();
