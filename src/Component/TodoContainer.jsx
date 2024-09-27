import React, { useState } from "react";

import nextId from "react-id-generator";

import Task from "./Task";

const TodoContainer = () => {
  const [fieldValue, setfieldValue] = useState("");

  const [todoData, settodoData] = useState([]);

  const handelChnage = (e) => {
    setfieldValue(e.target.value);
  };

  const addTodo =()=>{
    const dateTime = new Date()
    if(fieldValue!==''){
      let obj = new Object({
        id: nextId(),
        name: fieldValue,
        time: `${dateTime.getHours()}:${dateTime.getMinutes()} ${dateTime.getMinutes()<12?"AM":"PM"}`,
        date: dateTime.toDateString(),
        isComplite: false,
  
      })
      settodoData([...todoData, obj])
    }
    console.log(todoData)
  }

  return (
    <div className="flex flex-col items-center">
      <textarea
        onChange={handelChnage}
        value={fieldValue}
        name="text-field"
        className=" bg-[#10101163]  text-white w-[95vmin] p-2  h-[24vh] text-[1.3rem] rounded-md"
        placeholder="type your task..."
      ></textarea>
      <button onClick={addTodo} className="px-5 py-2 bg-[#00b4d8] w-[95vmin] rounded-md my-2 capitalize text-white">
        add task
      </button>
      <div key={'todo con'} className="task-con w-[95vmin] flex flex-col-reverse">
        {todoData.length> 0 ? todoData.map((e, i)=>{
          return <Task
            id={e.id}
            name={e.name}
            time={e.time}
            date={e.date}
            isComplite={e.isComplited}
          />
        }):<h1 className="text-center text-[#bababaa6]">add new task ..</h1>}
      </div>
    </div>
  );
};

export default TodoContainer;
