import AppException from '@exceptions/app.exception.js';

class UnauthorizedException extends AppException {
	constructor(message = 'Unauthorized', context = {}) {
		super(401, message, context);
	}
}

export default UnauthorizedException;