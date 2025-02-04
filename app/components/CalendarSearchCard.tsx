'use client';

import { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Button from './Button';
import CustomCalendar from './CustomCalendar';

interface CalendarSearchCardProps {
	isOpen: boolean;
	onClose: () => void;
}

const CalendarSearchCard = ({
	isOpen,
	onClose
}: CalendarSearchCardProps) => {
	const [selectedDates, setSelectedDates] = useState<string[]>([]);

	const handleDates = (dates: string[]) => {
		if (dates.length > 2) {
			alert('Please select only check-in and check-out dates.');
			return;
		}
		setSelectedDates(dates);
	};

	const handleSearch = () => {
		if (selectedDates.length === 2) {
			alert(`Searching rooms for dates: ${selectedDates.join(', ')}`);
		} else {
			alert('Please select both check-in and check-out dates.');
		}
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
			<div className='w-full sm:w-80 p-6 bg-white rounded-xl shadow-lg relative'>
				<button
					onClick={onClose}
					className='absolute top-2 right-2 text-red-500'
				>
					X
				</button>
				<div className='flex items-center mb-4'>
					<FaCalendarAlt className='w-6 h-6 text-gray-600' />
					<span className='ml-2 text-lg font-semibold'>
						Select Dates
					</span>
				</div>
				<CustomCalendar onSelectDates={handleDates} />
				<div className='text-center text-gray-600 mt-4'>
					{selectedDates.length === 1 && (
						<p>
							Check-in time: {selectedDates[0]} 
						</p>
					)}
					{selectedDates.length === 2 && (
						<p>
							Check-in time: {selectedDates[0]} <br />
							Check-out time: {selectedDates[1]}
						</p>
					)}
				</div>
				<div className='text-center mt-4'>
					<Button onClick={handleSearch} text='Search Rooms' />
				</div>
			</div>
		</div>
	);
};

export default CalendarSearchCard;
