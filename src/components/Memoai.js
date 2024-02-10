import React, { useState, useEffect } from 'react';

const Memoai = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    console.log('Todos updated:', todos);
  }, [todos]);

  const handleAddTodo = () => {
    setTodos([...todos, 'new todo']);
  };

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddItem = () => {
    if (inputText.length > 5) {
      setTodos([...todos, inputText]);
      setInputText('');
    } else {
      alert('Text should be greater than 5 characters!');
    }
  };

  return (
    <div id="main">
      <h2>Memo</h2>
      <button id="add-todo-btn"onClick={handleAddTodo}>Add Todo</button>
      <div>
        <button  id="incr-cnt"onClick={handleIncrement}>Increment Count: {count}</button>
      </div>
      <div>
        <input id="skill-input" type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleAddItem}>Submit</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Memoai;