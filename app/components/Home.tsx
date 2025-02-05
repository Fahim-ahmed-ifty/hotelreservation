import React from 'react';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import RoomDetails from './RoomDetails';

const Home = () => {
	return (
		<div className='w-full h-screen'>
			<Navbar />
			<Hero />
			<RoomDetails />
			<Footer />
		</div>
	);
};

export default Home;
