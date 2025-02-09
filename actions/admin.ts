import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb"; // Import ObjectId from mongodb

// Fetch all users
export async function getUsers(): Promise<User[]> {
  const db = await connectToDatabase();
  const usersCollection = db.collection("users");

  const users = await usersCollection.find({}).toArray();

  // Ensure all required fields are included, and convert _id to string
  return users.map((user) => ({
    _id: user._id.toString(), // Convert MongoDB ObjectId to string
    name: user.name,
    email: user.email,
    role: user.role,
  }));
}

// Update user role
export async function updateUserRole(
  userId: string,
  newRole: string
): Promise<User> {
  const db = await connectToDatabase();
  const usersCollection = db.collection("users");

  // Convert string userId to ObjectId for MongoDB query
  const objectId = new ObjectId(userId);

  const result = await usersCollection.updateOne(
    { _id: objectId }, // Query with ObjectId
    { $set: { role: newRole } }
  );

  if (result.modifiedCount === 0) {
    throw new Error("No user found or role is the same");
  }

  // Return the updated user
  const updatedUser = await usersCollection.findOne({ _id: objectId });

  if (!updatedUser) {
    throw new Error("User not found after update");
  }

  return {
    _id: updatedUser._id.toString(),
    name: updatedUser.name,
    email: updatedUser.email,
    role: updatedUser.role,
  };
}

// Delete user
export async function deleteUser(userId: string): Promise<void> {
  const db = await connectToDatabase();
  const usersCollection = db.collection("users");

  // Convert string userId to ObjectId for MongoDB query
  const objectId = new ObjectId(userId);

  const result = await usersCollection.deleteOne({ _id: objectId });

  if (result.deletedCount === 0) {
    throw new Error("No user found to delete");
  }
}
