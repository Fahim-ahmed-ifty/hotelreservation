// app/api/admin/users/deleteUser/route.ts
import { NextRequest, NextResponse } from "next/server";
import { deleteUser } from "@/actions/admin"; // Import the deleteUser function

export async function DELETE(req: NextRequest) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { error: "userId is required" },
        { status: 400 }
      );
    }

    await deleteUser(userId); // Call the deleteUser function

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
