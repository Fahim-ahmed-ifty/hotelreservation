import React from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter
} from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='w-full bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 text-gray-800 py-8 shadow-md'>
			<div className='max-w-screen-xl mx-auto px-6'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					<div>
						<h3 className='text-xl font-semibold'>
							Zetta Reservation
						</h3>
						<p className='mt-1'>
							Your one-stop hotel booking solution.
						</p>
						<p className='mt-2'>
							House 18, Road 02, Green City Housing, Mohammadpur,
							Dhaka-1207
						</p>
						<p className='mt-1'>Phone: +8801621843514</p>
					</div>

					<div>
						<h3 className='text-xl font-semibold'>Quick Links</h3>
						<ul className='mt-2 space-y-2'>
							<li>
								<a
									href='/about'
									className='hover:text-gray-500 transition-all'
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href='/contact'
									className='hover:text-gray-500 transition-all'
								>
									Contact
								</a>
							</li>
							<li>
								<a
									href='/terms'
									className='hover:text-gray-500 transition-all'
								>
									Terms & Conditions
								</a>
							</li>
							<li>
								<a
									href='/privacy'
									className='hover:text-gray-500 transition-all'
								>
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-xl font-semibold'>Follow Us</h3>
						<div className='flex space-x-4 mt-2'>
							<a
								href='https://facebook.com'
								className='text-2xl hover:text-gray-500 transition-all'
							>
								<FaFacebook />
							</a>
							<a
								href='https://twitter.com'
								className='text-2xl hover:text-gray-500 transition-all'
							>
								<FaTwitter />
							</a>
							<a
								href='https://instagram.com'
								className='text-2xl hover:text-gray-500 transition-all'
							>
								<FaInstagram />
							</a>
							<a
								href='https://linkedin.com'
								className='text-2xl hover:text-gray-500 transition-all'
							>
								<FaLinkedin />
							</a>
						</div>
					</div>
				</div>

				<div className='mt-8 text-center'>
					<h3 className='text-xl font-semibold'>
						Subscribe to our Newsletter
					</h3>
					<div className='flex justify-center items-center mt-2 space-x-2'>
						<input
							type='email'
							placeholder='Enter your email'
							className='p-2 rounded-md w-60 text-gray-800'
						/>
						<button className='bg-gray-700 p-2 rounded-md text-white hover:bg-gray-600 transition-all'>
							Subscribe
						</button>
					</div>
				</div>
			</div>
			<div className='mt-8 text-center text-sm'>
				<p>&copy; 2025 Fahim Ahmed Ifty. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
