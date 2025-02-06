import React from 'react';
import AboutUs from '../components/AboutUs';
import CustomerSay from '../components/CustomerSay';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Map from '../components/Map';
import Navbar from '../components/Navbar';
import RoomDetails from '../components/RoomDetails';

const page = () => {
	return (
		<div className='w-screen h-screen overflow-y-auto scrollbar'>
			<Navbar />
			<Hero />
			<AboutUs />
			<RoomDetails />
			<CustomerSay />
			<div className='m-12 p-12'>
				<h2 className='text-xl font-bold mb-4'>
					Our Location in Dhaka
				</h2>
				<Map pinned={[23.8103, 90.4125]} />
			</div>
			<Footer />
		</div>
	);
};

export default page;
