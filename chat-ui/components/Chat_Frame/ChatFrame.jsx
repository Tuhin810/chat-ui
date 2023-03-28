import React from 'react'
import Cardhead from './Cardhead'
import Text from './Text'
import TextBox from './TextBox'

function Chat() {
  return (
    <div className='Rectangle box-border border-[0.8px] border-[#13374D] rounded-[10px] px-[20px] 
     w-[541px] h-[517px] left-[634px] top-[13%]'>
      <Cardhead/>
      <Text/>
      <TextBox/>
    </div>
  )
}

export default Chat