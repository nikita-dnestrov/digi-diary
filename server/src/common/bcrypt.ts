import bcrypt from "bcrypt";

export const createHash = (str: string) => {
	const salt = bcrypt.genSaltSync(10);
	return bcrypt.hashSync(str, salt);
};

export const compareHash = (str: string, hash: string) => {
	return bcrypt.compareSync(str, hash);
};
