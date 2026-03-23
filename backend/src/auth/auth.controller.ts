import User from '@users/user.model.js';
import logger from '@utils/logger.js';
import type { Request, Response } from 'express';

const register = async (req: Request, res: Response) => {
	const {fullName, email, password} = req.body;

	//check duplicate
	const existing = await User.findOne({ email });
	if (existing) {
		return res.status(400).json({
		success: false,
		message: 'Email already registered',
		});
	}

	const user = await User.create({fullName, email, password});
	logger.info('User registered', {userId: user._id});

	res.json({
		success: true,
		data: {
			user,
		},
	});
};

const login = async (req: Request, res: Response) => {
	const {email, password} = req.body;

	const user = await User.findOne({email}).exec();

	if (!user) {
		return res.status(401).json({
		success: false,
		message: 'Invalid email or password',
		});
	}

	const isMatch = await user.comparePassword(password);
	if (!isMatch) {
		return res.status(401).json({
			success: false,
			data: {
				message: 'Invalid email or password',
			}
		});
	};

	res.json({
		success: true,
		data: {
			user,
		}
	});
};

export default { register, login };