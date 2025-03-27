import axios from 'axios';

// Configuração base do Axios
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});


const ApiService = {
  get(resource, params = {}) {
    return api.get(resource, { params });
  },

  post(resource, data) {
    return api.post(resource, data);
  },

  put(resource, data) {
    return api.put(resource, data);
  },

  delete(resource) {
    return api.delete(resource);
  },

  // Método customizado para upload de arquivos
  upload(resource, formData) {
    return api.post(resource, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default ApiService;