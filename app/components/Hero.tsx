'use client';

import React, { useState } from 'react';
import BentoCards from './BentoCards';
import Button from './Button';
import CalendarSearchCard from './CalendarSearchCard';

const Hero = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalToggle = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div className='w-full h-screen flex flex-row'>
			<div className='w-1/2 m-12 p-12 flex flex-col justify-center items-start'>
				<h1 className='text-4xl font-bold'>
					Your Perfect Stay Awaits!
				</h1>
				<h2 className='p-2'>
					Book now and experience comfort, luxury, and convenience at
					our exclusive hotel. Reserve your room today and make your
					getaway unforgettable!
				</h2>

				<Button
					text='Clicked For Reservation'
					textColor='text-white'
					onClick={handleModalToggle}
				/>
			</div>

			<div className='w-1/2 m-12 flex flex-row'>
				<BentoCards imageSrc='/hero1.jpg' imageAlt='1st one' />
				<BentoCards imageSrc='/hero2.jpg' imageAlt='2nd one' />
				<BentoCards imageSrc='/hero3.jpg' imageAlt='3rd one' />
				<BentoCards imageSrc='/hero4.jpg' imageAlt='4th one' />
			</div>

			<CalendarSearchCard
				isOpen={isModalOpen}
				onClose={handleModalToggle}
			/>
		</div>
	);
};

export default Hero;
