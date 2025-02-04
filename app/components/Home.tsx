import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import RoomDetails from './RoomDetails';

const Home = () => {
	return (
		<div className='w-full h-screen'>
			<Navbar />
			<Hero />
			<RoomDetails/>
		</div>
	);
};

export default Home;
