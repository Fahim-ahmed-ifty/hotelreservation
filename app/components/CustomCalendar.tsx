// CustomCalendar.tsx
import { useEffect, useState } from 'react';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';

interface CustomCalendarProps {
	onSelectDates: (dates: string[]) => void;
}

const CustomCalendar = ({ onSelectDates }: CustomCalendarProps) => {
	const today = new Date();
	const currentMonthIndex = today.getMonth();
	const currentYear = today.getFullYear();

	const [selectedMonth, setSelectedMonth] =
		useState(currentMonthIndex);
	const [selectedDates, setSelectedDates] = useState<string[]>([]);

	const handleMonthClick = (index: number) => {
		setSelectedMonth(index);
		setSelectedDates([]);
	};

	const handleDateSelect = (day: number) => {
		const date = `${currentYear}-${String(selectedMonth + 1).padStart(
			2,
			'0'
		)}-${String(day).padStart(2, '0')}`;

		setSelectedDates(prev => {
			if (prev.includes(date)) {
				return prev.filter(d => d !== date);
			}
			return [...prev, date];
		});
	};

	useEffect(() => {
		onSelectDates(selectedDates);
	}, [selectedDates, onSelectDates]);

	return (
		<div className='p-4 bg-white rounded-lg shadow-md border'>
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
