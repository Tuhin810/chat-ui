import React from 'react'
import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import { SwatchIcon } from "@heroicons/react/24/outline";
function Navbar() {
  return (
    <div className='h-5 md:h-10 w-full px-3 md:px-[7rem] flex items-center justify-center  mt-4 mb-3'>
      <div className=' flex-1 text-[12px] md:text-[20px] font-[700] text-[#B6FF9C] flex items-center gap-2'><SwatchIcon className="h-6 w-6  text-[#B6FF9C]" />dezenix</div>
      <div>ㅤ</div>
    </div>
  )
}

export default Navbar