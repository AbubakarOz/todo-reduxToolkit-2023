import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      text: "Game loading",
      favorite: false,
      id: 0,
    },
    {
      text: "Lunch time",
      favorite: true,
      id: 1,
    },
    {
      text: "ToDo completed",
      favorite: false,
      id: 2,
    },
  ],
};

export const addTodo = createAction("postTodo");
export const deletTodo = createAction("deletTodo");
export const changeTodo = createAction("putTodo");

export const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.todos.unshift({
        text: action.payload,
        favorite: false,
        id: (new Date()).getTime(),
      });
    })
    .addCase(deletTodo, (state, action) => {
      state.todos.filter((item) => {
        console.log(action.payload)
        return item.id === action.payload;
      });
    });
});
