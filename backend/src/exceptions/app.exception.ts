class AppException extends Error {
	status: number;
	context: Record<string, unknown>;

	constructor(
		statusCode = 500,
		message = 'Internal server error',
		context: Record<string, unknown> = {}
	) {
		super(message);
		this.name = new.target.name;
		this.status = statusCode;
		this.context = context;

		// Fix the prototype chain for proper inheritance
		Object.setPrototypeOf(this, new.target.prototype); 
		Error.captureStackTrace?.(this, this.constructor);
	}
}

export default  AppException;