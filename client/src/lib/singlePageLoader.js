import apiRequest from './apiRequest';

// Fonct pour charger les data d'un post sur le front (la page singlePost)
export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest('/posts/' + params.id);
  return res.data.data; // ajoute .data parce que j'ai foramté le res backend avec data
};
