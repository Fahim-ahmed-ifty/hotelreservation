import React from 'react';
import BentoCards from './BentoCards';
import Button from './Button';

const Home = () => {
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
				/>
			</div>
			<div className='w-1/2 m-12 flex flex-row'>
				<BentoCards imageSrc='/hero1.jpg' imageAlt='1st one' />
				<BentoCards imageSrc='' imageAlt='2nd one' />
				<BentoCards imageSrc='' imageAlt='3rd one' />
				<BentoCards imageSrc='' imageAlt='4th one' />
			</div>
		</div>
	);
};

export default Home;
