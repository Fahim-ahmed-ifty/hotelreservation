// app/signup/page.tsx
'use client';

import React, { useState } from 'react';

interface SignupForm {
	name: string;
	email: string;
	password: string;
}

export default function SignUpPage() {
	const [form, setForm] = useState<SignupForm>({
		name: '',
		email: '',
		password: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSignup = async (e: React.FormEvent) => {
		e.preventDefault();

		// If form is invalid (e.g., fields are empty), don't continue
		if (!form.name || !form.email || !form.password) return;

		// Now we'll send the form data to the server to handle signup
		const response = await fetch('/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form)
		});

		const result = await response.json();
		alert(result.message); // Show the message from the server

		// Reset form after successful submission
		setForm({ name: '', email: '', password: '' });
	};

	return (
		<div className='min-h-screen mx-auto p-4'>
			<h1 className='text-2xl font-bold mb-4'>Sign Up</h1>
			<div className='flex flex-col mb-4'>
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
					onClick={handleSignup}
				>
					Sign Up
				</button>
			</div>
		</div>
	);
}
