import React from 'react'

const Card = ({image, title}) => {
  return (
    <div className='flex pt-5 '>
        <div className='bg-slate-100 rounded-lg shadow-md inline-block h-[234px] pt-6 px-5 pb-[42px] relative align-top'>
            <div className='size-full flex text-center'>
                <img src={image} alt="" />
            </div>
            <div className='text-center font-bold text-base'>
                <p>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default Card