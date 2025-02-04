interface CalendarBodyProps {
	selectedMonth: number;
	currentYear: number;
	startDate: string | null;
	endDate: string | null;
	onDateSelect: (day: number) => void;
}

const getDaysInMonth = (month: number, year: number) => {
	return new Date(year, month + 1, 0).getDate();
};

const CalendarBody = ({
	selectedMonth,
	currentYear,
	startDate,
	endDate,
	onDateSelect
}: CalendarBodyProps) => {
	const daysInMonth = getDaysInMonth(selectedMonth, currentYear);

	return (
		<div className='grid grid-cols-7 gap-2'>
			{Array.from({ length: daysInMonth }, (_, i) => {
				const day = i + 1;
				const date = `${currentYear}-${String(
					selectedMonth + 1
				).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
				const isSelected = startDate === date || endDate === date;
				const isInRange =
					startDate && endDate && date > startDate && date < endDate;

				return (
					<div
						key={date}
						onClick={() => onDateSelect(day)}
						className={`cursor-pointer flex justify-center items-center transition-all ${
							isSelected
								? 'bg-blue-500 text-white'
								: isInRange
								? 'bg-blue-100'
								: 'bg-gray-200 text-gray-600 hover:bg-blue-100'
						}`}
					>
						{day}
					</div>
				);
			})}
		</div>
	);
};

export default CalendarBody;
