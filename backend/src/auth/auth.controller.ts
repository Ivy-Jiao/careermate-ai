import ConflictException from '@exceptions/conflict.exception.js';
import UnauthorizedException from '@exceptions/unauthorized.exception.js';
import User from '@users/user.model.js';
import { signAccessToken } from '@utils/jwt.js';
import logger from '@utils/logger.js';
import type { Request, Response } from 'express';

const register = async (req: Request, res: Response) => {
	const {fullName, email, password} = req.body;

	//check duplicate
	const existingUser = await User.findOne({ email }).exec();
	if (existingUser) {
		throw new ConflictException('Email already registered')
	}

	const user = await User.create({fullName, email, password});
	logger.info('User registered', {userId: user._id});

	const accessToken = signAccessToken({userId: user._id.toString()});

	res.json({
		success: true,
		data: {
			accessToken
		},
	});
};

const login = async (req: Request, res: Response) => {
	const {email, password} = req.body;

	const user = await User.findOne({email}).exec();
	if (!user) {
		throw new UnauthorizedException('Invalid email or password. Please try again')
	}

	const isMatch = await user.comparePassword(password);
	if (!isMatch) {
		throw new UnauthorizedException('Invalid email or password. Please try again')

	};

	const accessToken = signAccessToken({userId: user._id.toString()});

	res.json({
		success: true,
		data: {
			accessToken
		}
	});
};

export default { register, login };