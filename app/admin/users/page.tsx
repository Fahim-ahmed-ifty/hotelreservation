import { getUsers } from "@/actions/admin";
import AdminNavbar from "@/app/components/AdminNavbar";
import ClientSideActions from "@/app/components/ClientSideActions";

const Page = async () => {
  const users: User[] = await getUsers();

  return (
    <div className="w-full h-screen overflow-y-auto scrollbar p-6 bg-gray-100">
      <AdminNavbar />
      <h2 className="text-xl font-bold mb-4">Users and Admins List</h2>

      {/* Admins Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-2">Admins</h3>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) => user.role === "admin")
              .map((user) => (
                <tr key={user._id} className="border-b">
                  <td className="py-2 px-4">{user._id}</td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.role}</td>
                  <td className="py-2 px-4">
                    <ClientSideActions
                      userId={user._id}
                      currentRole={user.role}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Users Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Users</h3>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) => user.role === "user")
              .map((user) => (
                <tr key={user._id} className="border-b">
                  <td className="py-2 px-4">{user._id}</td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.role}</td>
                  <td className="py-2 px-4">
                    <ClientSideActions
                      userId={user._id}
                      currentRole={user.role}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
