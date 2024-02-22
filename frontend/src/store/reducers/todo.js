import { createSlice } from "@reduxjs/toolkit";

// 초기상태
const initialState = {
  todoList: [
    {
      id: "1",
      content: "todo 내용",
      color: "blue",
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      state.todoList.push(action.payload);
    },
    removeTodo(state, action) {
      state.todoList = state.todoList.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
  },
});
// action creator
const { addTodo, removeTodo } = todoSlice.actions;

export { addTodo, removeTodo };

export default todoSlice.reducer;