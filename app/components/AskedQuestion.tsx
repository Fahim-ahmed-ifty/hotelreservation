import React from 'react';
import AskedqsnCard from './AskedqsnCard';

const AskedQuestion = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<p className='text-2xl font-bold flex justify-center items-center'>
				{' '}
				Most Asked Questions{' '}
			</p>
			<div className='mt-6'>
				<AskedqsnCard avatar='/deluxroom.jpg' name='ABC Company'/>
			</div>
		</div>
	);
};

export default AskedQuestion;
