import React from 'react';

const TodoView = ({ value, index, deleteTodo }) => {
    return (
        <div
            onClick={() => {
                deleteTodo(index);
            }}
        >
            <p>{value}</p>
        </div>
    );
};

export default TodoView;
