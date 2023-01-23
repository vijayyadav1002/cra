import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const callApi = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const json = await response.json();
      setTodos(json.slice(0, 10));
    };
    callApi().catch(console.error);
  }, []);
  return (
    <div className="App">
      <h1>Hello Den!</h1>
      <p role="paragraph">Start editing to see some magic happen :)</p>
      <ul>
        {todos.map(function (todo, index) {
          return (
            <li key={index}>
              <input type='checkbox' checked={todo.completed}/>{todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
