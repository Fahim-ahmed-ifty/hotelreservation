import React from 'react';
import Navbar from '../components/Navbar';
import RoomCard from '../components/RoomCard';

const page = () => {
	return (
		<div className=''>
			<Navbar />
			<div className='h-auto m-12 p-12 flex flex-col bg-blue-600 bg-opacity-20 rounded-3xl'>
				<div className='text-2xl font-bold flex justify-center items-center'>
					See Our Rooms
				</div>
				<div className='grid grid-cols-4 gap-4 mt-12'>
					<RoomCard
						text='Deluxe Rooms'
						img='/deluxroom.jpg'
						imgalt='image of room'
						details='Enjoy a spacious room with a king-sized bed, modern amenities, a stunning city view, and luxurious décor.'
						available='No available rooms'
					/>
					<RoomCard
						text='Premium Single Rooms'
						img='/singleroom.jpg'
						imgalt='image of room'
						details='Perfect for solo travelers. This cozy room offers a comfortable single bed, essential amenities, and a peaceful environment.'
						available='2 available rooms'
					/>
					<RoomCard
						text='Premium Double Rooms'
						img='/doubleroom.jpg'
						imgalt='image of room'
						details='Ideal for couples or friends, featuring two single beds, elegant décor, and all the comforts for a relaxing stay.'
						available='13 available rooms'
					/>
					<RoomCard
						text='Honeymoon Suites'
						img='/hms.jpg'
						imgalt='image of room'
						details='Celebrate your special occasion in our Honeymoon Suite. It includes a king-sized bed, a romantic ambiance, and a private balcony with a breathtaking view.'
						available='No available rooms'
					/>
					<RoomCard
						text='Premium Honeymoon Suites'
						img='/hms.jpg'
						imgalt='image of room'
						details='Celebrate your special occasion in our Honeymoon Suite. It includes a king-sized bed, a romantic ambiance, and a private balcony with a breathtaking view.'
						available='1 available rooms'
					/>
					<RoomCard
						text='Single Rooms'
						img='/hms.jpg'
						imgalt='image of room'
						details='Celebrate your special occasion in our Honeymoon Suite. It includes a king-sized bed, a romantic ambiance, and a private balcony with a breathtaking view.'
						available='1 available rooms'
					/>
					<RoomCard
						text='Double Rooms'
						img='/hms.jpg'
						imgalt='image of room'
						details='Celebrate your special occasion in our Honeymoon Suite. It includes a king-sized bed, a romantic ambiance, and a private balcony with a breathtaking view.'
						available='14 available rooms'
					/>
					<RoomCard
						text='Small Single Rooms'
						img='/hms.jpg'
						imgalt='image of room'
						details='Celebrate your special occasion in our Honeymoon Suite. It includes a king-sized bed, a romantic ambiance, and a private balcony with a breathtaking view.'
						available='7 available rooms'
					/>
				</div>
			</div>
		</div>
	);
};

export default page;
