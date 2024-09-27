import React, { useRef, useState } from "react";

import nextId from "react-id-generator";

import Task from "./Task";
import Btn from "./Btn";

const TodoContainer = () => {
  const [fieldValue, setfieldValue] = useState("");
  const [isEdit, setisEdit] = useState(false);
  const [editCardInx, seteditCardInx] = useState(null);

  const fieldRef = useRef(null);

  const [todoData, settodoData] = useState([]);

  const handelChnage = (e) => {
    setfieldValue(e.target.value);
  };

  const addTodo = () => {
    const dateTime = new Date();
    if (fieldValue !== "") {
      let obj = new Object({
        id: nextId(),
        name: fieldValue,
        time: `${dateTime.getHours()}:${dateTime.getMinutes()} ${
          dateTime.getMinutes() < 12 ? "AM" : "PM"
        }`,
        date: dateTime.toDateString(),
        isComplite: false,
        isEdit: false,
      });
      settodoData([...todoData, obj]);
      setfieldValue("");
    }
  };

  const reSetTodo = () => {
    const dateTime = new Date();
    todoData[editCardInx].name = fieldValue;
    todoData[editCardInx].date = dateTime.toDateString();
    todoData[
      editCardInx
    ].time = `${dateTime.getHours()}:${dateTime.getMinutes()} ${
      dateTime.getMinutes() < 12 ? "AM" : "PM"
    }`;
    todoData[editCardInx].isEdit = false;


    const newArr = [...todoData];
    settodoData(newArr);
    setisEdit(false);
    setfieldValue("");

    fieldRef.current.blur()
  };

  return (
    <div className="flex flex-col items-center">
      <textarea
        ref={fieldRef}
        onChange={handelChnage}
        value={fieldValue}
        name="text-field"
        className=" bg-[#10101163]  text-white w-[95vmin] p-2  h-[24vh] text-[1.3rem] rounded-md"
        placeholder="type your task..."
      ></textarea>
      {!isEdit ? (
        <Btn addTodo={addTodo} text={"add task"} />
      ) : (
        <Btn addTodo={reSetTodo} text={"Re Set task"} />
      )}

      <div key={"todo"} className="task-con w-[95vmin] flex flex-col-reverse">
        {todoData.length > 0 ? (
          todoData.map((e, i) => {
            return (
              <Task
                cardBg={e.isEdit}
                fieldRef={fieldRef}
                edit={{ isEdit, setisEdit, seteditCardInx}}
                field={{ fieldValue, setfieldValue }}
                data={{ todoData, settodoData }}
                id={e.id}
                name={e.name}
                time={e.time}
                date={e.date}
                isComplite={e.isComplite}
              />
            );
          })
        ) : (
          <h1 className="text-center text-[#bababaa6]">add new task ..</h1>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
