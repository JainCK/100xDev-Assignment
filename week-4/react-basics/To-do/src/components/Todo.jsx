import React from 'react';

const Todo = ({ todo, onRemove }) => {
  return (
    <li className="p-2 border-b">
      <b>{todo.title}</b>: {todo.desc}{' '}
      <button
        className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
        onClick={() => onRemove(todo.id)}
      >
        Remove
      </button>
    </li>
  );
};

export default Todo;
