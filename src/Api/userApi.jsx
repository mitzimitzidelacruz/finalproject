const API_URL2 = "https://finalproject-back-u.herokuapp.com/users";
// Modificar esta URL una vez subido el back

export async function getUsers() {
  try {
    const response = await fetch(API_URL2);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(id) {
  try {
    const response = await fetch(`${API_URL2}/delete/${id}`, {
      method: "PATCH",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function completeUser(id) {
  try {
    const response = await fetch(`${API_URL2}/complete/${id}`, {
      method: "PATCH",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function hardDeleteUser(id) {
  try {
    const response = await fetch(`${API_URL2}/${id}`, {
      method: "DELETE",
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(user) {
  try {
    const response = await fetch(API_URL2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function updateUser(id, user) {
  try {
    const response = await fetch(`${API_URL2}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}