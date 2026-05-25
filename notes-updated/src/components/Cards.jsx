import React from "react";
import { IoClose } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Cards = ({ data }) => {
  return (
    <div className="shrink-0 w-55 h-72 rounded-4xl bg-zinc-900/90 text-white p-5 relative overflow-hidden">
      <FaRegFileAlt />
      <p className="mt-5 font-semibold leading-tight">{data.desc}</p>

      <div className="footer absolute w-full left-0 bottom-0">
        <div className="w-full bottom-0 h-10 px-6 py-6 flex justify-between items-center mb-4">
          <div>
            <h5>{data.size}</h5>
          </div>
          <div className="w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center">
            {data.close ? <IoClose /> : <FaArrowDown />}
          </div>
        </div>
        {data.tag.isOpen ? (
          <div
            className={`tag flex justify-center items-center p-3 bg-${data.tag.tagColor}-600 font-semibold`}
          >
            <h3>{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cards;
