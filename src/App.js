import React from 'react';
import './App.css';
import InputArea from './InputArea';
import TodoView from './TodoView';
// import action functions(addTodo,deleteTodo) from slice
import { addTodo, deleteTodo } from './slices/todoSlice';

// import useSelector to access state from store
import { useSelector } from 'react-redux';

// import useDispatch to trigger action function
import { useDispatch } from 'react-redux';

const App = () => {
    // assign useSelector to variable and pass a callback and return state from reducer from store
    const todo = useSelector((state) => {
        console.log(state); //Object { todo: [] }
        return state.todo;
    });

    // assign a useDispatch to variable because it return a function
    const dispatch = useDispatch();

    const addTodoList = (value) => {
        // pass as addTodo action to dispatch to execute
        dispatch(addTodo(value));
    };

    const deleteTodoList = (index) => {
        // pass as deleteTodo action to dispatch to execute
        dispatch(deleteTodo(index));
    };

    return (
        <div>
            <h1>to-do list</h1>
            <InputArea addTodo={addTodoList} />
            {todo.map((val, index) => {
                return (
                    <TodoView
                        key={index}
                        value={val}
                        deleteTodo={deleteTodoList}
                        index={index}
                    />
                );
            })}
        </div>
    );
};

export default App;
