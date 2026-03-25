import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export type Role = 'Student' | 'Other';
export type Field = 'FE' | 'BE';

const roles = ['Student', 'Other'] as const;
const fields = ['FE', 'BE']as const;

export interface IUser {
  fullName: string;
  email: string;
  password: string;
  role: Role;
  goal?: string;
  field?: Field;
  avatar?: string;
  displayName?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserDocument extends IUser, Document {
  comparePassword(candidate: string): Promise<boolean>;
}

const userSchema = new Schema<IUserDocument>({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: roles },
  goal: { type: String, trim: true },
  field: { type: String, enum: fields },
  avatar: {
    type: String,
  },
  displayName: { type: String, trim: true },
}, 
{ 
  timestamps: true, 
  toJSON: {
    transform(_, ret) {
      const { password, ...rest } = ret;
      return rest;
    }
  }
} 
);

// Pre-save hook
userSchema.pre<IUserDocument>('save', async function () {
  if (!this.isModified('password')) return; //
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password method
userSchema.methods.comparePassword = function(candidate: string) {
  return bcrypt.compare(candidate, this.password);
};

const User = mongoose.model<IUserDocument>('User', userSchema);
export default User;