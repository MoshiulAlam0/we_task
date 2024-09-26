import React from 'react'
import { RiGithubFill } from "react-icons/ri";


const Footer = () => {
  return (
    <div className='flex gap-8 items-center justify-center py-3 text-white '>
      <p className='cursor-pointer hover:opacity-100 opacity-40'><RiGithubFill/></p>
      <p className='text-[.7rem]  font-thin  tracking-[8px] opacity-40'>mosiul alam 0</p>
    </div>
  )
}

export default Footer
