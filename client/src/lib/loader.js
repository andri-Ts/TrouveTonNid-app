import apiRequest from './apiRequest';
// import { defer } from 'react-router-dom';

// Fonct pour charger les data d'un post sur le front (la page singlePost)
export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest('/posts/' + params.id); // par défaut c'est apiRequest.get()
  return res.data.data; // ajoute .data parce que j'ai foramté le res backend avec data
};

// Fonc pour charger les bons données dans listPage
export const listPageLoader = async ({ request, params }) => {
  /* Méthodes simple : */
  // const queryFilter = request.url.split('?')[1]; // pour récupéré les query dans l'url : les data après le '?'
  // const res = await apiRequest(`/posts?${queryFilter}`);

  /* Méthode plus robuste */
  const url = new URL(request.url);

  // récupérer les query params
  const query = {
    transaction: url.searchParams.get('transaction'),
    city: url.searchParams.get('city'),
    minPrice: url.searchParams.get('minPrice'),
    maxPrice: url.searchParams.get('maxPrice'),
  };

  //  console.log('query envoyée au backend:', query);

  // appeler le backend avec les filtres
  const res = await apiRequest.get('/posts', {
    params: query, // incorpore le paramas
  });

  return res.data.data;
};
