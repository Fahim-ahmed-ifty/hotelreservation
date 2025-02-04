import Image from 'next/image';
import React from 'react'

interface roomcardprops {
  text?: string;
  img:string;
  imgalt?:string;
  details?:string;
}

const RoomCard = ({text,img,imgalt,details}:roomcardprops) => {
  return (
    <div className='w-[400px] h-[400px] p-6 bg-red-400 rounded-xl'>
      <Image className='w-[350px] h-[200px] bg-red-500 rounded-lg' src={img} alt='images of room' width={350} height={200}/>
        
        <div className='mt-2 font-semibold'>
          {text}</div></div>
  )
}

export default RoomCard