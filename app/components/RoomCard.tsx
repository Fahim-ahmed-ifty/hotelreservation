import Image from 'next/image';
import React from 'react';
import Button from './Button';

interface roomcardprops {
	text?: string;
	img: string;
	imgalt: string;
	details?: string;
	available?: string;
}

const RoomCard = ({
	text,
	img,
	imgalt,
	details,
	available
}: roomcardprops) => {
	return (
		<div className='w-[400px] p-6 bg-blue-400 bg-opacity-80 rounded-xl flex flex-col'>
			<Image
				className='w-[350px] h-[200px] rounded-lg'
				src={img}
				alt={imgalt}
				width={350}
				height={300}
			/>

			<div className='mt-2 font-semibold'>{text}</div>
			<div className='flex-grow mt-2'>{details}</div>
			<div className='mt-2 font-semibold'>{available}</div>
			<div className='mt-2 flex justify-center items-center'>
				<Button
					className='hover:text-white'
					text='Book Now'
					bgColor='bg-orange-400'
					textColor='text-black'
				/>
			</div>
		</div>
	);
};

export default RoomCard;
