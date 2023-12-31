import React, { useState } from 'react';
import Todo from './components/Todo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const addTodo = () => {
    if (!title) {
      alert('Please enter a title for the todo.');
      return;
    }

    const newTodo = {
      title: title,
      desc: desc,
      id: todos.length + 1,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);

    // Clear input fields
    setTitle('');
    setDesc('');
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <div className="mb-4">
        <label htmlFor="todo" className="block text-sm font-medium text-gray-600">
          Todo
        </label>
        <input
          type="text"
          name="todo"
          id="todo"
          className="mt-1 p-2 border rounded w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-600">
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          className="mt-1 p-2 border rounded w-full"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addTodo}>
        Create
      </button>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Todo List</h2>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} onRemove={removeTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
