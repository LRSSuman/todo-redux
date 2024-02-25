import React, { useState } from 'react';

const InputArea = ({ addTodo }) => {
    const [input, setInput] = useState('');
    return (
        <div>
            <input
                type='text'
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    addTodo(input);
                    setInput('');
                }}
            >
                add
            </button>
        </div>
    );
};

export default InputArea;
