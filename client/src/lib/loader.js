import apiRequest from './apiRequest';

// Fonct pour charger les data d'un post sur le front (la page singlePost)
export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest('/posts/' + params.id); // par défaut c'est apiRequest.get()
  return res.data.data; // ajoute .data parce que j'ai foramté le res backend avec data
};

// Fonc pour charger les bons données dans listPage
export const listPageLoader = async ({ request, params }) => {
  const queryFilter = request.url.split('?')[1]; // pour récupéré les query dans l'url : les data après le '?'
  const res = await apiRequest(`/posts?${queryFilter}`);
  return res.data.data;
};
