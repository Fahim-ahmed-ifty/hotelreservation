import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface CustomerSayProps {
	avatar: string;
	imageAlt: string;
	comment: string;
	rating: number;
}

const CustomerSayCard: React.FC<CustomerSayProps> = ({
	avatar,
	imageAlt,
	comment,
	rating
}) => {
	return (
		<div className='bg-white p-4 rounded-2xl shadow-md flex flex-col items-center text-center max-w-sm hover:scale-110'>
			<Image
				src={avatar}
				alt={imageAlt}
				className='w-16 h-16 rounded-full object-cover mb-3'
				width={100}
				height={100}
			/>
			<p className='text-gray-700 mb-3'>{comment}</p>
			<div className='flex justify-center'>
				{[...Array(5)].map((_, index) => (
					<Star
						key={index}
						size={18}
						className={
							index < rating ? 'text-yellow-500' : 'text-gray-300'
						}
					/>
				))}
			</div>
		</div>
	);
};

export default CustomerSayCard;
