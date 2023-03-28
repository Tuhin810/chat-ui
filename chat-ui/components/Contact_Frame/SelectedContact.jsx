import React from 'react'

function SelectedContact() {
  return (
    <div className='h-[69px] border-t-[1px] border-[#ffffff52] mb-3'>
    <div className='h-[60px] mt-6 pt-2 bg-[#B6FF9C] border-t-[1px] rounded-lg flex flex-row'>
        <div><img className='m-[6px] h-[35px] rounded-full w-[35px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg" alt="" />
        <div className='h-2 w-2  border-[1px] absolute rounded-full border-white bg-green-700 mt-[-13px] ml-[30px] '></div>
        </div>


<div className='detail'>
<div className="Name text-[11px] font-[700]  text-black">Shelby Goode</div>
<div className='w-[107px] h-[14px] text-[#052A42] text-[8px]'>Lorem Ipsum is simply dummy text of the printing </div>
      
    </div>
    
    <div className='text-[8px] text-[#052A42]'>1 min ago</div>
    </div></div>
  )
}

export default SelectedContact