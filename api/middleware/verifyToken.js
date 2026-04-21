import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  // 1. Check the token (pour pouvoir être authentifier)
  const token = req.cookies.token;
  console.log(token);

  // si pas de tocken, pas d'acces
  if (!token) return res.status(401).json({ message: 'Not Authentificated!' });

  // Si possède un token, vérification validité (durée de validité, id)
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    // le token a-t-il été signé avec TON secret ?
    if (err) return res.status(403).json({ message: 'Token is not Valid' });

    //si tout est ok
    req.userId = payload.id; // on met dans req l'id de l'user, utile pour la suite

    next();
  });
};
