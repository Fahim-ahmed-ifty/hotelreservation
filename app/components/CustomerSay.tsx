import React from 'react';
import CustomerSayCard from './CustomerSayCard';

const CustomerSay = () => {
	return (
		<div className='h-auto m-12 p-12 flex flex-col bg-blue-600 bg-opacity-20 rounded-3xl'>
			<div className='text-2xl font-bold flex justify-center items-center'>
				What Customer Say About Us
			</div>
			<div className='mt-6 flex flex-wrap justify-center gap-6'>
				<CustomerSayCard
					avatar='/deluxroom.jpg'
					imageAlt='Customer Image'
					comment='Great service! Highly recommended.'
					rating={5}
				/>
				<CustomerSayCard
					avatar='/deluxroom.jpg'
					imageAlt='Another Customer'
					comment='Amazing experience, will come back again!'
					rating={4}
				/>
				<CustomerSayCard
					avatar='/singleroom.jpg'
					imageAlt='Another Customer'
					comment='Amazing experience, will come back again!'
					rating={5}
				/>
			</div>
		</div>
	);
};

export default CustomerSay;
