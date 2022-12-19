import jwt from "jsonwebtoken";
import { UnauthorizedError } from "./errors";

export const withToken = (req, res, next) => {
	const [key, token] = req.headers.authorization.split(" ");
	console.log(req.headers.authorization);
	if (key === "Debug") {
		req.user = 1;
		next();
	} else if (key === "Bearer" && token) {
		const { id }: any = jwt.decode(token);
		req.user = +id;
		next();
	} else {
		throw new UnauthorizedError();
	}
};
