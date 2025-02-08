'use client';

import React, { useState } from 'react';
import Button from './Button';

const ContactPageRight: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// Api add here
		if (!name || !email || !message) {
			setError('All fields are required.');
			return;
		}

		setSuccess(true);
		setError('');
		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<div className='bg-gray-100'>
			<div className='container mx-auto px-4 py-10'>
				<h1 className='text-3xl font-bold text-center mb-6'>
					Contact Us
				</h1>
				<p className='text-center mb-6'>
					We&apos;d love to hear from you!
				</p>
				{success && (
					<div className='text-green-500 text-center mb-4'>
						Thank you for your feedback!
					</div>
				)}
				{error && (
					<div className='text-red-500 text-center mb-4'>{error}</div>
				)}
				<form
					onSubmit={handleSubmit}
					className='bg-blue-500 bg-opacity-40 shadow-md rounded px-8 pt-6 pb-8 mb-4'
				>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='name'
						>
							Name
						</label>
						<input
							type='text'
							id='name'
							value={name}
							onChange={e => setName(e.target.value)}
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							required
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='email'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							required
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='message'
						>
							Message
						</label>
						<textarea
							id='message'
							value={message}
							onChange={e => setMessage(e.target.value)}
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							rows={4}
							required
						/>
					</div>
					<div className='flex items-center justify-between'>
						<Button text='Send Feedback' textColor='text-white' />
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactPageRight;
