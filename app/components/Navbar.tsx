'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Button from './Button';

const Navbar = () => {
	const router = useRouter();
	const handleSignupRedirect = () => {
		router.push('/login');
	};

	return (
		<div className='w-full border-b-2 shadow-lg sticky top-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50'>
			<div className='mx-auto flex justify-between items-center py-4 px-6'>
				<div className='w-1/4  text-white text-xl font-bold'>
					Zetta Reservation
				</div>
				<div className='w-1/4 flex space-x-6 text-white font-semibold'>
					<p className='hover:text-yellow-300 cursor-pointer transition duration-300 py-2'>
						Home
					</p>
					<p className='hover:text-yellow-300 cursor-pointer transition duration-300 py-2'>
						Rooms
					</p>
					<p className='hover:text-yellow-300 cursor-pointer transition duration-300 py-2'>
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
