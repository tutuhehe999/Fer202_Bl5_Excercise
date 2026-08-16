import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function addTodo() {
    const todo = newTodo.trim();

    if (todo === '') {
      return;
    }

    setTodos([...todos, todo]);
    setNewTodo('');
  }

  function deleteTodo(indexToDelete) {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  }

  return (
    <section>
      <h2>To-do List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        placeholder="Enter a to-do item"
      />
      <button type="button" onClick={addTodo}>
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={`${todo}-${index}`}>
            {todo}{' '}
            <button type="button" onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
