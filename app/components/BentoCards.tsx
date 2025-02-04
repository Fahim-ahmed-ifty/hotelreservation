import Image from 'next/image';

interface BentoCardProps {
	imageSrc: string;
	imageAlt: string;
}

const BentoCards = ({ imageSrc, imageAlt }: BentoCardProps) => {
	return (
		<div className='w-full h-full rounded-full shadow-lg overflow-hidden border border-gray-200 relative transition-transform duration-300 transform hover:scale-110 hover:z-30 hover:shadow-2xl'>
			<Image
				className='w-full h-full object-cover'
				src={imageSrc}
				alt={imageAlt}
				width={600}
				height={600}
			/>
		</div>
	);
};

export default BentoCards;
