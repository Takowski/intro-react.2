import React, { useState } from 'react';
import Title from './title.jsx';
import Input from './input.jsx';
import List from './list.jsx';

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Title />
      <Input todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App;