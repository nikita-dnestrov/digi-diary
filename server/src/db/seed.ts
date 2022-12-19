import { PrismaClient } from "@prisma/client";
import { createHash } from "../common/bcrypt";

const prsm = new PrismaClient();

async function main() {
	await prsm.manager.upsert({
		where: { id: 1 },
		update: {},
		create: { phone: "380666330129", password: createHash("qwer") },
	});
}
