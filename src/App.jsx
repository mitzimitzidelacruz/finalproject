import { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import {
  completeTodo,
  deleteTodo,
  getTodos,
  hardDeleteTodo,
  createTodo,
  updateTodo,
} from "./api/travelApi";

import { useTranslation } from 'react-i18next';

import { FaEdit } from "react-icons/fa";


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
    handleCreateOrUpdateTodo,
    image,
  }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [edditingTodo, setEditingTodo] = useState({});

    const handleEdit = () => {
      setIsEditing((current) => !current);
      setEditingTodo({ _id, title, description, completed, image});
    };
    
    return (
        <div className="todo-item">
          <div className="info-viaje">
            <h2>
              {title} <FaEdit onClick={handleEdit} />{" "}
            </h2>

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

            <div className="delete">
              <button onClick={() => removeTodo(_id)}>Delete</button>
              <button onClick={() => hardDeleteTodo(_id)}>Hard Delete</button>
            </div>
          </div>
            
          {isEditing ? <div>
            { isEditing && (

                <div className="create2">

                  <label>{t("title")}</label>
                  <input
                    type="text"
                    name="title"
                    value={edditingTodo.title}
                    onChange={(e) =>
                      setEditingTodo((current) => ({
                        ...current,
                        title: e.target.value,
                      }))
                    }
                  />
      
                  <label>{t("description")}</label>
                  <input
                    type="text"
                    name="description"
                    value={edditingTodo.description}
                    onChange={(e) =>
                      setEditingTodo((current) => ({
                        ...current,
                        description: e.target.value,
                      }))
                    }
                  />

                  <label>{t("url")}</label>
                  <input
                    type="text"
                    name="url"
                    value={edditingTodo.image}
                    onChange={(e) =>
                      setEditingTodo((current) => ({
                        ...current,
                        image: e.target.value,
                      }))
                    }
                  />

                  <button
                    className="button-primary"
                    onClick={() => handleCreateOrUpdateTodo(edditingTodo)}
                  >
                    {t("update")}
                  </button>
      
                </div>

            )} {" "}
          </div>
        : " " }
        
        </div>
        )
      };
      

  useEffect(() => {
    fetchTodos();
  }, []);

  const removeTodo = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  const toggleComepleted = async (id) => {
    await completeTodo(id);
    fetchTodos();
  };

  const eraseTodo = async (id) => {
    await hardDeleteTodo(id);
    fetchTodos();
  };

  const handleCreateOrUpdateTodo = async (todo) => {
    if (!todo._id) {
      await createTodo(todo);
      setNewTodo({ title: "", description: "", image: ""});
      fetchTodos();
      return;
    }
    const { _id } = todo;
    delete todo._id;
    await updateTodo(_id, todo);
    fetchTodos();
  };

  return (
    <div>
      <Navbar />
      <div className="todo-list">
        {todos &&
          todos.map((todo) => (
            <TodoComponent
              {...todo}
              handleCreateOrUpdateTodo={handleCreateOrUpdateTodo}
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

            <button onClick={() => handleCreateOrUpdateTodo(newTodo)}>{t("register")}</button>
          </div>
          
      </div>
      <Footer />
    </div>
  );
}

export default App;