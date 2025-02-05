'use client';
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
	const [form, setForm] = useState({ email: '', password: '' });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const res = await axios.post('/api/auth/login', form);
			alert(res.data.message);
		} catch (err) {
			console.error('Error logging in:', err);
			alert('An error occurred. Please try again.');
		}
	};

	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100'>
			<form
				onSubmit={handleSubmit}
				className='p-6 bg-white rounded shadow-md w-80'
			>
				<h2 className='mb-4 text-xl font-semibold'>Login</h2>
				<input
					name='email'
					placeholder='Email'
					type='email'
					onChange={handleChange}
					className='w-full p-2 mb-2 border rounded'
				/>
				<input
					name='password'
					placeholder='Password'
					type='password'
					onChange={handleChange}
					className='w-full p-2 mb-4 border rounded'
				/>
				<button className='w-full p-2 bg-blue-600 text-white rounded'>
					Login
				</button>
			</form>
		</div>
	);
}
