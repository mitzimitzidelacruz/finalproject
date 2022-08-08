import { useEffect, useState } from "react";
import {
  completeTodo,
  deleteTodo,
  getTodos,
  hardDeleteTodo,
  createTodo,
  updateTodo,
} from "../Api/travelApi";

import { useTranslation } from 'react-i18next';

import { FaEdit } from "react-icons/fa";


function List() {

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
              <b>{completed ? " Buen viaje" : "Mal viaje"}</b>{" "}
            </p>

            <img src={image} />

            <p>
            Last update:<b>{updatedAt}</b>{" "}
            </p>

            <div className="delete">
              <button onClick={() => removeTodo(_id)}>{t("deleteFile")}</button>
              <button onClick={() => hardDeleteTodo(_id)}>{t("hardDelete")}</button>
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
          
      </div>

    </div>
  );
}

export default List;