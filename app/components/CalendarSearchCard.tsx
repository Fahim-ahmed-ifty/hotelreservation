'use client';

import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

interface CalendarProps {
	isOpen: boolean;
	onClose: () => void;
}

const CalendarSearchCard = ({ isOpen, onClose }: CalendarProps) => {
	const [startDate, setStartDate] = useState<string | null>(null);
	const [endDate, setEndDate] = useState<string | null>(null);

	const handleDateSelect = (date: string) => {
		if (!startDate || (startDate && endDate)) {
			setStartDate(date);
			setEndDate(null);
		} else if (startDate && !endDate && date > startDate) {
			setEndDate(date);
		}
	};

	const handleSearch = () => {
		if (startDate && endDate) {
			alert(`Searching rooms for dates: ${startDate} to ${endDate}`);
		} else {
			alert('Please select a valid date range.');
		}
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
			<div className='w-80 p-6 rounded-xl shadow-lg bg-white border border-gray-200 relative'>
				<button
					onClick={onClose}
					className='absolute top-2 right-2 text-red-500 hover:text-red-800'
				>
					X
				</button>
				<div className='flex items-center mb-4'>
					<FaCalendarAlt className='w-6 h-6 text-gray-600' />{' '}
					<span className='text-lg font-semibold ml-2'>
						Select Check-in and Check-out Dates
					</span>
				</div>

				<div className='grid grid-cols-7 gap-2 mb-4'>
					{Array.from({ length: 30 }, (_, i) => {
						const date = `2025-02-${String(i + 1).padStart(2, '0')}`;
						const isSelected =
							(startDate && date === startDate) ||
							(endDate && date === endDate);
						const isInRange =
							startDate &&
							endDate &&
							date > startDate &&
							date < endDate;

						return (
							<button
								key={date}
								onClick={() => handleDateSelect(date)}
								className={`w-10 h-10 rounded-full transition-all ${
									isSelected
										? 'bg-blue-500 text-white'
										: isInRange
										? 'bg-blue-100'
										: 'bg-gray-200 text-gray-600'
								}`}
							>
								{i + 1}
							</button>
						);
					})}
				</div>

				<div className='text-center text-gray-600 mb-4'>
					<p>
						{startDate
							? `Check-in: ${startDate}`
							: 'Select Check-in Date'}
					</p>
					<p>
						{endDate
							? `Check-out: ${endDate}`
							: 'Select Check-out Date'}
					</p>
				</div>

				<button
					onClick={handleSearch}
					className='w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all'
					disabled={!startDate || !endDate}
				>
					Search Rooms
				</button>
			</div>
		</div>
	);
};

export default CalendarSearchCard;
