import { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { completeTodo, createTodo, deleteTodo, getTodos, hardDeleteTodo } from "./api/travelApi";
import { useTranslation } from 'react-i18next';


function App() {

  const { t } = useTranslation();

  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState({});

  async function fetchTodos() {
    const fetchedTodos = await getTodos();
    setTodos(fetchedTodos);
  }

  const TodoComponent = ({
    _id,
    title,
    description,
    updatedAt,
    completed,
    removeTodo,
    hardDeleteTodo,
    toggleTodo,
    image,
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
      <img src={image} />
      <p>
        Last update:<b>{updatedAt}</b>{" "}
      </p>
      <div>
        <button onClick={() => removeTodo(_id)}>Delete</button>
        <button onClick={() => hardDeleteTodo(_id)}>Hard Delete</button>
      </div>

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

  const eraseTodo = async (id) => {
    await hardDeleteTodo(id);
    fetchTodos();
  };

  const handleCreateTodo = async (todo) => {
    setNewTodo({title:"", description:"", image:""});
    await createTodo(todo);
    fetchTodos();
  };

  return (
    <div className='app'>
      <Navbar />
      <div className="todo-list">
        {todos &&
          todos.map((todo) => (
            <TodoComponent
              {...todo}
              hardDeleteTodo={eraseTodo}
              removeTodo={removeTodo}
              toggleTodo={toggleComepleted}
            />
          ))}
          <div className="create">
            <label>{t("title")}</label>
            <input
              type="text"
              name="title"
              value={newTodo.title}
              onChange={(e) => 
                setNewTodo(current => ({...current, title: e.target.value}))
              }
              />

            <label>{t("description")}</label>
            <input 
              type="text" 
              name="description"
              value={newTodo.description}
              onChange={(e) => 
                setNewTodo(current => ({...current, description: e.target.value}))
              }
              />
            <label>{t("url")}</label>
            <input 
              type="text" 
              name="url"
              value={newTodo.image}
              onChange={(e) => 
                setNewTodo(current => ({...current, image: e.target.value}))
              }
              />

            <button onClick={() => handleCreateTodo(newTodo)}>{t("register")}</button>
          </div>
          
      </div>
      <Footer />
    </div>
  );
}

export default App;