import React from 'react'

const Head = () => {
  return (
    <div className='flex items-center justify-between py-2 px-[4vmin]'>
      <h1 className='text-[1.2rem] text-white font-semibold'>We<span className='text-[#bda51b] font-light'>_</span>Todo</h1>
      <p className='text-white text-[1rem] font-light cursor-pointer hover:text-[#181C14] capitalize '>my todo</p>
    </div>
  )
}

export default Head
