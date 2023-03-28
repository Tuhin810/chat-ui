import React from 'react'
import SidebarBtn from './SidebarBtn'
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FolderPlusIcon } from "@heroicons/react/24/outline";
import { BoltIcon } from "@heroicons/react/24/outline";
import { FolderMinusIcon } from "@heroicons/react/24/outline";
import { FolderOpenIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/outline";

function Sidebar() {
  return (
    <div className='sidebar flex flex-col gap-2 mr-9  px-3 box-border w-[130px] h-[417px] left-[192px] top-[11%]'>

<div className={`sidebtn h-[77px] rounded-[12px] w-[124px]  flex gap-1 items-center justify-start `}>
        <div className='text-[14px] font-[700] gap-3 pl-3 text-white flex items-center justify-start'>
            <ArchiveBoxIcon className={`h-4 w-4 text-[#B6FF9C]`} />
            <div className='text-[11px] w-[70px]'>My task</div></div>
    </div>



{/* INACTIVE BTNS */}
    <div className={` h-[74px] rounded-[17px] flex gap-2 items-center justify-start `}>
        <div className='text-[14px] font-[700] gap-3 pl-3 text-gray-500 flex items-center justify-start'>
        <EnvelopeIcon className="h-4 w-4 text-gray-500" />
            <div className='text-[11px] w-[70px]'>Inbox</div></div>
    </div>

    {/* INACTIVE BTNS */}
    <div className={` h-[74px] rounded-[17px] flex gap-2 items-center justify-start `}>
        <div className='text-[14px] font-[700] gap-3 pl-3 text-gray-500 flex items-center justify-start'>
        <FolderPlusIcon className="h-4 w-4 text-gray-500" />
            <div className='text-[11px] w-[70px]'>Project</div></div>
    </div>

    {/* INACTIVE BTNS */}
    <div className={` h-[74px] rounded-[17px] flex gap-2 items-center justify-start `}>
        <div className='text-[14px] font-[700] gap-3 pl-3 text-gray-500 flex items-center justify-start'>
        <BoltIcon className="h-4 w-4 text-gray-500" />
            <div className='text-[11px] w-[70px]'>Integration</div></div>
    </div>

    {/* INACTIVE BTNS */}
    <div className={` h-[74px] rounded-[17px] flex gap-2 items-center justify-start `}>
        <div className='text-[14px] font-[700] gap-3 pl-3 text-gray-500 flex items-center justify-start'>
        <FolderMinusIcon className="h-4 w-4 text-gray-500" />
            <div className='text-[11px] w-[70px]'>Billing</div></div>
    </div>

    {/* INACTIVE BTNS */}
    <div className={` h-[74px]  rounded-[17px] flex gap-2 items-center justify-start `}>
        <div className='text-[14px] font-[700] gap-3 pl-3 text-gray-500 flex items-center justify-start'>
        <FolderOpenIcon className="h-4 w-4 text-gray-500" />
            <div className='text-[11px] w-[70px]'>Brand Assets</div></div>
    </div>

    {/* INACTIVE BTNS */}
    <div className={` h-[74px] rounded-[17px] flex gap-2 items-center justify-start `}>
        <div className='text-[14px] font-[700] gap-3 pl-3 text-gray-500 flex items-center justify-start'>
        <BellIcon className="h-4 w-4 text-gray-500" />
            <div className='text-[11px] w-[70px]'>Notifications</div></div>
    </div>


 {/* INACTIVE BTNS */}
 <div className={` h-[74px] rounded-[17px] flex gap-2 items-center justify-start `}>
        <div className='text-[14px] font-[700] gap-3 pl-3 text-gray-500 flex items-center justify-start'>
        <UserPlusIcon className="h-4 w-4 text-gray-500" />
            <div className='text-[11px] w-[70px]'>Referral</div></div>
    </div>
   

    </div>
  )
}

export default Sidebar