import React from 'react';
import ContactPageLeft from '../components/ContactPageLeft';
import ContactPageRight from '../components/ContactPageRight';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const page = () => {
	return (
		<div>
			<Navbar />
			<div className='flex flex-row'>
				<div className='w-1/3'>
					<ContactPageLeft />
				</div>
				<div className='w-2/3'>
					<ContactPageRight />
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default page;
