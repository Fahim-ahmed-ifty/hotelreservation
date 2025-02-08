'use client';

import AdminNavbar from '@/app/components/AdminNavbar';
import Button from '@/app/components/Button';
import React, { useState } from 'react';

const RoomSettingsPage = () => {
	const [roomSettings, setRoomSettings] = useState([
		{
			roomType: 'Deluxe Rooms',
			available: 0,
			date: ''
		},
		{
			roomType: 'Premium Single Rooms',
			available: 0,
			date: ''
		},
		{
			roomType: 'Premium Double Rooms',
			available: 0,
			date: ''
		},
		{
			roomType: 'Honeymoon Suites',
			available: 0,
			date: ''
		},
		{
			roomType: 'Premium Honeymoon Suites',
			available: 0,
			date: ''
		},
		{
			roomType: 'Single Rooms',
			available: 0,
			date: ''
		},
		{
			roomType: 'Double Rooms',
			available: 0,
			date: ''
		},
		{
			roomType: 'Small Single Rooms',
			available: 0,
			date: ''
		}
	]);

	const handleAvailabilityChange = (index: number, value: string) => {
		const updatedSettings = [...roomSettings];
		const newValue = Number(value);

		// If the user types "0", set it to 0 (representing no available rooms)
		updatedSettings[index].available = newValue;

		setRoomSettings(updatedSettings);
	};

	const handleDateChange = (index: number, value: string) => {
		const updatedSettings = [...roomSettings];
		updatedSettings[index].date = value;
		setRoomSettings(updatedSettings);
	};

	const handleSave = () => {
		console.log('Saving room settings:', roomSettings);
		alert('Room settings saved successfully!');
	};

	return (
		<div className='w-screen h-screen overflow-y-auto scrollbar'>
			<AdminNavbar />
			<div className='p-6'>
				<div className='text-2xl font-bold mb-4'>
					Room Availability Settings
				</div>
				<div className='space-y-4'>
					{roomSettings.map((room, index) => (
						<div
							key={index}
							className='flex justify-between items-center border p-4 rounded-lg shadow-md'
						>
							<div className='flex flex-col'>
								<div className='font-semibold'>{room.roomType}</div>
								<div className='text-sm text-gray-500'>
									Current Availability:{' '}
									{room.available === 0
										? 'No available rooms'
										: `${room.available} rooms available`}
								</div>
							</div>
							<div className='flex flex-col'>
								<label className='text-sm text-gray-600'>
									Set Available Date
								</label>
								<input
									type='date'
									value={room.date}
									onChange={e =>
										handleDateChange(index, e.target.value)
									}
									className='p-2 border rounded-md mt-1'
								/>
								<label className='text-sm text-gray-600 mt-2'>
									Update Availability
								</label>
								<input
									type='number'
									value={room.available}
									onChange={e =>
										handleAvailabilityChange(index, e.target.value)
									}
									className='p-2 border rounded-md mt-1'
									min={0}
								/>
							</div>
						</div>
					))}
				</div>
				<div className='mt-6 flex justify-center'>
					<Button
						text='Save Settings'
						onClick={handleSave}
						bgColor='bg-green-500'
					/>
				</div>
			</div>
		</div>
	);
};

export default RoomSettingsPage;
