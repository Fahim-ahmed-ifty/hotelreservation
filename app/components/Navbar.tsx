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
				<div className='w-3/4 font-bold'>Zetta Reservation</div>
				<div className='w-1/4 flex flex-row gap-6 font-semibold'>
					<p>Home</p>
					<p>Rooms</p>
					<p>Contact US</p>
					<Button text='Log Out' onClick={handleSignupRedirect} />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
