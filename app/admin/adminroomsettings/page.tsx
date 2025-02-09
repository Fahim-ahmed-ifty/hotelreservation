"use client";

import AdminNavbar from "@/app/components/AdminNavbar";
import Button from "@/app/components/Button";
import React, { useState, useEffect } from "react";

const RoomSettingsPage = () => {
  const [roomTypes, setRoomTypes] = useState<string[]>([]);
  const [newRoomType, setNewRoomType] = useState("");
  const [roomSettings, setRoomSettings] = useState<
    { roomType: string; availability: { date: string; available: number }[] }[]
  >([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [availability, setAvailability] = useState(0);
  const [date, setDate] = useState("");

  useEffect(() => {
    const savedRooms = JSON.parse(localStorage.getItem("roomTypes") || "[]");
    const savedSettings = JSON.parse(
      localStorage.getItem("roomSettings") || "[]"
    );
    setRoomTypes(savedRooms);
    setRoomSettings(savedSettings);
  }, []);

  useEffect(() => {
    localStorage.setItem("roomTypes", JSON.stringify(roomTypes));
  }, [roomTypes]);

  useEffect(() => {
    localStorage.setItem("roomSettings", JSON.stringify(roomSettings));
  }, [roomSettings]);

  const handleAddRoomType = () => {
    if (newRoomType && !roomTypes.includes(newRoomType)) {
      setRoomTypes([...roomTypes, newRoomType]);
      setNewRoomType("");
    }
  };

  const handleSaveAvailability = () => {
    if (selectedRoom && date) {
      const updatedSettings = [...roomSettings];
      const roomIndex = updatedSettings.findIndex(
        (room) => room.roomType === selectedRoom
      );
      const today = new Date().toISOString().split("T")[0];

      if (roomIndex !== -1) {
        const dateIndex = updatedSettings[roomIndex].availability.findIndex(
          (entry) => entry.date === date
        );

        if (dateIndex !== -1) {
          updatedSettings[roomIndex].availability[dateIndex].available =
            availability;
        } else {
          updatedSettings[roomIndex].availability.push({
            date,
            available: availability,
          });
        }
      } else {
        updatedSettings.push({
          roomType: selectedRoom,
          availability: [{ date, available: availability }],
        });
      }

      setRoomSettings(updatedSettings);
      setAvailability(0);
      setDate("");
      setSelectedRoom("");
    }
  };

  const handleDeleteAvailability = (roomType: string, date: string) => {
    const updatedSettings = roomSettings.map((room) => {
      if (room.roomType === roomType) {
        return {
          ...room,
          availability: room.availability.filter(
            (entry) => entry.date !== date
          ),
        };
      }
      return room;
    });

    setRoomSettings(updatedSettings);
  };

  return (
    <div className="w-screen h-screen overflow-y-auto p-6">
      <AdminNavbar />
      <div className="text-2xl font-bold mb-4">Room Settings</div>

      <div className="mb-6 p-4 border rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Add Room Type</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={newRoomType}
            onChange={(e) => setNewRoomType(e.target.value)}
            className="p-2 border rounded-md w-full"
            placeholder="Enter room type"
          />
          <Button
            text="Add"
            onClick={handleAddRoomType}
            bgColor="bg-blue-500"
          />
        </div>
      </div>

      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Set Room Availability</h2>
        <div className="flex flex-col gap-4">
          <select
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="">Select Room Type</option>
            {roomTypes.map((room, index) => (
              <option key={index} value={room}>
                {room}
              </option>
            ))}
          </select>

          <input
            type="number"
            value={availability}
            onChange={(e) => setAvailability(Number(e.target.value))}
            className="p-2 border rounded-md"
            placeholder="Enter available rooms"
            min={0}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border rounded-md"
          />

          <Button
            text="Save"
            onClick={handleSaveAvailability}
            bgColor="bg-green-500"
          />
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Room Availability List</h2>
        <div className="space-y-2">
          {roomSettings.length > 0 ? (
            roomSettings.map((room, index) => (
              <div key={index} className="p-4 border rounded-md shadow-md">
                <div className="font-semibold">{room.roomType}</div>
                {room.availability
                  .filter(
                    (entry) =>
                      entry.date >= new Date().toISOString().split("T")[0]
                  )
                  .map((entry, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center text-gray-500"
                    >
                      <div>
                        Date: {entry.date}, Available: {entry.available} rooms
                      </div>
                      <Button
                        text="Delete"
                        onClick={() =>
                          handleDeleteAvailability(room.roomType, entry.date)
                        }
                        bgColor="bg-red-500"
                        className="ml-4"
                      />
                    </div>
                  ))}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No room settings available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomSettingsPage;
