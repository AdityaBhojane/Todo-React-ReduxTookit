import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name:"todos",
    initialState: [],
    reducers:{
        addTodo:(state,action)=> {state.push({id:Date.now(), text:action.payload, checked: false})},
        removeTodo:(state,action)=> state.filter((todo)=> todo.id !== action.payload),
    }
})

export const { addTodo , removeTodo } = todoSlice.actions;
export default todoSlice.reducer;