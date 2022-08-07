const API_URL = "http://localhost:3000/todos";

export async function getTodos() {
  try {
    const response = await fetch(API_URL);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(id) {
  try {
    const response = await fetch(`${API_URL}/delete/${id}`, {
      method: "PATCH",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function completeTodo(id) {
  try {
    const response = await fetch(`${API_URL}/complete/${id}`, {
      method: "PATCH",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function hardDeleteTodo(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PATCH"
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}