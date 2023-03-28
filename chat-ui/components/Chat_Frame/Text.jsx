import React from 'react'
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
function Text() {
  return (
    <div>

{/* FIRST TEXT */}


        <div className="text_1  w-[402px]  top-[15%] flex flex-row ">
            <div  className=' w-10 '><img className='mt-[90px] h-7 w-7 mr-5 rounded-full flex bottom-1' src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" alt="" />
  </div>
        <div className='flex flex-col'>
             <div className='texts1  w-[171px] h-[41px] p-2 pl-4 border
         items-center flex text-white bg-[#052A42] border-1px 
         border-[#13374D] rounded-lg text-[11px] mb-2'>Lorem Ipsum is simply </div>
        
       
        <div className="texts2  w-[307px] h-[51px] p-2 pl-4 border
         items-center flex text-white bg-[#052A42] border-1px 
         border-[#13374D] rounded-lg text-[11px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         <div className='flex w-[70px] text-[8px] mb-[-17px]'>09:02 PM</div>
         </div>
        </div>
        <EllipsisHorizontalIcon className="h-5 w-5 text-gray-500 mt-[65px]" />
 </div>


 {/* IMAGE TEXT  */}

 <div className=" top-[35%] h-[116px]  left-[44%]  p-3  flex justify-end gap-4">


  <img className=' h-[116px] w-[130px] rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZ3KUJBqpbi9pHwj9-s8oHd-i7qJGoORMfw" alt="" />
    <img className='h-[116px] w-[130px] rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mEIWZjRFdiO4YIkq790lTaNzTtCH6DcwrQ" alt="" />

  
    
 </div>


{/* TEXT MSG 2 */}
<div className="text_1  w-[402px]  top-[15%] flex flex-row mt-7">
            <div  className=' w-10 '><img className='mt-[90px] h-7 w-7 mr-5 rounded-full flex bottom-1' src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" alt="" />
  </div>
        <div className='flex flex-col'>
             <div className='texts1  w-[171px] h-[41px] p-2 pl-4 border
         items-center flex text-white bg-[#052A42] border-1px 
         border-[#13374D] rounded-lg text-[11px] mb-2'>Lorem Ipsum is simply </div>
        
       
        <div className="texts2  w-[307px] h-[51px] p-2 pl-4 border
         items-center flex text-white bg-[#052A42] border-1px 
         border-[#13374D] rounded-lg text-[11px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         <div className='flex w-[70px] text-[8px] mb-[-17px]'>09:02 PM</div>
         </div>
        </div>
        <EllipsisHorizontalIcon className="h-5 w-5 text-gray-500 mt-[65px]" />
 </div>



         </div>





  
  )
}

export default Text