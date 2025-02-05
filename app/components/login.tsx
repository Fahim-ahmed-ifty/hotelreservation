// components/Login.tsx
'use client';

import { login, ServerResponse } from '@/actions/auth'; // Import the server action
import React, { useState } from 'react';

interface LoginForm {
	email: string;
	password: string;
}

const Login: React.FC = () => {
	const [form, setForm] = useState<LoginForm>({
		email: '',
		password: ''
	});
	const [message, setMessage] = useState<string>('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();

		// Calling the login action
		const response: ServerResponse = await login(
			form.email,
			form.password
		);

		if (response.error) {
			// If there's an error, set the message as the error
			setMessage(response.error);
		} else {
			// If successful, set the message as the success message
			setMessage(response.success || 'Login successful!');
			setForm({ email: '', password: '' }); // Clear form on success
		}
	};

	return (
		<div className='min-h-screen mx-auto p-4'>
			<h1 className='text-2xl font-bold mb-4'>Login</h1>
			{message && <p className='text-red-500'>{message}</p>}
			<form className='flex flex-col mb-4' onSubmit={handleLogin}>
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
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
