import React from 'react'
import RoomCard from './RoomCard'

const RoomDetails = () => {
  return (
    <div className='w-full h-[500px] m-12 p-12 bg-indigo-700 grid grid-cols-4 gap-4'><RoomCard/> <RoomCard/> <RoomCard/> <RoomCard/></div>
  )
}

export default RoomDetails