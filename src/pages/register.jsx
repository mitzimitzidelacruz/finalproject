import { useEffect, useState } from "react";
import {
  getTodos,
  createTodo,
  updateTodo,
} from "../Api/travelApi";

import { useTranslation } from 'react-i18next';

function Register() {

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

    
    return (
           <span></span> 
        )
      };
      

  useEffect(() => {
    fetchTodos();
  }, []);

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
  );
}

export default Register;