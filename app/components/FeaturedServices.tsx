import Image from 'next/image';
import React from 'react';
import Button from './Button';

type Service = {
	id: number;
	title: string;
	description: string;
	icon: string;
	ctaText?: string;
	ctaLink?: string;
};

const services: Service[] = [
	{
		id: 1,
		title: 'Spa & Wellness',
		description:
			'Relax with our rejuvenating spa treatments and unwind in style.',
		icon: '/spaa.png',
		ctaText: 'Book Now',
		ctaLink: '#spa'
	},
	{
		id: 2,
		title: 'Airport Transfer',
		description:
			'Enjoy complimentary transfers to and from the airport.',
		icon: '/airport.png',
		ctaText: 'Reserve Your Ride',
		ctaLink: '#airport'
	},
	{
		id: 3,
		title: 'Free Wi-Fi',
		description:
			'Stay connected with free high-speed Wi-Fi throughout the hotel.',
		icon: '/wifi.png'
	},
	{
		id: 4,
		title: 'Free Breakfast',
		description:
			'Start your day right with our complimentary breakfast every morning.',
		icon: '/breakfast.png'
	}
];

const FeaturedServices: React.FC = () => {
	return (
		<section className='py-16 px-4'>
			<div className='max-w-7xl mx-auto text-center'>
				<h2 className='text-2xl font-bold text-gray-800 mb-12'>
					Our Exclusive Services
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
					{services.map(service => (
						<div
							key={service.id}
							className='bg-blue-700 bg-opacity-20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all'
						>
							<Image
								src={service.icon}
								alt={service.title}
								className='w-16 h-16 mb-4 mx-auto'
								width={100}
								height={100}
							/>
							<h3 className='text-xl font-semibold text-gray-800 mb-4'>
								{service.title}
							</h3>
							<p className='text-gray-600 mb-4'>
								{service.description}
							</p>
							{service.ctaText && service.ctaLink && (
								<Button
									text={service.ctaText}
									width='auto'
									height='auto'
									className='mt-4 hover:text-white'
									bgColor='bg-orange-400'
									textColor='text-black'
									borderRadius='md'
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedServices;
