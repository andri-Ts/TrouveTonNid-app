import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes.js';
import connectToDatabase from './database/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config(); // !important pour le db
const app = express(); // init the server

app.use(
  cors({
    origin: process.env.CLIENT_URL, // url du frontend autorisé
    credentials: true, // permet d'envoyer des cookies(httpOnly)
  }),
);
app.use(express.json()); // permet à l'app de communiquer en json
app.use(cookieParser()); // lire (parser) les cookies entrant facilement

app.use('/api/auth', authRouter); // Pour auth et login

const PORT = process.env.PORT || 8800;

app.listen(PORT, async () => {
  console.log('Server is running on port 8800');
  await connectToDatabase(); // fonction asynchrone pour se connecter à la base de donnée Mongoose
});
