import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import RoomDetails from '../components/RoomDetails';

const page = () => {
	return (
		<div className='w-screen h-screen overflow-y-auto scrollbar'>
			<Navbar />
			<Hero />
			<RoomDetails />
			<Footer />
		</div>
	);
};

export default page;
