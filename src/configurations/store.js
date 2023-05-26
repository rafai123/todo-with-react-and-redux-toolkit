import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import {loadTodosFromLocalStorage, saveTodosToLocalStorage } from "../utils/localstorage";

const setupStore = () => {
  const store = configureStore({
    reducer: {
      todos: todosReducer,
    },
    preloadedState: loadTodosFromLocalStorage(),
  });

  store.subscribe(() => saveTodosToLocalStorage(store.getState()));
  return store;
};

export { setupStore };
