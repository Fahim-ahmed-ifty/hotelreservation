// actions/auth.ts
'use server';

import { connectToDatabase } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';

// Define the response type and export it
export interface ServerResponse {
	success?: string;
	error?: string;
}

// Custom error type to catch any specific errors
interface CustomError extends Error {
	message: string;
}

export async function signup(
	name: string,
	email: string,
	password: string
): Promise<ServerResponse> {
	try {
		const db = await connectToDatabase();
		const usersCollection = db.collection('users');

		// Check if user already exists
		const existingUser = await usersCollection.findOne({ email });
		if (existingUser) {
			return { error: 'User already exists' };
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Insert new user into the database
		await usersCollection.insertOne({
			name,
			email,
			password: hashedPassword
		});

		// Optionally revalidate a path (could be used for cache purposes in Next.js)
		revalidatePath('/signup');

		return { success: 'User created successfully!' };
	} catch (error) {
		// Ensure the error is of type CustomError to access .message property
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

		// Find the user by email
		const user = await usersCollection.findOne({ email });
		if (!user) {
			return { error: 'Invalid credentials' };
		}

		// Compare the provided password with the hashed one
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return { error: 'Invalid credentials' };
		}

		return { success: 'Login successful!' };
	} catch (error) {
		// Ensure the error is of type CustomError to access .message property
		const err = error as CustomError;
		return { error: err.message || 'Something went wrong' };
	}
}
