import axios from "axios";

const api = axios.create({
  baseURL: "https://inicobalo.vercel.app", // URL backend Laravel Anda
});

export const getItems = () => api.get("/users");
export const createItem = (data) => api.post("/users", data);
export const getItem = (id) => api.get(users / { id });
export const updateItem = (id, data) => api.put(users / { id }, data);
export const deleteItem = (id) => api.delete(users / { id });

// export const getItems = () => api.get('users');
// export const createItem = (data) => api.post('/items', data);
// export const getItem = (id) => api.get(/items/${id});
// export const updateItem = (id, data) => api.put(/items/${id}, data);
// export const deleteItem = (id) => api.delete(/items/${id});
