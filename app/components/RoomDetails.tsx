import React from "react";
import RoomCard from "./RoomCard";

const RoomDetails = () => {
  return (
    <div className="h-auto m-12 p-12 flex flex-col">
      <div className="text-2xl font-bold flex justify-center items-center">
        See Our Rooms
      </div>
      <div className="grid grid-cols-4 gap-4 mt-12">
        <RoomCard
          text="Deluxe Room"
          img="/deluxroom.jpg"
          imgalt="image of room"
          details="Enjoy a spacious room with a king-sized bed, modern amenities, a stunning city view, and luxurious décor."
        />
        <RoomCard
          text="Single Room"
          img="/singleroom.jpg"
          imgalt="image of room"
          details="Perfect for solo travelers. This cozy room offers a comfortable single bed, essential amenities, and a peaceful environment."
        />
        <RoomCard
          text="Double Room"
          img="/doubleroom.jpg"
          imgalt="image of room"
          details="Ideal for couples or friends, featuring two single beds, elegant décor, and all the comforts for a relaxing stay."
        />
        <RoomCard
          text="Honeymoon Suite"
          img="/hms.jpg"
          imgalt="image of room"
          details="Celebrate your special occasion in our Honeymoon Suite. It includes a king-sized bed, a romantic ambiance, and a private balcony with a breathtaking view."
        />
      </div>
    </div>
  );
};

export default RoomDetails;
