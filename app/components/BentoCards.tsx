import Image from 'next/image';

interface BentoCardProps {
	imageSrc: string;
	imageAlt: string;
}

const BentoCards = ({ imageSrc, imageAlt }: BentoCardProps) => {
	return (
		<div className='w-80 rounded-full shadow-lg overflow-hidden border border-gray-200'>
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
