import React from 'react';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

interface Location {
	name: string;
	address: string;
	phone: string;
}

interface ContactPageLeftProps {
	locations: Location[];
}

const ContactPageLeft = ({ locations }: ContactPageLeftProps) => {
	return (
		<div className='p-6 mt-12 flex flex-col'>
			<h2 className='mt-12 flex justify-center items-center text-xl font-semibold mb-4 text-center sm:text-left'>
				Our Locations
			</h2>
			<ul className='space-y-4'>
				{locations.map((location, index) => (
					<li key={index} className='p-4 bg-white rounded-lg shadow'>
						<h3 className='text-lg font-bold flex items-center gap-2'>
							<FaMapMarkerAlt className='text-red-500' />{' '}
							{location.name}
						</h3>
						<p className='text-gray-700 mt-1 flex items-center gap-2'>
							<FaMapMarkerAlt className='text-blue-500' />{' '}
							{location.address}
						</p>
						<p className='text-gray-700 mt-1 flex items-center gap-2'>
							<FaPhone className='text-green-500' /> {location.phone}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ContactPageLeft;
