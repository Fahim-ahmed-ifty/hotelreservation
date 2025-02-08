'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { FaHotel } from 'react-icons/fa';
import Button from './Button';

const Navbar = () => {
	const router = useRouter();

	const handleNavigation = (path: string) => {
		router.push(path);
	};

	return (
		<nav className='sticky top-4 z-50 mx-2'>
			<div className='w-full flex justify-between items-center py-3 px-8 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 rounded-full shadow-lg'>
				<div
					className='flex items-center text-2xl font-bold text-black cursor-pointer hover:text-white transition duration-300'
					onClick={() => handleNavigation('/home')}
				>
					<FaHotel className='mr-2 text-red-600' /> Zetta
					Reservation
				</div>
				<div className='flex space-x-6 text-lg font-medium'>
					{[
						{ name: 'Home', path: '/home' },
						{ name: 'Rooms', path: '/rooms' },
						{ name: 'Contact Us', path: '/contact' }
					].map(item => (
						<p
							key={item.path}
							className='relative px-4 py-2 cursor-pointer transition duration-300 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-1 before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0'
							onClick={() => handleNavigation(item.path)}
						>
							{item.name}
						</p>
					))}
					<Button
						className='ml-6 px-6 py-2 rounded-full text-white bg-red-500 hover:bg-red-600 transition duration-300 shadow-md'
						text='Log Out'
						onClick={() => handleNavigation('/login')}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
