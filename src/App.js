import React, { useState, useEffect } from 'react';
import uid from 'uid';
import './App.css';

export default () => {
  const [todos, setTodos] = useState([{
    id: uid(5),
    title: 'Take Out Trash',
    done: false
  }, {
    id: uid(5),
    title: 'Clean Dishes',
    done: false
  }]);

  const addTodo = (e) => {
    e.preventDefault();
    if (e.target[0].value != '' || null)
      setTodos([...todos, { id: uid(5), title: e.target[0].value, done: false }]);
  }

  return (
    <div className="wrapper">
      <header><h1>Todo App</h1></header>
      <form className="todo_form" onSubmit={addTodo}>
        <input type="text" placeholder='Add Todo'></input>
        <button type="submit">+</button>
      </form>
      <div className="todo_list">
        {todos.map(({ id, title, done }) => (
          <div className="todo" key={id}>
            <h2 style={{ textDecoration: done ? 'line-through' : 'none', color: done ? 'rgba(255, 255, 255, .5)' : '#fff' }}>{title}</h2>
            <button className="green" onClick={() => setTodos(todos.map(todo => { if (todo.id === id) { return ({ id, title: todo.title, done: true }) } else { return (todo) } }))}>✓</button>
            <button className="red" onClick={() => setTodos(todos.filter(todo => todo.id !== id))}> X</button>
          </div>
        ))
        }
      </div >
    </div >
  );
}
