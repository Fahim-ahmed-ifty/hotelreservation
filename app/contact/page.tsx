import React from 'react';
import ContactPage from '../components/ContactPage';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const page = () => {
	return (
		<div>
			<Navbar />
			<ContactPage />
			<Footer />
		</div>
	);
};

export default page;
