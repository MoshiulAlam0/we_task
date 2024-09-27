import React from 'react'

const Btn = ({addTodo, text}) => {
  return (
    <button
        onClick={addTodo}
        className="px-5 py-2 bg-[#00b4d8] w-[95vmin] rounded-md my-2 capitalize text-white"
      >
        {text}
    </button>
  )
}

export default Btn
