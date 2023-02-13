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

  const handleCheck = (id) => {
    if (favorite) {
      setCheck(tru)
    }
    dispatch(changeTodo(id))
  }

  const handleDelet = (id) => {
    dispatch(deletTodo(id))
  }

  return (
    <div className="case">
      <label className="container">
        <input
          type="checkbox" 
          checked={check} 
          onChange={handleChange}
          onClick={() => handleCheck(e)}
         />
        <div className="checkmark"></div>
      </label>
      <div className={!favorite && !check ? "content" : "checkedStayle"}>{text}</div>
      <AiFillDelete className="del" onClick={() => handleDelet(0)} />
    </div>
  );
};

export default Сase;
