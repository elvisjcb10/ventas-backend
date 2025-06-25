import axios from 'axios';

const API_URL = 'http://localhost:3001/api/clientes';

export const getClientes = () => axios.get(API_URL);
export const createCliente = (data) => axios.post(API_URL, data);
export const updateCliente = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteCliente = (id) => axios.delete(`${API_URL}/${id}`);
