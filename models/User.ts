import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
	name: string;
	email: string;
	password: string;
	role: 'admin' | 'user';
}

const userSchema: Schema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role: { type: String, enum: ['admin', 'user'], default: 'user' }
});

const User =
	mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
