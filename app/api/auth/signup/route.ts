import { connectToDatabase } from '@/lib/mongodb';
import User, { IUser } from '@/models/User';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		await connectToDatabase();
		const { name, email, password } = await req.json();

		if (!name || !email || !password) {
			return NextResponse.json(
				{ message: 'All fields are required' },
				{ status: 400 }
			);
		}

		console.log('Request Body:', { name, email });

		const existingUser: IUser | null = await User.findOne({ email });
		if (existingUser) {
			return NextResponse.json(
				{ message: 'User already exists' },
				{ status: 400 }
			);
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const newUser = new User({
			name,
			email,
			password: hashedPassword
		});

		await newUser.save();

		return NextResponse.json(
			{ message: `${newUser.name} created successfully!` },
			{ status: 201 }
		);
	} catch (error) {
		console.error('Error:', error);
		return NextResponse.json(
			{ message: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}
