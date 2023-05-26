import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";

const setupStore = () => {
  const store = configureStore({
    reducer: {
      todos: todosReducer,
    },
  });

  return store;
};

export { setupStore };
