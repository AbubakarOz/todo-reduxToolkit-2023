import React from "react";
import { useSelector } from "react-redux";
import Case from "./Сase";

const List = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="list">
      {todos.map((item, index) => {
        return (
          <Case
            key={index}
            text={item.text}
            favorite={item.favorite}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default List;
