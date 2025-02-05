'use client';

import { ServerResponse, signup } from '@/actions/auth';
import React, { useState } from 'react';

interface SignupForm {
	name: string;
	email: string;
	password: string;
}

const Signup: React.FC = () => {
	const [form, setForm] = useState<SignupForm>({
		name: '',
		email: '',
		password: ''
	});
	const [message, setMessage] = useState<string>('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSignup = async (e: React.FormEvent) => {
		e.preventDefault();

		const response: ServerResponse = await signup(
			form.name,
			form.email,
			form.password
		);

		if (response.error) {
			setMessage(response.error);
		} else {
			setMessage(response.success || 'Signup successful!');
			setForm({ name: '', email: '', password: '' });
		}
	};

	return (
		<div className='min-h-screen mx-auto p-4'>
			<h1 className='text-2xl font-bold mb-4'>Sign Up</h1>
			{message && <p className='text-red-500'>{message}</p>}
			<form className='flex flex-col mb-4' onSubmit={handleSignup}>
				<input
					name='name'
					placeholder='Name'
					onChange={handleChange}
					value={form.name}
					className='border border-gray-300 rounded px-4 py-2 mb-2'
				/>
				<input
					name='email'
					placeholder='Email'
					type='email'
					onChange={handleChange}
					value={form.email}
					className='border border-gray-300 rounded px-4 py-2 mb-2'
				/>
				<input
					name='password'
					placeholder='Password'
					type='password'
					onChange={handleChange}
					value={form.password}
					className='border border-gray-300 rounded px-4 py-2 mb-4'
				/>
				<button
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
					type='submit'
				>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default Signup;
