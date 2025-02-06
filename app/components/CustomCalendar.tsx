import { useState } from 'react';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';

interface CustomCalendarProps {
	selectedDates: string[];
	onDateSelect: (date: string) => void;
}

const CustomCalendar = ({
	selectedDates,
	onDateSelect
}: CustomCalendarProps) => {
	const today = new Date();
	const currentMonthIndex = today.getMonth();
	const currentYear = today.getFullYear();

	const [selectedMonth, setSelectedMonth] =
		useState(currentMonthIndex);

	const handleMonthClick = (index: number) => {
		setSelectedMonth(index);
	};

	const handleDateSelect = (day: number) => {
		const date = `${currentYear}-${String(selectedMonth + 1).padStart(
			2,
			'0'
		)}-${String(day).padStart(2, '0')}`;
		onDateSelect(date);
	};

	return (
		<div className='p-2 bg-gray-800 bg-opacity-20 rounded-lg shadow-md border'>
			<CalendarHeader
				selectedMonth={selectedMonth}
				onMonthClick={handleMonthClick}
			/>
			<CalendarBody
				selectedMonth={selectedMonth}
				currentYear={currentYear}
				selectedDates={selectedDates}
				onDateSelect={handleDateSelect}
			/>
		</div>
	);
};

export default CustomCalendar;
