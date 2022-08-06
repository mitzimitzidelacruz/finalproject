import { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/navbar'
import { completeTodo, deleteTodo, getTodos } from "./api/travelApi";


function App() {
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    const fetchedTodos = await getTodos();
    console.log({ fetchedTodos });
    setTodos(fetchedTodos);
  }

  const TodoComponent = ({
    _id,
    title,
    description,
    updatedAt,
    completed,
    removeTodo,
    toggleTodo,
  }) => (
    <div className="todo-item">
      <h2>{title}</h2>
      <h4>{description}</h4>
      <p style={{ color: completed ? "green" : "red" }}>
        <input
          checked={completed}
          type="checkbox"
          onChange={() => toggleTodo(_id)}
        />
        <b>{completed ? " Completed" : "Not completed"}</b>{" "}
      </p>
      <p>
        Last update:<b>{updatedAt}</b>{" "}
      </p>
      <button onClick={() => removeTodo(_id)}>Delete</button>
      <hr />
    </div>
  );

  useEffect(() => {
    fetchTodos();
  }, []);

  const removeTodo = async (id) => {
    const deleted = await deleteTodo(id);
    fetchTodos();
  };

  const toggleComepleted = async (id) => {
    const updated = await completeTodo(id);
    fetchTodos();
  };

  return (
    <div className='App'>
      <Navbar />
      <div className="todo-list">
        {todos &&
          todos.map((todo) => (
            <TodoComponent
              {...todo}
              removeTodo={removeTodo}
              toggleTodo={toggleComepleted}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
