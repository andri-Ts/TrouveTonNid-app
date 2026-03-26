import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

/* FONCTIONS A FAIRE DANS CHAQUE ROUTE */

// To create a new user
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hasher le mdp
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);

    // Create new user and add in the db
    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
    });
    console.log(newUser);

    res
      .status(201)
      .json({ success: true, message: "L'utilisateur a bien été créé" });
  } catch (error) {
    // console.error(error); // log pour voir le vrai probleme
    res.status(500).json({ message: 'Failed to create a user' });
  }
};

// ----------------------------------------------------------------------------

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    /*** CHECK IF USER EXISTS ***/

    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ message: 'Invalid Credentials' }); //On ne veux pas révéler si l’utilisateur existe ou pas

    /*** CHECK IF PSSWD IS CORRECT ***/

    const isPasswordValid = await bcrypt.compare(password, user.password); // compare le req.psswd et le psswd de l'user récupérer dans la bdd
    if (!isPasswordValid)
      return res.status(401).json({ message: 'Invalid Credentials' });

    /*** GENERATE COOKE TOKEN AND SEND TO TH USER GENRATE ***/

    // res.setHeader("Set-Cookie", "test=" + "myValue").json("succes"); // cookie sans le package cookie-parser

    const age = 1000 * 60 * 60 * 24; // durée de validation cookie (ms * 1s * 1h * 24h)

    // un token a 3 parties : 1- Header, 2- Payload(id, exp), 3-signature("dgagege...")
    const my_token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY, // signature
      { expiresIn: age }, // exp
    );

    res
      .cookie('token', my_token, {
        httpOnly: true, // Empêche l'accès au cookie côté JavaScript (document.cookie)
        // secure: true,  // à activer uniquement en production, Le cookie est envoyé UNIQUEMENT en HTTPS
        sameSite: 'strict',
        maxAge: age, // Durée de vie du cookie en millisecondes: iat(moment de la création du token) + durée
      })
      .status(200)
      .json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to login' });
  }
};

// -----------------------------------------------------------------------------

export const logout = (req, res) => {
  res
    .clearCookie('token', {
      httpOnly: true,
      // secure: true,
      sameSite: 'strict',
    })
    .status(200)
    .json({ message: 'Logout Successful' });
};
