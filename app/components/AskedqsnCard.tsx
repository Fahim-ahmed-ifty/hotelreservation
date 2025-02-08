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
		<div className='bg-blue-600 bg-opacity-20 p-4 rounded-2xl shadow-md items-center text-center w-[1000px] h-[400px]  hover:scale-110'>
			<div className='flex flex-col justify-center items-center'>
				<div className='mt-12'>
					<Image
						src={avatar}
						alt={imageAlt}
						className='w-24 h-24 rounded-full'
						width={100}
						height={100}
					/>
				</div>
				<div className='mt-2'>
					<p className='font-semibold'>{name}</p>
				</div>
				<div className='font-bold mb-2'>{qsn}</div>
				<div className='w-11/12 sm:w-3/4 md:w-1/2 text-center justify-between'>
					{answer}
				</div>
			</div>
		</div>
	);
};

export default AskedqsnCard;
