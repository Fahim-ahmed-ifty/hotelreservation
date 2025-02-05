// app/signup/route.ts
import { connectToDatabase } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		// Parse the incoming request body (form data)
		const { name, email, password } = await req.json();

		// Check if any required fields are missing
		if (!name || !email || !password) {
			return NextResponse.json(
				{ message: 'All fields are required!' },
				{ status: 400 }
			);
		}

		// Connect to the MongoDB database
		const db = await connectToDatabase();

		// Check if the user already exists
		const existingUser = await db
			.collection('users')
			.findOne({ email });
		if (existingUser) {
			return NextResponse.json(
				{ message: 'User already exists' },
				{ status: 400 }
			);
		}

		// Hash the password before storing it in the database
		const hashedPassword = await bcrypt.hash(password, 10);

		// Insert the new user into the database
		const newUser = await db.collection('users').insertOne({
			name,
			email,
			password: hashedPassword
		});

		// Respond with a success message
		return NextResponse.json(
			{ message: 'User created successfully!', user: newUser },
			{ status: 201 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: 'Something went wrong' },
			{ status: 500 }
		);
	}
}
