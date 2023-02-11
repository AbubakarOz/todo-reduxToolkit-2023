import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deletTodo } from "../features/todoReducer";

const Сase = ({ text, favorite, id }) => {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch()

  const handleChange = () => {
    setCheck(!check)
  }

  const handleDelet = (id) => {
    dispatch(deletTodo(id))
  }

  return (
    <div className="case">
      {/* <label className="container"> */}
        <input checked="check" type="checkbox" onChange={handleChange} />
        {/* <div className={`favorite ${checked ? "checkmark" : ""}`}></div>
      </label> */}
      <div className={!check ? "content" : "checkedStayle"}>{text}</div>
      <AiFillDelete className="del" onClick={() => handleDelet(0)} />
    </div>
  );
};

export default Сase;
