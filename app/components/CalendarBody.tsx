interface CalendarBodyProps {
	selectedMonth: number;
	currentYear: number;
	selectedDates: string[];
	onDateSelect: (day: number) => void;
}

const CalendarBody = ({
	selectedMonth,
	currentYear,
	selectedDates,
	onDateSelect
}: CalendarBodyProps) => {
	const daysInMonth = new Date(
		currentYear,
		selectedMonth + 1,
		0
	).getDate();
	const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

	const isHighlighted = (day: number) => {
		const dateStr = `${currentYear}-${String(
			selectedMonth + 1
		).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
		if (selectedDates.length === 2) {
			const [start, end] = selectedDates;

			return dateStr >= start && dateStr <= end;
		}

		return selectedDates.includes(dateStr);
	};

	return (
		<div className='grid grid-cols-7 gap-2'>
			{days.map(day => (
				<button
					key={day}
					onClick={() => onDateSelect(day)}
					className={`p-2 border rounded ${
						isHighlighted(day)
							? 'bg-blue-200 line-through'
							: 'bg-white'
					}`}
				>
					{day}
				</button>
			))}
		</div>
	);
};

export default CalendarBody;
