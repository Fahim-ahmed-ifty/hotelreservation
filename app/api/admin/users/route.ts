import { connectToDatabase } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection("users");
    const users = await usersCollection.find({}).toArray();

    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Unable to fetch users" }), {
      status: 500,
    });
  }
}
