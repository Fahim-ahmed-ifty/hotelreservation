"use client";

import React, { useState, useEffect } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AdminDashboardPage = () => {
  const [roomData, setRoomData] = useState({
    totalRooms: 100,
    availableRooms: 65,
    bookedRooms: 35,
  });

  const [percentageAvailable, setPercentageAvailable] = useState(
    (roomData.availableRooms / roomData.totalRooms) * 100
  );

  useEffect(() => {
    setPercentageAvailable(
      (roomData.availableRooms / roomData.totalRooms) * 100
    );
  }, [roomData]);

  return (
    <div className="w-screen h-screen overflow-y-auto scrollbar p-6 bg-gray-100">
      <AdminNavbar />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-3xl font-bold mb-8 text-center">
          Welcome to the Admin Dashboard
        </div>

        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="relative w-72 h-72">
            <CircularProgressbar
              value={percentageAvailable}
              text={`${Math.round(percentageAvailable)}%`}
              strokeWidth={12}
              className="w-full h-full"
              styles={{
                path: {
                  stroke: "#4caf50",
                },
                text: {
                  fill: "#333",
                  fontSize: "30px",
                  fontWeight: "bold",
                },
                trail: {
                  stroke: "#e0e0e0",
                },
              }}
            />
          </div>

          <div className="grid grid-cols-3 gap-8 w-full max-w-4xl">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-xl font-semibold text-gray-700">
                Total Rooms
              </div>
              <div className="text-4xl font-bold text-blue-600">
                {roomData.totalRooms}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-xl font-semibold text-gray-700">
                Available Rooms
              </div>
              <div className="text-4xl font-bold text-green-600">
                {roomData.availableRooms}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-xl font-semibold text-gray-700">
                Booked Rooms
              </div>
              <div className="text-4xl font-bold text-red-600">
                {roomData.bookedRooms}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex gap-6">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            View Room Settings
          </button>
          <button className="px-6 py-3 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition">
            Manage Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
