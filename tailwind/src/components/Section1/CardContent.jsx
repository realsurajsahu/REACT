import React from 'react'
import { ArrowRight } from 'lucide-react';

const CardContent = (props) => {
  return (
      <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
        <h1 className="bg-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-xl">{props.id+1}</h1>
        <div className="flex flex-col gap-20">
        <p className="text-2xl text-white">
          {props.desc}
        </p>
        <div className="flex items-center justify-between">
          <button style={{backgroundColor:props.buttonColor}} className=" p-3 px-10 mb-5 text-white font-semibold rounded-full">{props.button}</button>
          <button style={{backgroundColor:props.buttonColor}} className=" p-3 px-3 mb-5 text-white font-semibold rounded-full"><ArrowRight /></button>
        </div>
        </div>
      </div>
  )
}

export default CardContent
