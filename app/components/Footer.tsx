import React from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter
} from 'react-icons/fa';

const Footer = () => {
	return (
		<div className='w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-black py-8 shadow-[0_-6px_8px_rgba(1,1,1,0.25)]'>
			<div className='max-w-screen-xl mx-auto px-6'>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

					<div>
						<h3 className='text-xl font-semibold'>
							Zetta Reservation
						</h3>
						<p className='mt-2'>
							Your one-stop hotel booking solution.
						</p>
						<p className='mt-1'>123 Hotel St., City, Country</p>
						<p className='mt-1'>Phone: (123) 456-7890</p>
					</div>

					<div>
						<h3 className='text-xl font-semibold'>Quick Links</h3>
						<ul className='mt-2 space-y-2'>
							<li>
								<a
									href='/about'
									className='hover:text-gray-200 transition-all'
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href='/contact'
									className='hover:text-gray-200 transition-all'
								>
									Contact
								</a>
							</li>
							<li>
								<a
									href='/terms'
									className='hover:text-gray-200 transition-all'
								>
									Terms & Conditions
								</a>
							</li>
							<li>
								<a
									href='/privacy'
									className='hover:text-gray-200 transition-all'
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
								className='text-2xl hover:text-gray-200 transition-all'
							>
								<FaFacebook />
							</a>
							<a
								href='https://twitter.com'
								className='text-2xl hover:text-gray-200 transition-all'
							>
								<FaTwitter />
							</a>
							<a
								href='https://instagram.com'
								className='text-2xl hover:text-gray-200 transition-all'
							>
								<FaInstagram />
							</a>
							<a
								href='https://linkedin.com'
								className='text-2xl hover:text-gray-200 transition-all'
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
							className='p-2 rounded-md w-60 text-black'
						/>
						<button className='bg-blue-600 p-2 rounded-md text-white hover:bg-blue-500 transition-all'>
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
