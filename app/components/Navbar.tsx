'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Button from './Button';

const Navbar = () => {
	const router = useRouter();
	const handleSignupRedirect = () => {
		router.push('/signup');
	};

	return (
		<div className='w-full border border-b-2 shadow-xl sticky top-0 bg-background z-50'>
			<div className='m-6 flex flex-row'>
				<div className='w-3/4 py-2 font-bold'>Zetta Reservation</div>
				<div className='w-1/4 flex flex-row gap-6 font-semibold'>
					<p className='py-2'>Home</p>
					<p className='py-2'>Rooms</p>
					<p className='py-2'>Contact US</p>
					<Button
						className='ml-6 hover:bg-red-700 hover:text-white'
						text='Log Out'
						bgColor='bg-red-400'
						onClick={handleSignupRedirect}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
