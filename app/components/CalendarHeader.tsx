interface CalendarHeaderProps {
	selectedMonth: number;
	onMonthClick: (monthIndex: number) => void;
}

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

const CalendarHeader = ({
	selectedMonth,
	onMonthClick
}: CalendarHeaderProps) => {
	return (
		<div className='flex justify-between items-center mb-4 text-white'>
			<button onClick={() => onMonthClick((selectedMonth + 11) % 12)}>
				&lt;
			</button>
			<span>{months[selectedMonth]}</span>
			<button onClick={() => onMonthClick((selectedMonth + 1) % 12)}>
				&gt;
			</button>
		</div>
	);
};

export default CalendarHeader;
