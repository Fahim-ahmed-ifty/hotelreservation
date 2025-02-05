import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import RoomDetails from './RoomDetails';
import Footer from './Footer';

const Home = () => {
	return (
		<div className='w-screen h-screen overflow-y-auto scrollbar'>
			<Navbar />
			<Hero />
			<RoomDetails />
			<Footer />
		</div>
	);
};

export default Home;
