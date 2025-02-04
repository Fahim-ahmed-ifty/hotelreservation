import React from "react";
import RoomCard from "./RoomCard";

const RoomDetails = () => {
  return (
    <div className="w-full h-[600px] m-12 p-12 flex flex-col">
      <div className="text-2xl font-bold flex justify-center items-center">
        See Our Rooms
      </div>
      <div className="grid grid-cols-4 gap-4 mt-12">
        <RoomCard text="Delux Room" img="/deluxroom.jpg" />
        <RoomCard text="Delux Room" img="/deluxroom.jpg" />
        <RoomCard text="Delux Room" img="/deluxroom.jpg" />
        <RoomCard text="Delux Room" img="/deluxroom.jpg" />
      </div>
    </div>
  );
};

export default RoomDetails;
