export abstract class CustomError extends Error {
	abstract statusCode: number;
	constructor(msg: string) {
		super(msg);
		Object.setPrototypeOf(this, CustomError.prototype);
	}
}

export class NotFoundError extends CustomError {
	statusCode = 404;
	errorMessage = this.message;
	constructor() {
		super("Not Found");
		Object.setPrototypeOf(this, NotFoundError.prototype);
	}
}

export class BadRequestError extends CustomError {
	statusCode = 401;
	errorMessage = this.message;
	constructor(msg: string) {
		super(msg);
		Object.setPrototypeOf(this, NotFoundError.prototype);
	}
}
