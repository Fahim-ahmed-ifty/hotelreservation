// app/api/admin/users/updateUserRole/route.ts

import { NextRequest, NextResponse } from "next/server";
import { updateUserRole } from "@/actions/admin"; // Your MongoDB operation

export async function POST(req: NextRequest) {
  try {
    const { userId, newRole } = await req.json(); // Parse JSON from request body

    if (!userId || !newRole) {
      return NextResponse.json(
        { error: "userId and newRole are required" },
        { status: 400 }
      );
    }

    const updatedUser = await updateUserRole(userId, newRole); // Update the role in the DB

    return NextResponse.json(updatedUser, { status: 200 }); // Return updated user data
  } catch (error) {
    console.error("Error updating user role:", error); // Log the error to the console
    return NextResponse.json({ error: { error } }, { status: 500 }); // Return error message with a 500 status
  }
}
