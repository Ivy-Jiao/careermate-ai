import  {z} from 'zod';

const emailSchema = z.email('Invalid email format').toLowerCase().trim();
const passwordSchema = z.string().min(8, 'Password must be at least 8 characters')
.regex(/[a-zA-Z]/, 'Password must contain at least one letter')
.regex(/[0-9]/, 'Password must contain at least one number');

export const registerSchema = z.object({
	fullName: z.string().min(1, 'Full name is required').trim(),
	email: emailSchema,
	password: passwordSchema,
});

export const loginSchema = z.object({
	email: emailSchema,
	// password: passwordSchema,
	//If consider old user who not change new password and system update new password rules, only valid string to make sure old user can login: 
	password: z.string().min(1, 'Password is required'),
});
