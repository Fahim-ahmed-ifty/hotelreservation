import { connectToDatabase } from '@/lib/mongodb';
import User, { IUser } from '@/models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		await connectToDatabase();
		const { email, password } = await req.json();

		const user: IUser | null = await User.findOne({ email });
		if (!user) {
			return NextResponse.json(
				{ message: 'Invalid credentials' },
				{ status: 400 }
			);
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return NextResponse.json(
				{ message: 'Invalid credentials' },
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{
				message: 'Login successful',
				user: { id: user._id, email: user.email, name: user.name }
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error('Error:', error);
		return NextResponse.json(
			{ message: 'Something went wrong' },
			{ status: 500 }
		);
	}
}
