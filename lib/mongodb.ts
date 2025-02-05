import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
	throw new Error('❌ Please define the MONGODB_URI in .env.local');
}

const cached = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase(): Promise<mongoose.Connection> {
	if (cached.conn) return cached.conn;

	if (!cached.promise) {
		cached.promise = mongoose
			.connect(MONGODB_URI as string)
			.then(mongooseInstance => mongooseInstance.connection);
	}

	console.log('connected');

	cached.conn = await cached.promise;
	return cached.conn;
}
