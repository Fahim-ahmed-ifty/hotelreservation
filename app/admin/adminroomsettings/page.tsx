'use client';

import AdminNavbar from '@/app/components/AdminNavbar';
import Button from '@/app/components/Button';
import React, { useState } from 'react';

const RoomSettingsPage = () => {
	const [roomSettings, setRoomSettings] = useState([
		{
			roomType: 'Deluxe Rooms',
			available: 'No available rooms',
			date: ''
		},
		{
			roomType: 'Premium Single Rooms',
			available: 'No available rooms',
			date: ''
		},
		{
			roomType: 'Premium Double Rooms',
			available: 'No available rooms',
			date: ''
		},
		{
			roomType: 'Honeymoon Suites',
			available: 'No available rooms',
			date: ''
		},
		{
			roomType: 'Premium Honeymoon Suites',
			available: 'No available rooms',
			date: ''
		},
		{
			roomType: 'Single Rooms',
			available: 'No available rooms',
			date: ''
		},
		{
			roomType: 'Double Rooms',
			available: 'No available rooms',
			date: ''
		},
		{
			roomType: 'Small Single Rooms',
			available: 'No available rooms',
			date: ''
		}
	]);

	const handleAvailabilityChange = (index: number, value: string) => {
		const updatedSettings = [...roomSettings];
		updatedSettings[index].available = value;
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
									Current Availability: {room.available}
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
								<select
									value={room.available}
									onChange={e =>
										handleAvailabilityChange(index, e.target.value)
									}
									className='p-2 border rounded-md mt-1'
								>
									<option value='No available rooms'>
										No available rooms
									</option>
									<option value='1 available room'>
										1 available room
									</option>
									<option value='2 available rooms'>
										2 available rooms
									</option>
									<option value='3 available rooms'>
										3 available rooms
									</option>
									<option value='14 available rooms'>
										14 available rooms
									</option>
									<option value='Multiple rooms available'>
										Multiple rooms available
									</option>
								</select>
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
