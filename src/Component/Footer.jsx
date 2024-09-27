import React from 'react'
import { RiGithubFill } from "react-icons/ri";


const Footer = () => {
  return (
    <div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-8 items-center justify-center  text-white '>
      <p className='cursor-pointer hover:opacity-100 opacity-40'><RiGithubFill/></p>
      <p className='text-[.7rem]  font-thin  tracking-[8px] opacity-40'>mosiul alam 0</p>
    </div>
  )
}

export default Footer
