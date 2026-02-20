import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Content = (props) => {
  return (
    <div className='flex h-[92.35%] px-14 py-10 justify-between items-center gap-10'>
      <LeftContent/>
      <RightContent users = {props.users}/>
    </div>
  )
}

export default Content
