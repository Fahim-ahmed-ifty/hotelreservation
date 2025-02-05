'use client';

import { login } from '@/actions/auth';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Button from './Button';

interface LoginForm {
	email: string;
	password: string;
}

const Login: React.FC = () => {
	const router = useRouter();
	const [form, setForm] = useState<LoginForm>({
		email: '',
		password: ''
	});
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setMessage('');

		try {
			const response = await login(form.email, form.password);

			if (response?.error) {
				setMessage(response.error);
			} else {
				setMessage(response?.success || 'Login successful!');
				setForm({ email: '', password: '' });
				router.push('/home');
			}
		} catch {
			setMessage('Something went wrong. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	const handleSignupRedirect = () => {
		router.push('/signup');
	};

	return (
		<div className='min-h-screen flex flex-col items-center justify-center'>
			<h1 className='text-2xl font-bold mb-4'>Login</h1>
			{message && <p className='text-red-500 mb-2'>{message}</p>}
			<form
				className='flex flex-col w-80 p-4 border rounded shadow'
				onSubmit={handleLogin}
			>
				<input
					name='email'
					placeholder='Email'
					type='email'
					onChange={handleChange}
					value={form.email}
					className='border border-gray-300 rounded px-4 py-2 mb-2'
					required
				/>
				<input
					name='password'
					placeholder='Password'
					type='password'
					onChange={handleChange}
					value={form.password}
					className='border border-gray-300 rounded px-4 py-2 mb-4'
					required
				/>
				<button
					className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
						loading ? 'opacity-50 cursor-not-allowed' : ''
					}`}
					type='submit'
					disabled={loading}
				>
					{loading ? 'Logging in...' : 'Login'}
				</button>
			</form>

			<div className='mt-2 flex justify-center items-center'>
				<Button
					text='if not logged please sign up'
					textColor='text-white'
					onClick={handleSignupRedirect}
				/>
			</div>
		</div>
	);
};

export default Login;
