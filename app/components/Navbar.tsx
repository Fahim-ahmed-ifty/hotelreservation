import React from 'react';

const Navbar = () => {
	return (
		<div className='w-full border-b-2 shadow-xl '>
			<div className='m-6 flex flex-row'>
				<div className='w-3/4 font-bold'>Zetta Reservation</div>
				<div className='w-1/4 flex flex-row gap-6 font-semibold'>
					<p>Home</p>
					<p>Rooms</p>
					<p>Contact US</p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
