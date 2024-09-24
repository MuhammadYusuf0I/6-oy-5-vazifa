import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";

function Card({ task, index, deleteTask }) {
  return (
    <div
      className="mx-auto flex justify-between px-5 py-5 rounded-xl text-white"
      style={{ width: "750px", backgroundColor: "#15101c" }}
    >
      <h1 className="text-2xl text-indigo-500">{task}</h1>

      <div className="px-3">
        <button>
          <AiOutlineCheck className="text-4xl mx-4 text-indigo-500/75" />
        </button>
        <button onClick={() => deleteTask(index)}>
          <MdOutlineDeleteOutline className="text-4xl text-indigo-500/75" />
        </button>
      </div>
    </div>
  );
}

export default Card;
