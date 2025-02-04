import Image from 'next/image';

interface BentoCardProps {
  imageSrc: string;
  imageAlt: string;
  customHeight?: string;
  customWidth?: string;
}

const BentoCards = ({
  imageSrc,
  imageAlt,
  customHeight = 'h-[400px]', 
  customWidth = 'w-full',
}: BentoCardProps) => {
  return (
    <div
      className={`rounded-xl shadow-lg overflow-hidden border border-gray-200 relative transition-transform duration-300 transform hover:scale-110 hover:z-30 hover:shadow-2xl ${customHeight} ${customWidth}`}
    >
      <Image
        className="object-cover"
        src={imageSrc}
        alt={imageAlt}
        width={400}
        height={400}
      />
    </div>
  );
};

export default BentoCards;
