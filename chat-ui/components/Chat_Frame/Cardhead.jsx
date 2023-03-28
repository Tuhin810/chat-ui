import React from 'react'
import { PhoneIcon } from "@heroicons/react/24/outline";
import { VideoCameraIcon } from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

function Cardhead() {
  return (
    <div className='card_head items-center flex h-[44px] w-[501px] top-[2%]'>
      <div className=''>
         <img className='h-7 w-7 mr-3 rounded-full' src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" alt="" />
        <div className='h-2 w-2  border-[1px] absolute rounded-full border-white bg-green-700 mt-[-6px] ml-[20px] '></div>
      </div>
       
        <div className='flex flex-col flex-1'>
            <h6 className='text-[14px] text-white font-[700]'>John Carlio</h6>
            <p className='text-white opacity-50 text-[10px]'>Online</p>
        </div>
        <div className='flex gap-2'>
            <div className="icon_1 bg-[#052A42] p-2 rounded-full"><PhoneIcon className="h-3 w-3 text-[#B6FF9C]" /></div>
            <div className="icon_2 bg-[#052A42] p-2 rounded-full"><VideoCameraIcon className="h-3 w-3 text-[#B6FF9C]" /></div>
            <div className="icon_3 bg-[#052A42] p-2 rounded-full"><EllipsisVerticalIcon className="h-3 w-3 text-[#B6FF9C]" /></div>

        </div>
    </div>
  )
}

export default Cardhead