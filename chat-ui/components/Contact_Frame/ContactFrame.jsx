import React from 'react'
import Contacts from './Contacts'
import Header from './Header'
import Option from './Option'
import SelectedContact from './SelectedContact'

function Message() {
  return (
    <div className='Rec px-3 box-border border-[0.8px] border-[#13374D] rounded-[10px] w-[250px] h-[517px] left-[372px] top-[13%] '>
      <Header/>
    <Option/>
    <Contacts/>
    <Contacts/>

    <SelectedContact/>
    <Contacts/>
    <Contacts/>
    <Contacts/>
    
    </div>
  )
}

export default Message