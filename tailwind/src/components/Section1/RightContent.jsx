import React from 'react'
import Cards from './Cards'

const RightContent = (props) => {
  return (
    <div id='right' className="h-[93%] w-2/3 flex gap-10 overflow-x-auto rounded-4xl">
      {props.users.map(function(elem, idx){
        return <Cards key = {idx} id = {idx} img = {elem.img} desc = {elem.desc} buttonColor = {elem.buttonColor} button = {elem.button}/>
      })}
    </div>
  )
}

export default RightContent
