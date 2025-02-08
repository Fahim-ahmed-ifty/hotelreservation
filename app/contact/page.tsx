import React from 'react';
import ContactPageLeft from '../components/ContactPageLeft';
import ContactPageRight from '../components/ContactPageRight';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const page = () => {
	const locations = [
		{
			name: 'Hotel Grand',
			address: '123 Main St, City A',
			phone: '(123) 456-7890'
		},
		{
			name: 'Ocean View Resort',
			address: '456 Beach Rd, City B',
			phone: '(987) 654-3210'
		}
	];

	return (
		<div className='w-full h-full justify-between'>
			<Navbar />
			<div className='flex flex-row'>
				<div className='w-1/3 p-12'>
					<ContactPageLeft locations={locations} />
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
