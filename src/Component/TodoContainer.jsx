import React from 'react'
import Task from './Task'

const TodoContainer = () => {
  return (
    <div className='flex flex-col items-center'>
      <textarea name="text-field" className=' bg-[#10101163]  text-white w-[95vmin] p-2  h-[24vh] text-[1.3rem] rounded-md' placeholder='type your task...'></textarea>
      <button className='px-5 py-2 bg-[#00b4d8] w-[95vmin] rounded-md my-2 capitalize text-white'>add task</button>
      <div className="task-con w-[95vmin]">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  )
}

export default TodoContainer
