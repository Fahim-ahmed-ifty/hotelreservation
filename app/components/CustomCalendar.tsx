import { useEffect, useState } from 'react';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';

interface CustomCalendarProps {
	onSelectDates: (start: string | null, end: string | null) => void;
}

const CustomCalendar = ({ onSelectDates }: CustomCalendarProps) => {
	const today = new Date();
	const currentMonthIndex = today.getMonth();
	const currentYear = today.getFullYear();

	const [selectedMonth, setSelectedMonth] =
		useState(currentMonthIndex);
	const [startDate, setStartDate] = useState<string | null>(null);
	const [endDate, setEndDate] = useState<string | null>(null);

	const handleMonthClick = (index: number) => {
		setSelectedMonth(index);
		setStartDate(null);
		setEndDate(null);
	};
	useEffect(() => {
		onSelectDates(startDate, endDate);
	}, [startDate, endDate, onSelectDates]);

	const handleDateSelect = (day: number) => {
		const date = `${currentYear}-${String(selectedMonth + 1).padStart(
			2,
			'0'
		)}-${String(day).padStart(2, '0')}`;

		if (!startDate) {
			setStartDate(date);
			setEndDate(null);
		} else if (startDate && !endDate && date > startDate) {
			setEndDate(date);
		} else if (startDate && endDate) {
			setStartDate(date);
			setEndDate(null);
		}

		onSelectDates(startDate, endDate);
	};

	return (
		<div className='p-4 bg-white rounded-lg shadow-md border'>
			<CalendarHeader
				selectedMonth={selectedMonth}
				onMonthClick={handleMonthClick}
			/>
			<CalendarBody
				selectedMonth={selectedMonth}
				currentYear={currentYear}
				startDate={startDate}
				endDate={endDate}
				onDateSelect={handleDateSelect}
			/>
		</div>
	);
};

export default CustomCalendar;
