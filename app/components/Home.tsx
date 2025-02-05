import React from 'react';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import RoomDetails from './RoomDetails';
import Login from './login';
import Signup from './signup';

const Home = () => {
	return (
		<div className='w-screen h-screen overflow-y-auto scrollbar'>
			<Navbar />
			<Hero />
			<RoomDetails />
			<Footer />
			<Login />
			<Signup />
		</div>
	);
};

export default Home;
