import AppException from '@exceptions/app.exception.js';

class ConflictException extends AppException {
	constructor(message = 'Resource conflict', context = {}) {
		super(409, message, context);
	}
}

export default ConflictException;