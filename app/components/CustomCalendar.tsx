'use client';

import { useState } from 'react';

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

interface CustomCalendarProps {
	onSelectDates: (start: string | null, end: string | null) => void;
}

const getDaysInMonth = (month: number, year: number) => {
	return new Date(year, month + 1, 0).getDate();
};

const CustomCalendar = ({ onSelectDates }: CustomCalendarProps) => {
	const today = new Date();
	const currentMonthIndex = today.getMonth();
	const currentYear = today.getFullYear();

	const [selectedMonth, setSelectedMonth] =
		useState(currentMonthIndex);
	const [startDate, setStartDate] = useState<string | null>(null);
	const [endDate, setEndDate] = useState<string | null>(null);

	const daysInMonth = getDaysInMonth(selectedMonth, currentYear);

	const handleMonthClick = (index: number) => {
		setSelectedMonth(index);
		setStartDate(null);
		setEndDate(null);
	};

	const handleDateSelect = (day: number) => {
		const date = `${currentYear}-${String(selectedMonth + 1).padStart(
			2,
			'0'
		)}-${String(day).padStart(2, '0')}`;

		if (!startDate || (startDate && endDate)) {
			setStartDate(date);
			setEndDate(null);
		} else if (startDate && !endDate && date > startDate) {
			setEndDate(date);
		}
		onSelectDates(startDate, endDate);
	};

	return (
		<div className='p-4 bg-white rounded-lg shadow-md border'>
			<div className='flex space-x-2 mb-4 overflow-x-auto'>
				{months.map((month, index) => (
					<button
						key={month}
						onClick={() => handleMonthClick(index)}
						className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
							index === selectedMonth
								? 'bg-blue-500 text-white'
								: 'bg-gray-200 text-gray-600 hover:bg-gray-300'
						}`}
					>
						{month.slice(0, 3)}
					</button>
				))}
			</div>

			<div className='grid grid-cols-7 gap-2'>
				{Array.from({ length: daysInMonth }, (_, i) => {
					const day = i + 1;
					const date = `${currentYear}-${String(
						selectedMonth + 1
					).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
					const isSelected = startDate === date || endDate === date;
					const isInRange =
						startDate &&
						endDate &&
						date > startDate &&
						date < endDate;

					return (
						<button
							key={date}
							onClick={() => handleDateSelect(day)}
							className={`w-10 h-10 rounded-full transition-all ${
								isSelected
									? 'bg-blue-500 text-white'
									: isInRange
									? 'bg-blue-100'
									: 'bg-gray-200 text-gray-600 hover:bg-blue-100'
							}`}
						>
							{day}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default CustomCalendar;
