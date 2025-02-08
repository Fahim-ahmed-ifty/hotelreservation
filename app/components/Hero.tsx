'use client';

import React, {
	useCallback,
	useEffect,
	useMemo,
	useState
} from 'react';
import BentoCard from './BentoCards';
import Button from './Button';
import CalendarSearchCard from './CalendarSearchCard';

const Hero = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [imageSrc, setImageSrc] = useState('/hero1.jpg');

	const handleModalToggle = () => {
		setIsModalOpen(!isModalOpen);
	};

	const imageOptions = useMemo(
		() => ['/hero1.jpg', '/hero4.jpg'],
		[]
	);

	const changeImageRandomly = useCallback(() => {
		const randomIndex = Math.floor(
			Math.random() * imageOptions.length
		);
		setImageSrc(imageOptions[randomIndex]);
	}, [imageOptions]);

	useEffect(() => {
		const intervalId = setInterval(changeImageRandomly, 3000);
		return () => clearInterval(intervalId);
	}, [changeImageRandomly]);

	return (
		<div className='w-full h-screen flex flex-col lg:flex-row'>
			<div className='w-full lg:w-1/2 m-4 p-6 flex flex-col items-start justify-center'>
				<h1 className='text-3xl sm:text-4xl font-bold'>
					Your Perfect Stay Awaits!
				</h1>
				<h2 className='p-2 text-sm sm:text-base'>
					Book now and experience comfort, luxury, and convenience at
					our exclusive hotel. Reserve your room today and make your
					getaway unforgettable!
				</h2>
				<div className='flex flex-row'>
					<Button
						text='Clicked For Reservation'
						textColor='text-white'
						onClick={handleModalToggle}
					/>
					<p className='ml-2 mt-3 text-[12px] sm:text-xs hover:underline'>
						Get 25% off for first booked
					</p>
				</div>
			</div>

			<div className='w-full lg:w-1/2 m-4 p-6 grid grid-cols-2 grid-rows-2 gap-4 lg:h-full'>
				<div className='col-span-2 row-span-1 relative shadow-xl'>
					<BentoCard
						imageSrc={imageSrc}
						imageAlt='1st one'
						customHeight='h-[250px] sm:h-[350px] lg:h-[500px]'
						customWidth='w-full'
					/>
				</div>

				<div className='mt-12 col-span-1 row-span-1 relative'>
					<BentoCard
						imageSrc='/hero2.jpg'
						imageAlt='2nd one'
						customHeight='h-[150px] sm:h-[200px]'
						customWidth='w-full'
					/>
				</div>

				<div className='mt-12 col-span-1 row-span-1 relative'>
					<BentoCard
						imageSrc='/hero3.jpg'
						imageAlt='3rd one'
						customHeight='h-[120px] sm:h-[200px]'
						customWidth='w-full'
					/>
				</div>
			</div>

			<CalendarSearchCard
				isOpen={isModalOpen}
				onClose={handleModalToggle}
			/>
		</div>
	);
};

export default Hero;
