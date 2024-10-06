import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Task = ({
  name,
  time,
  date,
  id,
  isComplite,
  data,
  field,
  edit,
  fieldRef,
  cardBg,
}) => {
  const handelLineThrougth = (cardId) => {
    // findIdex  ar kaj holo je direct array ar item ar index ta ber kore dey .
    const cardIndex = data.todoData.findIndex((itm) => itm.id === cardId);

    // jodi true hoi tobe false and false hole true .
    //  way:1
    // data.todoData[cardIndex].isComplite
    //   ? (data.todoData[cardIndex].isComplite = false)
    //   : (data.todoData[cardIndex].isComplite = true);

    // way: 2
    data.todoData[cardIndex].isComplite = !data.todoData[cardIndex].isComplite;

    // jeheto directly kono  value ke set korte parina react ar vitore .
    const newData = [...data.todoData];

    // tai noton kore set  korte hobe .
    data.settodoData(newData);
  };

  const handelDelete = (cardId) => {
    edit.setisEdit(false);
    const cardIndex = data.todoData.findIndex((itm) => itm.id === cardId);
    data.todoData.splice(cardIndex, 1); // splice ar kaj holo je splice(startIndex, jekoita_katte_chai)
    const newArr = [...data.todoData];
    data.settodoData(newArr);
  };

  const handelEdit = (cardId) => {
    const cardInx = data.todoData.findIndex((item) => item.id === cardId);
    field.setfieldValue(data.todoData[cardInx].name);
    data.todoData[cardInx].isEdit = true;

    const newArr = [...data.todoData];
    data.settodoData(newArr);

    edit.setisEdit(true);
    edit.seteditCardInx(cardInx);
    fieldRef.current.focus();
  };

  return (
    <div
      key={id}
      className={`flex flex-col gap-2 px-4 py-3 ${
        cardBg ? "bg-[#51a852]" : "bg-[#2a9d8f]"
      }  mb-2 rounded-lg text-white`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="text-box  flex gap-4 items-center justify-center">
          <input
            onChange={() => handelLineThrougth(id)}
            className="w-[16px] aspect-[1/2]"
            type="checkbox"
            name=""
            id=""
          />

          <p
            className={`text-[1.1rem] font-extralight ${
              isComplite && "line-through"
            } ${isComplite && "text-[#000000]"} `}
          >
            {name}
          </p>
        </div>
        <div className="btn-con flex gap-4 text-[1.3rem]">
          <div
            onClick={() => handelEdit(id)}
            className="hover:text-[#253669] cursor-pointer"
          >
            <BiSolidEdit />
          </div>
          <div
            onClick={() => handelDelete(id)}
            className="hover:text-[#c93030d2] cursor-pointer"
          >
            <MdDelete />
          </div>
        </div>
      </div>
      <div className="timeanddate flex items-center justify-end gap-4 text-[.8rem] text-[#eeeeee]">
        <p>{time}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Task;


// it's my second todo app 