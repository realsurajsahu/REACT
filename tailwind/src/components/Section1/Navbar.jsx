import React from 'react'
import { CornerDownRight } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='h-16 p-14 w-full flex items-center justify-between'>
      <h4 className='text-[1.55rem] font-semibold text-white px-5 py-2 rounded-full bg-black uppercase'>Target Audience</h4>
      <h1 className='flex text-[1rem] uppercase bg-gray-200 px-6 py-2 rounded-full tracking-widest'><CornerDownRight />   Digital Banking Platform</h1>
    </div>
  )
}

export default Navbar
