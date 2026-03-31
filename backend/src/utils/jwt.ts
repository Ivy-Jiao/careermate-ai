import type { Field, Role } from '@users/user.model.js';
import config from '@utils/config.js';
import jwt from 'jsonwebtoken';

export interface JwtPayload {
	userId: string;
}

export const signAccessToken = (payload: JwtPayload): string => {
	return jwt.sign(payload, config.JWT_SECRET as jwt.Secret, {
		expiresIn: config.JWT_EXPIRES_IN as Exclude<jwt.SignOptions['expiresIn'], undefined>,
	});
};

export const verifyToken = (token: string): jwt.JwtPayload => {
	return jwt.verify(token, config.JWT_SECRET as jwt.Secret) as jwt.JwtPayload;
}

