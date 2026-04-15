import jwt from 'jsonwebtoken';

export const shbeLoggedIn = (req, res) => {
  // 1.Verification token faite pas le middleware
  // 2. Récupération de l'id (utilise)
  console.log(req.userId);

  // Si tout est ok
  res.status(200).json({ message: 'You are authentificated' });
};

export const shbeAdmin = (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: 'Not Authentificated' });

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    // async () {}: callback asynchrone exécuté après la vérification du token
    if (err) return res.status(403).json({ message: 'Token is not Valid' });

    //si on n'est pas admin
    if (!payload.isAdmin) {
      return res.status(403).json({ message: 'Not authorised' });
    }
  });

  res.status(200).json({ message: 'You are authentificated' });
};
