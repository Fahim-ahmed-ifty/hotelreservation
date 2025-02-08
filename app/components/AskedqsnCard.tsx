import Image from 'next/image';
import React from 'react';

interface AskedqsnCardProps {
	avatar: string;
	imageAlt: string;
	name: string;
	qsn: string;
	answer: string;
}

const AskedqsnCard = ({
	avatar,
	imageAlt,
	name,
	qsn,
	answer
}: AskedqsnCardProps) => {
	return (
		<div className='bg-blue-600 bg-opacity-20 p-6 rounded-2xl shadow-md flex flex-col items-center text-center w-full max-w-2xl h-auto hover:scale-105 transition-transform duration-300'>
			<div className='flex flex-col justify-center items-center'>
				<div className='mt-6'>
					<Image
						src={avatar}
						alt={imageAlt}
						className='w-24 h-24 rounded-full'
						width={96}
						height={96}
					/>
				</div>
				<div className='mt-2'>
					<p className='font-semibold text-lg sm:text-xl'>{name}</p>
				</div>
				<div className='font-bold text-lg sm:text-xl mt-2'>{qsn}</div>
				<div className='w-11/12 sm:w-3/4 text-center mt-2 text-base sm:text-lg leading-relaxed'>
					{answer}
				</div>
			</div>
		</div>
	);
};

export default AskedqsnCard;
