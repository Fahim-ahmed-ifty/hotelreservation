'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Button from './Button';

const Navbar = () => {
	const router = useRouter();
	const handleSignupRedirect = () => {
		router.push('/login');
	};

	const handleHome = () => {
		router.push('/home');
	};

	const handleRoom = () => {
		router.push('/rooms');
	};

	const handleContact = () => {
		router.push('/contact');
	};

	return (
		<div className='w-full border-b-2 shadow-lg sticky top-0 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 text-white z-50'>
			<div className='mx-auto flex justify-between items-center py-4 px-6'>
				<div className='w-1/4   text-xl font-bold text-black'>
					Zetta Reservation
				</div>
				<div className='w-1/4 flex space-x-6  font-semibold'>
					<p
						className='hover:text-yellow-300 cursor-pointer transition duration-300 py-2'
						onClick={handleHome}
					>
						Home
					</p>
					<p
						className='hover:text-yellow-300 cursor-pointer transition duration-300 py-2'
						onClick={handleRoom}
					>
						Rooms
					</p>
					<p
						className='hover:text-yellow-300 cursor-pointer transition duration-300 py-2'
						onClick={handleContact}
					>
						Contact Us
					</p>
					<Button
						className='ml-6 px-6 py-2 rounded-lg text-white hover:bg-red-600 transition duration-300'
						text='Log Out'
						bgColor='bg-red-500'
						onClick={handleSignupRedirect}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
