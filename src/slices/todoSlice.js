// import createSlice
import { createSlice } from '@reduxjs/toolkit';

// assign initial state
const initialState = [];

const todoSlice = createSlice({
    // assign a name
    name: 'todo',

    // assign a initial state
    initialState,

    // add a action function in reducers
    reducers: {
        addTodo(state, action) {
            console.log(action);
            state.push(action.payload);
        },
        deleteTodo(state, action) {
            const deleteIndex = action.payload;
            return state.filter((val, index) => index !== deleteIndex);
        },
    },
});

// export action function to dispatch action function when event trigger
export const { addTodo, deleteTodo } = todoSlice.actions;

// export reducer to assign in store
export default todoSlice.reducer;
