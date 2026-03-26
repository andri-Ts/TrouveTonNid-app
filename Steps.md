# I - Backend Steps

## 1. Download `package.json`

- npm init -y
- ajout type : module dans le package

## 2. Install Express (and nodemon)

- npm i express
- create le app : const app = express()
- utilisation de l'extension console-ninja pour voire simplement les console.log (node --watch app.js)
- ajout "dev":"nodemon app.js" dans package.json pour l'env de developpement
- installer cors pour permettre au frontend de communiquer avec backend (ils sont différents ports)

## 3. Créer les routes de base (authRoutes, postRoutes, userRoutes)

- Ajout de app.use(express.json()) pour les données en json
  -...

## 4. Créer controllers (authroutes)

- Télécharger bcrypt pour hacher les mdp
- Créer chaque controllers
- ...

## 5. Configuere moongoseDB

- install mongoose
- installer dotenv pour gérer les variables d'environnement (important!)
- créer le fichier de connexion db.js
- appeler dans app.js le fichier de connexionn dans db.js

## 6. Config les modèles pour la base de donnée MongoDB

- créer le dossier modeles
- installer dotenv pour gérer les variables d'environnement (important!)
- créer le fichier de connexion db.js
- appeler dans app.js le fichier de connexionn dans db.js

## 7. Config le cooke parser et jwt

- installer cookie-parser
- installer jsonwebtoken
- créer le res.cookie

# II - Frontend Steps

- Installer axios pour fecther les data
