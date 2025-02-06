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
	const handleDateClick = (date: string) => {
		let newDates: string[];

		if (selectedDates.includes(date)) {
			newDates = selectedDates.filter(d => d !== date);
		} else {
			if (selectedDates.length === 0) {
				newDates = [date];
			} else if (selectedDates.length === 1) {
				newDates = [selectedDates[0], date].sort();
			} else {
				newDates = [selectedDates[0], date].sort();
			}
		}

		setSelectedDates(newDates);
	};

	const handleSearch = () => {
		if (selectedDates.length === 2) {
			alert(
				`Searching room for dates ${selectedDates[0]} to ${selectedDates[1]}`
			);
		} else {
			alert('Please select both check-in and check-out dates.');
		}
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
			<div className='w-full sm:w-80 p-6 bg-gray-400 bg-opacity-80 rounded-xl shadow-lg relative'>
				<button
					onClick={onClose}
					className='absolute top-2 right-2 text-red-600 font-semibold'
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
					selectedDates={selectedDates}
					onDateSelect={handleDateClick}
				/>
				<div className='text-center text-gray-600 mt-4'>
					{selectedDates.length === 1 && (
						<p>
							Check-in: {selectedDates[0]} (select check-out date)
						</p>
					)}
					{selectedDates.length === 2 && (
						<p className='text-lg font-semibold text-black'>
							Check-in: {selectedDates[0]} <br />
							Check-out: {selectedDates[1]}
						</p>
					)}
				</div>
				<div className='text-center mt-4'>
					<Button onClick={handleSearch} text='Search Rooms' className='hover:text-white' />
				</div>
			</div>
		</div>
	);
};

export default CalendarSearchCard;
