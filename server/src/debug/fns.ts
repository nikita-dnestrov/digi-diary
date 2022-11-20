import { Manager } from "../db";

class DebugFns {
	async getUsers(req, res) {
		const data = await Manager.findMany();
		res.status(200).json(data);
	}
}

export const debugFns = new DebugFns();
