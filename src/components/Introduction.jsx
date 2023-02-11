import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoReducer";

const Introduction = () => {
  const [inputText, setinputText] = useState("");
  const dispatch = useDispatch();

  const hendleKeyPress = (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      handleAdd();
    }
  };

  const handleAdd = () => {
    if (inputText === "" ) {

    }
    dispatch(addTodo(inputText));
    setinputText("");
  };

  return (
    <div className="inputField">
      <input
        type="text"
        placeholder="введите текст ...."
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
        onKeyPress={(e) => hendleKeyPress(e)}
      />
      <button onClick={handleAdd} className="add">
        <span className="button_top"> Добавить </span>
      </button>
    </div>
  );
};

export default Introduction;
