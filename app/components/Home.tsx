import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';

const Home = () => {
	return (
		<div className='w-full h-screen'>
			<Navbar />
			<Hero />
		</div>
	);
};

export default Home;
