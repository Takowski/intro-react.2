import React, { useState,useEffect } from 'react';
import Title from './title.jsx';
import Input from './input.jsx';
import List from './list.jsx';
import ReturnNav from './nav.jsx';




const App = () => {
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(savedTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Title />
      <ReturnNav />
      <Input todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App;