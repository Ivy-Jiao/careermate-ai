import AppException from '@exceptions/app.exception.js';

class ValidationException extends AppException {
	constructor(message = 'Validation failed', context = {}) {
		super(400, message, context);
	}
}

export default ValidationException;