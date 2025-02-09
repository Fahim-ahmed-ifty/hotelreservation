import AdminNavbar from "@/app/components/AdminNavbar";
import React from "react";

async function getUsers(): Promise<User[]> {
  try {
    const res = await fetch("http://localhost:3000/api/admin/users");
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    const users = await res.json();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

const Page = async () => {
  const users: User[] = await getUsers();

  return (
    <div className="w-full h-screen overflow-y-auto scrollbar p-6 bg-gray-100">
      <AdminNavbar />
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {users.length > 0 ? (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b">
                  <td className="py-2 px-4">{user._id}</td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
