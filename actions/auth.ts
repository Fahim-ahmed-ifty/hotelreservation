'use server';

import { connectToDatabase } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';

export interface ServerResponse {
	success?: string;
	error?: string;
	role?: 'admin' | 'user';
}

interface CustomError extends Error {
	message: string;
}

export async function signup(
	name: string,
	email: string,
	password: string,
	role: 'admin' | 'user' = 'user'
): Promise<ServerResponse> {
	try {
		const db = await connectToDatabase();
		const usersCollection = db.collection('users');

		const existingUser = await usersCollection.findOne({ email });
		if (existingUser) {
			return { error: 'User already exists' };
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		await usersCollection.insertOne({
			name,
			email,
			password: hashedPassword,
			role
		});

		revalidatePath('/signup');

		return { success: 'User created successfully!' };
	} catch (error) {
		const err = error as CustomError;
		return { error: err.message || 'Something went wrong' };
	}
}

export async function login(
	email: string,
	password: string
): Promise<ServerResponse> {
	try {
		const db = await connectToDatabase();
		const usersCollection = db.collection('users');

		const user = await usersCollection.findOne({ email });
		if (!user) {
			return { error: 'Invalid credentials' };
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return { error: 'Invalid credentials' };
		}

		const role = user.role;

		return {
			success: 'Login successful!',
			role
		};
	} catch (error) {
		const err = error as CustomError;
		return { error: err.message || 'Something went wrong' };
	}
}
