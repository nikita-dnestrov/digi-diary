import {
	NotFoundError,
	PrismaClientRustPanicError,
} from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';
import { CustomError } from './errors';

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log(err);
	if (err instanceof CustomError) {
		return res.status(err.statusCode).send({ ...err });
	} else {
		return res.status(500).send({
			errors: [{ message: 'Something went wrong', error: err }],
		});
	}
};
