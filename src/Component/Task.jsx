import React, { useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

const Task = ({name, time, date, id, isComplite}) => {
  const [through, setthrough] = useState(false);

  // const handelLineThrougth = () => {
  //   setthrough(!through);
  // };
  return (

    <div key={id} className="flex flex-col gap-2 px-4 py-3 bg-[#2a9d8f] mb-2 rounded-lg text-white">
      <div className="flex items-center justify-between w-full">
        <div className="text-box  flex gap-4 items-center justify-center">
          <input
            // onChange={handelLineThrougth}
            className="w-[16px] aspect-[1/2]"
            type="checkbox"
            name=""
            id=""
          />
          <p
            className={`text-[1.1rem] font-extralight ${
              isComplite && "line-through"
            }`}
          >
            {name}
          </p>
        </div>
        <div className="btn-con flex gap-4 text-[1.3rem]">
          <div className="hover:text-[#253669] cursor-pointer">
            <BiSolidEdit />
          </div>
          <div className="hover:text-[#c93030d2] cursor-pointer">
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
