import Image from 'next/image';
import React from 'react';
import Button from './Button';

interface roomcardprops {
	text?: string;
	img: string;
	imgalt: string;
	details?: string;
}

const RoomCard = ({ text, img, imgalt, details }: roomcardprops) => {
	return (
		<div className='w-[400px] h-[400px] p-6 bg-blue-400 bg-opacity-80  rounded-xl flex flex-col justify-between'>
			<Image
				className='w-[350px] h-[200px] rounded-lg'
				src={img}
				alt={imgalt}
				width={350}
				height={200}
			/>

			<div className='mt-2 font-semibold'>{text}</div>
			<div className='flex-grow'>{details}</div>
			<div className='mt-2 flex justify-center items-center'>
				<Button text='Book Now' bgColor='bg-orange-400' />
			</div>
		</div>
	);
};

export default RoomCard;
