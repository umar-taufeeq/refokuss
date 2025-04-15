import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({width,start,para,canHover}) => {
  return (
    <div  className={` bg-zinc-800 p-6 rounded-xl ${width}
    ${
        canHover ? "hover:bg-violet-400 hover:p-11" : "hover:p-11"
      }
       min-h-[25rem] flex flex-col justify-between `}>
       <div className='w-full'>
       <div className='w-full flex justify-between items-center'>
            <h3>one heading</h3>
            <FaArrowRightLong />
        </div>
        <h1 className='text-3xl font-medium mt-5'>whatever heading</h1>
       </div>
       <div className='down w-full'>
       {
        start  && (
            <>
            <h1 className='text-5xl font-semibold tracking-tight leading-none'>start a project</h1>
            <button className='rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50'>contact us</button>
            </>
        )
       }
       {
        para  && (
            <p className='text-xl text-zinc-500  font-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, blanditiis.</p>
        )
       }

       </div>
    </div>
  )
}

export default Card