import axios from 'axios';

// permet de ne pas mettre le chemin de l'url à chaque fois
const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // si cookies
});

export default apiRequest;
