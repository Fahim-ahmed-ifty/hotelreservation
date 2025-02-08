'use client';

import React, { useEffect, useState } from 'react';
import AskedqsnCard from './AskedqsnCard';

const AskedQuestion = () => {
	const questions = [
		{
			avatar: '/deluxroom.jpg',
			imageAlt: 'Question Card',
			name: 'ABC Hotel',
			qsn: 'How can I book a room at your hotel?',
			answer:
				'You can book a room through our official website, mobile app, or by calling our front desk. Simply choose your check-in and check-out dates, select your preferred room type, and complete the payment to confirm your booking.'
		},
		{
			avatar: '/deluxroom.jpg',
			imageAlt: 'Question Card',
			name: 'XYZ Resort',
			qsn: 'What is your cancellation policy?',
			answer:
				'Our cancellation policy varies depending on the type of booking. Generally, free cancellations are allowed up to 24 hours before check-in. Some non-refundable bookings may have stricter policies, so please check your reservation details for specifics.'
		}
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(
				prevIndex => (prevIndex + 1) % questions.length
			);
		}, 10000);
		return () => clearInterval(interval);
	}, [questions.length]);

	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<p className='text-2xl font-bold flex justify-center items-center'>
				Most Asked Questions
			</p>
			<div className='mt-6'>
				<AskedqsnCard
					avatar={questions[currentIndex].avatar}
					imageAlt={questions[currentIndex].imageAlt}
					name={questions[currentIndex].name}
					qsn={questions[currentIndex].qsn}
					answer={questions[currentIndex].answer}
				/>
			</div>
		</div>
	);
};

export default AskedQuestion;
