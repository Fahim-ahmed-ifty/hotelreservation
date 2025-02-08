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
		<div className='bg-blue-600 bg-opacity-20 p-4 rounded-2xl shadow-md items-center text-center w-[1300px] h-[400px]  hover:scale-110'>
			<div className='flex flex-row'>
				<div>
					<Image
						src={avatar}
						alt={imageAlt}
						className='w-24 h-24 rounded-full'
						width={100}
						height={100}
					/>
				</div>
				<div className='ml-2 mt-10'>
					<p className='font-semibold'>{name}</p>
				</div>
			</div>
		</div>
	);
};

export default AskedqsnCard;
