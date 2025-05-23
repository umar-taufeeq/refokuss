import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto px-20  py-20 flex gap-2'>
            <Card width={"basis-1/3"} start={false} para={true}/>
            <Card width={"basis-2/3"} start={true} para={false} canHover={true}/>
        </div>
    </div>
  )
}

export default Cards