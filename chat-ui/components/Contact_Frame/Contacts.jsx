import React from 'react'

function Contacts() {
  return (
    <div className='h-[69px] px-1 py-2 border-t-[1px] border-[#ffffff52] pt-5 flex flex-row'>

      
      <div>
        {/* PROFILE IMAGE OF CONTACT */}
        <img className='m-[6px] h-[35px] rounded-full w-[35px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UTR40TNj3O9ch44YiAybjV5FoKVYuBOpXg" alt="" />
      <div className='h-2 w-2  border-[1px] absolute rounded-full border-white bg-green-700 mt-[-13px] ml-[30px] '></div>
      </div>


<div className='detail'>
<div className="Name text-[11px] font-[700]  text-white">Shelby Goode</div>
<div className='w-[107px] h-[14px] text-[#ffffff61] text-[8px]'>Lorem Ipsum is simply dummy text of the printing </div>
      
    </div>
    
    <div className='text-[8px] text-[#ffffffbe]'>1 min ago</div>
    </div>
  )
}

export default Contacts