// import configureStore
import { configureStore } from '@reduxjs/toolkit';

// import slices from slice folder
import todoReducer from './slices/todoSlice';

export const store = configureStore({
    // set true to get access to redux dev tools
    devTools: false,

    // assign a slice with required name insite reducer
    reducer: {
        todo: todoReducer,
    },
});
