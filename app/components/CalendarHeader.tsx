import Button from './Button';

interface CalendarHeaderProps {
	selectedMonth: number;
	onMonthClick: (index: number) => void;
}

const CalendarHeader = ({
	selectedMonth,
	onMonthClick
}: CalendarHeaderProps) => {
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

	return (
		<div className='flex space-x-2 mb-4 overflow-x-auto'>
			{months.map((month, index) => (
				<Button
					key={month}
					text={month.slice(0, 3)}
					onClick={() => onMonthClick(index)}
					className={`px-3 py-1 text-sm font-medium transition-all ${
						index === selectedMonth
							? 'bg-blue-500 text-white'
							: 'bg-gray-200 text-gray-600 hover:bg-gray-300'
					}`}
				/>
			))}
		</div>
	);
};

export default CalendarHeader;
