'use client';

import { useRouter } from 'next/navigation';
import { FaCogs, FaUserShield } from 'react-icons/fa';
import Button from './Button';

const AdminNavbar = () => {
	const router = useRouter();

	const handleNavigation = (path: string) => {
		router.push(path);
	};

	return (
		<nav className='sticky top-4 z-50 mx-2'>
			<div className='w-full flex justify-between items-center py-3 px-8 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full shadow-lg text-white'>
				<div
					className='flex items-center text-2xl font-bold text-white cursor-pointer hover:text-yellow-300 transition duration-300'
					onClick={() => handleNavigation('/admin-dashboard')}
				>
					<FaUserShield className='mr-2 text-yellow-300' /> Admin
					Dashboard
				</div>
				<div className='flex space-x-6 text-lg font-medium'>
					{[
						{ name: 'Dashboard', path: '/admin-dashboard' },
						{ name: 'Users', path: '/admin/users' },
						{
							name: 'Rooms Settings',
							path: '/admin/settings',
							icon: <FaCogs className='mr-2' />
						},
						{ name: 'Reports', path: '/admin/reports' }
					].map(item => (
						<p
							key={item.path}
							className='relative flex items-center px-4 py-2 cursor-pointer transition duration-300 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-1 before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0'
							onClick={() => handleNavigation(item.path)}
						>
							{item.icon} {item.name}{' '}
						</p>
					))}
					<Button
						className='ml-6 px-6 py-2 rounded-full text-white bg-red-500 hover:bg-red-600 transition duration-300 shadow-md'
						text='Log Out'
						onClick={() => handleNavigation('/admin/login')}
					/>
				</div>
			</div>
		</nav>
	);
};

export default AdminNavbar;
