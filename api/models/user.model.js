import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'User name is required'], // requis, sinon msg d'erreur
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please fill a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    avatar: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // Créer automatiquement `createDate` et `updateDate`
  },
);

const User = mongoose.model('User', userSchema); // créer un modèle appelé User basé sur le schéma userSchema
export default User;
