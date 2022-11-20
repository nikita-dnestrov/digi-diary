import jwt from "jsonwebtoken";

export const jwtMiddleware = (req, res, next) => {
	const token = req.headers.authorization.split(" ")[1];
	const { id }: any = jwt.decode(token);
	console.log("User: ", id);
	req.user = +id;
	next();
};
