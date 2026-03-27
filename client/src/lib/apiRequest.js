import axios from 'axios';

// permet de ne pas mettre le chemin de l'url à chaque fois
const apiRequest = axios.create({
  baseURL: 'http://localhost:8800/api',
  withCredentials: true,
});

export default apiRequest;
