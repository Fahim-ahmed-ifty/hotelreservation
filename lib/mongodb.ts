import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export const connectToDatabase = async () => {
	await client.connect();
	return client.db();
};
