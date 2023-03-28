import React from 'react'
import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import { SwatchIcon } from "@heroicons/react/24/outline";
function Navbar() {
  return (
    <div className='h-10 w-full px-[7rem] flex items-center justify-center  mt-4'>
      <div className='flex-1 text-[20px] font-[700] text-[#B6FF9C] flex items-center gap-2'><SwatchIcon className="h-6 w-6  text-[#B6FF9C]" />dezenix</div>
      <div>
        <button className='mr-5 flex items-center rounded-md gap-1 h-8 w-[7rem] bg-[#B6FF9C] text-[15px] px-3'>Add Task<DocumentPlusIcon className="h-4 w-4 text-gray-500" /></button>
        
      </div>
      <div>
      <img className='h-7 w-7 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuI523Y_fNtlpuhBkyKKNJMUvc1KXNQGQorg" alt="" />
      </div>
    </div>
  )
}

export default Navbar