import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // se connecter au db Mongo avec l'url MONGO_URI
    console.log('Connected to database!');
  } catch (error) {
    console.log('MongoDB connection error: ', error);
    process.exit(1); // Stoppe le process Node
  }
};

export default connectToDatabase;
