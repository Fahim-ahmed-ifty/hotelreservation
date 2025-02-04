import React from 'react'

interface roomcardprops {
  text?: string;
  img?:string;
  imgalt?:string;
  details?:string;
}

const RoomCard = ({text,img,imgalt,details}:roomcardprops) => {
  return (
    <div className='w-[400px] h-[400px] p-6 bg-red-400 rounded-xl'>{text}</div>
  )
}

export default RoomCard