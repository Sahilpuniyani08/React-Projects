import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[],
    updatedTodo:{}
}

export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{

        addTodo : (state, action) =>{
          const todo =  {
            id: nanoid(), 
            text:action.payload
        }
            state.todos.push(todo)
        },
        removeTodo : (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
       updateTodo : (state, action) =>{
            state.todos = state.todos.map((todo) => todo.id == action.payload.id ? action.payload  : todo)
        },
       isUpdateTodo : (state, action) =>{
            state.updatedTodo = action.payload
        },
    }
})

export const { addTodo, removeTodo, updateTodo, isUpdateTodo } = todoSlice.actions;

export default todoSlice.reducer;   