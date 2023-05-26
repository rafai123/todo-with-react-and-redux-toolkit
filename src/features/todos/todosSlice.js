import { createSlice } from "@reduxjs/toolkit";
import { uniqueId } from "lodash";

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        userInput: "",
    },
    reducers: {
        setUserInput: (state, action) => {
            state.userInput = action.payload.userInput;
        },
        addTodo: (state) => {
            if (state.userInput == "") {
                return;
            }

            const newTodo = {
                id: uniqueId(),
                text: state.userInput,
                completed: false,
            };

            state.todos.push(newTodo);
            state.userInput = "";
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            todo.completed = !todo.completed;
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
        },
        // add edit here
        editTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            todo.text = action.payload.text;
        }
    },
});

export const { setUserInput, addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer;