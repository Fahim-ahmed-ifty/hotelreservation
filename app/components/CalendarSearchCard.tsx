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
	const [startDate, setStartDate] = useState<string[]>([]);
	const [endDate, setEndDate] = useState<string[]>([]);

	const handleSearch = () => {
		if (startDate.length > 0 && endDate.length > 0) {
			alert(
				`Searching rooms from ${startDate.join(
					', '
				)} to ${endDate.join(', ')}`
			);
		} else {
			alert('Please select a valid date range.');
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
				<CustomCalendar
					onSelectDates={(start, end) => {
						if (start) {
							setStartDate(prevStartDates => [
								...prevStartDates,
								start
							]);
						}
						if (end) {
							setEndDate(prevEndDates => [...prevEndDates, end]);
						}
					}}
				/>
				<div className='text-center text-gray-600 mt-4'>
					<p>
						{startDate.length > 0
							? `Check-in: ${startDate.join(', ')}`
							: 'Select Check-in Date'}
					</p>
					<p>
						{endDate.length > 0
							? `Check-out: ${endDate.join(', ')}`
							: 'Select Check-out Date'}
					</p>
				</div>
				<div className='text-center mt-4'>
					<Button onClick={handleSearch} text='Search Rooms' />
				</div>
			</div>
		</div>
	);
};

export default CalendarSearchCard;
