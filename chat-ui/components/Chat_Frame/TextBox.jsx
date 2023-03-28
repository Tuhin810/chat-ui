import React from 'react'
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

function TextBox() {
  return (
    
    <div className="tect_rec border-box mt-7 rounded-lg bottom-[2%] h-[40px] bg-[#052A42]"><div className='text_box flex items-center px-5 w-[504px] h-[40px]'>
        <div className="ic_1">
<AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-500" /></div>
<div className="input mx-1 border-l-2 px-5 flex-1 text-[11px]"><input type="text" placeholder='Type a message...' /></div>
<div className="ico2 mx-2"><FaceSmileIcon className="h-5 w-5 text-gray-500" /></div>
<div className="ico3"><PaperAirplaneIcon className="h-5 w-5 text-gray-500" /></div>
    </div>
    
    </div>
  )
}

export default TextBox