import React from 'react';

interface ButtonProps {
	text: string;
	width?: string;
	height?: string;
	onClick?: () => void;
	className?: string;
	textColor?: string;
	textSize?: string;
	bgColor?: string;
	borderRadius?: string;
}

const Button = ({
	text,
	width = 'auto',
	height = 'auto',
	onClick,
	className = '',
	textColor = 'white',
	textSize = '16px',
	bgColor = 'bg-blue-500',
	borderRadius = 'full'
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`px-4 py-2 ${bgColor} ${textColor} text-${textSize} rounded-${borderRadius} shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
			style={{ width, height }}
		>
			{text}
		</button>
	);
};

export default Button;
