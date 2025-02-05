import mongoose from 'mongoose';

// Declare global properties for mongoose connection
declare global {
	// eslint-disable-next-line no-var
	var mongoose: {
		conn: mongoose.Connection | null;
		promise: Promise<mongoose.Connection> | null;
	};
}

// Export an empty object to treat this file as a module
export {};
