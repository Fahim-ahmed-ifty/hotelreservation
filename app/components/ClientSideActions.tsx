"use client"; // This ensures the component runs on the client side

import { useState } from "react";

interface ClientSideActionsProps {
  userId: string;
  currentRole: string;
}

const ClientSideActions: React.FC<ClientSideActionsProps> = ({
  userId,
  currentRole,
}) => {
  const [loading, setLoading] = useState(false);

  const handleEditRole = async (userId: string, newRole: string) => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/users/updateUserRole", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, newRole }),
      });

      if (!response.ok) {
        const errorMessage = await response.json(); // Parse the JSON error message
        console.error("Error Response:", errorMessage);
        throw new Error(
          `Failed to update user role: ${errorMessage.error || "Unknown error"}`
        );
      }

      const updatedUser = await response.json();
      console.log("Updated user role:", updatedUser);
      // Optionally, handle state update here
    } catch (error) {
      console.error("Error updating role:", error);
      alert(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/users/deleteUser", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      // Check if the response is not OK
      if (!response.ok) {
        const errorText = await response.text(); // Get the raw text (HTML or error message)
        console.error("Error Response:", errorText);
        throw new Error(`Failed to delete user: ${errorText}`);
      }

      const result = await response.json(); // Try to parse the JSON response
      console.log("User deleted:", result);
    } catch (error) {
      console.error("Error deleting user:", error);
      alert(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {currentRole === "user" ? (
        <button
          className="text-blue-500"
          onClick={() => handleEditRole(userId, "admin")}
          disabled={loading}
        >
          Promote to Admin
        </button>
      ) : (
        <button
          className="text-blue-500"
          onClick={() => handleEditRole(userId, "user")}
          disabled={loading}
        >
          Promote to User
        </button>
      )}
      <button
        className="text-red-500 ml-4"
        onClick={handleDeleteUser}
        disabled={loading}
      >
        Delete
      </button>
    </div>
  );
};

export default ClientSideActions;
